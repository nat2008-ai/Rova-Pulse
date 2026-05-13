interface Question {
  id: string;
  stripe: string;
  icon: 'clock' | 'check';
  text: string;
  dueLabel: string;
  dueColor: string;
  assignee: string;
}

const questions: Question[] = [
  {
    id: 'q1',
    stripe: '#D89B35',
    icon: 'clock',
    text: 'Can we confirm the discount mechanic for Spring Collection?',
    dueLabel: 'Due today, 5:00 PM',
    dueColor: '#C97849',
    assignee: "Priya's team",
  },
  {
    id: 'q2',
    stripe: '#B85E4C',
    icon: 'clock',
    text: 'Are the final product images ready for Kitchen Essentials?',
    dueLabel: 'Overdue by 1 day',
    dueColor: '#B85E4C',
    assignee: 'Rova fulfilment',
  },
  {
    id: 'q3',
    stripe: '#A89F91',
    icon: 'check',
    text: "Final copy approved for Mother's Day Gift Guide",
    dueLabel: 'Answered yesterday',
    dueColor: '#8A8074',
    assignee: 'You',
  },
];

function ClockIcon({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="6" stroke={color} strokeWidth="1"/>
      <path d="M6.5 3.5V6.5L8 8" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}
function CheckCircleIcon({ color }: { color: string }) {
  return (
    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
      <circle cx="6.5" cy="6.5" r="6" stroke={color} strokeWidth="1"/>
      <path d="M4 6.5L6 8.5L9.5 5" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

export default function QuestionPanel() {
  return (
    <div
      className="rounded-card"
      style={{
        backgroundColor: '#FFFDF8',
        border: '1px solid #E7D9C8',
        padding: 20,
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2 min-w-0">
          <span className="font-semibold whitespace-nowrap" style={{ fontSize: 18, color: '#2B2924' }}>
            Open questions
          </span>
          <span
            className="inline-flex items-center justify-center font-semibold rounded-pill shrink-0"
            style={{
              width: 22,
              height: 22,
              fontSize: 11,
              backgroundColor: '#F3E6D8',
              color: '#7A4E2B',
            }}
          >
            3
          </span>
        </div>
        <a href="#" className="whitespace-nowrap shrink-0" style={{ fontSize: 12, color: '#C95632', fontWeight: 500 }}>
          View all
        </a>
      </div>

      {/* Question cards */}
      <div className="flex flex-col gap-2">
        {questions.map((q) => (
          <div
            key={q.id}
            className="relative overflow-hidden"
            style={{
              borderRadius: 10,
              border: '1px solid #E7D9C8',
              backgroundColor: '#FFFDF8',
              minHeight: 76,
              paddingLeft: 14,
              paddingRight: 12,
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            {/* Left stripe */}
            <div
              className="absolute left-0 top-0 bottom-0"
              style={{ width: 3, backgroundColor: q.stripe }}
            />

            <div className="flex items-start gap-2">
              <span className="mt-0.5 shrink-0">
                {q.icon === 'clock' ? (
                  <ClockIcon color={q.stripe} />
                ) : (
                  <CheckCircleIcon color="#677F5A" />
                )}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-semibold leading-snug mb-1" style={{ fontSize: 12, color: '#2B2924' }}>
                  {q.text}
                </p>
                <div className="flex items-center justify-between">
                  <span className="font-medium" style={{ fontSize: 11, color: q.dueColor }}>
                    {q.dueLabel}
                  </span>
                  <span style={{ fontSize: 10, color: '#8A8074' }}>{q.assignee}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
