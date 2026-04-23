import Hero from './components/Hero';
import ActSection from './components/ActSection';
import VoiceCard from './components/VoiceCard';
import Timeline from './components/Timeline';
import RedactedDocument from './components/RedactedDocument';
import GapTimeline from './components/GapTimeline';
import Footer from './components/Footer';
import ArchiveImage from './components/ArchiveImage';
import TypewriterText from './components/TypewriterText';
import {
  actOneImages,
  actFourContinuities,
  actFourLegacyNotes,
  actThreeContradictions,
  actTwoVoices,
  actTwoAnxieties,
  actThreeHighlights,
  actThreeLaws,
  gapItems,
  timelineEvents,
} from './data/storyData';

function App() {
  return (
    
    <div className="app-shell">
      <div className="grain-overlay" aria-hidden="true" />

      <div style={{
  position: 'absolute',
  top: '20px',
  left: '50%', 
  transform: 'translateX(-50%)', 
  zIndex: 1000,
  display: 'flex',
  gap: '10px'
}}>
  <a href="/game/game.html" target="_blank">
    <button className="game-btn"> Game</button>
  </a>

  <a href="/video.html" target="_blank">
    <button className="game-btn"> Video</button>
  </a>

  <a href="/flowchart.html" target="_blank">
    <button className="game-btn"> Flowchart</button>
  </a>
</div>
      
      <Hero />
      
      <main className="story-container">
        <ActSection
          actLabel="Act I"
          title="The Vision (1948-1951)"
          voice="Dr. B.R. Ambedkar, serving as India’s first Law Minister, approached the Hindu Code Bill not as a piecemeal legal correction but as a civilizational intervention. The bill was introduced in the constituent assembly on April 11th, 1947, and was then moved by the select committee report on April 9th, 1948. This was followed by 4 years of deliberation and eventually remained inconclusive. In Ambedkar own words, “The bill died unused and unsung”. Therefore, he tendered his resignation on 27th September 1951, to the Prime Minister Pandit Jawahar Lal Nehru ."
          theme="vision"
          aside="Typed across yellow legal paper, this act frames the Hindu Code Bill as a democratic rewrite of kinship, property, and citizenship."
        >
          <div className="act-grid act-grid-vision">
            <div className="document-panel legal-paper">
              <span className="document-kicker">Drafting Room, New Delhi, 1948</span>
              <TypewriterText
                text="FOOD FOOD FOOD. HELLO WORLD. WE HAVE TO SUBMIT THIS SOOOOOOOOOON!!"
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
                <p>The Mitakshara system of Hindu joint family property was Ambedkar’s primary target because it was the legal mechanism through which gender inequality reproduced itself across generations. As per the Mitakshara system, women could not succeed to joint family property. A women, whether wife, widow, mother, daughter, or sister was only entitled to maintenance, remaining at the mercy of surviving male coparceners. The coparcenary was an exclusively male inner circle: joint ownership was the privilege of male members in the family, and females were precluded from acquiring any interest in coparcenary property. 
This was not incidental but structurally ordained. The Dharmashastra position, as traced in the sources, held that sisters received no share in patrimony if they had brothers. The Mitakshara school extended this exclusion not through individual will but through an automatic, birth-based system: sons acquired interest in ancestral property at birth, while daughters acquired nothing. Ambedkar understood that no political equality guaranteed by the Constitution could be real while women remained economically dependent by the operation of personal law. He codified Hindu personal law precisely because religion was a site of preservation and reproduction of inequalities. The dominant caste groups projected Hindu religion as a matter of identity alone, ruling out how the very bases of their caste and religious identities were built upon the subordination of women. The Bill's attack on the coparcenary was therefore simultaneously an attack on caste patriarchy.
</p>
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
          voice="This section reads opposition as a defence of power: over property, caste continuity, and the political authority to define tradition."
          theme="resistance"
          aside="The question is not who merely disliked reform, but what exactly they feared the bill would unsettle."
        >
          <div className="section-stack">
            <div className="resistance-stage">
              <article className="analysis-panel analysis-panel-plain">
                <span className="document-kicker">Analytical Question</span>
                <h3>What does the nature of the opposition reveal about what the Bill was actually threatening?</h3>
                <p>
                  The resistance did not simply protect culture. It protected a structure in which property,
                  caste order, and male authority were mutually reinforcing. Read this way, the archive of
                  opposition becomes evidence of how ambitious the original reform really was.
                </p>
              </article>

              <div className="anxiety-grid">
                {actTwoAnxieties.map((item) => (
                  <article key={item.title} className="anxiety-card">
                    <span className="anxiety-index">Threat</span>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="voices-grid voices-grid-triad">
              {actTwoVoices.map((voice) => (
                <VoiceCard key={voice.name} {...voice} />
              ))}
            </div>
          </div>
        </ActSection>

        <ActSection
          actLabel="Act III"
          title="The Compromise (1955-1956)"
          voice="The 1956 settlement enacted reform in form while preserving enough of the old structure to limit its reach."
          theme="fracture"
          aside="This section tracks the contradiction at the heart of the Hindu Succession Act: rights were announced, then narrowed by the architecture through which property still moved."
        >
          <div className="section-stack">
            <div className="compromise-shell">
              <article className="analysis-panel compromise-panel">
                <span className="document-kicker">Analytical Question</span>
                <h3>How did the Hindu Succession Act, 1956 simultaneously enact and undermine reform?</h3>
                <p>
                  The compromise worked by splitting principle from structure. The Act could speak the language
                  of equality while preserving the legal routes that kept property flowing through patriarchal
                  control. That is why formal reform and practical exclusion could coexist inside the same statute.
                </p>
              </article>

              <div className="contradiction-grid">
                {actThreeContradictions.map((item) => (
                  <article key={item.title} className="contradiction-card">
                    <span>{item.title}</span>
                    <h3>{item.subtitle}</h3>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="fracture-stack">
              <article className="split-diagram document-panel">
                <span className="document-kicker">From unified code to separate statutes</span>
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
              </article>
            </div>
          </div>
        </ActSection>

        <section className="feature-section standalone-feature standalone-fracture">
          <div className="section-heading standalone-heading">
            <span className="eyebrow">Independent Component</span>
            <h2>Fracture file</h2>
            <p>
              This sits after Act III as a separate reading space. It is meant to be encountered after the act,
              not absorbed as one more panel inside it.
            </p>
          </div>
          <div className="fracture-endcap">
            <div className="fracture-copy">
              <span className="eyebrow">Highlighted parts</span>
              <h3>What the final settlement cut away</h3>
              <p>
                After the doctrinal compromise comes the visual record of what was removed, diluted, or
                postponed before the code emerged as a scattered legislative package.
              </p>
            </div>
            <RedactedDocument highlights={actThreeHighlights} />
          </div>
        </section>

        <ActSection
          actLabel="Act IV"
          title="The Legacy"
          voice="Later amendments and judgments move the law forward, but they also show how persistent the original compromise has been."
          theme="remains"
          aside="The central question here is whether the gap is actually closing, or whether each reform only restates the same bargain in a new legal idiom."
        >
          <div className="section-stack">
            <div className="legacy-layout">
              <article className="analysis-panel legacy-panel">
                <span className="document-kicker">Analytical Question</span>
                <h3>Do subsequent amendments and judicial interpretation represent genuine progress?</h3>
                <p>
                  The post-1956 history is best read as uneven repair. Andhra Pradesh in 1986, the central
                  amendment in 2005, and <em>Vineeta Sharma</em> in 2020 all matter. But they matter inside a
                  field still shaped by coercion, informal exclusion, and the unequal social conditions under
                  which property claims are made.
                </p>
              </article>

              <div className="legacy-notes">
                {actFourLegacyNotes.map((item) => (
                  <article key={`${item.year}-${item.title}`} className="legacy-note">
                    <span>{item.year}</span>
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </article>
                ))}
              </div>
            </div>

            <div className="legacy-bottom">
              <div className="continuity-panel">
                <span className="document-kicker">Continuing barriers</span>
                <h3>Why substantive equality still remains unfinished</h3>
                <ul className="continuity-list">
                  {actFourContinuities.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </ActSection>

        <section className="feature-section standalone-feature standalone-gap">
          <div className="section-heading standalone-heading">
            <span className="eyebrow"></span>
            <h2>Legacy timeline</h2>
            <p>
              This is the year-bar timeline from Act IV, now pulled into its own space so it reads as a separate
              component after the act rather than part of the act body.
            </p>
          </div>
          <div className="gap-endcap">
            <div className="section-heading section-heading-inline">
              <span className="eyebrow">Timeline of unfinished reform</span>
              <h2>Where the gap closes, and where it does not</h2>
              <p>The legal story continues unevenly across rights that were resolved, partially repaired, or left structurally open.</p>
            </div>
            <GapTimeline items={gapItems} />
          </div>
        </section>

        <section className="feature-section standalone-feature standalone-timeline">
          <div className="section-heading standalone-heading">
            <span className="eyebrow"></span>
            <h2>Archive timeline</h2>
            <p>
              This separate archive follows the legacy timeline and tracks the larger chronology through major
              legislative and judicial turning points.
            </p>
          </div>
          <div className="timeline-endcap">
            <div className="section-heading section-heading-inline">
              <span className="eyebrow">Archive timeline</span>
              <h2>Reform after reform</h2>
              <p>The timeline now closes the sequence from outside the act, tracing how the same unresolved struggle keeps returning across decades.</p>
            </div>
            <Timeline events={timelineEvents} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default App;
