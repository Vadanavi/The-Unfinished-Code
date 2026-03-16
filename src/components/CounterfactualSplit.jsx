import { useState } from 'react';
import useInView from '../hooks/useInView';

function CounterfactualSplit({ options }) {
  const [active, setActive] = useState(options[0].title);
  const { ref, isVisible } = useInView({ threshold: 0.2, once: false });

  return (
    <div ref={ref} className={`counterfactual-split ${isVisible ? 'is-visible' : ''}`}>
      {options.map((option) => {
        const selected = active === option.title;

        return (
          <article
            key={option.title}
            className={`counter-panel ${option.tone} ${selected ? 'selected' : ''}`}
            onMouseEnter={() => setActive(option.title)}
          >
            <button type="button" className="counter-button" onClick={() => setActive(option.title)}>
              <span className="newspaper-tag">Alternate Edition</span>
              <h3>{option.title}</h3>
              <p>{option.deck}</p>
              <ul>
                {option.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </button>
          </article>
        );
      })}
    </div>
  );
}

export default CounterfactualSplit;
