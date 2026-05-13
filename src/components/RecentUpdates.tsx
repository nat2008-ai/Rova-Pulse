const updates = [
  {
    id: 1,
    bullet: '#B85E4C',
    time: 'Today, 10:15 AM',
    message: 'Spring Collection flagged at risk — final copy approval still pending.',
    author: 'Devlab PM',
  },
  {
    id: 2,
    bullet: '#677F5A',
    time: 'Today, 9:02 AM',
    message: "Mother's Day carousel assets approved. All posts scheduled for 18 May.",
    author: 'Devlab PM',
  },
  {
    id: 3,
    bullet: '#B85E4C',
    time: 'Yesterday, 4:30 PM',
    message: 'Kitchen Essentials creative revisions overdue by 1 day. Devlab reminded.',
    author: 'System',
  },
];

export default function RecentUpdates() {
  return (
    <div
      className="rounded-card"
      style={{
        backgroundColor: '#FFFDF8',
        border: '1px solid #E7D9C8',
        padding: 20,
      }}
    >
      <div className="flex items-center justify-between mb-3">
        <span className="font-semibold" style={{ fontSize: 18, color: '#2B2924' }}>
          Recent updates
        </span>
        <a href="#" style={{ fontSize: 12, color: '#C95632', fontWeight: 500 }}>
          View all
        </a>
      </div>

      <div className="flex flex-col gap-3">
        {updates.map((u) => (
          <div key={u.id} className="flex gap-3">
            <div className="flex flex-col items-center" style={{ paddingTop: 3 }}>
              <div
                className="rounded-full shrink-0"
                style={{ width: 7, height: 7, backgroundColor: u.bullet }}
              />
              {u.id < updates.length && (
                <div
                  className="flex-1 mt-1"
                  style={{ width: 1, backgroundColor: '#E7D9C8', minHeight: 24 }}
                />
              )}
            </div>
            <div className="flex-1 pb-1">
              <div className="mb-0.5" style={{ fontSize: 11, color: '#8A8074' }}>{u.time}</div>
              <div className="font-semibold leading-snug mb-0.5" style={{ fontSize: 12, color: '#2B2924' }}>
                {u.message}
              </div>
              <div style={{ fontSize: 11, color: '#8A8074' }}>{u.author}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
