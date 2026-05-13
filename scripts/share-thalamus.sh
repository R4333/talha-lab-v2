#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
STATE_DIR="$ROOT_DIR/.tmp/share-thalamus"
PORT="${PORT:-3002}"
HOST="${HOST:-0.0.0.0}"
PATH_TO_SHARE="${PATH_TO_SHARE:-/case-studies/thalamus}"
KEEP_ALIVE=false

mkdir -p "$STATE_DIR"

stop_pid() {
  local pid_file="$1"
  if [[ -f "$pid_file" ]]; then
    local pid
    pid="$(cat "$pid_file")"
    if [[ -n "$pid" ]] && kill -0 "$pid" 2>/dev/null; then
      kill "$pid" 2>/dev/null || true
    fi
    rm -f "$pid_file"
  fi
}

if [[ "${1:-}" == "--stop" ]]; then
  stop_pid "$STATE_DIR/ngrok.pid"
  stop_pid "$STATE_DIR/vite.pid"
  echo "Stopped shared Thalamus dev server."
  exit 0
fi

if [[ "${1:-}" == "--keep-alive" ]]; then
  KEEP_ALIVE=true
fi

if ! command -v ngrok >/dev/null 2>&1; then
  echo "ngrok is not installed or not on PATH." >&2
  exit 1
fi

stop_pid "$STATE_DIR/ngrok.pid"
stop_pid "$STATE_DIR/vite.pid"

cd "$ROOT_DIR"

nohup npm run dev -- --host "$HOST" --port "$PORT" --strictPort >"$STATE_DIR/vite.log" 2>&1 &
echo "$!" > "$STATE_DIR/vite.pid"

for _ in {1..60}; do
  if curl -fsS "http://127.0.0.1:$PORT$PATH_TO_SHARE" >/dev/null 2>&1; then
    break
  fi
  sleep 1
done

if ! curl -fsS "http://127.0.0.1:$PORT$PATH_TO_SHARE" >/dev/null 2>&1; then
  echo "Vite did not become ready on port $PORT. See $STATE_DIR/vite.log" >&2
  exit 1
fi

nohup ngrok http "$PORT" --log=stdout >"$STATE_DIR/ngrok.log" 2>&1 &
echo "$!" > "$STATE_DIR/ngrok.pid"

PUBLIC_URL=""
for _ in {1..60}; do
  TUNNELS_JSON="$(curl -fsS http://127.0.0.1:4040/api/tunnels 2>/dev/null || true)"
  PUBLIC_URL="$(printf '%s' "$TUNNELS_JSON" \
    | node -e "let data='';process.stdin.on('data',c=>data+=c);process.stdin.on('end',()=>{try{const tunnels=JSON.parse(data).tunnels||[];const https=tunnels.find(t=>t.proto==='https')||tunnels[0];if(https) process.stdout.write(https.public_url)}catch{}})" || true)"
  if [[ -n "$PUBLIC_URL" ]]; then
    break
  fi
  sleep 1
done

if [[ -z "$PUBLIC_URL" ]]; then
  echo "ngrok did not return a public URL. See $STATE_DIR/ngrok.log" >&2
  exit 1
fi

SHARE_URL="$PUBLIC_URL$PATH_TO_SHARE"
echo "$SHARE_URL" > "$STATE_DIR/url.txt"

echo "Local:  http://127.0.0.1:$PORT$PATH_TO_SHARE"
echo "Public: $SHARE_URL"
echo
echo "Logs:   $STATE_DIR"
echo "Stop:   scripts/share-thalamus.sh --stop"

if [[ "$KEEP_ALIVE" == "true" ]]; then
  echo
  echo "Keeping the local server and ngrok tunnel alive. Press Ctrl+C to stop."
  trap 'scripts/share-thalamus.sh --stop >/dev/null 2>&1 || true; exit 0' INT TERM EXIT
  while true; do
    sleep 3600
  done
fi
