import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// ─── Shared icons ────────────────────────────────────────────────────────────

function SparkleIcon({ color = '#D89B35' }: { color?: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M6.5 1L7.8 5.2H12.2L8.8 7.7L10.2 12L6.5 9.5L2.8 12L4.2 7.7L0.8 5.2H5.2L6.5 1Z" fill={color} />
    </svg>
  );
}
function SearchIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="6" cy="6" r="4.5" stroke="#8A8074" strokeWidth="1.2" />
      <path d="M9.5 9.5L12.5 12.5" stroke="#8A8074" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function FilterIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M1.5 3.5H12.5M3.5 7H10.5M5.5 10.5H8.5" stroke="#5C554B" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}
function RefreshIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M2 6.5C2 4.01 4.01 2 6.5 2C8.2 2 9.7 2.9 10.5 4.2" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M11 6.5C11 8.99 8.99 11 6.5 11C4.8 11 3.3 10.1 2.5 8.8" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M9 2L10.5 4.2L12.5 3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 11L2.5 8.8L0.5 10" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
function EditIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M9 1.5L11.5 4L4 11.5H1.5V9L9 1.5Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}
function EyeIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M1 6.5C1 6.5 3 2.5 6.5 2.5C10 2.5 12 6.5 12 6.5C12 6.5 10 10.5 6.5 10.5C3 10.5 1 6.5 1 6.5Z" stroke="#5C554B" strokeWidth="1.2" strokeLinejoin="round" />
      <circle cx="6.5" cy="6.5" r="1.5" stroke="#5C554B" strokeWidth="1.2" />
    </svg>
  );
}

// ─── Stepper ─────────────────────────────────────────────────────────────────

const STEPS = [
  { num: 1, label: 'Pick campaign' },
  { num: 2, label: 'Update status' },
  { num: 3, label: 'Review AI draft' },
  { num: 4, label: 'Publish to client' },
];

