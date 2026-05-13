import { NavLink, useLocation } from 'react-router-dom';

const navItems = [
  { label: 'Dashboard', path: '/', icon: GridIcon },
  { label: 'Campaigns', path: '/campaigns', icon: FolderIcon },
  { label: 'Questions', path: '/questions', icon: ChatIcon },
  { label: 'Decisions', path: '/decisions', icon: CheckSquareIcon },
  { label: 'Files', path: '/files', icon: FileIcon },
];

const bottomItems = [
  { label: 'Team', path: '/team', icon: UsersIcon },
  { label: 'Settings', path: '/settings', icon: SettingsIcon },
];

function GridIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.9"/>
      <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.9"/>
      <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.9"/>
      <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.9"/>
    </svg>
  );
}
function FolderIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M1.5 3.5C1.5 2.95 1.95 2.5 2.5 2.5H6L7.5 4H13.5C14.05 4 14.5 4.45 14.5 5V12.5C14.5 13.05 14.05 13.5 13.5 13.5H2.5C1.95 13.5 1.5 13.05 1.5 12.5V3.5Z" fill="currentColor" opacity="0.9"/>
    </svg>
  );
}
function ChatIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M2 2.5C2 1.95 2.45 1.5 3 1.5H13C13.55 1.5 14 1.95 14 2.5V10C14 10.55 13.55 11 13 11H5L2 14V2.5Z" fill="currentColor" opacity="0.9"/>
    </svg>
  );
}
function CheckSquareIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <rect x="1.5" y="1.5" width="13" height="13" rx="2" fill="currentColor" opacity="0.9"/>
      <path d="M5 8L7 10L11 6" stroke="#1F2522" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function FileIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 1.5H9.5L13 5V14.5C13 14.78 12.78 15 12.5 15H3.5C3.22 15 3 14.78 3 14.5V2C3 1.72 3.22 1.5 3.5 1.5H3Z" fill="currentColor" opacity="0.9"/>
      <path d="M9.5 1.5V5H13" stroke="#1F2522" strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="6" cy="5" r="2.5" fill="currentColor" opacity="0.9"/>
      <circle cx="11" cy="5" r="2" fill="currentColor" opacity="0.6"/>
      <path d="M1 13C1 10.24 3.24 8 6 8C8.76 8 11 10.24 11 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M11 8.5C12.66 8.5 14 9.84 14 11.5V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}
function SettingsIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <circle cx="8" cy="8" r="2.5" fill="currentColor" opacity="0.9"/>
      <path d="M8 1V3M8 13V15M1 8H3M13 8H15M2.93 2.93L4.34 4.34M11.66 11.66L13.07 13.07M2.93 13.07L4.34 11.66M11.66 4.34L13.07 2.93" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}
function ExternalLinkIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M5 2H2C1.45 2 1 2.45 1 3V10C1 10.55 1.45 11 2 11H9C9.55 11 10 10.55 10 10V7" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
      <path d="M7 1H11V5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M11 1L5.5 6.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

interface SidebarProps {
  agencyMode?: boolean;
}

