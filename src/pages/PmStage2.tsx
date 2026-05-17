import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

// ─── Icons ────────────────────────────────────────────────────────────────────

function ChevronDownIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
      <path d="M3 4.5L6 7.5L9 4.5" stroke="#8A8074" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function DocIcon({ color }: { color: string }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="1" y="1" width="20" height="20" rx="5" fill={color} opacity="0.15"/>
      <path d="M7 7H15M7 10.5H15M7 14H12" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  );
}
function SparklesIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M10 2L11.5 7H16.5L12.5 10.5L14 15.5L10 12L6 15.5L7.5 10.5L3.5 7H8.5L10 2Z" fill="#677F5A" opacity="0.3"/>
      <path d="M10 2L11.5 7H16.5L12.5 10.5L14 15.5L10 12L6 15.5L7.5 10.5L3.5 7H8.5L10 2Z" stroke="#677F5A" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
}
function CheckDocIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="1" y="1" width="20" height="20" rx="5" fill="#C95632" opacity="0.12"/>
      <path d="M7 11L10 14L15 8" stroke="#C95632" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            {/* Step */}
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
            {/* Connector */}
            {i < steps.length - 1 && (
              <div style={{ flex: 1, height: 1, backgroundColor: '#E7D9C8', margin: '0 16px' }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function PmStage2() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(
    'Final launch copy is still pending. If approval is not received by 5 PM today, launch may move by one day.'
  );
  const [generated, setGenerated] = useState(false);
  const [generatedText, setGeneratedText] = useState('');

  const handleGenerate = () => {
    setGeneratedText(
      `Hi Priya,\n\nJust a quick update on the Spring Collection Launch — we're currently at the final copy approval stage and it's marked as At Risk.\n\nThe copy is still pending sign-off. If we don't receive approval by 5:00 PM today, the launch date may shift by one day.\n\nPlease let us know as soon as the copy is approved so we can move forward.\n\nBest,\nDevLab's Team`
    );
    setGenerated(true);
  };

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#F7F1E8' }}>
      <Sidebar agencyMode={true} />

      <main className="flex-1 overflow-y-auto" style={{ padding: '28px 32px 60px' }}>

        {/* Header */}
        <div className="flex items-start justify-between mb-5">
          <div>
            <h1 className="font-bold leading-tight" style={{ fontSize: 28, color: '#2B2924' }}>
              Spring Collection Launch
            </h1>
            <p style={{ fontSize: 14, color: '#6E665C', marginTop: 5 }}>
              Capture the internal status once, then generate a client-ready draft.
            </p>
          </div>

          {/* Right — Last client update + AT avatar */}
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
              <div className="flex flex-col" style={{ gap: 4 }}>
                <span className="font-semibold" style={{ fontSize: 13, color: '#2B2924' }}>Alyna</span>
                <span style={{ fontSize: 11, color: '#6E665C' }}>DevLab's PM</span>
              </div>
            </div>
          </div>
        </div>

        {/* Workflow stepper */}
        <WorkflowStepper currentStep={2} />

        {/* Reminder banner */}
        <div
          style={{
            backgroundColor: '#F6E7CC',
            border: '1px solid #D9B36C',
            borderRadius: 12,
            padding: '16px 20px',
            marginBottom: 20,
            fontSize: 14,
            color: '#6E665C',
          }}
        >
          <span style={{ fontWeight: 700, color: '#A77734' }}>Reminder: </span>
          Spring Collection Launch is selected. Final copy approval is due today at 5:00 PM.
        </div>

        {/* Two-column body */}
        <div className="flex gap-5 items-start">

          {/* LEFT — Send Message card */}
          <div
            style={{
              flex: 1,
              backgroundColor: '#FFFDF8',
              border: '1px solid #D8C8B7',
              borderRadius: 12,
              padding: 30,
              display: 'flex',
              flexDirection: 'column',
              gap: 22,
            }}
          >
            <span className="font-semibold" style={{ fontSize: 17, color: '#2B2924' }}>
              Send Message to Client
            </span>

            {/* Dropdowns row */}
            <div className="flex gap-5">
              {/* Status */}
              <div style={{ width: 156 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#6E665C', marginBottom: 8 }}>Status</div>
                <div
                  className="flex items-center justify-between"
                  style={{
                    backgroundColor: '#FFFDF8',
                    border: '1px solid #D8C8B7',
                    borderRadius: 10,
                    padding: '10px 14px',
                    height: 44,
                    cursor: 'pointer',
                  }}
                >
                  <div className="flex items-center gap-2.5">
                    <div className="rounded-full shrink-0" style={{ width: 8, height: 8, backgroundColor: '#A77734' }} />
                    <span className="font-semibold" style={{ fontSize: 14, color: '#2B2924' }}>At Risk</span>
                  </div>
                  <ChevronDownIcon />
                </div>
              </div>

              {/* Stage */}
              <div style={{ width: 200 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#6E665C', marginBottom: 8 }}>Stage</div>
                <div
                  className="flex items-center justify-between"
                  style={{
                    backgroundColor: '#FFFDF8',
                    border: '1px solid #D8C8B7',
                    borderRadius: 10,
                    padding: '10px 14px',
                    height: 44,
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#2B2924' }}>Final copy approval</span>
                  <ChevronDownIcon />
                </div>
              </div>

              {/* Due Date */}
              <div style={{ width: 174 }}>
                <div style={{ fontSize: 12, fontWeight: 500, color: '#6E665C', marginBottom: 8 }}>Due Date</div>
                <div
                  className="flex items-center justify-between"
                  style={{
                    backgroundColor: '#FFFDF8',
                    border: '1px solid #D8C8B7',
                    borderRadius: 10,
                    padding: '10px 14px',
                    height: 44,
                    cursor: 'pointer',
                  }}
                >
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#2B2924' }}>Today, 5:00 PM</span>
                  <ChevronDownIcon />
                </div>
              </div>
            </div>

            {/* Message textarea */}
            <div>
              <div className="font-semibold mb-2.5" style={{ fontSize: 13, color: '#2B2924' }}>
                Message to Rova's Team
              </div>
              <textarea
                value={message}
                onChange={e => setMessage(e.target.value)}
                rows={5}
                style={{
                  width: '100%',
                  backgroundColor: '#F8F1E8',
                  border: 'none',
                  borderRadius: 10,
                  padding: '18px 20px',
                  fontSize: 13,
                  color: '#5C554B',
                  lineHeight: 1.6,
                  resize: 'vertical',
                  outline: 'none',
                  boxSizing: 'border-box',
                  fontFamily: 'inherit',
                }}
              />
              <div style={{ fontSize: 11, color: '#8A8074', marginTop: 6 }}>
                This note is used to generate a client-facing draft.
              </div>
            </div>

            {/* Action buttons */}
            <div className="flex items-center gap-3">
              <button
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: '#5C554B',
                  backgroundColor: '#FFFDF8',
                  border: '1px solid #CFC1B2',
                  borderRadius: 10,
                  padding: '10px 22px',
                  cursor: 'pointer',
                }}
              >
                Save draft
              </button>
              <button
                onClick={handleGenerate}
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: 'white',
                  backgroundColor: '#677F5A',
                  border: '1px solid #677F5A',
                  borderRadius: 10,
                  padding: '10px 22px',
                  cursor: 'pointer',
                }}
              >
                Generate ✦
              </button>
            </div>

            {/* Pinned attachments */}
            <div>
              <div className="font-semibold mb-3" style={{ fontSize: 16, color: '#2B2924' }}>
                Pinned attachments
              </div>
              <div className="flex gap-2.5">
                {/* Campaign brief */}
                <div
                  className="flex items-center gap-2.5"
                  style={{
                    backgroundColor: '#FFFDF8',
                    border: '1px solid #E7D9C8',
                    borderRadius: 12,
                    padding: '10px 14px',
                    flex: 1,
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 40, height: 40, backgroundColor: '#F3E6D8', borderRadius: 8 }}
                  >
                    <DocIcon color="#C95632" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ fontSize: 12, color: '#2B2924' }}>Campaign brief</div>
                    <div style={{ fontSize: 10, color: '#6E665C' }}>Google Doc • Updated yesterday</div>
                  </div>
                </div>
                {/* Final copy doc */}
                <div
                  className="flex items-center gap-2.5"
                  style={{
                    backgroundColor: '#FFFDF8',
                    border: '1px solid #E7D9C8',
                    borderRadius: 12,
                    padding: '10px 14px',
                    flex: 1,
                  }}
                >
                  <div
                    className="flex items-center justify-center shrink-0"
                    style={{ width: 40, height: 40, backgroundColor: '#FDEADE', borderRadius: 8 }}
                  >
                    <CheckDocIcon />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ fontSize: 12, color: '#2B2924' }}>Final copy doc</div>
                    <div style={{ fontSize: 10, color: '#6E665C' }}>Google Doc • Awaiting approval</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Edit Progress Timeline link */}
            <a href="#" style={{ fontSize: 12, color: '#2B2924', textDecoration: 'underline' }}>
              Edit Progress Timeline
            </a>
          </div>

          {/* RIGHT — Generated Message panel */}
          <div
            style={{
              width: 254,
              backgroundColor: '#F3EDF5',
              border: '1px solid #D8C7DD',
              borderRadius: 16,
              padding: '20px',
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
              alignSelf: 'stretch',
            }}
          >
            {/* Panel header */}
            <div className="flex items-start gap-2">
              <SparklesIcon />
              <div>
                <div className="font-semibold" style={{ fontSize: 13, color: '#677F5A' }}>
                  Generated Message
                </div>
                <div style={{ fontSize: 8, color: '#6E665C', lineHeight: 1.5, marginTop: 3, maxWidth: 152 }}>
                  Message will be visible to Rova's team once published
                </div>
              </div>
            </div>

            {/* Draft card */}
            <div
              style={{
                backgroundColor: '#FFFDF8',
                border: '1px solid #D8C7DD',
                borderRadius: 16,
                padding: 20,
                flex: 1,
              }}
            >
              {generated ? (
                <div>
                  <div className="font-semibold mb-2" style={{ fontSize: 13, color: '#2B2924' }}>
                    Draft ready
                  </div>
                  <p style={{ fontSize: 12, color: '#5C554B', lineHeight: 1.6, whiteSpace: 'pre-wrap', marginBottom: 16 }}>
                    {generatedText}
                  </p>
                  <div style={{ fontSize: 10, color: '#D89B35', lineHeight: 1.6 }}>
                    <div><span style={{ fontWeight: 600 }}>Status: </span>At Risk</div>
                    <div><span style={{ fontWeight: 600 }}>Waiting on: </span>Rova's Team</div>
                  </div>
                  <button
                    onClick={() => navigate('/pm/publish')}
                    style={{
                      marginTop: 16,
                      width: '100%',
                      fontSize: 13,
                      fontWeight: 600,
                      color: 'white',
                      backgroundColor: '#677F5A',
                      border: 'none',
                      borderRadius: 10,
                      padding: '10px 0',
                      cursor: 'pointer',
                    }}
                  >
                    Review &amp; Publish →
                  </button>
                </div>
              ) : (
                <div>
                  <div className="font-semibold mb-2" style={{ fontSize: 15, color: '#2B2924' }}>
                    No draft yet
                  </div>
                  <p style={{ fontSize: 13, color: '#2B2924', lineHeight: 1.5, marginBottom: 14 }}>
                    Key in the message to generate a client-facing draft.
                  </p>
                  <div style={{ fontSize: 10, color: '#D89B35', lineHeight: 1.8 }}>
                    <div><span style={{ fontWeight: 600 }}>Status: </span>At Risk</div>
                    <div><span style={{ fontWeight: 600 }}>Waiting on: </span>Rova's Team</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Bottom — Add New Message */}
        <div style={{ marginTop: 28 }}>
          <button
            style={{
              fontSize: 14,
              fontWeight: 600,
              color: '#FFFDF8',
              backgroundColor: '#C95632',
              border: 'none',
              borderRadius: 12,
              padding: '12px 24px',
              cursor: 'pointer',
            }}
          >
            + Add New Message
          </button>
        </div>

      </main>
    </div>
  );
}
