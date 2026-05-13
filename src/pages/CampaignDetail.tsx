import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import ProgressTimeline from '../components/ProgressTimeline';
import ActionBanner from '../components/ActionBanner';

function BackArrowIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M10 3L5 8L10 13" stroke="#5C554B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function FileIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M3 1.5H8.5L11.5 4.5V12.5C11.5 12.78 11.28 13 11 13H3C2.72 13 2.5 12.78 2.5 12.5V2C2.5 1.72 2.72 1.5 3 1.5Z" stroke="#5C554B" strokeWidth="1.2" strokeLinejoin="round"/>
      <path d="M8.5 1.5V4.5H11.5" stroke="#5C554B" strokeWidth="1.2" strokeLinejoin="round"/>
    </svg>
  );
}
function DocIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <rect width="28" height="28" rx="6" fill="#EEF3E7"/>
      <path d="M8 7H16.5L20 10.5V21H8V7Z" fill="#677F5A" opacity="0.15"/>
      <path d="M8 7H16.5L20 10.5V21H8V7Z" stroke="#677F5A" strokeWidth="1"/>
      <path d="M16.5 7V10.5H20" stroke="#677F5A" strokeWidth="1" strokeLinejoin="round"/>
      <path d="M11 13H17M11 16H15" stroke="#677F5A" strokeWidth="1" strokeLinecap="round"/>
    </svg>
  );
}
function ReplyIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 5L6 1V4C10 4 13 6 13 10C12 8 10 7 6 7V10L2 5Z" fill="white" opacity="0.9"/>
    </svg>
  );
}

interface ReplyCardProps {
  borderColor: string;
  bgColor: string;
  dueLabel: string;
  dueColor: string;
  question: string;
  source: string;
}

