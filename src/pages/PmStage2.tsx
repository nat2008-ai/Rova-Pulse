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
function CheckDocIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <rect x="1" y="1" width="20" height="20" rx="5" fill="#C95632" opacity="0.12"/>
      <path d="M7 11L10 14L15 8" stroke="#C95632" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function SparklesIcon() {
  return (
    <svg width="20" height="24" viewBox="0 0 20 24" fill="none">
      <path d="M10 2L12 9H19L13.5 13.5L15.5 20.5L10 16L4.5 20.5L6.5 13.5L1 9H8L10 2Z" fill="#677F5A" opacity="0.2" stroke="#677F5A" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M15 1L15.8 3.2L18 4L15.8 4.8L15 7L14.2 4.8L12 4L14.2 3.2L15 1Z" fill="#677F5A" opacity="0.6"/>
    </svg>
  );
}
function EditIcon() {
  return (
    <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
      <path d="M7 1.5L8.5 3L3.5 8H2V6.5L7 1.5Z" stroke="#A77734" strokeWidth="1" strokeLinejoin="round"/>
    </svg>
  );
}
function BackIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8L10 13" stroke="#C95632" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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
            <div className="flex items-center gap-2.5 shrink-0">
              <div
                className="flex items-center justify-center font-bold rounded-full shrink-0"
                style={{
                  width: 34, height: 34,
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
            {i < steps.length - 1 && (
              <div style={{ flex: 1, height: 1, backgroundColor: '#E7D9C8', margin: '0 16px' }} />
            )}
          </div>
        );
      })}
    </div>
  );
}

// ─── Dropdown field ───────────────────────────────────────────────────────────

