import useInView from '../hooks/useInView';

function Timeline({ events }) {
  const { ref, isVisible } = useInView({ threshold: 0.15, once: false });

  return (
    <div ref={ref} className={`timeline-wrap ${isVisible ? 'is-visible' : ''}`}>
      <div className="timeline-track">
        {events.map((event) => (
          <article className="timeline-card" key={`${event.year}-${event.title}`}>
            <span className="timeline-year">{event.year}</span>
            <h3>{event.title}</h3>
            <p>{event.headline}</p>
            <div className="timeline-image" aria-hidden="true">
              <span>{event.imageLabel}</span>
            </div>
            <div className="timeline-tooltip">{event.headline}</div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
