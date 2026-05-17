import { useRef, useState } from 'react';
import Sidebar from '../components/Sidebar';
import CampaignCard from '../components/CampaignCard';
import RecentUpdates from '../components/RecentUpdates';
import MilestonesPanel from '../components/MilestonesPanel';
import ActionBanner from '../components/ActionBanner';

function NavBellIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
      <path d="M9 2C9 2 5 4 5 9V13H13V9C13 4 9 2 9 2Z" stroke="#5C554B" strokeWidth="1.3" strokeLinejoin="round"/>
      <path d="M7 13C7 14.1 7.9 15 9 15C10.1 15 11 14.1 11 13" stroke="#5C554B" strokeWidth="1.3"/>
      <path d="M9 2V1" stroke="#5C554B" strokeWidth="1.3" strokeLinecap="round"/>
    </svg>
  );
}
function PlusIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 2V12M2 7H12" stroke="white" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}
function ExportIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 10V12H12V10" stroke="#5C554B" strokeWidth="1.3" strokeLinecap="round"/>
      <path d="M7 2V9M4.5 5L7 2L9.5 5" stroke="#5C554B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function LinkIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <path d="M5 7.5C5.5 8.2 6.3 8.5 7 8.5L9.5 6C10.3 5.2 10.3 3.8 9.5 3L9 2.5C8.2 1.7 6.8 1.7 6 2.5L4.5 4" stroke="#8A8074" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M8 5.5C7.5 4.8 6.7 4.5 6 4.5L3.5 7C2.7 7.8 2.7 9.2 3.5 10L4 10.5C4.8 11.3 6.2 11.3 7 10.5L8.5 9" stroke="#8A8074" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function CardViewIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1.5" fill="#7A4E2B" opacity="0.7"/>
      <rect x="9" y="1" width="6" height="6" rx="1.5" fill="#7A4E2B" opacity="0.7"/>
      <rect x="1" y="9" width="6" height="6" rx="1.5" fill="#7A4E2B" opacity="0.7"/>
      <rect x="9" y="9" width="6" height="6" rx="1.5" fill="#7A4E2B" opacity="0.7"/>
    </svg>
  );
}
function CalendarToggleIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" stroke="#5C554B" strokeWidth="1.2"/>
      <path d="M1.5 6H14.5" stroke="#5C554B" strokeWidth="1.2"/>
      <path d="M5 1V3.5M11 1V3.5" stroke="#5C554B" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function ChevronDownIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 5L7 9L11 5" stroke="#5C554B" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function Dashboard() {
  const atRiskRef = useRef<HTMLDivElement>(null);
  const [activeView, setActiveView] = useState<'card' | 'calendar'>('card');

  const handleReviewItems = () => {
    atRiskRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#F7F1E8' }}>
      <Sidebar />

      {/* Main content + right rail */}
      <div className="flex flex-1 overflow-hidden">
        {/* Scrollable main */}
        <main className="flex-1 overflow-y-auto" style={{ padding: '28px 28px 40px' }}>

          {/* Top bar */}
          <div className="flex items-start justify-between mb-6">
            {/* Greeting */}
            <div>
              <h1 className="font-bold leading-tight" style={{ fontSize: 30, color: '#2B2924' }}>
                Good morning, Priya ☀️
              </h1>
              <p style={{ fontSize: 15, color: '#5C554B', marginTop: 6 }}>
                Here's what's happening across your active campaigns.
              </p>
            </div>

            {/* Right: meta + action buttons */}
            <div className="flex flex-col items-end gap-3">
              {/* Row 1: Last synced · Bell · Avatar */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1.5" style={{ fontSize: 12, color: '#8A8074' }}>
                  <LinkIcon />
                  <span>Last synced: 10:42 AM</span>
                </div>
                <div className="relative cursor-pointer">
                  <NavBellIcon />
                  <div
                    className="absolute flex items-center justify-center font-bold rounded-full"
                    style={{ top: -4, right: -4, width: 14, height: 14, backgroundColor: '#D65B35', fontSize: 8, color: 'white' }}
                  >
                    2
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="rounded-full flex items-center justify-center font-semibold shrink-0"
                    style={{ width: 32, height: 32, backgroundColor: '#EBC0B9', fontSize: 11, color: '#2B2924' }}
                  >
                    PS
                  </div>
                  <div>
                    <div className="font-semibold leading-none" style={{ fontSize: 13, color: '#2B2924' }}>Priya Shah</div>
                    <div style={{ fontSize: 11, color: '#8A8074', marginTop: 2 }}>Rova</div>
                  </div>
                </div>
              </div>

              {/* Row 2: Export · Invite */}
              <div className="flex items-center gap-3">
                <button
                  className="flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-80"
                  style={{
                    fontSize: 13,
                    color: '#5C554B',
                    border: '1px solid #E7D9C8',
                    backgroundColor: '#FFFDF8',
                    borderRadius: 10,
                    padding: '9px 16px',
                    cursor: 'pointer',
                    height: 42,
                  }}
                >
                  <ExportIcon />
                  Export update
                </button>
                <button
                  className="flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-80"
                  style={{
                    fontSize: 13,
                    color: 'white',
                    backgroundColor: '#C95632',
                    border: 'none',
                    borderRadius: 10,
                    padding: '9px 16px',
                    cursor: 'pointer',
                    height: 42,
                  }}
                >
                  <PlusIcon />
                  Invite teammate
                </button>
              </div>
            </div>
          </div>

          {/* Alert banner */}
          <ActionBanner type="dashboard" onReviewClick={handleReviewItems} />

          {/* Campaigns overview card */}
          <div
            style={{
              backgroundColor: '#FFFDF8',
              border: '1px solid #E7D9C8',
              borderRadius: 16,
              padding: 20,
              marginTop: 16,
            }}
          >
            {/* Card header: title + view toggle */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-semibold" style={{ fontSize: 18, color: '#2B2924' }}>
                Campaigns overview
              </span>

              {/* Card view / Calendar toggle */}
              <div
                className="flex items-center gap-1"
                style={{
                  backgroundColor: '#FFFDF8',
                  border: '1px solid #E7D9C8',
                  borderRadius: 999,
                  padding: '6px 8px',
                  height: 38,
                }}
              >
                <button
                  onClick={() => setActiveView('card')}
                  className="flex items-center gap-2 transition-colors"
                  style={{
                    backgroundColor: activeView === 'card' ? '#F6E7CC' : 'transparent',
                    borderRadius: 999,
                    padding: '4px 12px',
                    border: 'none',
                    cursor: 'pointer',
                    height: 26,
                  }}
                >
                  <CardViewIcon />
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#7A4E2B', whiteSpace: 'nowrap' }}>
                    Card view
                  </span>
                </button>
                <button
                  onClick={() => setActiveView('calendar')}
                  className="flex items-center gap-1.5 transition-colors"
                  style={{
                    backgroundColor: activeView === 'calendar' ? '#F6E7CC' : 'transparent',
                    borderRadius: 999,
                    padding: '4px 12px',
                    border: 'none',
                    cursor: 'pointer',
                    height: 26,
                  }}
                >
                  <CalendarToggleIcon />
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#5C554B', whiteSpace: 'nowrap' }}>
                    Calendar
                  </span>
                </button>
              </div>
            </div>

            {/* Campaign cards */}
            <div className="flex flex-col gap-3">
              {/* Card 1 — On Track */}
              <CampaignCard
                status="on-track"
                name="Mother's Day Gift Guide"
                type="Social campaign"
                launchDate="18 May 2026"
                stage="Final assets scheduled"
                ownerName="Devlab PM"
                ownerInitials="DP"
                ownerAvatarColor="#D4E5CC"
                lastUpdated="2 hours ago"
                nextMilestone="Scheduled post review"
                nextMilestoneDue="Tomorrow 11:00 AM"
                stripMessage="Final carousel assets approved. Posts are scheduled for launch."
                stripCTA="View details →"
              />

              {/* Card 2 — At Risk */}
              <div ref={atRiskRef}>
                <CampaignCard
                  status="at-risk"
                  navigateTo="/campaign/spring-collection"
                  name="Spring Collection Launch"
                  type="Product launch"
                  launchDate="21 May 2026"
                  stage="Awaiting final copy approval"
                  ownerName="Priya's team"
                  ownerInitials="PT"
                  ownerAvatarColor="#F6E7CC"
                  lastUpdated="Yesterday 4:30 PM"
                  nextMilestone="Final copy approval"
                  nextMilestoneDue="Due today 5:00 PM"
                  stripMessage="Final copy approval is pending. Launch may be affected if not resolved today."
                  stripCTA="Review question →"
                  highlighted
                  notificationCount={1}
                />
              </div>

              {/* Card 3 — Delayed */}
              <CampaignCard
                status="delayed"
                name="Kitchen Essentials Promo"
                type="Promotional campaign"
                launchDate="16 May 2026"
                stage="Creative revisions"
                ownerName="Devlab PM"
                ownerInitials="DP"
                ownerAvatarColor="#D4E5CC"
                lastUpdated="3 days ago"
                nextMilestone="Revised assets"
                nextMilestoneDue="Overdue by 1 day"
                stripMessage="No update has been posted in 72 hours. Devlab has been reminded."
                stripCTA="View latest status →"
                notificationCount={1}
              />
            </div>

            {/* Archived campaigns link */}
            <div className="flex items-center justify-center gap-1 mt-4">
              <span style={{ fontSize: 13, color: '#5C554B' }}>Show archived campaigns (8)</span>
              <ChevronDownIcon />
            </div>
          </div>
        </main>

        {/* Right rail */}
        <aside
          className="overflow-y-auto shrink-0"
          style={{
            width: 320,
            padding: '28px 16px 40px',
            borderLeft: '1px solid #E7D9C8',
          }}
        >
          <div className="flex flex-col gap-4">
            <RecentUpdates />
            <MilestonesPanel />
          </div>
        </aside>
      </div>
    </div>
  );
}
