import { useState } from 'react';
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
function FilterIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M1 3H12M3 6.5H10M5 10H8" stroke="#8A8074" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <rect x="0.5" y="1.5" width="9" height="8" rx="1.2" stroke="currentColor" strokeWidth="0.9"/>
      <path d="M0.5 4H9.5" stroke="currentColor" strokeWidth="0.9"/>
      <path d="M3 0.5V2M7 0.5V2" stroke="currentColor" strokeWidth="0.9" strokeLinecap="round"/>
    </svg>
  );
}
function ClockIcon({ color }: { color: string }) {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <circle cx="6" cy="6" r="5.5" stroke={color} strokeWidth="1"/>
      <path d="M6 3.5V6L7.5 7.5" stroke={color} strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function MailIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <rect x="0.5" y="2.5" width="12" height="8" rx="1.5" stroke="#8A8074" strokeWidth="1.1"/>
      <path d="M1 3L6.5 7.5L12 3" stroke="#8A8074" strokeWidth="1.1" strokeLinecap="round"/>
    </svg>
  );
}
function ChevronRightIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M4.5 3L7.5 6L4.5 9" stroke="#8A8074" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

// ─── Campaign Queue Card ───────────────────────────────────────────────────────

type QueueStatus = 'at-risk' | 'delayed' | 'on-track';

interface QueueCardProps {
  status: QueueStatus;
  name: string;
  type: string;
  launchDate: string;
  lastUpdate: string;
  selected?: boolean;
}

const queueStatusConfig: Record<QueueStatus, { dot: string; label: string; labelColor: string }> = {
  'at-risk': { dot: '#A77734', label: 'AT RISK', labelColor: '#A77734' },
  'delayed':  { dot: '#B85E4C', label: 'DELAYED', labelColor: '#B85E4C' },
  'on-track': { dot: '#677F5A', label: 'ON TRACK', labelColor: '#677F5A' },
};