function QuestionCard({ borderColor, bgColor, dueLabel, dueColor, question, source }: ReplyCardProps) {
  const [showReply, setShowReply] = useState(false);
  const [replied, setReplied] = useState(false);
  const [replyText, setReplyText] = useState('');

  return (
    <div
      className="flex-1 rounded-small"
      style={{
        backgroundColor: bgColor,
        border: `1px solid ${borderColor}`,
        borderLeft: `3px solid ${borderColor}`,
        padding: 16,
      }}
    >
      <div className="font-semibold mb-1" style={{ fontSize: 11, color: dueColor }}>
        {dueLabel}
      </div>
      <div className="font-semibold mb-2 leading-snug" style={{ fontSize: 13, color: '#2B2924' }}>
        {question}
      </div>
      <div className="flex items-center justify-between">
        <span style={{ fontSize: 11, color: '#8A8074' }}>Asked by {source}</span>
        {!replied && (
          <button
            onClick={() => setShowReply(!showReply)}
            className="font-medium transition-opacity hover:opacity-80"
            style={{
              fontSize: 11,
              color: '#C95632',
              border: '1px solid #C95632',
              backgroundColor: 'transparent',
              borderRadius: 6,
              padding: '4px 10px',
              cursor: 'pointer',
            }}
          >
            Reply
          </button>
        )}
        {replied && (
          <span className="font-medium" style={{ fontSize: 11, color: '#677F5A' }}>✓ Replied</span>
        )}
      </div>
      {showReply && !replied && (
        <div className="mt-3">
          <textarea
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Type your reply..."
            className="w-full rounded-small resize-none outline-none"
            style={{
              fontSize: 12,
              padding: '8px 10px',
              border: '1px solid #D9B36C',
              backgroundColor: '#FFFDF8',
              color: '#2B2924',
              minHeight: 68,
            }}
          />
          <div className="flex gap-2 mt-2 justify-end">
            <button
              onClick={() => setShowReply(false)}
              style={{ fontSize: 11, color: '#8A8074', background: 'none', border: 'none', cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              onClick={() => { if (replyText.trim()) { setReplied(true); setShowReply(false); } }}
              className="font-semibold"
              style={{
                fontSize: 11,
                color: 'white',
                backgroundColor: '#C95632',
                border: 'none',
                borderRadius: 6,
                padding: '4px 12px',
                cursor: 'pointer',
                opacity: replyText.trim() ? 1 : 0.5,
              }}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default function CampaignDetail() {
  const navigate = useNavigate();
  const [showReplyBanner, setShowReplyBanner] = useState(false);
  const [replyText, setReplyText] = useState('');
  const [replied, setReplied] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden" style={{ backgroundColor: '#F7F1E8' }}>
      <Sidebar />

      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <div
          className="sticky top-0 z-10"
          style={{
            backgroundColor: '#F7F1E8',
            borderBottom: '1px solid #E7D9C8',
            padding: '16px 32px',
          }}
        >
          {/* Back link */}
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1.5 mb-3 transition-opacity hover:opacity-70"
            style={{ fontSize: 13, color: '#5C554B', background: 'none', border: 'none', cursor: 'pointer', padding: 0 }}
          >
            <BackArrowIcon />
            Back to dashboard
          </button>

          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="font-bold" style={{ fontSize: 24, color: '#2B2924' }}>
                  Spring Collection Launch
                </h1>
                <span
                  className="inline-flex items-center px-3 py-1 font-semibold rounded-pill"
                  style={{ fontSize: 11, backgroundColor: '#F6E7CC', color: '#A77734', border: '1px solid #D9B36C' }}
                >
                  AT RISK
                </span>
              </div>
              <p style={{ fontSize: 13, color: '#8A8074' }}>
                Launch date: 21 May 2025 &bull; Last updated today, 10:15 AM by Devlab PM
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                className="flex items-center gap-1.5 font-medium transition-opacity hover:opacity-80"
                style={{
                  fontSize: 12,
                  color: '#5C554B',
                  border: '1px solid #E7D9C8',
                  backgroundColor: '#FFFDF8',
                  borderRadius: 10,
                  padding: '8px 14px',
                  cursor: 'pointer',
                }}
              >
                <FileIcon />
                View assets
              </button>
              <button
                onClick={() => setShowReplyBanner(!showReplyBanner)}
                className="flex items-center gap-1.5 font-semibold transition-opacity hover:opacity-80"
                style={{
                  fontSize: 12,
                  color: 'white',
                  backgroundColor: '#C95632',
                  border: 'none',
                  borderRadius: 10,
                  padding: '8px 14px',
                  cursor: 'pointer',
                }}
              >
                <ReplyIcon />
                Reply to question
              </button>
            </div>
          </div>
        </div>

        {/* Inline reply area triggered by header button */}
        {showReplyBanner && !replied && (
          <div
            className="mx-8 mt-4 rounded-small"
            style={{ backgroundColor: '#FFFDF8', border: '1px solid #D9B36C', padding: 16 }}
          >
            <p className="font-semibold mb-2" style={{ fontSize: 13, color: '#2B2924' }}>
              Reply to: Confirm the final launch copy by today?
            </p>
            <textarea
              value={replyText}
              onChange={(e) => setReplyText(e.target.value)}
              placeholder="Type your reply..."
              className="w-full rounded-small resize-none outline-none"
              style={{
                fontSize: 12,
                padding: '10px 12px',
                border: '1px solid #E7D9C8',
                backgroundColor: '#F7F1E8',
                color: '#2B2924',
                minHeight: 80,
              }}
            />
            <div className="flex gap-2 mt-2 justify-end">
              <button
                onClick={() => setShowReplyBanner(false)}
                style={{ fontSize: 12, color: '#8A8074', background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Cancel
              </button>
              <button
                onClick={() => { if (replyText.trim()) { setReplied(true); setShowReplyBanner(false); } }}
                className="font-semibold"
                style={{
                  fontSize: 12,
                  color: 'white',
                  backgroundColor: '#C95632',
                  border: 'none',
                  borderRadius: 8,
                  padding: '6px 16px',
                  cursor: 'pointer',
                  opacity: replyText.trim() ? 1 : 0.5,
                }}
              >
                Send reply
              </button>
            </div>
          </div>
        )}
        {replied && (
          <div
            className="mx-8 mt-4 rounded-small flex items-center gap-2"
            style={{ backgroundColor: '#EEF3E7', border: '1px solid #B9CDAE', padding: '10px 16px' }}
          >
            <span style={{ color: '#677F5A', fontSize: 13, fontWeight: 600 }}>✓ Reply sent</span>
          </div>
        )}

        <div className="flex gap-6 p-8 pt-6">
          {/* Left content ~60% */}
          <div className="flex-1 min-w-0 flex flex-col gap-6">
            {/* Action banner */}
            <ActionBanner type="campaign" />

            {/* Progress timeline */}
            <div
              className="rounded-card"
              style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', padding: 24 }}
            >
              <div className="font-semibold mb-4" style={{ fontSize: 17, color: '#2B2924' }}>
                Campaign progress
              </div>
              <ProgressTimeline />
            </div>

            {/* Open questions */}
            <div
              className="rounded-card"
              style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', padding: 24 }}
            >
              <div className="mb-1">
                <div className="font-semibold" style={{ fontSize: 17, color: '#2B2924' }}>Open questions</div>
                <div style={{ fontSize: 12, color: '#8A8074', marginTop: 2 }}>
                  Only active items that need attention are shown here.
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <QuestionCard
                  borderColor="#D9B36C"
                  bgColor="#FFFDF8"
                  dueLabel="Due today"
                  dueColor="#C97849"
                  question="Confirm the final launch copy by today?"
                  source="Devlab PM"
                />
                <QuestionCard
                  borderColor="#D7A496"
                  bgColor="#F6E5DF"
                  dueLabel="Overdue"
                  dueColor="#B85E4C"
                  question="Are the final product images ready?"
                  source="Rova fulfilment"
                />
              </div>
            </div>

            {/* Recent decisions */}
            <div
              className="rounded-card"
              style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', padding: 24 }}
            >
              <div className="mb-1">
                <div className="font-semibold" style={{ fontSize: 17, color: '#2B2924' }}>
                  Recent decisions & changes
                </div>
                <div style={{ fontSize: 12, color: '#8A8074', marginTop: 2 }}>
                  A short record of what changed and why.
                </div>
              </div>
              <div className="flex gap-3 mt-4">
                <div
                  className="flex-1 rounded-small"
                  style={{ border: '1px solid #D9B36C', borderLeft: '3px solid #D9B36C', backgroundColor: '#FFFDF8', padding: 16 }}
                >
                  <div className="font-semibold mb-1" style={{ fontSize: 13, color: '#C97849' }}>
                    Launch window may shift
                  </div>
                  <div className="mb-2 leading-snug" style={{ fontSize: 12, color: '#5C554B' }}>
                    May move from 21 May to 22 May if final copy is not approved.
                  </div>
                  <div style={{ fontSize: 11, color: '#8A8074' }}>Today, 10:15 AM &bull; Devlab PM</div>
                </div>
                <div
                  className="flex-1 rounded-small"
                  style={{ border: '1px solid #D7A496', borderLeft: '3px solid #D7A496', backgroundColor: '#FFFDF8', padding: 16 }}
                >
                  <div className="font-semibold mb-1" style={{ fontSize: 13, color: '#B85E4C' }}>
                    Blocker raised
                  </div>
                  <div className="mb-2 leading-snug" style={{ fontSize: 12, color: '#5C554B' }}>
                    Final product copy is still pending from Priya's team.
                  </div>
                  <div style={{ fontSize: 11, color: '#8A8074' }}>Today, 10:15 AM &bull; Devlab PM</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right sidebar ~290px */}
          <aside className="shrink-0 flex flex-col gap-4" style={{ width: 290 }}>
            {/* Status summary */}
            <div
              className="rounded-card"
              style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', padding: 20 }}
            >
              <div className="font-semibold mb-3" style={{ fontSize: 15, color: '#2B2924' }}>
                Status summary
              </div>
              <div
                className="rounded-small p-3"
                style={{ backgroundColor: '#F6E7CC', border: '1px solid #D9B36C' }}
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="rounded-full" style={{ width: 8, height: 8, backgroundColor: '#A77734' }} />
                  <span className="font-semibold" style={{ fontSize: 13, color: '#A77734' }}>At Risk</span>
                </div>
                <p className="leading-snug mb-2" style={{ fontSize: 12, color: '#5C554B' }}>
                  Final copy approval is pending. Launch may be affected if unresolved today.
                </p>
                <div>
                  <span style={{ fontSize: 11, color: '#8A8074' }}>Owner: </span>
                  <span className="font-semibold" style={{ fontSize: 11, color: '#2B2924' }}>Priya's team</span>
                </div>
              </div>
            </div>

            {/* Pinned attachments */}
            <div
              className="rounded-card"
              style={{ backgroundColor: '#FFFDF8', border: '1px solid #E7D9C8', padding: 20 }}
            >
              <div className="font-semibold mb-3" style={{ fontSize: 15, color: '#2B2924' }}>
                Pinned attachments
              </div>
              <div className="flex flex-col gap-2">
                {[
                  { name: 'Campaign brief', source: 'Google Doc', status: 'Updated yesterday', statusColor: '#677F5A' },
                  { name: 'Final copy doc', source: 'Google Doc', status: 'Awaiting approval', statusColor: '#C97849' },
                ].map((doc) => (
                  <div
                    key={doc.name}
                    className="flex items-center gap-3 p-3 rounded-small cursor-pointer transition-all hover:opacity-80"
                    style={{ border: '1px solid #E7D9C8', backgroundColor: '#F7F1E8' }}
                  >
                    <DocIcon />
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold" style={{ fontSize: 12, color: '#2B2924' }}>{doc.name}</div>
                      <div style={{ fontSize: 11, color: '#8A8074' }}>{doc.source}</div>
                    </div>
                    <span style={{ fontSize: 10, color: doc.statusColor, fontWeight: 500 }}>{doc.status}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Follow up card */}
            <div
              className="rounded-card"
              style={{
                backgroundColor: '#FFFDF8',
                border: '1px solid #E7D9C8',
                padding: 20,
                opacity: 0.7,
              }}
            >
              <div className="font-semibold mb-1" style={{ fontSize: 13, color: '#8A8074' }}>
                Nothing to Follow Up
              </div>
              <p style={{ fontSize: 12, color: '#A89F91', lineHeight: 1.5 }}>
                Updates, questions, and key decisions are visible here once Devlab publishes them.
              </p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}
