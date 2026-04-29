import useInView from '../hooks/useInView';

function Hero() {
  const { ref, isVisible } = useInView({ threshold: 0.4 });

  return (
    <header ref={ref} className={`hero ${isVisible ? 'is-visible' : ''}`}>
      <div className="hero-inner">
        <p className="eyebrow">Interactive legal documentary</p>

        <h1 className="hero-title">
          <span className="hero-title-lead">The</span>{' '}
          <span className="hero-title-core">Unfinished</span>{' '}
          <span className="hero-title-tail">Code</span>
        </h1>
        <p className="hero-subtitle">The Hindu Code Bill Debates (1948-1956)</p>
        <p className="hero-summary">
          A scroll-driven archive about law reform, resistance, fracture, and the promises that outlived the statute
          book.
        </p>
        <div className="hero-meta">
          <span>Scroll dossier</span>
          <span>4 acts</span>
          <span>Timeline, redactions, legal afterlives</span>
        </div>
      </div>
    </header>
  );
}

export default Hero;
