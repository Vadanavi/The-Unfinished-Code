import { useState } from 'react';
import useInView from '../hooks/useInView';

function VoiceCard({ name, style, label, excerpt, content }) {
  const [expanded, setExpanded] = useState(false);
  const { ref, isVisible } = useInView({ threshold: 0.15, once: false });

  return (
    <article
      ref={ref}
      className={`voice-card ${style} ${expanded ? 'expanded' : ''} ${isVisible ? 'is-visible' : ''}`}
    >
      <button type="button" className="voice-button" onClick={() => setExpanded((value) => !value)}>
        <span className="voice-label">{label}</span>
        <h3>{name}</h3>
        <p>{excerpt}</p>
        <span className="voice-toggle">{expanded ? 'Close file' : 'Open file'}</span>
      </button>
      <div className="voice-content">
        <p>{content}</p>
      </div>
    </article>
  );
}

export default VoiceCard;
