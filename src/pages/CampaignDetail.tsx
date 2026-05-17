import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ProgressTimeline from '../components/ProgressTimeline';

function BackArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8L10 13" stroke="#C95632" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function DocIconCampaign() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="#F3ECE3"/>
      <path d="M13 12H23.5L27 15.5V28H13V12Z" fill="#D89B35" opacity="0.15"/>
      <path d="M13 12H23.5L27 15.5V28H13V12Z" stroke="#D89B35" strokeWidth="1.2"/>
      <path d="M23.5 12V15.5H27" stroke="#D89B35" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M16 19H24M16 22H21" stroke="#D89B35" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}
function DocIconCopy() {
  return (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
      <rect width="40" height="40" rx="8" fill="#F3ECE3"/>
      <path d="M13 12H23.5L27 15.5V28H13V12Z" fill="#C95632" opacity="0.12"/>
      <path d="M13 12H23.5L27 15.5V28H13V12Z" stroke="#C95632" strokeWidth="1.2"/>
      <path d="M23.5 12V15.5H27" stroke="#C95632" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M16 18H24M16 21H22M16 24H20" stroke="#C95632" strokeWidth="1.2" strokeLinecap="round"/>
    </svg>
  );
}

export default function CampaignDetail() {
  const navigate = useNavigate();
  const [showAddNote, setShowAddNote] = useState(false);
  const [noteText, setNoteText] = useState('');
  const [noteSent, setNoteSent] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#F7F1E8' }}>
      <Sidebar />

      <main className="flex-1 overflow-y-auto" style={{ padding: '34px 28px 48px' }}>

        {/* Page header */}
        <div className="flex flex-col gap-3 mb-7" style={{ maxWidth: 498 }}>
          {/* Back link */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 transition-opacity hover:opacity-70"
            style={{ fontSize: 13, color: '#C95632', fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer', padding: 0, width: 'fit-content' }}
          >
            <BackArrowIcon />
            Back to dashboard
          </button>

          {/* Title row */}
          <div>
            <div className="flex items-center gap-3 mb-1.5">
              <h1 className="font-bold leading-tight" style={{ fontSize: 30, color: '#2B2924' }}>
                Spring Collection Launch
              </h1>
              <span
                className="inline-flex items-center justify-center font-medium shrink-0"
                style={{
                  fontSize: 12,
                  backgroundColor: '#F6E7CC',
                  color: '#A77734',
                  border: '1px solid #D9B36C',
                  borderRadius: 999,
                  padding: '4px 14px',
                  height: 28,
                }}
              >
                AT RISK
              </span>
            </div>
            <p style={{ fontSize: 14, color: '#6E665C' }}>
              Launch date: 21 May 2026 &bull; Last updated today, 10:15 AM by Devlab PM
            </p>
          </div>
        </div>

        {/* Main two-column layout */}
        <div className="flex gap-4 items-start">

          {/* ── Left column ── */}
          <div className="flex-1 min-w-0 flex flex-col gap-5">

            {/* White outer card */}
            <div style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', borderRadius: 16, padding: 28 }}>

              {/* Progress timeline */}
              <div className="mb-5">
                <div className="font-semibold mb-4" style={{ fontSize: 18, color: '#2B2924' }}>
                  Progress timeline
                </div>
                <ProgressTimeline />
              </div>

              {/* Action banner — Final Copy Approval */}
              <div style={{ backgroundColor: '#F8E8D8', border: '1px solid #E4B894', borderRadius: 12, padding: 24 }}>

                {/* Top section */}
                <div className="flex items-start justify-between gap-8 mb-5">
                  {/* Left: due badge + title + note */}
                  <div className="flex flex-col gap-3 flex-1">
                    <span
                      className="inline-flex items-center font-normal shrink-0"
                      style={{
                        fontSize: 13,
                        backgroundColor: '#D9B36C',
                        color: '#2B2924',
                        border: '1px solid #A66A45',
                        borderRadius: 14,
                        padding: '5px 15px',
                        width: 'fit-content',
                      }}
                    >
                      Due Today
                    </span>
                    <div className="font-semibold" style={{ fontSize: 19, color: '#2B2924' }}>
                      Final Copy Approval
                    </div>
                    <p style={{ fontSize: 13, color: '#5C554B', lineHeight: 1.5, maxWidth: 320 }}>
                      Note: Final copy approval is due today at 5:00 PM. If not resolved, launch may move by one day.
                    </p>
                  </div>

                  {/* Right: action buttons */}
                  <div className="flex flex-col gap-2 shrink-0">
                    <button
                      className="font-semibold transition-opacity hover:opacity-80"
                      style={{
                        fontSize: 14,
                        color: '#677F5A',
                        backgroundColor: '#FFFDF8',
                        border: '1px solid #D9B36C',
                        borderRadius: 10,
                        padding: '9px 28px',
                        cursor: 'pointer',
                        width: 132,
                      }}
                    >
                      Resolve
                    </button>
                    <button
                      className="font-semibold transition-opacity hover:opacity-80"
                      style={{
                        fontSize: 14,
                        color: '#C95632',
                        backgroundColor: '#FFFDF8',
                        border: '1px solid #D9B36C',
                        borderRadius: 10,
                        padding: '9px 16px',
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Add Comment
                    </button>
                  </div>
                </div>

                {/* Asked by / Waiting on */}
                <div className="flex gap-5 mb-5" style={{ fontSize: 13 }}>
                  <span style={{ color: '#B85E4C', flex: 1 }}>
                    <span className="font-bold">Asked by:</span> Devlab Team
                  </span>
                  <span style={{ color: '#A66A45', flex: 1 }}>
                    <span className="font-bold">Waiting on:</span> Rova's Team
                  </span>
                </div>

                {/* Divider */}
                <div style={{ height: 1, backgroundColor: '#E4B894', marginBottom: 20 }} />

                {/* Pinned attachments */}
                <div>
                  <div className="font-semibold mb-4" style={{ fontSize: 18, color: '#2B2924' }}>
                    Pinned attachments
                  </div>
                  <div className="flex gap-3">
                    {/* Campaign brief */}
                    <div
                      className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80"
                      style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', borderRadius: 12, padding: 10, flex: 1 }}
                    >
                      <DocIconCampaign />
                      <div>
                        <div className="font-semibold" style={{ fontSize: 12, color: '#2B2924' }}>Campaign brief</div>
                        <div style={{ fontSize: 10, color: '#6E665C' }}>Google Doc &bull; Updated yesterday</div>
                      </div>
                    </div>
                    {/* Final copy doc */}
                    <div
                      className="flex items-center gap-2 cursor-pointer transition-opacity hover:opacity-80"
                      style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', borderRadius: 12, padding: 10, flex: 1 }}
                    >
                      <DocIconCopy />
                      <div>
                        <div className="font-semibold" style={{ fontSize: 12, color: '#2B2924' }}>Final copy doc</div>
                        <div style={{ fontSize: 10, color: '#6E665C' }}>Google Doc &bull; Awaiting approval</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Follow Up card */}
            <div style={{ backgroundColor: '#FFFDF8', border: '1px solid #E4B894', borderRadius: 12, padding: 24 }}>
              <div className="mb-5">
                <div className="font-semibold mb-2" style={{ fontSize: 18, color: '#2B2924' }}>Follow Up</div>
                <p style={{ fontSize: 12, color: '#6E665C' }}>
                  Leave a note, message, or question for DevLab in this campaign.
                </p>
              </div>

              {/* Dashed inner box */}
              {!noteSent ? (
                <div style={{ backgroundColor: 'white', border: '1px dashed #8A8074', borderRadius: 14, padding: 24 }}>
                  {!showAddNote ? (
                    <>
                      <div className="font-semibold mb-1" style={{ fontSize: 13, color: '#5C554B' }}>
                        No open follow-ups
                      </div>
                      <p style={{ fontSize: 12, color: '#6E665C', lineHeight: 1.5, marginBottom: 16 }}>
                        There are currently no questions or messages waiting for DevLab's response.
                      </p>
                      <button
                        onClick={() => setShowAddNote(true)}
                        className="font-semibold transition-opacity hover:opacity-80"
                        style={{
                          fontSize: 14,
                          color: '#FFFDF8',
                          backgroundColor: '#C95632',
                          border: 'none',
                          borderRadius: 12,
                          padding: '10px 18px',
                          cursor: 'pointer',
                        }}
                      >
                        + Add note / question
                      </button>
                    </>
                  ) : (
                    <>
                      <textarea
                        value={noteText}
                        onChange={(e) => setNoteText(e.target.value)}
                        placeholder="Type your note or question for DevLab..."
                        className="w-full resize-none outline-none"
                        style={{
                          fontSize: 13,
                          padding: '10px 12px',
                          border: '1px solid #E4B894',
                          borderRadius: 8,
                          backgroundColor: '#FFFDF8',
                          color: '#2B2924',
                          minHeight: 90,
                          marginBottom: 12,
                        }}
                      />
                      <div className="flex gap-2 justify-end">
                        <button
                          onClick={() => { setShowAddNote(false); setNoteText(''); }}
                          style={{ fontSize: 12, color: '#8A8074', background: 'none', border: 'none', cursor: 'pointer' }}
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => { if (noteText.trim()) { setNoteSent(true); setShowAddNote(false); } }}
                          className="font-semibold"
                          style={{
                            fontSize: 13,
                            color: 'white',
                            backgroundColor: '#C95632',
                            border: 'none',
                            borderRadius: 8,
                            padding: '6px 16px',
                            cursor: 'pointer',
                            opacity: noteText.trim() ? 1 : 0.5,
                          }}
                        >
                          Send
                        </button>
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <div
                  className="flex items-center gap-2"
                  style={{ backgroundColor: '#EEF3E7', border: '1px solid #B9CDAE', borderRadius: 14, padding: '12px 20px' }}
                >
                  <span style={{ color: '#677F5A', fontSize: 13, fontWeight: 600 }}>✓ Note sent to DevLab</span>
                </div>
              )}
            </div>
          </div>

          {/* ── Right panel ── */}
          <aside
            className="shrink-0 flex flex-col"
            style={{ width: 307, backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', borderRadius: 16, padding: 28 }}
          >
            {/* Header */}
            <div className="flex items-start gap-2.5 mb-6">
              <div
                className="flex items-center justify-center shrink-0 rounded-full"
                style={{ width: 30, height: 30, backgroundColor: '#C95632' }}
              >
                <span style={{ fontSize: 18, color: '#F7F1E8', fontWeight: 700, lineHeight: 1 }}>!</span>
              </div>
              <div>
                <div className="font-semibold" style={{ fontSize: 17, color: '#2B2924', lineHeight: 1.3 }}>
                  Recent decisions &amp; changes
                </div>
                <div style={{ fontSize: 12, color: '#6E665C', marginTop: 4 }}>
                  A short record of what changed and why.
                </div>
              </div>
            </div>

            {/* Change cards */}
            <div className="flex flex-col gap-5">

              {/* Blocker raised */}
              <div style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', borderRadius: 12, padding: '13px 16px 13px 18px', minHeight: 94 }}>
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center shrink-0 rounded-full"
                    style={{ width: 30, height: 30, backgroundColor: '#F3ECE3', marginTop: 2 }}
                  >
                    <span style={{ fontSize: 18, color: '#B85E4C', fontWeight: 700, lineHeight: 1 }}>!</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="font-semibold" style={{ fontSize: 13, color: '#C95632' }}>Blocker raised</div>
                    <div className="font-medium" style={{ fontSize: 12, color: '#6E665C', lineHeight: 1.4 }}>
                      Final product copy is still pending from Priya's team.
                    </div>
                    <div style={{ fontSize: 8, color: '#8A8074' }}>Today, 10:15 AM &bull; Devlab PM</div>
                  </div>
                </div>
              </div>

              {/* Launch window may shift */}
              <div style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', borderRadius: 12, padding: '10px 16px 10px 12px', minHeight: 94 }}>
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center shrink-0 rounded-full"
                    style={{ width: 30, height: 30, backgroundColor: '#F3ECE3', marginTop: 2 }}
                  >
                    <span style={{ fontSize: 16, color: '#A77734', fontWeight: 700, lineHeight: 1 }}>↔</span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="font-semibold" style={{ fontSize: 13, color: '#D89B35' }}>Launch window may shift</div>
                    <div className="font-medium" style={{ fontSize: 12, color: '#8A8074', lineHeight: 1.4 }}>
                      May move from 21 May to 22 May if final copy is not approved.
                    </div>
                    <div style={{ fontSize: 8, color: '#8A8074' }}>Today, 10:15 AM &bull; Devlab PM</div>
                  </div>
                </div>
              </div>

              {/* Reason for copy change */}
              <div style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', borderRadius: 12, padding: 20 }}>
                <div className="flex items-start gap-4">
                  <div
                    className="flex items-center justify-center shrink-0 rounded-full"
                    style={{ width: 30, height: 30, backgroundColor: '#F3ECE3', marginTop: 2 }}
                  >
                    {/* Edit / copy icon */}
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" style={{ display: 'block' }}>
                      <path d="M9.5 2.5L13.5 6.5L5 15H1V11L9.5 2.5Z" stroke="#A66A45" strokeWidth="1.2" strokeLinejoin="round"/>
                      <path d="M7 4.5L11.5 9" stroke="#A66A45" strokeWidth="1.2" strokeLinecap="round"/>
                      <path d="M13 13H15" stroke="#A66A45" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="font-semibold" style={{ fontSize: 13, color: '#A66A45' }}>Reason for copy change</div>
                    <div className="font-medium" style={{ fontSize: 12, color: '#6E665C', lineHeight: 1.5 }}>
                      The previous copy did not clearly explain the bundle discount, so the latest version was updated to make the offer easier to understand.
                    </div>
                    <div style={{ fontSize: 8, color: '#8A8074' }}>Today, 10:15 AM &bull; Devlab PM</div>
                  </div>
                </div>
              </div>

            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
