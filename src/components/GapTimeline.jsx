import useInView from '../hooks/useInView';

const milestoneYears = [1948, 1956, 1976, 2005, 2025];

function getPosition(year) {
  return ((year - 1948) / (2025 - 1948)) * 100;
}

function GapTimeline({ items }) {
  const { ref, isVisible } = useInView({ threshold: 0.2, once: false });

  return (
    <div ref={ref} className={`gap-timeline ${isVisible ? 'is-visible' : ''}`}>
      <div className="gap-axis">
        {milestoneYears.map((year) => (
          <span key={year} className="gap-year" style={{ left: `${getPosition(year)}%` }}>
            {year}
          </span>
        ))}
      </div>

      <div className="gap-rows">
        {items.map((item) => (
          <article key={item.title} className={`gap-row ${item.tone}`}>
            <div className="gap-copy">
              <h3>{item.title}</h3>
              <p>{item.detail}</p>
            </div>
            <div className="gap-bar-area">
              <div
                className="gap-bar"
                style={{
                  left: `${getPosition(item.start)}%`,
                  width: `${getPosition(item.end) - getPosition(item.start)}%`,
                }}
              />
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default GapTimeline;
