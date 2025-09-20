import { MOCK_METRICS } from "./metrics";

export function MetricCards() {
  return (
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
      {MOCK_METRICS.map((m) => (
        <div
          key={m.name}
          className={`rounded-[10px] border-0 p-6 text-white ${m.bgClass}`}
        >
          <div className="flex items-center justify-between">
            {/* Chart/Icon on the left */}
            <div className="relative h-16 w-16">
              <svg className="h-16 w-16 -rotate-90" viewBox="0 0 36 36">
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="rgba(255,255,255,0.35)"
                  strokeWidth="2"
                />
                <path
                  d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray={`${m.value}, 100`}
                />
              </svg>
            </div>

            {/* Percentage and label on the right */}
            <div className="text-right">
              <div className="text-3xl font-bold">{m.value}%</div>
              <div className="text-white/80">{m.name}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
