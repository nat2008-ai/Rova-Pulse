import { useNavigate } from 'react-router-dom';

export type CampaignStatus = 'on-track' | 'at-risk' | 'delayed';

interface CampaignCardProps {
  status: CampaignStatus;
  name: string;
  type: string;
  launchDate: string;
  stage: string;
  ownerName: string;
  ownerInitials: string;
  ownerAvatarColor: string;
  lastUpdated: string;
  nextMilestone: string;
  nextMilestoneDue: string;
  stripMessage: string;
  stripCTA: string;
  highlighted?: boolean;
  navigateTo?: string;
  notificationCount?: number;
}

const statusConfig = {
  'on-track': {
    dot: '#677F5A',
    label: 'ON TRACK',
    labelColor: '#677F5A',
    stripBg: '#EEF3E7',
    stripBorder: '#B9CDAE',
    stripTextColor: '#677F5A',
    milestoneColor: '#677F5A',
    icon: 'check',
  },
  'at-risk': {
    dot: '#A77734',
    label: 'AT RISK',
    labelColor: '#A77734',
    stripBg: '#F6E7CC',
    stripBorder: '#D9B36C',
    stripTextColor: '#C97849',
    milestoneColor: '#C97849',
    icon: 'triangle',
  },
  'delayed': {
    dot: '#B85E4C',
    label: 'DELAYED',
    labelColor: '#B85E4C',
    stripBg: '#F6E5DF',
    stripBorder: '#D7A496',
    stripTextColor: '#B85E4C',
    milestoneColor: '#B85E4C',
    icon: 'triangle',
  },
};

function CheckIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <circle cx="7" cy="7" r="6.5" stroke={color} strokeWidth="1"/>
      <path d="M4.5 7L6.5 9L9.5 5" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function TriangleIcon({ color }: { color: string }) {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M7 2L13 12H1L7 2Z" fill={color} opacity="0.15"/>
      <path d="M7 2L13 12H1L7 2Z" stroke={color} strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M7 6V8.5" stroke={color} strokeWidth="1.2" strokeLinecap="round"/>
      <circle cx="7" cy="10.2" r="0.6" fill={color}/>
    </svg>
  );
}
function CalendarIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <rect x="0.5" y="1.5" width="10" height="9" rx="1.5" stroke="currentColor" strokeWidth="1"/>
      <path d="M0.5 4.5H10.5" stroke="currentColor" strokeWidth="1"/>
      <path d="M3.5 0.5V2.5M7.5 0.5V2.5" stroke="currentColor" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}
