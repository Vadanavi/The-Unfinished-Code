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
  const vineetaNote = actFourLegacyNotes.find((item) => item.title === 'Vineeta Sharma');
  const legacyNotes = actFourLegacyNotes.filter((item) => item.title !== 'Vineeta Sharma');
  const firstContinuity = actFourContinuities[0];
  const lastContinuity = actFourContinuities[actFourContinuities.length - 1];
  const middleContinuities = actFourContinuities.slice(1, -1);

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

  <a href="/flowchart.html" target="_blank">
    <button className="game-btn"> Timeline</button>
  </a>
</div>
      
      <Hero />
      
      <main className="story-container">
        <ActSection
          actLabel="Act I"
          title="The Vision (1948-1951)"
           theme="vision"
          aside={
            <TypewriterText
              text="Ambedkar famously said “To leave inequality between class and class, between sex and sex, which is the soul of Hindu Society untouched and to go on passing legislation relating to economic problems is to make a farce of our constitution and to build a palace on a dung heap. This is the significance I attached to the Hindu Code.”. For Ambedkar, property was not merely a material concern but it was the structural foundation upon which gender subordination was built and perpetually renewed. The Hindu Code Bill was his instrument for dismantling that structure root and branch. "
              className="section-aside"
            />
          }
        >
          <div className="act-grid act-grid-vision">
            <div className="document-panel legal-paper">
            
                        <div className="annotation-group">
                <h3 className="red-annotation" > The Structural Problem: Coparcenary as the Engine of Exclusion</h3>
                <p>
                  The Mitakshara joint family system was Ambedkar's primary target because it was the mechanism through which gender inequality reproduced itself across generations. Women, whether wife, widow, mother, or daughter, held no interest in coparcenary property; they were entitled only to maintenance, at the mercy of surviving male members. Ambedkar understood that constitutional guarantees of political equality meant nothing while women remained economically dependent under personal law. His attack on the coparcenary was simultaneously an attack on caste patriarchy as dominant groups projected Hindu religion as mere identity, obscuring how that identity was built upon the systematic subordination of women.
               </p>
               <h3> </h3>
               <h3 className="red-annotation" > The Proposed Transformation: Absolute Estate and the Abolition of "Limited" Ownership</h3>
               <p> The cornerstone of Ambedkar's reform was converting women's "limited estate" into absolute estate. Under all traditional schools, a woman who inherited property held only a widow's estate: she could enjoy its income but could not sell, gift, or mortgage it, and upon her death it reverted not to her heirs but to her husband's male reversioners. Ambedkar's draft abolished this entirely. Women would inherit as absolute owners, on equal legal footing with men. The draft further proposed that daughters receive half a son's share, that dowry be treated as trust property, and that one uniform joint family system replace the regional patchwork of Mitakshara, Dayabhaga, and Marumakkattayam schools. That uniformity was itself radical as it stripped away the regional variation that had long served as an alibi for local patriarchy. </p>
                
              </div>
            </div>

            <div className="reform-list">
              <article className="reform-item">
                <h3>Male birth right as legal gender barrier </h3>
                <p> Property rights accrued to males at birth through the concept of janmaswatvam (right by birth), while daughters entered life with no such entitlement. A son was simultaneously an heir from the moment of his birth; a daughter was a dependent. This was not custom or sentiment but in fact it was enforceable law. Ambedkar's draft abolished the doctrine of acquisition of right by birth and proposed to replace survivorship with individual succession, severing the automatic intergenerational transmission of male privilege that the coparcenary enshrined. The retention of Mitakshara coparcenary was a constitutional discrimination against daughters and the Bill was designed precisely to end it.</p>
              </article>
              <article className="reform-item">
                <h3>The social resistance</h3>
                <p>The cartoons that circulated during the Bill's parliamentary debates are a measure of how deeply property reform threatened the social order. Jan Sangh Leader Shyama Prasad Mookerjee issued public statements against the bill, arguing it would undermine Hindu culture. Within Parliament, one member, Ramnarayan Singh stated: "Despite the challenges posed by Buddhism, Islam and Christianity, the Vedic religion did not perish... we have now Pandit Nehru's administration whose representative Dr. Ambedkar wants to abrogate with a single stroke all those rules which have existed since the beginning of the world." A saffron-clad swami went as far as saying that an "untouchable" had no business in matters normally the preserve of Brahmins. </p>
              </article>
              <article className="reform-item">
                <h3>Ambedkar's resignation letter</h3>
                <p>When the Bill was blocked by conservative opposition, Ambedkar resigned from the Cabinet in September 1951 as a protest against the denial of women's rights. His resignation letter is among the most revealing documents in Indian legal history. It makes explicit that he regarded the defeat of the property clauses not as a political setback but as a moral failure of the new republic. In his resignation statement, Ambedkar articulated the core principle that had driven is entire fight. He argued that allowing inequality between classes and between sexes, the very foundation of Hindu society, to continue unchallenged, while passing economic legislation, was to mock the Constitution itself and build a grand structure on a rotten foundation.</p>
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
                    aside={
                      <TypewriterText
                     text= "Once property is understood as a source of social power, the intensity of the resistance to the Hindu Code Bill becomes easier to explain, for the proposed reform threatened not tradition in the abstract, but entrenched systems of male authority and control."
                    classname="section-aside"
                    />
                    }
        >
          <div className="section-stack">
            <div className="resistance-stage">
              <article className="analysis-panel analysis-panel-plain">
                <span className="document-kicker">What does the nature of the opposition reveal about what the bill was actually threatening?</span>
                      <p>
                  The opposition claimed the bill would destroy Hindu civilization. However the fear was not limited to that. They feared loss of male control over
                  family property, and retaining property within caste groups. Parliamentarians, landowners, religious leaders - all opposed the bill for threats
                  they perceived like: daughters inheriting equally meant fathers lost monopoly control, daughters marrying freely meant property left caste lines,
                  a dalit reformer writing law meant Brahmin legal authority was undermined.
                  Their personal interests were prioritized over women's rights.   
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
          title="HSA 1956: The Mirage of Gender equality"
                    theme="fracture"
                  >
          <div className="section-stack">
            <div className="compromise-shell">
              <article className="analysis-panel compromise-panel">
                <span className="document-kicker">Analytical Question</span>
                <h3>Did 1956 act actually empowered Hindu women as independent subjects, or was it a calculated compromise designed to reinforce patriarchal control under the façade of formal equality?</h3>
                <p>
                   Apparently while Hindu Succession Act, 1956 tried to break the shackles of traditional patriarchal norms, it functioned as “mirage of equality” only. The act preserved structural foundations of Mitakshara coparcenary ensuring that property remains within male lineage rather than treating women as independent legal subjects.
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
              <div className="legacy-left">
                <article className="analysis-panel legacy-panel">
                  <span className="document-kicker"></span>
                                  <p>
                    The trajectory of reform under the HSA is not a decisive break from patriarchy, but a century
long legacy of compromise. While each amendment has been framed or devised to be
progressive, the underlying structure of inheritance (Mitakshara coparcenary) still stands
preserved.
These reforms show a pattern where there is an incremental inclusion of women without
dismantling the system that excluded them in the first place. Hence, this reform has operated
more as accommodation than transformation.
                  </p>
                </article>

                {vineetaNote ? (
                  <article className="legacy-note legacy-note-featured">
                    <span>{vineetaNote.year}</span>
                    <h3>{vineetaNote.title}</h3>
                    <p>{vineetaNote.detail}</p>
                  </article>
                ) : null}
              </div>

              <div className="legacy-notes">
                {legacyNotes.map((item) => (
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
                <span className="document-kicker">Why substantive equality remains unfinished: Formal transformation v. substantive reality</span>
                                <div className="continuity-list">
                  <p>{firstContinuity}</p>
                  <ul>
                    {middleContinuities.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p>{lastContinuity}</p>
                </div>
              </div>
            </div>
          </div>
        </ActSection>

        <section className="feature-section standalone-feature standalone-gap">
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
