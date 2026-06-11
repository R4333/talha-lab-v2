import type { CSSProperties, ReactNode } from 'react'

export type ProjectIconName =
  | 'Activity'
  | 'AudioLines'
  | 'BadgeDollarSign'
  | 'BarChart3'
  | 'Bot'
  | 'BotMessageSquare'
  | 'BrainCircuit'
  | 'Camera'
  | 'ChartNoAxesCombined'
  | 'Clapperboard'
  | 'ClipboardCheck'
  | 'Cog'
  | 'Cpu'
  | 'DatabaseZap'
  | 'Dumbbell'
  | 'Factory'
  | 'FileSearch'
  | 'Files'
  | 'Gauge'
  | 'GitBranch'
  | 'HardDrive'
  | 'HeartPulse'
  | 'LineChart'
  | 'ListChecks'
  | 'MessageCircle'
  | 'MessagesSquare'
  | 'Mic'
  | 'Music'
  | 'PackageCheck'
  | 'PhoneCall'
  | 'ReceiptText'
  | 'Rocket'
  | 'Router'
  | 'Scale'
  | 'ScanEye'
  | 'ScanSearch'
  | 'SearchCheck'
  | 'ServerCog'
  | 'ShieldAlert'
  | 'ShieldCheck'
  | 'Smartphone'
  | 'Sparkles'
  | 'TableProperties'
  | 'Tags'
  | 'Target'
  | 'TabletSmartphone'
  | 'TrendingUp'
  | 'UserSearch'
  | 'WandSparkles'
  | 'Workflow'

export type ProjectVisualKey =
  | 'ai-inbox-triage'
  | 'invoice-po-automation'
  | 'meeting-crm-agent'
  | 'internal-knowledge-assistant'
  | 'healthcare-rcm-assistant'
  | 'voice-appointment-setter'
  | 'ai-quality-guardrails'
  | 'spreadsheet-dashboard-automation'
  | 'contract-change-monitor'
  | 'ad-creative-generator'
  | 'churn-risk-predictor'
  | 'recruiting-outreach-agent'
  | 'retail-shelf-intelligence'
  | 'corefit-pose-coach'
  | 'defectlens-quality-inspection'
  | 'modelops-command-center'
  | 'privacyscan-redaction'
  | 'autolabel-data-studio'
  | 'fleetcam-safety-intelligence'
  | 'fieldvision-knowledge-search'
  | 'receipt-scanner'
  | 'evalforge-quality-bench'

export type ProjectVisualComponentName =
  | 'DashboardMockup'
  | 'DocumentAIMockup'
  | 'VoiceAIMockup'
  | 'ComputerVisionMockup'
  | 'MobileAppMockup'
  | 'MLOpsMockup'
  | 'DataAutomationMockup'
  | 'GrowthAutomationMockup'
  | 'GenerativeMediaMockup'
  | 'KnowledgeSearchMockup'

type ProjectVisualMode = 'card' | 'hero'

type VisualProfile = {
  component: ProjectVisualComponentName
  eyebrow: string
  title: string
  status: string
  stats: Array<{ label: string; value: string }>
  items: string[]
  fields: Array<{ label: string; value: string; tone?: 'ok' | 'warn' | 'risk' }>
  notes: string[]
  tags: string[]
}

