interface Stage {
  label: string;
  status: 'done' | 'at-risk' | 'upcoming';
  sublabel?: string;
}

const stages: Stage[] = [
  { label: 'Brief', status: 'done', sublabel: 'Done' },
  { label: 'Concepts', status: 'done', sublabel: 'Done' },
  { label: 'Drafts', status: 'done', sublabel: 'Done' },
  { label: 'Final copy', status: 'at-risk', sublabel: 'At risk' },
  { label: 'Launch', status: 'upcoming', sublabel: '21 May' },
];

export default function ProgressTimeline() {
  const doneCount = stages.filter((s) => s.status === 'done').length;
  const atRiskIdx = stages.findIndex((s) => s.status === 'at-risk');

  return (
    <div className="w-full">
      {/* Track */}
      <div className="relative flex items-center" style={{ height: 36 }}>
        {/* Background track */}
        <div
          className="absolute rounded-full"
          style={{
            left: '5%',
            right: '5%',
            height: 4,
            backgroundColor: '#E7D9C8',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
        {/* Progress fill — green up to at-risk, amber for at-risk segment */}
        <div
          className="absolute rounded-full"
          style={{
            left: '5%',
            width: `${(doneCount / (stages.length - 1)) * 90}%`,
            height: 4,
            backgroundColor: '#677F5A',
            top: '50%',
            transform: 'translateY(-50%)',
          }}
        />
        {atRiskIdx >= 0 && (
          <div
            className="absolute rounded-full"
            style={{
              left: `${5 + (doneCount / (stages.length - 1)) * 90}%`,
              width: `${(1 / (stages.length - 1)) * 90}%`,
              height: 4,
              backgroundColor: '#D89B35',
              top: '50%',
              transform: 'translateY(-50%)',
            }}
          />
        )}

        {/* Nodes */}
        {stages.map((stage, i) => {
          const leftPct = 5 + (i / (stages.length - 1)) * 90;
          return (
            <div
              key={stage.label}
              className="absolute flex items-center justify-center"
              style={{
                left: `${leftPct}%`,
                top: '50%',
                transform: 'translate(-50%, -50%)',
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor:
                  stage.status === 'done'
                    ? '#677F5A'
                    : stage.status === 'at-risk'
                    ? '#D89B35'
                    : '#FFFDF8',
                border:
                  stage.status === 'upcoming' ? '2px solid #E7D9C8' : 'none',
                zIndex: 1,
              }}
            >
              {stage.status === 'done' && (
                <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                  <path d="M2 5L4.5 7.5L8.5 3" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              )}
              {stage.status === 'at-risk' && (
                <div className="rounded-full" style={{ width: 6, height: 6, backgroundColor: 'white' }} />
              )}
            </div>
          );
        })}
      </div>

      {/* Labels */}
      <div className="relative flex" style={{ marginTop: 6 }}>
        {stages.map((stage, i) => {
          const leftPct = 5 + (i / (stages.length - 1)) * 90;
          return (
            <div
              key={stage.label}
              className="absolute text-center"
              style={{
                left: `${leftPct}%`,
                transform: 'translateX(-50%)',
                minWidth: 52,
              }}
            >
              <div
                className="font-semibold"
                style={{
                  fontSize: 11,
                  color:
                    stage.status === 'done'
                      ? '#677F5A'
                      : stage.status === 'at-risk'
                      ? '#C97849'
                      : '#8A8074',
                }}
              >
                {stage.label}
              </div>
              {stage.sublabel && (
                <div
                  style={{
                    fontSize: 10,
                    color:
                      stage.status === 'at-risk' ? '#C97849' : '#8A8074',
                  }}
                >
                  {stage.sublabel}
                </div>
              )}
            </div>
          );
        })}
      </div>
      <div style={{ height: 28 }} />
    </div>
  );
}
