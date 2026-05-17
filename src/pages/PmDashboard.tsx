import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// ─── Icons ────────────────────────────────────────────────────────────────────

function SearchIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="5.5" cy="5.5" r="4.5" stroke="#8A8074" strokeWidth="1.2"/>
      <path d="M9 9L12 12" stroke="#8A8074" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

// ─── Workflow Stepper ─────────────────────────────────────────────────────────

function WorkflowStepper({ currentStep }: { currentStep: number }) {
  const steps = [
    { n: 1, label: 'Pick campaign' },
    { n: 2, label: 'Update status' },
    { n: 3, label: 'Review AI draft' },
    { n: 4, label: 'Publish to client' },
  ];
  return (
    <div
      className="flex items-center"
      style={{
        backgroundColor: '#FFFDF8',
        border: '1px solid #E7D9C8',
        borderRadius: 16,
        padding: '18px 28px',
        marginBottom: 20,
      }}
    >
      {steps.map((step, i) => {
        const isActive = step.n === currentStep;
        const isDone = step.n < currentStep;
        return (
          <div key={step.n} className="flex items-center" style={{ flex: i < steps.length - 1 ? 1 : undefined }}>
            <div className="flex items-center gap-2.5 shrink-0">
              <div
                className="flex items-center justify-center font-bold rounded-full shrink-0"
                style={{
                  width: 34,
                  height: 34,
                  backgroundColor: isActive ? '#D88A4A' : isDone ? '#D88A4A' : '#F3E6D8',
                  fontSize: 13,
                  color: isActive || isDone ? '#FFFDF8' : '#A77734',
                }}
              >
                {step.n}
              </div>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: isActive ? 600 : 400,
                  color: isActive ? '#2B2924' : '#6E665C',
                  whiteSpace: 'nowrap',
                }}
              >
                {step.label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div style={{ flex: 1, height: 1, backgroundColor: '#E7D9C8', margin: '0 16px' }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Campaign Queue Card ───────────────────────────────────────────────────────

type QueueStatus = 'at-risk' | 'delayed' | 'on-track';

const statusCfg: Record<QueueStatus, { dot: string; label: string; labelColor: string }> = {
  'at-risk': { dot: '#A77734', label: 'AT RISK',  labelColor: '#A77734' },
  'delayed':  { dot: '#B85E4C', label: 'DELAYED',  labelColor: '#B85E4C' },
  'on-track': { dot: '#677F5A', label: 'ON TRACK', labelColor: '#677F5A' },
};

interface QueueCardProps {
  status: QueueStatus;
  name: string;
  launchDate: string;
  statusNote: string;
  selected?: boolean;
  onClick?: () => void;
}

function QueueCard({ status, name, launchDate, statusNote, selected = false, onClick }: QueueCardProps) {
  const cfg = statusCfg[status];
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: selected ? '#F6E7CC' : '#FFFDF8',
        border: selected ? '1px solid #D9B36C' : '1px solid #E7D9C8',
        borderRadius: 14,
        padding: 20,
        cursor: 'pointer',
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
      }}
    >
      {/* Status row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="rounded-full shrink-0" style={{ width: 8, height: 8, backgroundColor: cfg.dot }} />
          <span className="font-semibold tracking-wider" style={{ fontSize: 12, color: cfg.labelColor, letterSpacing: '0.06em' }}>
            {cfg.label}
          </span>
        </div>
        {selected && (
          <div
            style={{
              backgroundColor: '#D9B36C',
              border: '1px solid #A77734',
              borderRadius: 999,
              padding: '3px 10px',
              fontSize: 12,
              fontWeight: 500,
              color: '#FFFDF8',
            }}
          >
            Selected
          </div>
        )}
      </div>
      {/* Content */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
          <div className="font-semibold" style={{ fontSize: 15, color: '#2B2924' }}>{name}</div>
          <div style={{ fontSize: 12, color: '#6E665C' }}>Launch: {launchDate}</div>
        </div>
        <div
          style={{
            fontSize: 12,
            fontWeight: selected ? 500 : 400,
            color: selected ? '#A77734' : '#5C554B',
          }}
        >
          {statusNote}
        </div>
      </div>
    </div>
  );
}

// ─── Campaign data ─────────────────────────────────────────────────────────────

const row1 = [
  { status: 'at-risk'  as QueueStatus, name: 'Spring Collection Launch', launchDate: '21 May 2026', statusNote: 'Final copy approval pending', selected: true  },
  { status: 'delayed'  as QueueStatus, name: 'Kitchen Essentials Promo', launchDate: '16 May 2026', statusNote: 'No update in 72h',              selected: false },
  { status: 'on-track' as QueueStatus, name: "Mother's Day Gift Guide",  launchDate: '18 May 2026', statusNote: 'Scheduled. No action needed.',  selected: false },
];
const row2 = [
  { status: 'on-track' as QueueStatus, name: 'Summer Home Refresh',  launchDate: '2 Jun 2026',  statusNote: 'Scheduled. No action needed.', selected: false },
  { status: 'on-track' as QueueStatus, name: 'Weekend Flash Sale',   launchDate: '25 May 2026', statusNote: 'Scheduled. No action needed.', selected: false },
  { status: 'on-track' as QueueStatus, name: 'Brand Refresh Campaign', launchDate: '10 Jun 2026', statusNote: 'Scheduled. No action needed.', selected: false },
];

// ─── Main Component ────────────────────────────────────────────────────────────

export default function PmDashboard() {
  const navigate = useNavigate();

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#F7F1E8' }}>
      <Sidebar agencyMode={true} />

      <main className="flex-1 overflow-y-auto" style={{ padding: '28px 32px 48px' }}>

        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <h1 className="font-bold" style={{ fontSize: 28, color: '#2B2924', lineHeight: 1.2 }}>
              Pick a campaign to update
            </h1>
            <p style={{ fontSize: 14, color: '#6E665C' }}>
              Start by choosing the campaign that needs a client-visible update.
            </p>
          </div>
          {/* AT profile */}
          <div className="flex items-center shrink-0" style={{ gap: 36 }}>
            <div style={{ fontSize: 12, color: '#5C554B', lineHeight: 1.5 }}>
              <div>Last client update:</div>
              <div style={{ fontWeight: 500 }}>Yesterday, 4:30PM</div>
            </div>
            <div className="flex items-end gap-2.5">
              <div
                className="rounded-full flex items-center justify-center font-semibold shrink-0"
                style={{ width: 36, height: 36, backgroundColor: '#EBC0B9', fontSize: 13, color: '#2B2924' }}
              >
                AT
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <span className="font-semibold" style={{ fontSize: 13, color: '#2B2924' }}>Alyna</span>
                <span style={{ fontSize: 11, color: '#6E665C' }}>DevLab's PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow stepper — Step 1 active */}
        <WorkflowStepper currentStep={1} />

        {/* All Campaigns card */}
        <div
          style={{
            backgroundColor: '#FFFDF8',
            border: '1px solid #E7D9C8',
            borderRadius: 16,
            padding: 20,
            marginBottom: 24,
          }}
        >
          {/* Card header */}
          <div className="flex items-start justify-between mb-5">
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              <span className="font-semibold" style={{ fontSize: 20, color: '#2B2924' }}>All campaigns</span>
              <span style={{ fontSize: 13, color: '#6E665C' }}>
                Highlighted campaigns need PM action before the client dashboard updates.
              </span>
            </div>
            {/* Search + filter */}
            <div className="flex items-center gap-3 shrink-0">
              <div
                className="flex items-center gap-2"
                style={{
                  backgroundColor: '#F3ECE3',
                  border: '1px solid #D8C8B7',
                  borderRadius: 10,
                  padding: '9px 16px',
                }}
              >
                <SearchIcon />
                <span style={{ fontSize: 13, color: '#8A8074' }}>Search campaigns…</span>
              </div>
              <div
                style={{
                  backgroundColor: '#FFFDF8',
                  border: '1px solid #D8C8B7',
                  borderRadius: 10,
                  padding: '9px 14px',
                  fontSize: 13,
                  color: '#8A8074',
                  cursor: 'pointer',
                }}
              >
                Filter
              </div>
            </div>
          </div>

          {/* Campaign rows */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {row1.map((c, i) => (
                <QueueCard key={i} {...c} onClick={() => navigate('/pm/update')} />
              ))}
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
              {row2.map((c, i) => (
                <QueueCard key={i} {...c} onClick={() => navigate('/pm/update')} />
              ))}
            </div>
          </div>
        </div>

        {/* Follow Ups */}
        <div>
          <h2 className="font-semibold" style={{ fontSize: 18, color: '#2B2924', marginBottom: 12 }}>
            Follow Ups
          </h2>
          <div className="flex gap-4">

            {/* Waiting on DevLab */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#FFFDF8',
                border: '1px solid #E4B894',
                borderRadius: 12,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <div className="font-semibold" style={{ fontSize: 18, color: '#2B2924' }}>Waiting on DevLab</div>
                <div style={{ fontSize: 12, color: '#6E665C' }}>
                  Messages/questions from Rova that need the PM's response.
                </div>
              </div>
              {/* Dashed empty state */}
              <div
                style={{
                  flex: 1,
                  border: '1.5px dashed #8A8074',
                  borderRadius: 14,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 10,
                  minHeight: 120,
                }}
              >
                <div className="font-semibold" style={{ fontSize: 13, color: '#5C554B' }}>No pending replies</div>
                <div style={{ fontSize: 12, color: '#6E665C' }}>
                  There are currently no Rova messages waiting for your response.
                </div>
              </div>
            </div>

            {/* Waiting on Rova */}
            <div
              style={{
                flex: 1.1,
                backgroundColor: '#FFFDF8',
                border: '1px solid #E4B894',
                borderRadius: 12,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 20,
              }}
            >
              <div>
                <div className="font-semibold" style={{ fontSize: 18, color: '#2B2924', marginBottom: 8 }}>Waiting on Rova</div>
                <div style={{ fontSize: 12, color: '#6E665C' }}>
                  Detected questions DevLab has sent that have not been answered yet.
                </div>
              </div>
              {/* Email thread card */}
              <div
                style={{
                  backgroundColor: 'white',
                  border: '1px solid #8A8074',
                  borderRadius: 12,
                  padding: 24,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 20,
                }}
              >
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  <div className="font-semibold" style={{ fontSize: 13, color: '#5C554B' }}>
                    Subject: [Kitchen Essentials] Final product images pending
                  </div>
                  <div style={{ fontSize: 12, color: '#6E665C' }}>
                    Final product images have not been shared yet. Last follow-up was sent 5 days ago.
                  </div>
                  <div style={{ fontSize: 10, color: '#6E665C' }}>Source: Email</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#FFFDF8',
                      backgroundColor: '#D9B36C',
                      border: '1px solid #A77734',
                      borderRadius: 14,
                      padding: '5px 14px',
                      height: 27,
                      cursor: 'pointer',
                      lineHeight: 1,
                    }}
                  >
                    Open email
                  </button>
                  <button
                    style={{
                      fontSize: 14,
                      fontWeight: 600,
                      color: '#FFFDF8',
                      backgroundColor: '#B9CDAE',
                      border: '1px solid #677F5A',
                      borderRadius: 14,
                      padding: '5px 14px',
                      height: 27,
                      cursor: 'pointer',
                      lineHeight: 1,
                    }}
                  >
                    Mark as Resolved
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

      </main>
    </div>
  );
}
