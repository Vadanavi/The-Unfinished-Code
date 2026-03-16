import useInView from '../hooks/useInView';

function ActSection({ actLabel, title, voice, aside, theme, children }) {
  const { ref, isVisible } = useInView({ threshold: 0.2, once: false });

  return (
    <section ref={ref} className={`act-section act-${theme} ${isVisible ? 'is-visible' : ''}`}>
      <div className="act-header">
        <div>
          <span className="eyebrow">{actLabel}</span>
          <h2>{title}</h2>
        </div>
        <div className="act-metadata">
          <p className="voice-note">{voice}</p>
          <p className="section-aside">{aside}</p>
        </div>
      </div>
      <div className="act-content">{children}</div>
    </section>
  );
}

export default ActSection;