function BellIconWhite() {
  return (
    <svg width="14" height="15" viewBox="0 0 14 15" fill="none">
      <path d="M7 1.5C7 1.5 3.5 3.5 3.5 8V12H10.5V8C10.5 3.5 7 1.5 7 1.5Z" stroke="#FFFDF8" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M5.5 12C5.5 12.8 6.2 13.5 7 13.5C7.8 13.5 8.5 12.8 8.5 12" stroke="#FFFDF8" strokeWidth="1.2"/>
      <path d="M7 1.5V1" stroke="#FFFDF8" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 11 11" fill="none">
      <circle cx="5.5" cy="5.5" r="5" stroke="currentColor" strokeWidth="1"/>
      <path d="M5.5 3V5.5L7 7" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function CampaignCard({
  status,
  name,
  type,
  launchDate,
  stage,
  ownerName,
  ownerInitials,
  ownerAvatarColor,
  lastUpdated,
  nextMilestone,
  nextMilestoneDue,
  stripMessage,
  stripCTA,
  highlighted = false,
  navigateTo,
  notificationCount = 0,
}: CampaignCardProps) {
  const navigate = useNavigate();
  const cfg = statusConfig[status];

  return (
    <div
      onClick={() => navigateTo && navigate(navigateTo)}
      className={navigateTo ? 'cursor-pointer transition-all' : 'transition-all'}
      style={{
        backgroundColor: '#FFFDF8',
        border: highlighted ? `2px solid ${cfg.dot}` : '1px solid #E7D9C8',
        borderRadius: 14,
        overflow: 'hidden',
      }}
    >
      {/* Main card body */}
      <div className="flex" style={{ padding: 18, gap: 0 }}>
        {/* Column 1 — Identity */}
        <div style={{ width: 250, paddingRight: 20 }}>
          {/* Status */}
          <div className="flex items-center gap-1.5 mb-2">
            <div className="rounded-full" style={{ width: 7, height: 7, backgroundColor: cfg.dot, flexShrink: 0 }} />
            <span className="font-semibold tracking-wider" style={{ fontSize: 10, color: cfg.labelColor, letterSpacing: '0.06em' }}>
              {cfg.label}
            </span>
            {status === 'delayed' && (
              <span
                className="px-1.5 py-0.5 font-semibold rounded-pill"
                style={{ fontSize: 9, backgroundColor: '#F6E5DF', color: '#B85E4C', border: '1px solid #D7A496' }}
              >
                Overdue
              </span>
            )}
          </div>
          <div className="font-bold mb-1 leading-tight" style={{ fontSize: 18, color: '#2B2924' }}>
            {name}
          </div>
          <div className="mb-2" style={{ fontSize: 11, color: '#8A8074' }}>{type}</div>
          <div className="flex items-center gap-1" style={{ color: '#6E665C' }}>
            <CalendarIcon />
            <span style={{ fontSize: 11 }}>Launch: <span className="font-medium" style={{ color: '#2B2924' }}>{launchDate}</span></span>
          </div>
        </div>

        {/* Divider */}
        <div className="shrink-0 self-center" style={{ width: 1, height: 80, backgroundColor: '#E7D9C8', marginRight: 20 }} />

        {/* Column 2 — Stage + Owner */}
        <div style={{ width: 190, paddingRight: 20 }}>
          <div className="mb-3">
            <div style={{ fontSize: 11, color: '#8A8074', marginBottom: 2 }}>Current stage</div>
            <div className="font-semibold leading-tight" style={{ fontSize: 13, color: '#2B2924' }}>{stage}</div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: '#8A8074', marginBottom: 4 }}>Owner</div>
            <div className="flex items-center gap-2">
              <div
                className="rounded-full flex items-center justify-center font-semibold shrink-0"
                style={{ width: 28, height: 28, backgroundColor: ownerAvatarColor, fontSize: 10, color: '#2B2924' }}
              >
                {ownerInitials}
              </div>
              <span style={{ fontSize: 12, color: '#2B2924', fontWeight: 500 }}>{ownerName}</span>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="shrink-0 self-center" style={{ width: 1, height: 80, backgroundColor: '#E7D9C8', marginRight: 20 }} />

        {/* Column 3 — Timing */}
        <div style={{ flex: 1 }}>
          <div className="flex items-start gap-1.5 mb-3" style={{ color: '#6E665C' }}>
            <ClockIcon />
            <div>
              <div style={{ fontSize: 11 }}>Last updated</div>
              <div className="font-medium" style={{ fontSize: 12, color: '#2B2924' }}>{lastUpdated}</div>
            </div>
          </div>
          <div>
            <div style={{ fontSize: 11, color: '#8A8074', marginBottom: 2 }}>Next milestone</div>
            <div className="font-semibold" style={{ fontSize: 12, color: '#2B2924' }}>{nextMilestone}</div>
            <div className="font-medium" style={{ fontSize: 11, color: cfg.milestoneColor }}>{nextMilestoneDue}</div>
          </div>
        </div>

        {/* Bell notification button */}
        <div className="relative shrink-0 self-start" style={{ marginLeft: 12 }}>
          <div
            className="flex items-center justify-center rounded-full"
            style={{ width: 32, height: 32, backgroundColor: '#6E665C' }}
          >
            <BellIconWhite />
          </div>
          {notificationCount > 0 && (
            <div
              className="absolute flex items-center justify-center font-bold rounded-full"
              style={{
                top: -4, right: -6,
                width: 18, height: 18,
                backgroundColor: '#D65B35',
                fontSize: 9,
                color: '#FFFDF8',
              }}
            >
              {notificationCount}
            </div>
          )}
        </div>
      </div>

      {/* Bottom strip */}
      <div
        className="flex items-center justify-between"
        style={{
          backgroundColor: cfg.stripBg,
          border: `1px solid ${cfg.stripBorder}`,
          borderTop: `1px solid ${cfg.stripBorder}`,
          borderRadius: '0 0 8px 8px',
          padding: '8px 18px',
          minHeight: 34,
        }}
      >
        <div className="flex items-center gap-2 flex-1" style={{ marginRight: 12 }}>
          <span className="shrink-0">
            {cfg.icon === 'check' ? (
              <CheckIcon color={cfg.stripTextColor} />
            ) : (
              <TriangleIcon color={cfg.stripTextColor} />
            )}
          </span>
          <span style={{ fontSize: 12, color: cfg.stripTextColor, fontWeight: 500, lineHeight: 1.3 }}>
            {stripMessage}
          </span>
        </div>
        <button
          onClick={(e) => { e.stopPropagation(); if (navigateTo) navigate(navigateTo); }}
          className="shrink-0 font-medium transition-opacity hover:opacity-80"
          style={{
            fontSize: 11,
            color: cfg.stripTextColor,
            border: `1px solid ${cfg.stripBorder}`,
            backgroundColor: 'transparent',
            borderRadius: 8,
            padding: '3px 10px',
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {stripCTA}
        </button>
      </div>
    </div>
  );
}
