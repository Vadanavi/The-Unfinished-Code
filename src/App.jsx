import Hero from './components/Hero';
import ActSection from './components/ActSection';
import VoiceCard from './components/VoiceCard';
import Timeline from './components/Timeline';
import RedactedDocument from './components/RedactedDocument';
import GapTimeline from './components/GapTimeline';
import CounterfactualSplit from './components/CounterfactualSplit';
import Footer from './components/Footer';
import ArchiveImage from './components/ArchiveImage';
import TypewriterText from './components/TypewriterText';
import {
  actOneImages,
  actTwoVoices,
  actThreeHighlights,
  actThreeLaws,
  counterfactualOptions,
  gapItems,
  timelineEvents,
} from './data/storyData';

function App() {
  return (
    <div className="app-shell">
      <div className="grain-overlay" aria-hidden="true" />
      <Hero />

      <main className="story-container">
        <ActSection
          actLabel="Act I"
          title="The Vision (1948-1951)"
          voice="Narrated through the drafting notes and reformist imagination of B.R. Ambedkar."
          theme="vision"
          aside="Typed across yellow legal paper, this act frames the Hindu Code Bill as a democratic rewrite of kinship, property, and citizenship."
        >
          <div className="act-grid act-grid-vision">
            <div className="document-panel legal-paper">
              <span className="document-kicker">Drafting Room, New Delhi, 1948</span>
              <TypewriterText
                text="I measure reform not by rhetoric, but by whether the law reaches the widow, the daughter, the deserted wife, and the person trapped inside custom."
                className="manifesto-quote"
              />
              <div className="annotation-group">
                <p>
                  The unified Hindu Code proposed equal inheritance, divorce rights, monogamy,
                  and an end to caste-bound customary exceptions that made rights depend on birth.
                </p>
                <p className="red-annotation">Redlined aim: replace hierarchy with a common civil foundation.</p>
              </div>
            </div>

            <div className="reform-list">
              <article className="reform-item">
                <h3>Equal inheritance</h3>
                <p>Daughters and widows would stand closer to sons in succession, challenging entrenched coparcenary privilege.</p>
              </article>
              <article className="reform-item">
                <h3>Divorce rights</h3>
                <p>Marriage would become dissoluble under law, not a unilateral moral sentence borne by women.</p>
              </article>
              <article className="reform-item">
                <h3>Abolition of caste custom</h3>
                <p>Customary law anchored in caste practice would yield to a more uniform statutory code.</p>
              </article>
              <article className="reform-item">
                <h3>Marriage and property reform</h3>
                <p>Domestic relations would be pulled into the constitutional era through rights, duties, and recorded legal remedies.</p>
              </article>
            </div>

            <div className="image-rail">
              {actOneImages.map((image) => (
                <ArchiveImage key={image.title} {...image} />
              ))}
            </div>
          </div>
        </ActSection>

        <ActSection
          actLabel="Act II"
          title="The Resistance"
          voice="A chamber of clashing voices: parliamentary caution, private grief, street agitation, and press spectacle."
          theme="resistance"
          aside="Expand each file to hear how the bill was translated, feared, defended, and misunderstood."
        >
          <div className="voices-grid">
            {actTwoVoices.map((voice) => (
              <VoiceCard key={voice.name} {...voice} />
            ))}
          </div>
        </ActSection>

        <ActSection
          actLabel="Act III"
          title="The Fracture (1952-1956)"
          voice="The code survives, but only after being cut apart, delayed, and softened into separate statutes."
          theme="fracture"
          aside="This act treats the archive as evidence: what was split, what was deferred, and what remained only as a trace."
        >
          <div className="fracture-layout">
            <div className="split-diagram document-panel">
              <span className="document-kicker">Legislative Rearrangement</span>
              <div className="diagram-root">Original Hindu Code Bill</div>
              <div className="diagram-arrow" />
              <div className="law-grid">
                {actThreeLaws.map((law) => (
                  <div className="law-card" key={law.title}>
                    <strong>{law.title}</strong>
                    <span>{law.year}</span>
                    <p>{law.note}</p>
                  </div>
                ))}
              </div>
            </div>

            <RedactedDocument highlights={actThreeHighlights} />
          </div>
        </ActSection>

        <ActSection
          actLabel="Act IV"
          title="What Remains"
          voice="A law student in 2025 reads the first draft as both precedent and unfinished promise."
          theme="remains"
          aside="The story ends in the present tense: with reforms won, delayed, diluted, and still absent."
        >
          <GapTimeline items={gapItems} />
        </ActSection>

        <section className="feature-section timeline-feature">
          <div className="section-heading">
            <span className="eyebrow">Archive Timeline</span>
            <h2>From draft to afterlife</h2>
            <p>Scroll sideways through headlines, images, and institutional turning points.</p>
          </div>
          <Timeline events={timelineEvents} />
        </section>

        <section className="feature-section counterfactual-feature">
          <div className="section-heading">
            <span className="eyebrow">Counterfactual Docket</span>
            <h2>What if history had gone differently?</h2>
            <p>Two alternate front pages imagine the futures the debates could have made.</p>
          </div>
          <CounterfactualSplit options={counterfactualOptions} />
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