export default function Sidebar({ agencyMode = false }: SidebarProps) {
  const location = useLocation();

  return (
    <aside
      className="flex flex-col h-screen sticky top-0 shrink-0"
      style={{ width: 220, backgroundColor: '#1F2522' }}
    >
      {/* Brand */}
      <div className="px-5 pt-5 pb-4">
        <div className="flex items-center gap-2 mb-2">
          {/* Pulse icon */}
          <div className="relative flex items-center justify-center" style={{ width: 22, height: 22 }}>
            <div
              className="absolute rounded-full opacity-30"
              style={{
                width: 18, height: 18,
                backgroundColor: '#D89B35',
                animation: 'pulse-ring 1.8s ease-out infinite',
              }}
            />
            <div
              className="relative rounded-full z-10"
              style={{ width: 10, height: 10, backgroundColor: '#D89B35' }}
            />
          </div>
          <span
            className="font-bold tracking-tight"
            style={{ fontSize: 15, color: '#F5D6A6', letterSpacing: '-0.01em' }}
          >
            Rova Pulse
          </span>
        </div>
        {/* Mode badge */}
        {agencyMode ? (
          <span
            className="inline-flex items-center px-2 py-0.5 font-semibold"
            style={{
              fontSize: 10,
              borderRadius: 10,
              backgroundColor: '#554D43',
              color: '#F7F1E8',
              border: '1px solid #6B6058',
            }}
          >
            Internal
          </span>
        ) : (
          <span
            className="inline-flex items-center px-2 py-0.5 font-semibold"
            style={{
              fontSize: 10,
              borderRadius: 10,
              backgroundColor: 'rgba(216,155,53,0.18)',
              color: '#D89B35',
              border: '1px solid rgba(216,155,53,0.35)',
            }}
          >
            Rova Mode
          </span>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 overflow-y-auto">
        <ul className="space-y-0.5">
          {navItems.map(({ label, path, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-small transition-colors"
                  style={{
                    fontSize: 13,
                    fontWeight: isActive ? 600 : 400,
                    backgroundColor: isActive ? '#FFF3E2' : 'transparent',
                    color: isActive ? '#2B2924' : '#CFC1B2',
                  }}
                >
                  <span style={{ color: isActive ? '#2B2924' : '#CFC1B2' }}>
                    <Icon />
                  </span>
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>

        {/* Divider */}
        <div className="my-3" style={{ height: 1, backgroundColor: '#554D43' }} />

        <ul className="space-y-0.5">
          {bottomItems.map(({ label, path, icon: Icon }) => {
            const isActive = location.pathname === path;
            return (
              <li key={path}>
                <NavLink
                  to={path}
                  className="flex items-center gap-2.5 px-3 py-2 rounded-small transition-colors"
                  style={{
                    fontSize: 13,
                    fontWeight: isActive ? 600 : 400,
                    backgroundColor: isActive ? '#FFF3E2' : 'transparent',
                    color: isActive ? '#2B2924' : '#CFC1B2',
                  }}
                >
                  <span style={{ color: isActive ? '#2B2924' : '#CFC1B2' }}>
                    <Icon />
                  </span>
                  {label}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom card */}
      <div className="px-3 pb-4 flex flex-col gap-2">
        {agencyMode ? (
          <>
            <div
              className="rounded-small p-3"
              style={{
                backgroundColor: 'rgba(255,255,255,0.05)',
                border: '1px solid #554D43',
              }}
            >
              <p className="font-semibold mb-0.5" style={{ fontSize: 11, color: '#F7F1E8' }}>
                Internal mode
              </p>
              <p style={{ fontSize: 10, color: '#CFC1B2', lineHeight: 1.5 }}>
                Client only sees approved updates.
              </p>
            </div>
            <button
              onClick={() => window.location.href = '/'}
              style={{
                background: 'none',
                border: 'none',
                padding: '4px 0',
                cursor: 'pointer',
                textAlign: 'left',
                color: '#CFC1B2',
                fontSize: 12,
                textDecoration: 'underline',
              }}
            >
              ← View Client Mode
            </button>
          </>
        ) : (
          <div
            className="rounded-small p-3"
            style={{
              backgroundColor: 'rgba(255,255,255,0.05)',
              border: '1px solid #554D43',
            }}
          >
            <p className="font-semibold mb-0.5" style={{ fontSize: 11, color: '#F7F1E8' }}>
              Need help?
            </p>
            <p className="mb-2" style={{ fontSize: 10, color: '#CFC1B2' }}>
              View docs or contact support
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-1"
              style={{ fontSize: 10, color: '#D89B35', fontWeight: 500 }}
            >
              Open docs <ExternalLinkIcon />
            </a>
          </div>
        )}
      </div>
    </aside>
  );
}
