const milestones = [
  {
    id: 1,
    date: 'Today',
    time: '5:00 PM',
    name: 'Final copy approval',
    campaign: 'Spring Collection Launch',
  },
  {
    id: 2,
    date: 'Tomorrow',
    time: '11:00 AM',
    name: 'Scheduled post review',
    campaign: "Mother's Day Gift Guide",
  },
  {
    id: 3,
    date: '21 May 2026',
    time: '',
    name: 'Campaign launch',
    campaign: 'Spring Collection Launch',
  },
];

export default function MilestonesPanel() {
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
          Upcoming milestones
        </span>
        <a href="#" style={{ fontSize: 12, color: '#C95632', fontWeight: 500 }}>
          View calendar
        </a>
      </div>

      <div className="flex flex-col gap-2.5">
        {milestones.map((m) => (
          <div key={m.id} className="flex items-start gap-3">
            <div className="shrink-0" style={{ minWidth: 68 }}>
              <div className="font-semibold" style={{ fontSize: 11, color: '#C95632' }}>
                {m.date}
              </div>
              {m.time && (
                <div style={{ fontSize: 10, color: '#C95632', opacity: 0.8 }}>{m.time}</div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold" style={{ fontSize: 12, color: '#2B2924' }}>
                {m.name}
              </div>
              <div style={{ fontSize: 12, color: '#8A8074' }}>{m.campaign}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
