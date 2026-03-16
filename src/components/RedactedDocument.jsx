import { useState } from 'react';
import useInView from '../hooks/useInView';

const defaultActive = {
  removed: true,
  diluted: true,
  deferred: true,
};

function RedactedDocument({ highlights }) {
  const [active, setActive] = useState(defaultActive);
  const { ref, isVisible } = useInView({ threshold: 0.25, once: false });

  const toggleHighlight = (key) => {
    setActive((current) => ({ ...current, [key]: !current[key] }));
  };

  return (
    <div ref={ref} className={`redacted-panel ${isVisible ? 'is-visible' : ''}`}>
      <div className="document-panel legal-paper">
        <span className="document-kicker">Interactive redactions</span>
        <h3>Draft clauses under pressure</h3>
        <div className="highlight-toggles">
          {highlights.map((highlight) => (
            <button
              key={highlight.key}
              type="button"
              className={`toggle-chip ${active[highlight.key] ? 'active' : ''}`}
              onClick={() => toggleHighlight(highlight.key)}
            >
              {highlight.label}
            </button>
          ))}
        </div>

        <div className="draft-text">
          <p>
            The proposed code would establish a more uniform law of family relations, including{' '}
            <span className={active.removed ? 'mark-removed' : ''}>far stronger equality in joint family property</span>,{' '}
            <span className={active.diluted ? 'mark-diluted' : ''}>rights of divorce with broader practical access</span>, and{' '}
            <span className={active.deferred ? 'mark-deferred' : ''}>a legislative pathway toward wider common civil principles</span>.
          </p>
          <p>
            It further sought to shift the legal imagination from community-bound exception toward enforceable citizenship within the home, including{' '}
            <span className={active.removed ? 'mark-removed' : ''}>a more direct challenge to patriarchal coparcenary power</span> and{' '}
            <span className={active.diluted ? 'mark-diluted' : ''}>clearer protection for women's independent claims to maintenance and status</span>.
          </p>
        </div>
      </div>

      <div className="annotation-legend">
        {highlights.map((highlight) => (
          <article className="legend-item" key={highlight.key}>
            <span className={`legend-swatch ${highlight.colorClass}`} />
            <div>
              <strong>{highlight.label}</strong>
              <p>{highlight.annotation}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default RedactedDocument;