const visualProfiles: Record<ProjectVisualKey, VisualProfile> = {
  'ai-inbox-triage': {
    component: 'GrowthAutomationMockup',
    eyebrow: 'Inbox routing',
    title: 'Priority inbox',
    status: 'CRM synced',
    stats: [{ label: 'Priority', value: '14' }, { label: 'Drafts', value: '9' }],
    items: ['Renewal risk', 'Create task', 'Route to CS', 'Draft reply'],
    fields: [
      { label: 'Acme renewal', value: 'High', tone: 'risk' },
      { label: 'Billing question', value: 'Drafted', tone: 'ok' },
      { label: 'Demo request', value: 'Sales', tone: 'warn' },
    ],
    notes: ['Reply ready', 'Task created', 'Owner assigned'],
    tags: ['P1', 'Draft', 'CRM'],
  },
  'invoice-po-automation': {
    component: 'DocumentAIMockup',
    eyebrow: 'Finance intake',
    title: 'Invoice extraction',
    status: 'Review queue',
    stats: [{ label: 'Matched', value: '98%' }, { label: 'Pending', value: '7' }],
    items: ['Vendor', 'Date', 'Subtotal', 'Tax', 'Total'],
    fields: [
      { label: 'Vendor', value: 'Northline Supply', tone: 'ok' },
      { label: 'PO match', value: 'PO-1842', tone: 'ok' },
      { label: 'Tax', value: 'Needs review', tone: 'warn' },
    ],
    notes: ['3-way match', 'Human approval', 'Export to ERP'],
    tags: ['Invoice', 'PO', 'Tax'],
  },
  'meeting-crm-agent': {
    component: 'VoiceAIMockup',
    eyebrow: 'Revenue call',
    title: 'Meeting to CRM',
    status: 'Deal updated',
    stats: [{ label: 'Stage', value: 'Demo' }, { label: 'Next step', value: 'Fri' }],
    items: ['Budget confirmed', 'Security objection', 'Champion named'],
    fields: [
      { label: 'Objection', value: 'Security review', tone: 'warn' },
      { label: 'Follow-up', value: 'Draft ready', tone: 'ok' },
      { label: 'CRM stage', value: 'Evaluation', tone: 'ok' },
    ],
    notes: ['Summary', 'Objections', 'Email draft'],
    tags: ['Call', 'CRM', 'Follow-up'],
  },
  'internal-knowledge-assistant': {
    component: 'KnowledgeSearchMockup',
    eyebrow: 'Internal search',
    title: 'Cited answer',
    status: 'Sources attached',
    stats: [{ label: 'Sources', value: '4' }, { label: 'Trust', value: '92%' }],
    items: ['Policy handbook', 'Runbook', 'Pricing memo'],
    fields: [
      { label: 'Answer', value: 'Uses 4 docs', tone: 'ok' },
      { label: 'Filter', value: 'Finance', tone: 'ok' },
      { label: 'Gap', value: 'None found', tone: 'ok' },
    ],
    notes: ['Source cards', 'Snippets', 'Access filter'],
    tags: ['Docs', 'Chat', 'Citations'],
  },
  'healthcare-rcm-assistant': {
    component: 'DocumentAIMockup',
    eyebrow: 'Claim review',
    title: 'Denial workspace',
    status: 'Appeal drafted',
    stats: [{ label: 'Risk', value: 'High' }, { label: 'Gaps', value: '3' }],
    items: ['Denial reason', 'Payer rule', 'Timeline', 'Appeal note'],
    fields: [
      { label: 'Denial', value: 'Medical necessity', tone: 'risk' },
      { label: 'Rule', value: 'Payer 42.3', tone: 'warn' },
      { label: 'Appeal', value: 'Draft ready', tone: 'ok' },
    ],
    notes: ['Claim timeline', 'Documentation gaps', 'Review owner'],
    tags: ['RCM', 'Appeal', 'Rules'],
  },
  'voice-appointment-setter': {
    component: 'VoiceAIMockup',
    eyebrow: 'Live call',
    title: 'Appointment setter',
    status: 'Booked',
    stats: [{ label: 'Fit', value: '86%' }, { label: 'Slot', value: '2:30' }],
    items: ['Need confirmed', 'Budget captured', 'Calendar matched'],
    fields: [
      { label: 'Lead fit', value: 'Qualified', tone: 'ok' },
      { label: 'Time', value: 'Thu 2:30', tone: 'ok' },
      { label: 'Confirm', value: 'SMS sent', tone: 'ok' },
    ],
    notes: ['Waveform', 'Checklist', 'Calendar slot'],
    tags: ['Voice', 'Lead', 'Calendar'],
  },
  'ai-quality-guardrails': {
    component: 'MLOpsMockup',
    eyebrow: 'Guardrails',
    title: 'AI quality checks',
    status: '2 regressions',
    stats: [{ label: 'Pass rate', value: '94%' }, { label: 'Risk', value: 'Low' }],
    items: ['Prompt v12', 'Safety suite', 'Failed cases'],
    fields: [
      { label: 'Accuracy', value: 'Pass', tone: 'ok' },
      { label: 'PII leakage', value: 'Pass', tone: 'ok' },
      { label: 'Regression', value: '2 fail', tone: 'risk' },
    ],
    notes: ['Scorecards', 'Risk flags', 'Prompt diff'],
    tags: ['Eval', 'Safety', 'QA'],
  },
  'spreadsheet-dashboard-automation': {
    component: 'DataAutomationMockup',
    eyebrow: 'Data cleanup',
    title: 'Sheet to dashboard',
    status: 'Published',
    stats: [{ label: 'Rows', value: '12k' }, { label: 'KPIs', value: '8' }],
    items: ['Import CSV', 'Clean columns', 'Build KPIs', 'Publish chart'],
    fields: [
      { label: 'Revenue', value: '$482k', tone: 'ok' },
      { label: 'Ops cost', value: '-7%', tone: 'ok' },
      { label: 'Missing', value: '12 cells', tone: 'warn' },
    ],
    notes: ['Raw sheet', 'Clean table', 'KPI cards'],
    tags: ['Sheets', 'Charts', 'KPIs'],
  },
  'contract-change-monitor': {
    component: 'DocumentAIMockup',
    eyebrow: 'Policy monitor',
    title: 'Clause comparison',
    status: 'Reviewer assigned',
    stats: [{ label: 'Changes', value: '11' }, { label: 'Risks', value: '3' }],
    items: ['Old clause', 'New clause', 'Risk note', 'Owner'],
    fields: [
      { label: 'Liability', value: 'Changed', tone: 'risk' },
      { label: 'Renewal', value: 'Shorter', tone: 'warn' },
      { label: 'Reviewer', value: 'Legal ops', tone: 'ok' },
    ],
    notes: ['Redlines', 'Risk summary', 'Assignment'],
    tags: ['Policy', 'Compare', 'Risk'],
  },
  'ad-creative-generator': {
    component: 'GenerativeMediaMockup',
    eyebrow: 'Creative testing',
    title: 'Ad variant studio',
    status: '12 variants',
    stats: [{ label: 'Hooks', value: '24' }, { label: 'Angles', value: '6' }],
    items: ['Problem hook', 'Founder story', 'Price angle', 'UGC script'],
    fields: [
      { label: 'Brief', value: 'Hydration app', tone: 'ok' },
      { label: 'Caption', value: 'Ready', tone: 'ok' },
      { label: 'Script', value: '4 drafts', tone: 'ok' },
    ],
    notes: ['Hooks', 'Scripts', 'Captions'],
    tags: ['UGC', 'Hooks', 'Ads'],
  },
  'churn-risk-predictor': {
    component: 'DashboardMockup',
    eyebrow: 'Retention',
    title: 'Churn risk desk',
    status: 'Interventions queued',
    stats: [{ label: 'At risk', value: '18' }, { label: 'Saved', value: '6' }],
    items: ['Usage drop', 'Support spike', 'Champion left'],
    fields: [
      { label: 'Orbital Co', value: '91 risk', tone: 'risk' },
      { label: 'Haven Labs', value: '68 risk', tone: 'warn' },
      { label: 'NovaOps', value: 'Healthy', tone: 'ok' },
    ],
    notes: ['Usage trend', 'Risk drivers', 'Next action'],
    tags: ['CS', 'Risk', 'Usage'],
  },
  'recruiting-outreach-agent': {
    component: 'GrowthAutomationMockup',
    eyebrow: 'Hiring pipeline',
    title: 'Candidate outreach',
    status: 'Interviews held',
    stats: [{ label: 'Match', value: '91%' }, { label: 'Replies', value: '12' }],
    items: ['Resume match', 'Email draft', 'Calendar hold'],
    fields: [
      { label: 'Maya Chen', value: '94 match', tone: 'ok' },
      { label: 'Omar Reyes', value: '89 match', tone: 'ok' },
      { label: 'Interview', value: 'Tue 11:00', tone: 'ok' },
    ],
    notes: ['Shortlist', 'Outreach', 'Schedule'],
    tags: ['Hiring', 'Fit', 'Email'],
  },
  'retail-shelf-intelligence': {
    component: 'ComputerVisionMockup',
    eyebrow: 'Shelf camera',
    title: 'Restock monitor',
    status: 'Aisle 04 alert',
    stats: [{ label: 'Empty', value: '7' }, { label: 'Misplaced', value: '3' }],
    items: ['Empty facings', 'Wrong SKU', 'Restock now'],
    fields: [
      { label: 'Cereal bay', value: 'Out', tone: 'risk' },
      { label: 'Snack bay', value: 'Low', tone: 'warn' },
      { label: 'Dairy', value: 'Clear', tone: 'ok' },
    ],
    notes: ['Bounding boxes', 'Store alert', 'Restock task'],
    tags: ['Shelf', 'Vision', 'Retail'],
  },
  'corefit-pose-coach': {
    component: 'MobileAppMockup',
    eyebrow: 'On-device pose',
    title: 'CoreFit coach',
    status: 'Local model',
    stats: [{ label: 'Form', value: '88' }, { label: 'Reps', value: '12' }],
    items: ['Pose skeleton', 'Rep count', 'Form cue'],
    fields: [
      { label: 'Knee angle', value: 'Good', tone: 'ok' },
      { label: 'Back posture', value: 'Adjust', tone: 'warn' },
      { label: 'Privacy', value: 'On device', tone: 'ok' },
    ],
    notes: ['Skeleton overlay', 'Rep counter', 'Form score'],
    tags: ['Core ML', 'Fitness', 'Pose'],
  },
  'defectlens-quality-inspection': {
    component: 'ComputerVisionMockup',
    eyebrow: 'Assembly QA',
    title: 'DefectLens',
    status: 'Review needed',
    stats: [{ label: 'Defects', value: '4' }, { label: 'Conf.', value: '96%' }],
    items: ['Scratch', 'Dent', 'Missing part', 'Approve'],
    fields: [
      { label: 'Surface scratch', value: '96%', tone: 'risk' },
      { label: 'Cap alignment', value: '82%', tone: 'warn' },
      { label: 'Human review', value: 'Open', tone: 'ok' },
    ],
    notes: ['Inspection area', 'Defect boxes', 'Confidence'],
    tags: ['QA', 'Defect', 'Vision'],
  },
  'modelops-command-center': {
    component: 'MLOpsMockup',
    eyebrow: 'Model monitoring',
    title: 'ModelOps command',
    status: 'Retrain advised',
    stats: [{ label: 'Drift', value: '0.18' }, { label: 'P95', value: '412ms' }],
    items: ['Drift chart', 'Latency chart', 'Version v4.2'],
    fields: [
      { label: 'Confidence', value: 'Stable', tone: 'ok' },
      { label: 'Latency', value: 'Rising', tone: 'warn' },
      { label: 'Retrain', value: 'Recommended', tone: 'risk' },
    ],
    notes: ['Drift', 'Latency', 'Retraining'],
    tags: ['MLOps', 'Drift', 'Latency'],
  },
  'privacyscan-redaction': {
    component: 'MobileAppMockup',
    eyebrow: 'Local privacy',
    title: 'PrivacyScan',
    status: 'On-device',
    stats: [{ label: 'PII', value: '8' }, { label: 'Cloud', value: '0' }],
    items: ['Name', 'DOB', 'SSN', 'Address'],
    fields: [
      { label: 'SSN', value: 'Redacted', tone: 'ok' },
      { label: 'Address', value: 'Redacted', tone: 'ok' },
      { label: 'Processing', value: 'Local', tone: 'ok' },
    ],
    notes: ['PII highlights', 'Redaction toggles', 'Local badge'],
    tags: ['Privacy', 'Core ML', 'PII'],
  },
  'autolabel-data-studio': {
    component: 'DataAutomationMockup',
    eyebrow: 'Labeling queue',
    title: 'AutoLabel studio',
    status: 'Human review',
    stats: [{ label: 'Pre-label', value: '86%' }, { label: 'Queue', value: '42' }],
    items: ['Suggested label', 'Confidence', 'Approve', 'Edit'],
    fields: [
      { label: 'Forklift', value: '97%', tone: 'ok' },
      { label: 'Pallet', value: '88%', tone: 'ok' },
      { label: 'Unknown', value: 'Review', tone: 'warn' },
    ],
    notes: ['Image grid', 'Confidence', 'Approve/edit'],
    tags: ['Labels', 'Dataset', 'Review'],
  },
  'fleetcam-safety-intelligence': {
    component: 'ComputerVisionMockup',
    eyebrow: 'Dashcam AI',
    title: 'FleetCam safety',
    status: 'Trip risk 73',
    stats: [{ label: 'Events', value: '5' }, { label: 'Score', value: '73' }],
    items: ['Lane drift', 'Distraction', 'Hard brake'],
    fields: [
      { label: 'Lane alert', value: 'Detected', tone: 'warn' },
      { label: 'Phone use', value: 'Flagged', tone: 'risk' },
      { label: 'Coach note', value: 'Ready', tone: 'ok' },
    ],
    notes: ['Road frame', 'Risk events', 'Driver coaching'],
    tags: ['Fleet', 'Safety', 'Vision'],
  },
  'fieldvision-knowledge-search': {
    component: 'KnowledgeSearchMockup',
    eyebrow: 'Field search',
    title: 'FieldVision search',
    status: 'Evidence found',
    stats: [{ label: 'Photos', value: '18' }, { label: 'Docs', value: '6' }],
    items: ['Inspection photo', 'OCR snippet', 'Work order'],
    fields: [
      { label: 'Query', value: 'Valve leak', tone: 'ok' },
      { label: 'Photo match', value: '92%', tone: 'ok' },
      { label: 'Source', value: 'Report 19', tone: 'ok' },
    ],
    notes: ['Photo results', 'OCR text', 'Source cards'],
    tags: ['Search', 'Photos', 'OCR'],
  },
  'receipt-scanner': {
    component: 'MobileAppMockup',
    eyebrow: 'Expense capture',
    title: 'Receipt scanner',
    status: 'Export ready',
    stats: [{ label: 'Total', value: '$84.21' }, { label: 'Lines', value: '6' }],
    items: ['Merchant', 'Date', 'Tax', 'Line items'],
    fields: [
      { label: 'Merchant', value: 'Market Hall', tone: 'ok' },
      { label: 'Tax', value: '$6.44', tone: 'ok' },
      { label: 'Export', value: 'CSV ready', tone: 'ok' },
    ],
    notes: ['Phone scan', 'Field cards', 'Export'],
    tags: ['Receipt', 'Expense', 'Local'],
  },
  'evalforge-quality-bench': {
    component: 'MLOpsMockup',
    eyebrow: 'Eval bench',
    title: 'EvalForge',
    status: 'Deploy vB',
    stats: [{ label: 'Model A', value: '87' }, { label: 'Model B', value: '93' }],
    items: ['Regression table', 'Quality score', 'Deploy gate'],
    fields: [
      { label: 'Factuality', value: '+6%', tone: 'ok' },
      { label: 'Latency', value: '+90ms', tone: 'warn' },
      { label: 'Deploy', value: 'Ready', tone: 'ok' },
    ],
    notes: ['A/B comparison', 'Test table', 'Recommendation'],
    tags: ['Eval', 'Models', 'Release'],
  },
}

