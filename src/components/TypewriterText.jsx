import { useEffect, useState } from 'react';
import useInView from '../hooks/useInView';

function TypewriterText({ text, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  const { ref, isVisible } = useInView({ threshold: 0.4 });

  useEffect(() => {
    if (!isVisible) {
      return undefined;
    }

    let index = 0;
    const timer = window.setInterval(() => {
      index += 1;
      setDisplayed(text.slice(0, index));

      if (index >= text.length) {
        window.clearInterval(timer);
      }
    }, 22);

    return () => window.clearInterval(timer);
  }, [isVisible, text]);

  return (
    <p ref={ref} className={`typewriter ${className}`}>
      {displayed}
      <span className="type-cursor" aria-hidden="true">
        |
      </span>
    </p>
  );
}

export default TypewriterText;