function QueueCard({ status, name, type, launchDate, lastUpdate, selected = false }: QueueCardProps) {
  const cfg = queueStatusConfig[status];
  return (
    <div
      style={{
        backgroundColor: selected ? '#FFF8EE' : '#FFFDF8',
        border: selected ? `2px solid ${cfg.dot}` : '1px solid #E7D9C8',
        borderRadius: 12,
        padding: '12px 14px',
        cursor: 'pointer',
        transition: 'all 0.15s',
      }}
    >
      {/* Status row */}
      <div className="flex items-center gap-1.5 mb-1.5">
        <div className="rounded-full shrink-0" style={{ width: 6, height: 6, backgroundColor: cfg.dot }} />
        <span className="font-semibold tracking-wider" style={{ fontSize: 9, color: cfg.labelColor, letterSpacing: '0.06em' }}>
          {cfg.label}
        </span>
        {selected && (
          <span
            className="ml-auto font-semibold"
            style={{ fontSize: 9, color: '#A77734', backgroundColor: '#F6E7CC', borderRadius: 6, padding: '1px 6px', border: '1px solid #D9B36C' }}
          >
            Selected
          </span>
        )}
      </div>
      {/* Name */}
      <div className="font-bold leading-tight mb-1" style={{ fontSize: 13, color: '#2B2924' }}>
        {name}
      </div>
      <div style={{ fontSize: 10, color: '#8A8074', marginBottom: 8 }}>{type}</div>
      {/* Meta */}
      <div className="flex items-center gap-3" style={{ color: '#6E665C' }}>
        <div className="flex items-center gap-1">
          <CalendarIcon />
          <span style={{ fontSize: 10 }}>{launchDate}</span>
        </div>
        <div className="flex items-center gap-1">
          <ClockIcon color="#8A8074" />
          <span style={{ fontSize: 10 }}>{lastUpdate}</span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

const campaignQueue = [
  { status: 'at-risk'  as QueueStatus, name: 'Spring Collection Launch',  type: 'Product launch',        launchDate: '21 May 2026', lastUpdate: 'Yesterday 4:30 PM', selected: true  },
  { status: 'delayed'  as QueueStatus, name: 'Kitchen Essentials Promo',  type: 'Promotional campaign',  launchDate: '16 May 2026', lastUpdate: '3 days ago',         selected: false },
  { status: 'on-track' as QueueStatus, name: "Mother's Day Gift Guide",   type: 'Social campaign',       launchDate: '18 May 2026', lastUpdate: '2 hours ago',        selected: false },
  { status: 'on-track' as QueueStatus, name: 'Summer Skincare Edit',      type: 'Product launch',        launchDate: '3 Jun 2026',  lastUpdate: '1 day ago',          selected: false },
  { status: 'on-track' as QueueStatus, name: 'Brand Refresh Campaign',    type: 'Brand campaign',        launchDate: '10 Jun 2026', lastUpdate: '4 hours ago',        selected: false },
  { status: 'on-track' as QueueStatus, name: 'Loyalty Rewards Push',      type: 'Promotional campaign',  launchDate: '24 Jun 2026', lastUpdate: '2 days ago',         selected: false },
];

export default function PmDashboard() {
  const [search, setSearch] = useState('');

  const filtered = campaignQueue.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#F7F1E8' }}>
      <Sidebar agencyMode={true} />

      {/* Main */}
      <main className="flex-1 overflow-y-auto" style={{ padding: '28px 32px 48px' }}>

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          {/* Left */}
          <div>
            <h1 className="font-bold leading-tight" style={{ fontSize: 28, color: '#2B2924' }}>
              Pick a campaign to update
            </h1>
            <p style={{ fontSize: 14, color: '#5C554B', marginTop: 5 }}>
              Select a campaign from the queue below to post an update for Rova.
            </p>
          </div>

          {/* Right — Last client update + DevLab PM side by side */}
          <div className="flex items-center shrink-0" style={{ gap: 36 }}>
            {/* Last client update */}
            <div style={{ fontSize: 12, color: '#5C554B', lineHeight: 1.5 }}>
              <div>Last client update:</div>
              <div style={{ fontWeight: 500 }}>Yesterday, 4:30PM</div>
            </div>
            {/* Avatar + name */}
            <div className="flex items-end gap-2.5">
              <div
                className="rounded-full flex items-center justify-center font-semibold shrink-0"
                style={{ width: 36, height: 36, backgroundColor: '#EBC0B9', fontSize: 13, color: '#2B2924' }}
              >
                AT
              </div>
              <div className="flex flex-col" style={{ gap: 4 }}>
                <span className="font-semibold whitespace-nowrap" style={{ fontSize: 13, color: '#2B2924' }}>Alyna</span>
                <span style={{ fontSize: 11, color: '#6E665C' }}>DevLab's PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* All Campaigns card */}
        <div
          style={{
            backgroundColor: '#FFFDF8',
            border: '1px solid #E7D9C8',
            borderRadius: 16,
            padding: 20,
            marginBottom: 20,
          }}
        >
          {/* Card header */}
          <div className="flex items-center justify-between mb-4">
            <span className="font-semibold" style={{ fontSize: 17, color: '#2B2924' }}>
              All campaigns
            </span>
            {/* Search + filter */}
            <div className="flex items-center gap-2">
              <div
                className="flex items-center gap-2"
                style={{
                  backgroundColor: '#F7F1E8',
                  border: '1px solid #E7D9C8',
                  borderRadius: 8,
                  padding: '6px 10px',
                  width: 180,
                }}
              >
                <SearchIcon />
                <input
                  value={search}
                  onChange={e => setSearch(e.target.value)}
                  placeholder="Search campaigns"
                  style={{
                    background: 'none',
                    border: 'none',
                    outline: 'none',
                    fontSize: 12,
                    color: '#2B2924',
                    width: '100%',
                  }}
                />
              </div>
              <button
                className="flex items-center gap-1.5"
                style={{
                  backgroundColor: '#F7F1E8',
                  border: '1px solid #E7D9C8',
                  borderRadius: 8,
                  padding: '6px 12px',
                  cursor: 'pointer',
                  fontSize: 12,
                  color: '#5C554B',
                  fontWeight: 500,
                }}
              >
                <FilterIcon />
                Filter
              </button>
            </div>
          </div>

          {/* Campaign grid — 3 columns */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: 12,
            }}
          >
            {filtered.map((c, i) => (
              <QueueCard key={i} {...c} />
            ))}
          </div>
        </div>

        {/* Follow Ups section */}
        <div>
          <h2 className="font-semibold mb-3" style={{ fontSize: 16, color: '#2B2924' }}>
            Follow Ups
          </h2>
          <div className="flex gap-4">

            {/* Waiting on DevLab */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#FFFDF8',
                border: '1px solid #E7D9C8',
                borderRadius: 14,
                padding: 18,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold" style={{ fontSize: 14, color: '#2B2924' }}>
                  Waiting on DevLab
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: '#8A8074',
                    backgroundColor: '#F3EDE5',
                    border: '1px solid #E7D9C8',
                    borderRadius: 6,
                    padding: '2px 8px',
                  }}
                >
                  0 pending
                </span>
              </div>

              {/* Empty state — dashed */}
              <div
                style={{
                  border: '1.5px dashed #D9CCBD',
                  borderRadius: 10,
                  padding: '28px 20px',
                  textAlign: 'center',
                }}
              >
                <div style={{ fontSize: 13, color: '#8A8074', marginBottom: 4 }}>No pending replies</div>
                <div style={{ fontSize: 11, color: '#B8A99A' }}>
                  You're all caught up. Any questions you ask Rova will appear here.
                </div>
              </div>
            </div>

            {/* Waiting on Rova */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#FFFDF8',
                border: '1px solid #E7D9C8',
                borderRadius: 14,
                padding: 18,
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="font-semibold" style={{ fontSize: 14, color: '#2B2924' }}>
                  Waiting on Rova
                </span>
                <span
                  style={{
                    fontSize: 10,
                    color: '#C97849',
                    backgroundColor: '#F6E7CC',
                    border: '1px solid #D9B36C',
                    borderRadius: 6,
                    padding: '2px 8px',
                    fontWeight: 600,
                  }}
                >
                  1 pending
                </span>
              </div>

              {/* Email thread card */}
              <div
                style={{
                  border: '1px solid #E7D9C8',
                  borderRadius: 10,
                  overflow: 'hidden',
                }}
              >
                {/* Thread header */}
                <div
                  className="flex items-start gap-3"
                  style={{ padding: '12px 14px', backgroundColor: '#FFFDF8' }}
                >
                  <MailIcon />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between mb-0.5">
                      <span className="font-semibold" style={{ fontSize: 12, color: '#2B2924' }}>
                        Final copy approval — Spring Collection
                      </span>
                      <ChevronRightIcon />
                    </div>
                    <p style={{ fontSize: 11, color: '#8A8074', lineHeight: 1.45 }}>
                      Hi Priya, just checking in — are we good to go on the final copy for the Spring Collection launch?
                      We need sign-off by 5:00 PM today.
                    </p>
                    <div className="flex items-center gap-1.5 mt-1.5">
                      <ClockIcon color="#C97849" />
                      <span style={{ fontSize: 10, color: '#C97849', fontWeight: 500 }}>Sent today · Due 5:00 PM</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div
                  className="flex items-center gap-2"
                  style={{
                    padding: '10px 14px',
                    backgroundColor: '#F7F1E8',
                    borderTop: '1px solid #E7D9C8',
                  }}
                >
                  <button
                    className="flex items-center gap-1.5 font-medium"
                    style={{
                      fontSize: 11,
                      color: '#5C554B',
                      border: '1px solid #D9CCBD',
                      backgroundColor: '#FFFDF8',
                      borderRadius: 7,
                      padding: '5px 12px',
                      cursor: 'pointer',
                    }}
                  >
                    <MailIcon />
                    Open email
                  </button>
                  <button
                    className="font-medium"
                    style={{
                      fontSize: 11,
                      color: '#677F5A',
                      border: '1px solid #B9CDAE',
                      backgroundColor: '#EEF3E7',
                      borderRadius: 7,
                      padding: '5px 12px',
                      cursor: 'pointer',
                    }}
                  >
                    ✓ Mark as resolved
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