export function ProjectVisual({
  visual,
  title,
  alt,
  mode = 'card',
}: {
  visual: ProjectVisualKey
  title?: string
  alt?: string
  mode?: ProjectVisualMode
}) {
  const profile = visualProfiles[visual]
  const label = alt || `${title || profile.title} interface preview`

  return (
    <div
      className={`project-visual project-visual--${profile.component} project-visual--${mode}`}
      role="img"
      aria-label={label}
      data-visual={visual}
    >
      <div className="pv-window">
        <VisualHeader profile={profile} />
        {profile.component === 'DashboardMockup' && <DashboardMockup profile={profile} />}
        {profile.component === 'DocumentAIMockup' && <DocumentAIMockup profile={profile} />}
        {profile.component === 'VoiceAIMockup' && <VoiceAIMockup profile={profile} />}
        {profile.component === 'ComputerVisionMockup' && <ComputerVisionMockup profile={profile} />}
        {profile.component === 'MobileAppMockup' && <MobileAppMockup profile={profile} />}
        {profile.component === 'MLOpsMockup' && <MLOpsMockup profile={profile} />}
        {profile.component === 'DataAutomationMockup' && <DataAutomationMockup profile={profile} />}
        {profile.component === 'GrowthAutomationMockup' && <GrowthAutomationMockup profile={profile} />}
        {profile.component === 'GenerativeMediaMockup' && <GenerativeMediaMockup profile={profile} />}
        {profile.component === 'KnowledgeSearchMockup' && <KnowledgeSearchMockup profile={profile} />}
      </div>
    </div>
  )
}

