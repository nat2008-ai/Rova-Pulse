import { useState } from 'react';

interface ActionBannerProps {
  type: 'dashboard' | 'campaign';
  onReviewClick?: () => void;
}

function TriangleAlertIcon() {
  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none">
      <path d="M26 6L48 44H4L26 6Z" fill="#D89B35" opacity="0.15"/>
      <path d="M26 6L48 44H4L26 6Z" stroke="#A77734" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M26 20V31" stroke="#A77734" strokeWidth="2" strokeLinecap="round"/>
      <circle cx="26" cy="37" r="1.5" fill="#A77734"/>
    </svg>
  );
}

export default function ActionBanner({ type, onReviewClick }: ActionBannerProps) {
  const [approved, setApproved] = useState(false);

  if (type === 'campaign') {
    if (approved) {
      return (
        <div
          className="flex items-center gap-4 rounded-small"
          style={{
            backgroundColor: '#EEF3E7',
            border: '1px solid #B9CDAE',
            padding: 16,
          }}
        >
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 36, height: 36, backgroundColor: '#677F5A', flexShrink: 0 }}
          >
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9L7.5 12.5L14 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <div className="font-semibold" style={{ fontSize: 14, color: '#677F5A' }}>
              Copy approved
            </div>
            <div style={{ fontSize: 13, color: '#677F5A', opacity: 0.8 }}>
              Final copy has been approved. The campaign is on track to launch on 21 May.
            </div>
          </div>
        </div>
      );
    }

    return (
      <div
        className="flex items-center justify-between gap-4 rounded-small"
        style={{
          backgroundColor: '#F8E8D8',
          border: '1px solid #E4B894',
          padding: 16,
        }}
      >
        <div className="flex-1">
          <div className="font-semibold mb-0.5" style={{ fontSize: 14, color: '#A77734' }}>
            Action needed from Priya's team
          </div>
          <div style={{ fontSize: 13, color: '#5C554B' }}>
            Final copy approval is due today at 5:00 PM. If not resolved, launch may move by one day.
          </div>
        </div>
        <button
          onClick={() => setApproved(true)}
          className="shrink-0 font-semibold transition-opacity hover:opacity-80"
          style={{
            fontSize: 12,
            color: '#C95632',
            border: '1px solid #C95632',
            backgroundColor: 'transparent',
            borderRadius: 8,
            padding: '8px 14px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          Approve copy
        </button>
      </div>
    );
  }

  // Dashboard banner
  return (
    <div
      className="flex items-center gap-5 rounded-small"
      style={{
        backgroundColor: '#F8E8D8',
        border: '1px solid #E4B894',
        borderRadius: 12,
        padding: 16,
        marginBottom: 24,
      }}
    >
      <TriangleAlertIcon />
      <div className="flex-1">
        <div className="font-semibold mb-1" style={{ fontSize: 17, color: '#2B2924' }}>
          2 items need your attention
        </div>
        <div style={{ fontSize: 13, color: '#5C554B' }}>
          Spring Collection Launch is at risk and 1 question is overdue.
        </div>
      </div>
      <button
        onClick={onReviewClick}
        className="shrink-0 font-medium transition-opacity hover:opacity-80"
        style={{
          fontSize: 12,
          color: '#2B2924',
          border: '1px solid #D0A87A',
          backgroundColor: 'transparent',
          borderRadius: 8,
          padding: '8px 14px',
          cursor: 'pointer',
          whiteSpace: 'nowrap',
        }}
      >
        Review items
      </button>
    </div>
  );
}
