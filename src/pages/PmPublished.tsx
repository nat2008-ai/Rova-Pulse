import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

function WorkflowStepper() {
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
        marginBottom: 32,
      }}
    >
      {steps.map((step, i) => {
        const isActive = step.n === 4;
        const isDone = step.n < 4;
        return (
          <div key={step.n} className="flex items-center" style={{ flex: i < steps.length - 1 ? 1 : undefined }}>
            <div className="flex items-center gap-2.5 shrink-0">
              <div
                className="flex items-center justify-center font-bold rounded-full shrink-0"
                style={{
                  width: 34, height: 34,
                  backgroundColor: isActive ? '#677F5A' : isDone ? '#D88A4A' : '#F3E6D8',
                  fontSize: 13,
                  color: isActive || isDone ? '#FFFDF8' : '#A77734',
                }}
              >
                {isDone ? '✓' : step.n}
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

export default function PmPublished() {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    if (countdown <= 0) {
      navigate('/pm');
      return;
    }
    const t = setTimeout(() => setCountdown(c => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, navigate]);

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#F7F1E8' }}>
      <Sidebar agencyMode={true} />

      <main className="flex-1 overflow-y-auto" style={{ padding: '28px 32px 60px' }}>

        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <h1 className="font-bold" style={{ fontSize: 28, color: '#2B2924', lineHeight: 1.2 }}>
              Spring Collection Launch
            </h1>
            <p style={{ fontSize: 14, color: '#6E665C' }}>
              Capture the internal status once, then generate a client-ready draft.
            </p>
          </div>
          {/* AT profile */}
          <div className="flex items-center shrink-0" style={{ gap: 36 }}>
            <div style={{ fontSize: 12, color: '#5C554B', lineHeight: 1.5 }}>
              <div>Last client update:</div>
              <div style={{ fontWeight: 500 }}>Just now</div>
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

        {/* Stepper — Step 4 active, steps 1-3 done */}
        <WorkflowStepper />

        {/* Success card */}
        <div
          style={{
            backgroundColor: '#FFFDF8',
            border: '1px solid #B9CDAE',
            borderRadius: 20,
            padding: '64px 40px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: 20,
          }}
        >
          {/* Checkmark circle */}
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: '50%',
              backgroundColor: '#EEF3E7',
              border: '2px solid #B9CDAE',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <path d="M7 16L13 22L25 10" stroke="#677F5A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Title */}
          <div>
            <h2 className="font-bold" style={{ fontSize: 24, color: '#2B2924', marginBottom: 8 }}>
              Message published!
            </h2>
            <p style={{ fontSize: 14, color: '#6E665C', maxWidth: 420, lineHeight: 1.6 }}>
              Your update for <span style={{ fontWeight: 600, color: '#2B2924' }}>Spring Collection Launch</span> is now visible to Rova's team on their client dashboard.
            </p>
          </div>

          {/* Details pill */}
          <div
            style={{
              display: 'flex',
              gap: 24,
              backgroundColor: '#F3EDE5',
              border: '1px solid #E7D9C8',
              borderRadius: 12,
              padding: '14px 28px',
              marginTop: 4,
            }}
          >
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: '#8A8074', marginBottom: 3 }}>Status sent</div>
              <div className="font-semibold" style={{ fontSize: 13, color: '#A77734' }}>At Risk</div>
            </div>
            <div style={{ width: 1, backgroundColor: '#E7D9C8' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: '#8A8074', marginBottom: 3 }}>Stage</div>
              <div className="font-semibold" style={{ fontSize: 13, color: '#2B2924' }}>Final copy approval</div>
            </div>
            <div style={{ width: 1, backgroundColor: '#E7D9C8' }} />
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontSize: 11, color: '#8A8074', marginBottom: 3 }}>Published at</div>
              <div className="font-semibold" style={{ fontSize: 13, color: '#2B2924' }}>Today, {new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit', hour12: true })}</div>
            </div>
          </div>

          {/* Redirect notice */}
          <p style={{ fontSize: 12, color: '#8A8074', marginTop: 8 }}>
            Returning to campaigns in{' '}
            <span style={{ fontWeight: 600, color: '#5C554B' }}>{countdown}s</span>…
          </p>

          {/* Manual back button */}
          <button
            onClick={() => navigate('/pm')}
            style={{
              fontSize: 13,
              fontWeight: 600,
              color: '#FFFDF8',
              backgroundColor: '#677F5A',
              border: 'none',
              borderRadius: 10,
              padding: '10px 24px',
              cursor: 'pointer',
            }}
          >
            Back to campaigns
          </button>
        </div>

      </main>
    </div>
  );
}