export function getVisualComponentName(visual: ProjectVisualKey): ProjectVisualComponentName {
  return visualProfiles[visual].component
}

function VisualHeader({ profile }: { profile: VisualProfile }) {
  return (
    <div className="pv-header">
      <div className="pv-window-dots" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div>
        <span>{profile.eyebrow}</span>
        <strong>{profile.title}</strong>
      </div>
      <em>{profile.status}</em>
    </div>
  )
}

export function DashboardMockup({ profile }: { profile: VisualProfile }) {
  return (
    <div className="pv-dashboard">
      <StatStrip stats={profile.stats} />
      <div className="pv-chart" aria-hidden="true">
        {[42, 62, 54, 76, 68, 88, 80].map((value, index) => (
          <i key={index} style={{ '--h': `${value}%` } as CSSProperties} />
        ))}
      </div>
      <FieldList fields={profile.fields} />
    </div>
  )
}

export function DocumentAIMockup({ profile }: { profile: VisualProfile }) {
  return (
    <div className="pv-doc-grid">
      <div className="pv-document" aria-hidden="true">
        <span className="pv-doc-stamp">{profile.tags[0]}</span>
        {[88, 74, 92, 58, 82, 66].map((width, index) => (
          <i key={index} style={{ '--w': `${width}%` } as CSSProperties} data-marked={index === 2 || index === 4} />
        ))}
      </div>
      <div className="pv-side-panel">
        <FieldList fields={profile.fields} />
        <div className="pv-checks">
          {profile.notes.map((note) => <span key={note}>{note}</span>)}
        </div>
      </div>
    </div>
  )
}