function Stepper({ current, onStep }: { current: number; onStep: (n: number) => void }) {
  return (
    <div
      className="flex items-center justify-center"
      style={{ borderBottom: '1px solid #E7D9C8', backgroundColor: '#FFFDF8', padding: '14px 32px', gap: 0 }}
    >
      {STEPS.map((step, i) => {
        const isActive = step.num === current;
        const isDone = step.num < current;
        const isDisabled = step.num === 4;
        return (
          <div key={step.num} className="flex items-center">
            <div
              className="flex items-center gap-2"
              onClick={() => !isDisabled && onStep(step.num)}
              style={{ cursor: isDisabled ? 'default' : 'pointer' }}
            >
              <div
                className="flex items-center justify-center rounded-full font-bold shrink-0"
                style={{
                  width: 26,
                  height: 26,
                  fontSize: 12,
                  backgroundColor: isActive
                    ? '#C95632'
                    : isDone
                    ? '#A77734'
                    : '#E7D9C8',
                  color: isActive || isDone ? 'white' : '#8A8074',
                  transition: 'background-color 0.2s',
                }}
              >
                {isDone ? (
                  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                    <path d="M2.5 6L5 8.5L9.5 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                ) : (
                  step.num
                )}
              </div>
              <span
                style={{
                  fontSize: 12,
                  color: isActive ? '#2B2924' : isDone ? '#A77734' : '#8A8074',
                  fontWeight: isActive ? 600 : isDone ? 500 : 400,
                  opacity: isDisabled ? 0.5 : 1,
                }}
              >
                {step.label}
              </span>
            </div>
            {i < STEPS.length - 1 && (
              <div className="mx-4" style={{ width: 36, height: 1, backgroundColor: '#E7D9C8' }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Shared header bar ───────────────────────────────────────────────────────

function StageHeader({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div style={{ padding: '22px 28px 0' }}>
      <div className="flex items-start justify-between mb-5">
        <div>
          <h1 className="font-bold" style={{ fontSize: 24, color: '#2B2924', marginBottom: 4 }}>
            {title}
          </h1>
          <p style={{ fontSize: 13, color: '#6E665C' }}>{subtitle}</p>
        </div>
        <div className="flex items-center gap-2 shrink-0">
          <span style={{ fontSize: 12, color: '#8A8074' }}>Last client update: Yesterday, 4:30 PM</span>
          <button
            style={{
              fontSize: 12,
              color: '#5C554B',
              border: '1px solid #E7D9C8',
              backgroundColor: '#FFFDF8',
              borderRadius: 8,
              padding: '6px 12px',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            Client preview
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Amber banner ────────────────────────────────────────────────────────────

function AmberBanner({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        backgroundColor: '#F8E8D8',
        border: '1px solid #E4B894',
        borderRadius: 10,
        padding: '11px 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: 12,
      }}
    >
      {children}
    </div>
  );
}

// ─── Campaign mini-cards ──────────────────────────────────────────────────────

interface CampaignRowProps {
  name: string;
  status: 'on-track' | 'at-risk' | 'delayed';
  launch: string;
  note: string;
  selected?: boolean;
  compact?: boolean;
}

const STATUS_COLOR = { 'on-track': '#677F5A', 'at-risk': '#A77734', delayed: '#B85E4C' };
const STATUS_LABEL = { 'on-track': 'ON TRACK', 'at-risk': 'AT RISK', delayed: 'DELAYED' };

function CampaignMiniCard({ name, status, launch, note, selected = false, compact = false }: CampaignRowProps) {
  const dot = STATUS_COLOR[status];
  const label = STATUS_LABEL[status];
  return (
    <div
      style={{
        backgroundColor: selected ? '#F6E7CC' : '#FFFDF8',
        border: `1px solid ${selected ? '#D9B36C' : '#E7D9C8'}`,
        borderRadius: 10,
        padding: compact ? '10px 12px' : '12px 14px',
      }}
    >
      <div className="flex items-center gap-1.5 mb-1">
        <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: dot, flexShrink: 0 }} />
        <span style={{ fontSize: 10, fontWeight: 600, color: dot, letterSpacing: '0.05em' }}>{label}</span>
        {selected && (
          <span
            style={{
              fontSize: 9,
              fontWeight: 600,
              backgroundColor: '#A77734',
              color: 'white',
              borderRadius: 999,
              padding: '1px 7px',
              marginLeft: 2,
            }}
          >
            Selected
          </span>
        )}
      </div>
      <div style={{ fontSize: 12, fontWeight: 600, color: '#2B2924', marginBottom: 2 }}>{name}</div>
      {!compact && <div style={{ fontSize: 11, color: '#8A8074', marginBottom: 4 }}>Launch: {launch}</div>}
      <div style={{ fontSize: 11, color: status === 'at-risk' ? '#C97849' : status === 'delayed' ? '#B85E4C' : '#677F5A', fontWeight: 500 }}>
        {note}
      </div>
    </div>
  );
}

// ─── Stage 1 ─────────────────────────────────────────────────────────────────

function Stage1({ onContinue }: { onContinue: () => void }) {
  const campaigns = [
    { name: 'Spring Collection Launch', status: 'at-risk' as const, launch: '21 May 2025', note: 'Final copy approval pending', selected: true },
    { name: 'Kitchen Essentials Promo', status: 'delayed' as const, launch: '16 May 2025', note: 'No update in 72h', selected: false },
    { name: "Mother's Day Gift Guide", status: 'on-track' as const, launch: '18 May 2025', note: 'Scheduled. No action needed.', selected: false },
    { name: 'Summer Home Refresh', status: 'on-track' as const, launch: '2 Jun 2025', note: 'Internal work in progress.', selected: false },
    { name: 'Weekend Flash Sale', status: 'on-track' as const, launch: '25 May 2025', note: 'Latest update today, 9:15 AM.', selected: false },
  ];

  return (
    <div style={{ padding: '0 28px 40px' }}>
      {/* Amber banner */}
      <AmberBanner>
        <p style={{ fontSize: 13, color: '#5C554B', flex: 1 }}>
          Choose the campaign that needs attention. Campaigns are prioritised by stale updates, upcoming milestones, and client risk.
        </p>
        <button style={{ fontSize: 12, color: '#C95632', background: 'none', border: 'none', cursor: 'pointer', fontWeight: 600, whiteSpace: 'nowrap' }}>
          View criteria →
        </button>
      </AmberBanner>

      <div className="flex gap-5 mt-5">
        {/* Left 2/3 — Campaign grid */}
        <div style={{ flex: '1 1 0' }}>
          <div style={{ marginBottom: 10 }}>
            <div style={{ fontSize: 15, fontWeight: 600, color: '#2B2924', marginBottom: 3 }}>All campaigns</div>
            <div style={{ fontSize: 12, color: '#8A8074' }}>
              Highlighted campaigns need PM action before the client dashboard updates.
            </div>
          </div>

          {/* Search + filter */}
          <div className="flex gap-2 mb-4">
            <div
              className="flex items-center gap-2 flex-1"
              style={{ border: '1px solid #E7D9C8', borderRadius: 8, backgroundColor: '#FFFDF8', padding: '7px 12px' }}
            >
              <SearchIcon />
              <span style={{ fontSize: 12, color: '#A89F91' }}>Search campaigns…</span>
            </div>
            <button
              className="flex items-center gap-1.5"
              style={{ border: '1px solid #E7D9C8', borderRadius: 8, backgroundColor: '#FFFDF8', padding: '7px 12px', cursor: 'pointer', fontSize: 12, color: '#5C554B', fontWeight: 500 }}
            >
              <FilterIcon /> Filter
            </button>
          </div>

          {/* Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {campaigns.map((c) => (
              <CampaignMiniCard key={c.name} {...c} />
            ))}
          </div>
        </div>

        {/* Right 1/3 — Preview */}
        <div style={{ width: 260, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div
            style={{
              backgroundColor: '#FFFDF8',
              border: '1px solid #E7D9C8',
              borderRadius: 14,
              padding: 18,
              flex: 1,
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, color: '#8A8074', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 10 }}>
              Selected campaign preview
            </div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#2B2924', marginBottom: 6, lineHeight: 1.3 }}>
              Spring Collection Launch
            </div>
            <p style={{ fontSize: 12, color: '#5C554B', lineHeight: 1.6, marginBottom: 12 }}>
              Spring Collection Launch has an upcoming milestone due today and needs a client-facing update.
            </p>
            <div className="flex gap-2 flex-wrap mb-14">
              <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: '#F6E7CC', color: '#A77734', borderRadius: 999, padding: '3px 9px', border: '1px solid #D9B36C' }}>
                Client action
              </span>
              <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: 'transparent', color: '#A77734', borderRadius: 999, padding: '3px 9px', border: '1px solid #D9B36C' }}>
                At Risk
              </span>
            </div>
            <button
              onClick={onContinue}
              style={{
                width: '100%',
                backgroundColor: '#C95632',
                color: 'white',
                border: 'none',
                borderRadius: 10,
                padding: '10px',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}
            >
              Continue to update status →
            </button>
          </div>

          {/* Info card */}
          <div
            style={{
              backgroundColor: '#FFFDF8',
              border: '1px solid #E7D9C8',
              borderRadius: 12,
              padding: 14,
            }}
          >
            <div style={{ fontSize: 11, fontWeight: 600, color: '#2B2924', marginBottom: 4 }}>
              How campaigns are prioritised
            </div>
            <p style={{ fontSize: 11, color: '#8A8074', lineHeight: 1.5 }}>
              Rova Pulse surfaces stale updates, upcoming milestones, and client-visible risks first so the PM knows where to act.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Stage 2 ─────────────────────────────────────────────────────────────────

function Stage2({ onGenerate, onChangeCampaign }: { onGenerate: () => void; onChangeCampaign: () => void }) {
  const [noteText, setNoteText] = useState(
    'Final launch copy is still pending. If approval is not received by 5 PM today, launch may move by one day.'
  );

  return (
    <div style={{ padding: '0 28px 40px' }}>
      {/* Amber context banner */}
      <AmberBanner>
        <p style={{ fontSize: 13, color: '#5C554B', flex: 1 }}>
          <span style={{ fontWeight: 600, color: '#A77734' }}>Spring Collection Launch</span> is selected.
          Final copy approval is due today at 5:00 PM.
        </p>
        <button
          onClick={onChangeCampaign}
          style={{ fontSize: 12, color: '#5C554B', border: '1px solid #D9B36C', backgroundColor: '#FFFDF8', borderRadius: 8, padding: '6px 12px', cursor: 'pointer', fontWeight: 500, whiteSpace: 'nowrap' }}
        >
          Change campaign
        </button>
      </AmberBanner>

      <div className="flex gap-4 mt-5">
        {/* Left column — Campaign context */}
        <div style={{ width: 220, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <CampaignMiniCard
            name="Spring Collection Launch"
            status="at-risk"
            launch="21 May 2025"
            note="Final copy approval pending"
            selected
          />

          <div style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', borderRadius: 10, padding: 14 }}>
            <div style={{ fontSize: 11, fontWeight: 600, color: '#2B2924', marginBottom: 6 }}>Why this needs an update</div>
            <p style={{ fontSize: 11, color: '#5C554B', lineHeight: 1.55, marginBottom: 8 }}>
              Milestone is due today and the last approved client update was yesterday at 4:30 PM.
            </p>
            <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: '#F6E7CC', color: '#A77734', borderRadius: 999, padding: '3px 9px', border: '1px solid #D9B36C' }}>
              Client risk
            </span>
          </div>

          <div style={{ backgroundColor: '#F8E8D8', border: '1px solid #E4B894', borderRadius: 10, padding: 12 }}>
            <p style={{ fontSize: 11, color: '#A77734', fontWeight: 500, lineHeight: 1.5 }}>
              Post a client-visible update before the milestone becomes overdue.
            </p>
          </div>
        </div>

        {/* Centre column — Update form */}
        <div style={{ flex: '1 1 0', backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', borderRadius: 14, padding: 20 }}>
          <div className="flex items-center justify-between mb-4">
            <div style={{ fontSize: 15, fontWeight: 600, color: '#2B2924' }}>Update status details</div>
            <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: '#554D43', color: '#F7F1E8', borderRadius: 999, padding: '3px 10px' }}>
              Internal only
            </span>
          </div>

          <div className="flex flex-col gap-4">
            {/* Status — display only */}
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: '#5C554B', display: 'block', marginBottom: 6 }}>Status</label>
              <div
                style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '9px 12px', border: '1px solid #D9B36C', borderRadius: 8, backgroundColor: '#F6E7CC' }}
              >
                <div style={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#A77734' }} />
                <span style={{ fontSize: 13, fontWeight: 600, color: '#A77734' }}>At Risk</span>
              </div>
            </div>

            {/* Stage */}
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: '#5C554B', display: 'block', marginBottom: 6 }}>Current stage</label>
              <div style={{ padding: '9px 12px', border: '1px solid #E7D9C8', borderRadius: 8, backgroundColor: '#F7F1E8', fontSize: 13, color: '#2B2924' }}>
                Awaiting final copy approval
              </div>
            </div>

            {/* Internal note */}
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: '#5C554B', display: 'block', marginBottom: 6 }}>Internal update note</label>
              <textarea
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                rows={3}
                style={{
                  width: '100%',
                  fontSize: 12,
                  color: '#2B2924',
                  border: '1px solid #E7D9C8',
                  borderRadius: 8,
                  padding: '10px 12px',
                  backgroundColor: '#F7F1E8',
                  resize: 'none',
                  outline: 'none',
                  lineHeight: 1.55,
                  boxSizing: 'border-box',
                }}
              />
              <div style={{ fontSize: 10, color: '#8A8074', marginTop: 4 }}>
                This note is used to generate a client-facing draft.
              </div>
            </div>

            {/* Client action */}
            <div>
              <label style={{ fontSize: 12, fontWeight: 500, color: '#5C554B', display: 'block', marginBottom: 6 }}>Client action needed</label>
              <div style={{ padding: '9px 12px', border: '1px solid #E7D9C8', borderRadius: 8, backgroundColor: '#F7F1E8', fontSize: 13, color: '#2B2924' }}>
                Approve final copy by today, 5:00 PM
              </div>
            </div>

            {/* Tags */}
            <div className="flex gap-2">
              <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: '#F6E7CC', color: '#A77734', borderRadius: 999, padding: '3px 9px', border: '1px solid #D9B36C' }}>
                Timeline risk
              </span>
              <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: '#F6E7CC', color: '#A77734', borderRadius: 999, padding: '3px 9px', border: '1px solid #D9B36C' }}>
                Client action needed
              </span>
            </div>

            {/* Buttons */}
            <div className="flex gap-2 mt-1">
              <button
                style={{ flex: 1, fontSize: 12, color: '#5C554B', border: '1px solid #E7D9C8', backgroundColor: '#FFFDF8', borderRadius: 8, padding: '9px', cursor: 'pointer', fontWeight: 500 }}
              >
                Save draft
              </button>
              <button
                onClick={onGenerate}
                style={{ flex: 2, fontSize: 12, color: 'white', backgroundColor: '#C95632', border: 'none', borderRadius: 8, padding: '9px', cursor: 'pointer', fontWeight: 600 }}
              >
                Generate AI client draft →
              </button>
            </div>
          </div>
        </div>

        {/* Right column — Draft preview (empty state) */}
        <div style={{ width: 250, flexShrink: 0, backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', borderRadius: 14, padding: 20, display: 'flex', flexDirection: 'column' }}>
          <div className="flex items-center justify-between mb-4">
            <div style={{ fontSize: 15, fontWeight: 600, color: '#2B2924' }}>AI draft preview</div>
            <span style={{ fontSize: 10, fontWeight: 600, color: '#8A8074', backgroundColor: '#F7F1E8', borderRadius: 999, padding: '3px 9px', border: '1px solid #E7D9C8' }}>
              Next step
            </span>
          </div>

          {/* Empty state */}
          <div style={{ backgroundColor: '#F7F1E8', border: '1px solid #E7D9C8', borderRadius: 10, padding: 16, marginBottom: 12 }}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#8A8074', marginBottom: 6 }}>No draft yet</div>
            <p style={{ fontSize: 12, color: '#A89F91', lineHeight: 1.55, marginBottom: 12 }}>
              Complete the status fields and generate a client-facing draft for PM review.
            </p>
            {/* Skeleton lines */}
            {[80, 100, 60].map((w, i) => (
              <div key={i} style={{ height: 8, backgroundColor: '#E7D9C8', borderRadius: 4, width: `${w}%`, marginBottom: 6 }} />
            ))}
          </div>

          <div style={{ backgroundColor: '#F8E8D8', border: '1px solid #E4B894', borderRadius: 8, padding: 10, marginBottom: 16 }}>
            <div style={{ fontSize: 10, fontWeight: 600, color: '#A77734', marginBottom: 3 }}>After generating</div>
            <p style={{ fontSize: 11, color: '#5C554B', lineHeight: 1.5 }}>
              PM reviews the draft, edits if needed, then approves before Priya sees it.
            </p>
          </div>

          <button
            disabled
            style={{
              width: '100%',
              fontSize: 12,
              color: '#A89F91',
              backgroundColor: '#F7F1E8',
              border: '1px solid #E7D9C8',
              borderRadius: 10,
              padding: '10px',
              cursor: 'not-allowed',
              fontWeight: 500,
              marginTop: 'auto',
            }}
          >
            Continue to review draft
          </button>
        </div>
      </div>
    </div>
  );
}

// ─── Stage 3 ─────────────────────────────────────────────────────────────────

function Stage3() {
  const [published, setPublished] = useState(false);
  const navigate = useNavigate();

  const handlePublish = () => {
    setPublished(true);
    setTimeout(() => navigate('/'), 1400);
  };

  const campaigns = [
    { name: 'Spring Collection Launch', status: 'at-risk' as const, launch: '21 May', note: 'Final copy approval pending', selected: true },
    { name: 'Kitchen Essentials Promo', status: 'delayed' as const, launch: '16 May', note: 'No update in 72h', selected: false },
    { name: "Mother's Day Gift Guide", status: 'on-track' as const, launch: '18 May', note: 'Scheduled. No action needed.', selected: false },
  ];

  return (
    <div style={{ padding: '0 28px 40px' }}>
      {/* Reminder banner */}
      <AmberBanner>
        <p style={{ fontSize: 13, color: '#5C554B', flex: 1 }}>
          <span style={{ fontWeight: 600, color: '#A77734' }}>Reminder:</span> Final copy approval is due today at 5:00 PM. This campaign needs a client-visible update.
        </p>
        <button
          style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#2B2924', border: '1px solid #D9B36C', backgroundColor: '#FFFDF8', borderRadius: 8, padding: '6px 12px', cursor: 'pointer', fontWeight: 600, whiteSpace: 'nowrap' }}
        >
          <SparkleIcon /> Use AI draft
        </button>
      </AmberBanner>

      <div className="flex gap-4 mt-5">
        {/* Left — Campaign list */}
        <div style={{ width: 210, flexShrink: 0, display: 'flex', flexDirection: 'column', gap: 10 }}>
          <div>
            <div style={{ fontSize: 14, fontWeight: 600, color: '#2B2924', marginBottom: 3 }}>All campaigns</div>
            <div style={{ fontSize: 11, color: '#8A8074', marginBottom: 10 }}>Only campaigns needing PM action are highlighted.</div>
          </div>
          {campaigns.map((c) => (
            <CampaignMiniCard key={c.name} {...c} compact />
          ))}
          {/* Search */}
          <div
            className="flex items-center gap-2"
            style={{ border: '1px solid #E7D9C8', borderRadius: 8, backgroundColor: '#FFFDF8', padding: '7px 10px', marginTop: 2 }}
          >
            <SearchIcon />
            <span style={{ fontSize: 12, color: '#A89F91' }}>Search…</span>
          </div>
        </div>

        {/* Centre — Update status */}
        <div style={{ flex: '1 1 0', backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', borderRadius: 14, padding: 20 }}>
          <div className="flex items-center justify-between mb-4">
            <div style={{ fontSize: 15, fontWeight: 600, color: '#2B2924' }}>Update status</div>
            <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: '#554D43', color: '#F7F1E8', borderRadius: 999, padding: '3px 10px' }}>
              Internal only
            </span>
          </div>

          {/* Status + Stage side by side */}
          <div className="flex gap-3 mb-4">
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 11, color: '#8A8074', display: 'block', marginBottom: 4 }}>Status</label>
              <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '8px 10px', border: '1px solid #D9B36C', borderRadius: 8, backgroundColor: '#F6E7CC' }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', backgroundColor: '#A77734' }} />
                <span style={{ fontSize: 12, fontWeight: 600, color: '#A77734' }}>At Risk</span>
              </div>
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ fontSize: 11, color: '#8A8074', display: 'block', marginBottom: 4 }}>Stage</label>
              <div style={{ padding: '8px 10px', border: '1px solid #E7D9C8', borderRadius: 8, backgroundColor: '#F7F1E8', fontSize: 12, color: '#2B2924' }}>
                Final copy approval
              </div>
            </div>
          </div>

          {/* Note */}
          <div style={{ marginBottom: 14 }}>
            <label style={{ fontSize: 12, fontWeight: 500, color: '#5C554B', display: 'block', marginBottom: 6 }}>Internal update note</label>
            <textarea
              defaultValue="Final launch copy is still pending. If approval is not received by 5 PM today, launch may move by one day."
              rows={3}
              style={{
                width: '100%',
                fontSize: 12,
                color: '#2B2924',
                border: '1px solid #E7D9C8',
                borderRadius: 8,
                padding: '10px 12px',
                backgroundColor: '#F7F1E8',
                resize: 'none',
                outline: 'none',
                lineHeight: 1.55,
                boxSizing: 'border-box',
              }}
            />
            <div style={{ fontSize: 10, color: '#8A8074', marginTop: 3 }}>This note is used to generate a client-facing draft.</div>
          </div>

          {/* Client action */}
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 12, fontWeight: 500, color: '#5C554B', display: 'block', marginBottom: 6 }}>Client action needed</label>
            <div style={{ padding: '9px 12px', border: '1px solid #E7D9C8', borderRadius: 8, backgroundColor: '#F7F1E8', fontSize: 13, color: '#2B2924', marginBottom: 6 }}>
              Priya's team needs to approve final copy.
            </div>
            <div className="flex gap-2 items-center">
              <span style={{ fontSize: 11, fontWeight: 600, color: '#C97849' }}>Due today, 5:00 PM</span>
              <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: '#F6E7CC', color: '#A77734', borderRadius: 999, padding: '2px 8px', border: '1px solid #D9B36C' }}>
                Timeline risk
              </span>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-2">
            <button style={{ flex: 1, fontSize: 12, color: '#5C554B', border: '1px solid #E7D9C8', backgroundColor: '#FFFDF8', borderRadius: 8, padding: '8px', cursor: 'pointer', fontWeight: 500 }}>
              Save draft
            </button>
            <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 12, color: '#5C554B', border: '1px solid #E7D9C8', backgroundColor: '#FFFDF8', borderRadius: 8, padding: '8px', cursor: 'pointer', fontWeight: 500 }}>
              <EyeIcon /> Preview as client
            </button>
            <button style={{ flex: 1, fontSize: 12, color: 'white', backgroundColor: '#C95632', border: 'none', borderRadius: 8, padding: '8px', cursor: 'pointer', fontWeight: 600 }}>
              Generate
            </button>
          </div>
        </div>

        {/* Right — Review client update */}
        <div
          style={{
            width: 270,
            flexShrink: 0,
            backgroundColor: published ? '#EEF3E7' : '#FFFDF8',
            border: `1px solid ${published ? '#B9CDAE' : '#E7D9C8'}`,
            borderRadius: 14,
            padding: 20,
            display: 'flex',
            flexDirection: 'column',
            transition: 'background-color 0.3s, border-color 0.3s',
          }}
        >
          {published ? (
            <div className="flex flex-col items-center justify-center flex-1 gap-3" style={{ minHeight: 300 }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: '50%',
                  backgroundColor: '#677F5A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
                  <path d="M5 11L9 15L17 7" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div style={{ fontSize: 15, fontWeight: 700, color: '#677F5A', textAlign: 'center' }}>Published!</div>
              <div style={{ fontSize: 12, color: '#677F5A', textAlign: 'center', opacity: 0.8 }}>
                Returning to client dashboard…
              </div>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between mb-3">
                <div style={{ fontSize: 15, fontWeight: 600, color: '#2B2924' }}>Review client update</div>
                <span
                  style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 10, fontWeight: 600, backgroundColor: '#F3E6D8', color: '#7A4E2B', borderRadius: 999, padding: '3px 9px', border: '1px solid #D9B36C' }}
                >
                  <SparkleIcon color="#7A4E2B" /> AI Draft
                </span>
              </div>

              {/* Draft heading */}
              <div style={{ fontSize: 12, fontWeight: 600, color: '#C97849', marginBottom: 8 }}>
                Draft visible to Priya after approval
              </div>

              {/* Draft body */}
              <div style={{ backgroundColor: '#F7F1E8', border: '1px solid #E7D9C8', borderRadius: 10, padding: 14, marginBottom: 12, fontSize: 12, color: '#2B2924', lineHeight: 1.65 }}>
                Spring Collection is currently <strong>at risk</strong> because final copy approval is still pending. If approval is received by today at 5 PM, the campaign can remain on schedule. Otherwise, the launch may move by one day.
              </div>

              {/* Tags */}
              <div className="flex gap-2 mb-4 flex-wrap">
                <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: '#F6E7CC', color: '#A77734', borderRadius: 999, padding: '3px 9px', border: '1px solid #D9B36C' }}>At Risk</span>
                <span style={{ fontSize: 10, fontWeight: 600, backgroundColor: 'transparent', color: '#A77734', borderRadius: 999, padding: '3px 9px', border: '1px solid #D9B36C' }}>Client action</span>
              </div>

              {/* Edit / Regenerate */}
              <div className="flex gap-2 mb-4">
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 12, color: '#5C554B', border: '1px solid #E7D9C8', backgroundColor: '#F7F1E8', borderRadius: 8, padding: '7px', cursor: 'pointer', fontWeight: 500 }}>
                  <EditIcon /> Edit draft
                </button>
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontSize: 12, color: '#5C554B', border: '1px solid #E7D9C8', backgroundColor: '#F7F1E8', borderRadius: 8, padding: '7px', cursor: 'pointer', fontWeight: 500 }}>
                  <RefreshIcon /> Regenerate
                </button>
              </div>

              {/* Priya will see */}
              <div style={{ backgroundColor: '#F8E8D8', border: '1px solid #E4B894', borderRadius: 10, padding: 12, marginBottom: 12 }}>
                <div style={{ fontSize: 11, fontWeight: 600, color: '#A77734', marginBottom: 6 }}>Priya will see</div>
                {[
                  'Campaign marked At Risk',
                  'Question added to Open Questions',
                  'Update added to recent feed',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 4 }}>
                    <span style={{ color: '#A77734', fontSize: 11, lineHeight: 1.4 }}>•</span>
                    <span style={{ fontSize: 11, color: '#5C554B', lineHeight: 1.4 }}>{item}</span>
                  </div>
                ))}
              </div>

              {/* Muted notice */}
              <p style={{ fontSize: 11, color: '#8A8074', textAlign: 'center', marginBottom: 12, lineHeight: 1.4 }}>
                Nothing is visible to Rova until you approve this draft.
              </p>

              {/* Publish CTA */}
              <button
                onClick={handlePublish}
                style={{
                  width: '100%',
                  backgroundColor: '#C95632',
                  color: 'white',
                  border: 'none',
                  borderRadius: 10,
                  padding: '11px',
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Approve & publish
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── Root ─────────────────────────────────────────────────────────────────────

export default function InternalUpdate() {
  const [stage, setStage] = useState(1);

  const headers: Record<number, { title: string; subtitle: string }> = {
    1: {
      title: 'Pick a campaign to update',
      subtitle: 'Start by choosing the campaign that needs a client-visible update.',
    },
    2: {
      title: 'Update campaign status',
      subtitle: 'Capture the internal status once, then generate a client-ready draft.',
    },
    3: {
      title: 'PM Internal Update View',
      subtitle: 'Update once internally. Review the AI draft before anything becomes visible to Rova.',
    },
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#F7F1E8' }}>
      <Sidebar agencyMode />

      <main className="flex-1 overflow-y-auto">
        <Stepper current={stage} onStep={setStage} />

        <StageHeader
          title={headers[stage].title}
          subtitle={headers[stage].subtitle}
        />

        <div style={{ padding: '16px 0 0' }}>
          {stage === 1 && <Stage1 onContinue={() => setStage(2)} />}
          {stage === 2 && <Stage2 onGenerate={() => setStage(3)} onChangeCampaign={() => setStage(1)} />}
          {stage === 3 && <Stage3 />}
        </div>
      </main>
    </div>
  );
}
