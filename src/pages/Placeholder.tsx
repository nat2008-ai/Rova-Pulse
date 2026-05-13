import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

export default function Placeholder() {
  const navigate = useNavigate();
  const location = useLocation();
  const pageName = location.pathname.replace('/', '') || 'page';

  return (
    <div className="flex h-screen" style={{ backgroundColor: '#F7F1E8' }}>
      <Sidebar />
      <main className="flex-1 flex items-center justify-center">
        <div className="text-center">
          <div
            className="font-semibold mb-2 capitalize"
            style={{ fontSize: 22, color: '#2B2924' }}
          >
            {pageName}
          </div>
          <p style={{ fontSize: 14, color: '#8A8074' }}>Coming soon</p>
          <button
            onClick={() => navigate('/')}
            className="mt-4 font-medium transition-opacity hover:opacity-80"
            style={{
              fontSize: 13,
              color: '#C95632',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              textDecoration: 'underline',
            }}
          >
            ← Back to dashboard
          </button>
        </div>
      </main>
    </div>
  );
}