export function VoiceAIMockup({ profile }: { profile: VisualProfile }) {
  return (
    <div className="pv-voice">
      <div className="pv-wave" aria-hidden="true">
        {[28, 62, 44, 80, 36, 68, 94, 52, 72, 40, 58, 86].map((height, index) => (
          <i key={index} style={{ '--h': `${height}%` } as CSSProperties} />
        ))}
      </div>
      <div className="pv-transcript">
        {profile.items.map((item, index) => (
          <div key={item}>
            <span>{index % 2 === 0 ? 'AI' : 'Lead'}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
      <FieldList fields={profile.fields} />
    </div>
  )
}

export function ComputerVisionMockup({ profile }: { profile: VisualProfile }) {
  return (
    <div className="pv-vision">
      <div className="pv-camera-frame">
        <span className="pv-scanline" />
        <i className="pv-box pv-box--one">{profile.tags[0]}</i>
        <i className="pv-box pv-box--two">{profile.tags[1]}</i>
        <i className="pv-box pv-box--three">{profile.tags[2]}</i>
      </div>
      <div className="pv-side-panel">
        <StatStrip stats={profile.stats} />
        <FieldList fields={profile.fields} />
      </div>
    </div>
  )
}

export function MobileAppMockup({ profile }: { profile: VisualProfile }) {
  return (
    <div className="pv-mobile-wrap">
      <div className="pv-phone">
        <div className="pv-phone-top" />
        <div className="pv-phone-screen">
          <strong>{profile.title}</strong>
          <div className="pv-phone-stage">
            <span className="pv-phone-grid" />
            <i className="pv-phone-marker pv-phone-marker--one" />
            <i className="pv-phone-marker pv-phone-marker--two" />
            <i className="pv-phone-marker pv-phone-marker--three" />
          </div>
          <StatStrip stats={profile.stats} />
        </div>
      </div>
      <div className="pv-side-panel">
        <FieldList fields={profile.fields} />
        <TagRow tags={profile.tags} />
      </div>
    </div>
  )
}

export function MLOpsMockup({ profile }: { profile: VisualProfile }) {
  return (
    <div className="pv-mlops">
      <StatStrip stats={profile.stats} />
      <div className="pv-lines" aria-hidden="true">
        <svg viewBox="0 0 420 140" preserveAspectRatio="none">
          <path d="M0 104 C70 82 94 42 148 58 C206 76 222 118 282 74 C330 39 364 55 420 24" />
          <path d="M0 70 C64 58 94 96 148 86 C205 74 228 38 282 56 C340 74 366 94 420 72" />
        </svg>
      </div>
      <FieldList fields={profile.fields} />
    </div>
  )
}

export function DataAutomationMockup({ profile }: { profile: VisualProfile }) {
  return (
    <div className="pv-data">
      <div className="pv-table">
        {profile.items.map((item, index) => (
          <div key={item}>
            <span>{item}</span>
            <i style={{ '--w': `${52 + index * 9}%` } as CSSProperties} />
          </div>
        ))}
      </div>
      <div className="pv-side-panel">
        <StatStrip stats={profile.stats} />
        <FieldList fields={profile.fields} />
      </div>
    </div>
  )
}

export function GrowthAutomationMockup({ profile }: { profile: VisualProfile }) {
  return (
    <div className="pv-growth">
      <div className="pv-inbox-list">
        {profile.fields.map((field) => (
          <div key={field.label} data-tone={field.tone}>
            <strong>{field.label}</strong>
            <span>{field.value}</span>
          </div>
        ))}
      </div>
      <div className="pv-draft-panel">
        <span>{profile.tags.join(' / ')}</span>
        <p>{profile.items[0]}</p>
        <p>{profile.items[1]}</p>
        <button type="button" tabIndex={-1}>{profile.items[2] || 'Create task'}</button>
      </div>
    </div>
  )
}

export function GenerativeMediaMockup({ profile }: { profile: VisualProfile }) {
  return (
    <div className="pv-creative">
      <div className="pv-brief">
        <span>Product brief</span>
        <strong>{profile.fields[0]?.value}</strong>
        <TagRow tags={profile.tags} />
      </div>
      <div className="pv-variant-grid">
        {profile.items.map((item, index) => (
          <div key={item}>
            <span>Variant {index + 1}</span>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export function KnowledgeSearchMockup({ profile }: { profile: VisualProfile }) {
  return (
    <div className="pv-knowledge">
      <div className="pv-search">Ask a question across internal sources</div>
      <div className="pv-answer">
        <strong>{profile.title}</strong>
        <p>{profile.items[0]} matched with source-backed evidence and review notes.</p>
      </div>
      <div className="pv-source-row">
        {profile.items.map((item) => <span key={item}>{item}</span>)}
      </div>
    </div>
  )
}

function StatStrip({ stats }: { stats: VisualProfile['stats'] }) {
  return (
    <div className="pv-stat-strip">
      {stats.map((stat) => (
        <div key={stat.label}>
          <strong>{stat.value}</strong>
          <span>{stat.label}</span>
        </div>
      ))}
    </div>
  )
}

function FieldList({ fields }: { fields: VisualProfile['fields'] }) {
  return (
    <div className="pv-field-list">
      {fields.map((field) => (
        <div key={field.label} data-tone={field.tone}>
          <span>{field.label}</span>
          <strong>{field.value}</strong>
        </div>
      ))}
    </div>
  )
}

function TagRow({ tags }: { tags: string[] }) {
  return (
    <div className="pv-tags">
      {tags.map((tag) => <span key={tag}>{tag}</span>)}
    </div>
  )
}

export function ProjectIcon({
  name,
  size = 18,
  className,
}: {
  name: ProjectIconName
  size?: number
  className?: string
}) {
  const common = {
    width: size,
    height: size,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
    className,
  }

  const content = iconPaths[name] || iconPaths.Bot

  return <svg {...common}>{content}</svg>
}

const iconPaths: Record<ProjectIconName, ReactNode> = {
  Activity: <><path d="M4 12h4l2-7 4 14 2-7h4" /></>,
  AudioLines: <><path d="M4 10v4M8 7v10M12 4v16M16 8v8M20 11v2" /></>,
  BadgeDollarSign: <><circle cx="12" cy="12" r="8" /><path d="M12 7v10M9.5 9.5c.7-.8 4.1-.9 4.8.3.6 1-.2 2-2.3 2.2-2.4.2-3.2 1.2-2.3 2.4.8 1.1 4 1 4.8.1" /></>,
  BarChart3: <><path d="M5 19V9M12 19V5M19 19v-7" /></>,
  Bot: <><rect x="6" y="8" width="12" height="10" rx="3" /><path d="M12 8V4M9 13h.1M15 13h.1M9 18l-2 2M15 18l2 2" /></>,
  BotMessageSquare: <><rect x="5" y="7" width="14" height="10" rx="3" /><path d="M8 17v4l4-4M12 7V3M9 12h.1M15 12h.1" /></>,
  BrainCircuit: <><path d="M9 4a4 4 0 0 0-4 4v7a4 4 0 0 0 4 4M15 4a4 4 0 0 1 4 4v7a4 4 0 0 1-4 4" /><path d="M9 8h6M9 12h6M9 16h6M12 8v8" /></>,
  Camera: <><path d="M4 8h4l2-3h4l2 3h4v11H4z" /><circle cx="12" cy="13.5" r="3.5" /></>,
  ChartNoAxesCombined: <><path d="M4 18h16" /><path d="M6 15l4-4 3 3 6-8" /><path d="M7 18v-4M12 18v-7M17 18V8" /></>,
  Clapperboard: <><path d="M5 6h14v13H5z" /><path d="M5 10h14M8 6l3 4M13 6l3 4" /></>,
  ClipboardCheck: <><path d="M9 4h6l1 3H8z" /><path d="M6 6h12v15H6z" /><path d="m9 14 2 2 4-5" /></>,
  Cog: <><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M4.2 4.2l2.1 2.1M17.7 17.7l2.1 2.1M2 12h3M19 12h3M4.2 19.8l2.1-2.1M17.7 6.3l2.1-2.1" /></>,
  Cpu: <><rect x="8" y="8" width="8" height="8" rx="1.5" /><path d="M4 10h2M4 14h2M18 10h2M18 14h2M10 4v2M14 4v2M10 18v2M14 18v2" /></>,
  DatabaseZap: <><ellipse cx="12" cy="5" rx="7" ry="3" /><path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5M5 11v5c0 1.7 3.1 3 7 3" /><path d="m15 14-2 4h3l-2 4" /></>,
  Dumbbell: <><path d="M6 7v10M18 7v10M3 10v4M21 10v4M6 12h12" /></>,
  Factory: <><path d="M4 20V9l5 3V9l5 3V6h6v14z" /><path d="M8 16h2M13 16h2M18 16h2" /></>,
  FileSearch: <><path d="M6 3h8l4 4v14H6z" /><path d="M14 3v5h5" /><circle cx="11" cy="14" r="3" /><path d="m13.4 16.4 2.6 2.6" /></>,
  Files: <><path d="M8 3h8l4 4v12H8z" /><path d="M16 3v5h4M5 7v14h11" /></>,
  Gauge: <><path d="M5 17a8 8 0 1 1 14 0" /><path d="m12 14 4-5" /><path d="M8 17h8" /></>,
  GitBranch: <><circle cx="7" cy="5" r="2" /><circle cx="7" cy="19" r="2" /><circle cx="17" cy="12" r="2" /><path d="M7 7v10M7 12h8" /></>,
  HardDrive: <><rect x="4" y="6" width="16" height="12" rx="2" /><path d="M7 14h.1M11 14h6" /></>,
  HeartPulse: <><path d="M20 8c0 6-8 11-8 11S4 14 4 8a4 4 0 0 1 7-2 4 4 0 0 1 7 2Z" /><path d="M4 12h4l1.5-3 3 6 1.5-3h6" /></>,
  LineChart: <><path d="M4 19h16" /><path d="m5 15 4-5 4 3 6-8" /></>,
  ListChecks: <><path d="m4 7 1.5 1.5L8 5M4 13l1.5 1.5L8 11M4 19l1.5 1.5L8 17M11 7h9M11 13h9M11 19h9" /></>,
  MessageCircle: <><path d="M5 17a8 8 0 1 1 3 3l-4 1z" /></>,
  MessagesSquare: <><path d="M5 6h11v8H9l-4 4z" /><path d="M9 18h7l4 3V10h-3" /></>,
  Mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3M9 21h6" /></>,
  Music: <><path d="M9 18V5l10-2v13" /><circle cx="7" cy="18" r="3" /><circle cx="17" cy="16" r="3" /></>,
  PackageCheck: <><path d="m12 3 8 4-8 4-8-4z" /><path d="M4 7v10l8 4 8-4V7" /><path d="m9 15 2 2 4-5" /></>,
  PhoneCall: <><path d="M7 4h4l2 5-3 2a11 11 0 0 0 5 5l2-3 5 2v4c0 1-1 2-2 2A17 17 0 0 1 3 6c0-1 1-2 2-2h2Z" /><path d="M15 5c2 1 3 2 4 4" /></>,
  ReceiptText: <><path d="M6 3h12v18l-2-1-2 1-2-1-2 1-2-1-2 1z" /><path d="M9 8h6M9 12h6M9 16h4" /></>,
  Rocket: <><path d="M14 4c3-.6 5 .1 6 0-.1 3-1.1 6-4 9l-5 5-5 1 1-5 5-5c.8-.8 1.4-3.2 2-5Z" /><circle cx="15.5" cy="8.5" r="1.5" /></>,
  Router: <><rect x="5" y="10" width="14" height="8" rx="2" /><path d="M8 14h.1M12 14h.1M16 14h.1M8 6c2.5-2 5.5-2 8 0M10 8c1.3-1 2.7-1 4 0" /></>,
  Scale: <><path d="M12 3v18M6 6h12M6 6l-4 7h8zM18 6l-4 7h8z" /></>,
  ScanEye: <><path d="M4 8V5h3M17 5h3v3M20 16v3h-3M7 19H4v-3" /><path d="M4 12s3-5 8-5 8 5 8 5-3 5-8 5-8-5-8-5Z" /><circle cx="12" cy="12" r="2.5" /></>,
  ScanSearch: <><path d="M4 8V5h3M17 5h3v3M20 16v3h-3M7 19H4v-3" /><circle cx="11" cy="12" r="4" /><path d="m14 15 3 3" /></>,
  SearchCheck: <><circle cx="11" cy="11" r="6" /><path d="m15.5 15.5 4 4M8.5 11l1.8 1.8 3.4-4" /></>,
  ServerCog: <><rect x="4" y="4" width="16" height="6" rx="2" /><rect x="4" y="14" width="16" height="6" rx="2" /><path d="M7 7h.1M7 17h.1" /><circle cx="16" cy="17" r="1.8" /></>,
  ShieldAlert: <><path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" /><path d="M12 8v5M12 16h.1" /></>,
  ShieldCheck: <><path d="M12 3 19 6v5c0 5-3 8-7 10-4-2-7-5-7-10V6z" /><path d="m8.5 12 2.2 2.2L15.8 9" /></>,
  Smartphone: <><rect x="7" y="3" width="10" height="18" rx="2" /><path d="M10 18h4" /></>,
  Sparkles: <><path d="M12 3l1.6 4.4L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.6zM5 14l.9 2.1L8 17l-2.1.9L5 20l-.9-2.1L2 17l2.1-.9zM19 14l.8 1.7 1.7.8-1.7.8-.8 1.7-.8-1.7-1.7-.8 1.7-.8z" /></>,
  TableProperties: <><rect x="4" y="5" width="16" height="14" rx="2" /><path d="M4 10h16M9 10v9M14 10v9" /></>,
  Tags: <><path d="M4 11V5h6l9 9-6 6z" /><path d="M8 8h.1" /><path d="M10 5h3l8 8-3 3" /></>,
  Target: <><circle cx="12" cy="12" r="8" /><circle cx="12" cy="12" r="4" /><circle cx="12" cy="12" r="1" /></>,
  TabletSmartphone: <><rect x="4" y="5" width="11" height="16" rx="2" /><rect x="15" y="9" width="5" height="10" rx="1.5" /><path d="M8 18h3" /></>,
  TrendingUp: <><path d="m4 16 5-5 4 4 7-8" /><path d="M14 7h6v6" /></>,
  UserSearch: <><path d="M14 19v-1a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v1" /><circle cx="8.5" cy="7" r="3.5" /><circle cx="17" cy="15" r="3" /><path d="m19 17 2 2" /></>,
  WandSparkles: <><path d="m4 20 10-10" /><path d="m12 4 1 3 3 1-3 1-1 3-1-3-3-1 3-1zM18 13l.7 1.6 1.6.7-1.6.7-.7 1.6-.7-1.6-1.6-.7 1.6-.7z" /></>,
  Workflow: <><rect x="4" y="4" width="6" height="6" rx="1.5" /><rect x="14" y="14" width="6" height="6" rx="1.5" /><path d="M10 7h3a4 4 0 0 1 4 4v3M7 10v3a4 4 0 0 0 4 4h3" /></>,
}
