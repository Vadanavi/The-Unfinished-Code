import useInView from '../hooks/useInView';

function ActSection({ actLabel, title, voice, aside, theme, children }) {
  const { ref, isVisible } = useInView({ threshold: 0.2, once: false });

  const yearMatch = title.match(/^(.*?)\s*(\(.+\))\s*$/);
  const titleMain = yearMatch ? yearMatch[1] : title;
  const titleYears = yearMatch ? yearMatch[2] : null;

  return (
    <section ref={ref} className={`act-section act-${theme} ${isVisible ? 'is-visible' : ''}`}>
      <div className="act-header">
        <div>
          <span className="eyebrow">{actLabel}</span>
          <h2>
            {titleMain}
            {titleYears && <span className="act-title-years">{titleYears}</span>}
          </h2>
        </div>
        <div className="act-metadata">
          <p className="voice-note">{voice}</p>
          {typeof aside === 'string' ? <p className="section-aside">{aside}</p> : aside}
        </div>
      </div>
      <div className="act-content">{children}</div>
    </section>
  );
}

export default ActSection;
