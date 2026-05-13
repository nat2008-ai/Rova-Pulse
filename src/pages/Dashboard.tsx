import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import CampaignCard from '../components/CampaignCard';
import QuestionPanel from '../components/QuestionPanel';
import RecentUpdates from '../components/RecentUpdates';
import MilestonesPanel from '../components/MilestonesPanel';
import ActionBanner from '../components/ActionBanner';

function BellIcon() {
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

export default function Dashboard() {
  const navigate = useNavigate();
  const atRiskRef = useRef<HTMLDivElement>(null);

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
            <div>
              <h1 className="font-bold leading-tight" style={{ fontSize: 30, color: '#2B2924' }}>
                Good morning, Priya ☀️
              </h1>
              <p style={{ fontSize: 15, color: '#6E665C', marginTop: 4 }}>
                Here's what's happening across your active campaigns.
              </p>
            </div>

            <div className="flex flex-col items-end gap-3">
              {/* Meta row */}
              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1" style={{ fontSize: 12, color: '#8A8074' }}>
                  <LinkIcon />
                  <span>Last synced: 10:42 AM</span>
                </div>
                {/* Bell */}
                <div className="relative cursor-pointer">
                  <BellIcon />
                  <div
                    className="absolute flex items-center justify-center font-bold rounded-full"
                    style={{
                      top: -4, right: -4,
                      width: 14, height: 14,
                      backgroundColor: '#C95632',
                      fontSize: 8,
                      color: 'white',
                    }}
                  >
                    2
                  </div>
                </div>
                {/* Avatar */}
                <div className="flex items-center gap-2">
                  <div
                    className="rounded-full flex items-center justify-center font-semibold"
                    style={{ width: 30, height: 30, backgroundColor: '#EBC0B9', fontSize: 11, color: '#2B2924' }}
                  >
                    PS
                  </div>
                  <div>
                    <div className="font-semibold leading-none" style={{ fontSize: 12, color: '#2B2924' }}>
                      Priya Shah
                    </div>
                    <div style={{ fontSize: 10, color: '#8A8074' }}>Rova</div>
                  </div>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={() => navigate('/internal')}
                  className="flex items-center gap-2 font-semibold transition-opacity hover:opacity-80"
                  style={{
                    fontSize: 12,
                    color: '#F7F1E8',
                    backgroundColor: '#1F2522',
                    border: '1px solid #554D43',
                    borderRadius: 10,
                    padding: '7px 14px',
                    cursor: 'pointer',
                  }}
                >
                  🔒 View Agency Mode
                </button>
                <button
                  className="flex items-center gap-1.5 font-medium transition-opacity hover:opacity-80"
                  style={{
                    fontSize: 12,
                    color: '#5C554B',
                    border: '1px solid #E7D9C8',
                    backgroundColor: '#FFFDF8',
                    borderRadius: 10,
                    padding: '7px 14px',
                    cursor: 'pointer',
                  }}
                >
                  <ExportIcon />
                  Export update
                </button>
                <button
                  className="flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-80"
                  style={{
                    fontSize: 12,
                    color: 'white',
                    backgroundColor: '#C95632',
                    border: 'none',
                    borderRadius: 10,
                    padding: '7px 14px',
                    cursor: 'pointer',
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

          {/* Campaign cards */}
          <div className="flex flex-col gap-3">
            {/* Card 1 — On Track */}
            <CampaignCard
              status="on-track"
              name="Mother's Day Gift Guide"
              type="Social campaign"
              launchDate="18 May 2025"
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
                launchDate="21 May 2025"
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
              />
            </div>

            {/* Card 3 — Delayed */}
            <CampaignCard
              status="delayed"
              name="Kitchen Essentials Promo"
              type="Promotional campaign"
              launchDate="16 May 2025"
              stage="Creative revisions"
              ownerName="Devlab PM"
              ownerInitials="DP"
              ownerAvatarColor="#D4E5CC"
              lastUpdated="3 days ago"
              nextMilestone="Revised assets"
              nextMilestoneDue="Overdue by 1 day"
              stripMessage="No update has been posted in 72 hours. Devlab has been reminded."
              stripCTA="View latest status →"
            />
          </div>

          {/* Archived link */}
          <div className="mt-4">
            <a
              href="#"
              style={{ fontSize: 13, color: '#8A8074', textDecoration: 'none' }}
            >
              Show archived campaigns (8) ↓
            </a>
          </div>
        </main>

        {/* Right rail */}
        <aside
          className="overflow-y-auto shrink-0"
          style={{
            width: 320,
            padding: '28px 20px 40px',
            borderLeft: '1px solid #E7D9C8',
          }}
        >
          <div className="flex flex-col gap-4">
            <QuestionPanel />
            <RecentUpdates />
            <MilestonesPanel />
          </div>
        </aside>
      </div>
    </div>
  );
}