function DropdownField({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
      <div style={{ fontSize: 12, fontWeight: 500, color: '#6E665C' }}>{label}</div>
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
        {value}
        <ChevronDownIcon />
      </div>
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────

const DRAFT_TEXT = `Spring Collection is currently at risk because final copy approval is still pending. If approval is received by today at 5 PM, the campaign can remain on schedule. Otherwise, the launch may move by one day.`;

export default function PmStage2() {
  const navigate = useNavigate();
  const [message, setMessage] = useState(
    'Final launch copy is still pending. If approval is not received by 5 PM today, launch may move by one day.'
  );
  const [generated, setGenerated] = useState(false);

  const activeStep = generated ? 3 : 2;

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#F7F1E8' }}>
      <Sidebar agencyMode={true} />

      <main className="flex-1 overflow-y-auto" style={{ padding: '28px 32px 60px' }}>

        {/* Back link */}
        <button
          onClick={() => navigate('/pm')}
          className="flex items-center gap-1.5"
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            cursor: 'pointer',
            fontSize: 13,
            fontWeight: 600,
            color: '#C95632',
            marginBottom: 12,
          }}
        >
          <BackIcon />
          Back to all campaigns
        </button>

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
              <div style={{ fontWeight: 500 }}>Yesterday, 4:30PM</div>
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

        {/* Workflow stepper */}
        <WorkflowStepper currentStep={activeStep} />

        {/* Reminder banner */}
        <div
          style={{
            backgroundColor: '#F6E7CC',
            border: '1px solid #A77734',
            borderRadius: 12,
            padding: '16px 20px',
            marginBottom: 24,
            fontSize: 14,
            color: '#A66A45',
            fontWeight: 500,
          }}
        >
          Reminder: Final copy approval is due today at 5:00 PM. This campaign needs a client-visible update.
        </div>

        {/* Two-column body — stretch-aligned */}
        <div style={{ display: 'flex', gap: 23, alignItems: 'stretch' }}>

          {/* LEFT — Send Message form */}
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

            {/* Dropdown row */}
            <div style={{ display: 'flex', gap: 20 }}>
              <div style={{ width: 156 }}>
                <DropdownField
                  label="Status"
                  value={
                    <div className="flex items-center gap-2.5">
                      <div className="rounded-full" style={{ width: 8, height: 8, backgroundColor: '#A77734', flexShrink: 0 }} />
                      <span className="font-semibold" style={{ fontSize: 14, color: '#2B2924' }}>At Risk</span>
                    </div>
                  }
                />
              </div>
              <div style={{ width: 200 }}>
                <DropdownField
                  label="Stage"
                  value={<span style={{ fontSize: 14, fontWeight: 500, color: '#2B2924' }}>Final copy approval</span>}
                />
              </div>
              <div style={{ width: 174 }}>
                <DropdownField
                  label="Due Date"
                  value={<span style={{ fontSize: 14, fontWeight: 500, color: '#2B2924' }}>Today, 5:00 PM</span>}
                />
              </div>
            </div>

            {/* Message textarea */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              <div className="font-semibold" style={{ fontSize: 13, color: '#2B2924' }}>
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
              <div style={{ fontSize: 11, color: '#8A8074' }}>
                This note is used to generate a client-facing draft.
              </div>
            </div>

            {/* Action buttons */}
            <div style={{ display: 'flex', gap: 11, alignItems: 'center' }}>
              <button
                style={{
                  fontSize: 14, fontWeight: 600, color: '#5C554B',
                  backgroundColor: '#FFFDF8', border: '1px solid #CFC1B2',
                  borderRadius: 10, padding: '10px 22px', cursor: 'pointer',
                }}
              >
                Save draft
              </button>
              <button
                onClick={() => setGenerated(true)}
                style={{
                  fontSize: 14, fontWeight: 600, color: 'white',
                  backgroundColor: '#677F5A', border: '1px solid #757575',
                  borderRadius: 10, padding: '10px 22px', cursor: 'pointer',
                }}
              >
                Generate
              </button>
            </div>

            {/* Pinned attachments */}
            <div>
              <div className="font-semibold" style={{ fontSize: 18, color: '#2B2924', marginBottom: 16 }}>
                Pinned attachments
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <div
                  style={{
                    flex: 1, backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8',
                    borderRadius: 12, padding: '10px 14px',
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}
                >
                  <div style={{ width: 40, height: 40, backgroundColor: '#F3E6D8', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <DocIcon color="#C95632" />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ fontSize: 12, color: '#2B2924' }}>Campaign brief</div>
                    <div style={{ fontSize: 10, color: '#6E665C' }}>Google Doc • Updated yesterday</div>
                  </div>
                </div>
                <div
                  style={{
                    flex: 1, backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8',
                    borderRadius: 12, padding: '10px 14px',
                    display: 'flex', alignItems: 'center', gap: 10,
                  }}
                >
                  <div style={{ width: 40, height: 40, backgroundColor: '#FDEADE', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <CheckDocIcon />
                  </div>
                  <div>
                    <div className="font-semibold" style={{ fontSize: 12, color: '#2B2924' }}>Final copy doc</div>
                    <div style={{ fontSize: 10, color: '#6E665C' }}>Google Doc • Awaiting approval</div>
                  </div>
                </div>
              </div>
            </div>

            <a href="#" style={{ fontSize: 12, color: '#2B2924', textDecoration: 'underline' }}>
              Update milestone status
            </a>
          </div>

          {/* RIGHT — Generated Message panel */}
          <div
            style={{
              width: 254,
              backgroundColor: '#F3EDF5',
              border: '1px solid #D8C7DD',
              borderRadius: 16,
              padding: 20,
              display: 'flex',
              flexDirection: 'column',
              gap: 16,
            }}
          >
            {/* Panel header */}
            <div style={{ display: 'flex', gap: 8, alignItems: 'flex-start' }}>
              <SparklesIcon />
              <div>
                <div className="font-semibold" style={{ fontSize: 13, color: '#677F5A' }}>Generated Message</div>
                <div style={{ fontSize: 8, color: '#6E665C', lineHeight: 1.5, marginTop: 3, maxWidth: 152 }}>
                  Message will be visible to Rova's team once published
                </div>
              </div>
            </div>

            {/* Draft card — flex:1 to fill remaining height */}
            <div
              style={{
                flex: 1,
                backgroundColor: '#FFFDF8',
                border: '1px solid #D8C7DD',
                borderRadius: 16,
                padding: 20,
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              {generated ? (
                <>
                  <p style={{ fontSize: 13, color: '#2B2924', lineHeight: 1.6, flex: 1 }}>
                    {DRAFT_TEXT}
                  </p>
                  <div style={{ fontSize: 10, color: '#D89B35', lineHeight: 1.8 }}>
                    <div><span style={{ fontWeight: 600 }}>Status: </span>At Risk</div>
                    <div><span style={{ fontWeight: 600 }}>Waiting on: </span>Rova's Team</div>
                  </div>
                  {/* Edit + Regenerate */}
                  <div style={{ display: 'flex', gap: 7 }}>
                    <button
                      style={{
                        display: 'flex', alignItems: 'center', gap: 6,
                        fontSize: 10, fontWeight: 600, color: '#A77734',
                        backgroundColor: 'white', border: '1px solid #A77734',
                        borderRadius: 10, padding: '6px 14px', cursor: 'pointer',
                      }}
                    >
                      <EditIcon /> Edit
                    </button>
                    <button
                      onClick={() => setGenerated(false)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: 5,
                        fontSize: 10, fontWeight: 600, color: '#C95632',
                        backgroundColor: 'white', border: '1px solid #C95632',
                        borderRadius: 10, padding: '6px 12px', cursor: 'pointer',
                      }}
                    >
                      ✦ Regenerate
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="font-semibold" style={{ fontSize: 15, color: '#2B2924' }}>No draft yet</div>
                  <p style={{ fontSize: 13, color: '#2B2924', lineHeight: 1.5 }}>
                    Key in the message to generate a client-facing draft.
                  </p>
                  <div style={{ fontSize: 10, color: '#D89B35', lineHeight: 1.8 }}>
                    <div><span style={{ fontWeight: 600 }}>Status: </span>At Risk</div>
                    <div><span style={{ fontWeight: 600 }}>Waiting on: </span>Rova's Team</div>
                  </div>
                </>
              )}
            </div>

            {/* Publish button — only shown after generate */}
            {generated && (
              <button
                onClick={() => navigate('/pm/published')}
                style={{
                  width: '100%', height: 43,
                  fontSize: 14, fontWeight: 600, color: 'white',
                  backgroundColor: '#C95632', border: '1px solid #C95632',
                  borderRadius: 10, cursor: 'pointer',
                }}
              >
                Publish
              </button>
            )}
          </div>

        </div>

        {/* Bottom — Add New Message */}
        <div style={{ marginTop: 28 }}>
          <button
            style={{
              fontSize: 14, fontWeight: 600, color: '#FFFDF8',
              backgroundColor: '#C95632', border: 'none',
              borderRadius: 12, padding: '12px 24px', cursor: 'pointer',
            }}
          >
            + Add New Message
          </button>
        </div>

      </main>
    </div>
  );
}
