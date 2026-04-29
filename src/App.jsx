import Hero from './components/Hero';
import ActSection from './components/ActSection';
import VoiceCard from './components/VoiceCard';
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
  gapItems,
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
    <button className="game-btn"> timeline</button>
  </a>
</div>
      
      <Hero />
      
      <main className="story-container">
        <ActSection
          actLabel="Act I"
          title="The Vision (1948-1951)"
          voice="Dr. B.R. Ambedkar, serving as India’s first Law Minister."
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
                <p>The Mitakshara system of Hindu joint family property was Ambedkar’s primary target because it was the legal mechanism through which gender inequality reproduced itself across generations. As per the Mitakshara system, women could not succeed to joint family property. A women, whether wife, widow, mother, daughter, or sister was only entitled to maintenance, remaining at the mercy of surviving male coparceners. The coparcenary was an exclusively male inner circle: joint ownership was the privilege of male members in the family, and females were precluded from acquiring any interest in coparcenary property. </p>
              </article>
              <article className="reform-item">
                <h3>Divorce rights</h3>
                <p>The cartoons that circulated during the Bill's parliamentary debates are a measure of how deeply property reform threatened the social order. Orthodox resistance from Hindu Mahasabha and RSS framed the Bill not as a legal reform but as a civilisational attack. Jan Sangh Leader Shyama Prasad Mookerjee issued public statements against the bill, arguing it would undermine Hindu culture. Within Parliament, one member, Ramnarayan Singh stated: "Despite the challenges posed by Buddhism, Islam and Christianity, the Vedic religion did not perish... we have now Pandit Nehru's administration whose representative Dr. Ambedkar wants to abrogate with a single stroke all those rules which have existed since the beginning of the world."</p>
              </article>
              <article className="reform-item">
                <h3>Abolition of caste custom</h3>
                <p>When the Bill was blocked by conservative opposition, Ambedkar resigned from the Cabinet in September 1951 as a protest against the denial of women's rights. His resignation letter is among the most revealing documents in Indian legal history. It makes explicit that he regarded the defeat of the property clauses not as a political setback but as a moral failure of the new republic. In his resignation statement, Ambedkar articulated the core principle that had driven is entire fight. He argued that allowing inequality between classes and between sexes, the very foundation of Hindu society, to continue unchallenged, while passing economic legislation, was to mock the Constitution itself and build a grand structure on a rotten foundation</p>
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

      </main>

      <Footer />
    </div>
  );
}

export default App;
