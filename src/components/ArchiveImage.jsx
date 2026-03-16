import useInView from '../hooks/useInView';

function ArchiveImage({ title, year, caption, align }) {
  const { ref, isVisible } = useInView({ threshold: 0.2, once: false });

  return (
    <figure ref={ref} className={`archive-image align-${align} ${isVisible ? 'is-visible' : ''}`}>
      <div className="archive-image-frame">
        <span>{title}</span>
        <small>{year}</small>
      </div>
      <figcaption>{caption}</figcaption>
    </figure>
  );
}

export default ArchiveImage;
