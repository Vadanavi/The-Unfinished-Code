export const actOneImages = [
  {
    title: 'Committee portrait',
    year: '1948',
    caption: 'Drafting power was never neutral; every clause moved through committees, petitions, and public pressure.',
    align: 'top',
  },
  {
    title: 'Parliament file',
    year: '1951',
    caption: 'Debate transformed family law into a national referendum on social reform, religion, and constitutional authority.',
    align: 'center',
  },
  {
    title: 'Marked legal paper',
    year: '1950',
    caption: 'Annotations suggest a law under siege: underlines, objections, and appeals to delay surround the reform text.',
    align: 'bottom',
  },
];

export const actTwoVoices = [
  {
    name: 'Orthodox Hindu MP',
    style: 'mp',
    label: 'Parliament Speech',
    excerpt:
      'The state, he argued, should not wrench sacred domestic order into statutory form at the pace of political impatience.',
    content:
      'Framed as caution, the parliamentary objection cast the bill as a dangerous compression of custom into law. Speeches leaned on continuity, scriptural legitimacy, and the fear that rapid reform would rupture social stability more than it would deliver justice.',
  },
  {
    name: 'Hindu widow',
    style: 'widow',
    label: 'Personal Letter',
    excerpt:
      'Her letter does not speak in abstractions. It asks why survival should depend on the goodwill of male relatives.',
    content:
      'In the private register of loss and dependency, widowhood exposed the violence hidden inside inheritance rules. Reform meant food, shelter, legal standing, and a life no longer suspended between charity and social control.',
  },
  {
    name: "Women's rights activist",
    style: 'activist',
    label: 'Pamphlet',
    excerpt:
      'Pamphlets recast the bill as unfinished freedom: political independence without family reform was only half a revolution.',
    content:
      'Activists stitched together street rhetoric and constitutional language. The demand was clear: rights inside the home must not remain exempt from democracy, and delay should be read as a choice to preserve inequality.',
  },
  {
    name: 'Newspaper journalist',
    style: 'journalist',
    label: 'News Column',
    excerpt:
      'Daily reporting turned legal complexity into spectacle, measuring the bill through resignations, protests, cabinet strategy, and headlines.',
    content:
      "The press amplified conflict. Some columns treated reform as a modernizing necessity; others sold controversy. In both cases, journalism helped build the bill's public life as a national drama rather than a narrow technical reform.",
  },
];

export const actThreeLaws = [
  {
    title: 'Hindu Marriage Act',
    year: '1955',
    note: 'Codified marriage, divorce, restitution, and monogamy within a narrower statutory frame.',
  },
  {
    title: 'Hindu Succession Act',
    year: '1956',
    note: 'Reworked inheritance, but left major limits in coparcenary rights that would endure for decades.',
  },
  {
    title: 'Hindu Minority & Guardianship Act',
    year: '1956',
    note: 'Defined guardianship through a framework that remained deeply gendered in practice.',
  },
  {
    title: 'Hindu Adoptions & Maintenance Act',
    year: '1956',
    note: 'Separated adoption and maintenance into a distinct legal instrument rather than a unified code.',
  },
];

export const actThreeHighlights = [
  {
    key: 'removed',
    label: 'Removed provisions',
    colorClass: 'mark-removed',
    annotation: 'Entire claims to structural equality disappear from the final arrangement.',
  },
  {
    key: 'diluted',
    label: 'Diluted provisions',
    colorClass: 'mark-diluted',
    annotation: 'Some reforms remain, but in narrowed or delayed form.',
  },
  {
    key: 'deferred',
    label: 'Deferred provisions',
    colorClass: 'mark-deferred',
    annotation: 'Questions postponed to later legislative battles and amendments.',
  },
];

export const gapItems = [
  {
    title: 'Coparcenary rights',
    start: 1948,
    end: 2005,
    detail: "Ambedkar's egalitarian inheritance vision remained incomplete until the 2005 amendment broadened daughters' coparcenary rights.",
    tone: 'resolved',
  },
  {
    title: 'Divorce rights',
    start: 1948,
    end: 1976,
    detail: 'Divorce entered statutory law in 1955, but procedural access and grounds evolved gradually, with later reforms widening practical relief.',
    tone: 'partial',
  },
  {
    title: 'Uniform civil code',
    start: 1948,
    end: 2025,
    detail: 'The aspiration toward a broader secular family code remains politically contested and legally unfinished.',
    tone: 'open',
  },
  {
    title: 'Matrimonial property rights',
    start: 1948,
    end: 2025,
    detail: 'A robust shared-property regime on divorce never fully emerged, leaving care work and household contribution undervalued.',
    tone: 'open',
  },
];

export const timelineEvents = [
  {
    year: '1948',
    title: 'Draft introduced',
    headline: 'A unified Hindu Code Bill enters formal debate.',
    imageLabel: 'Draft bundle',
  },
  {
    year: '1951',
    title: 'Parliamentary debates peak',
    headline: 'Opposition hardens as reform becomes a referendum on religion, gender, and state power.',
    imageLabel: 'Debate chamber',
  },
  {
    year: '1951',
    title: 'Ambedkar resigns',
    headline: 'Resignation turns legislative delay into a constitutional and moral indictment.',
    imageLabel: 'Resignation note',
  },
  {
    year: '1955-56',
    title: 'Four Acts passed',
    headline: 'The original code survives only as a fractured legislative package.',
    imageLabel: 'Act folios',
  },
  {
    year: '2005',
    title: 'Succession amendment',
    headline: "Daughters' coparcenary rights are finally strengthened after decades of asymmetry.",
    imageLabel: 'Amendment clipping',
  },
];

export const counterfactualOptions = [
  {
    title: 'If the Hindu Code Bill Passed as Written',
    tone: 'optimistic',
    deck: 'A front page from a more ambitious republic.',
    bullets: [
      'Equal inheritance rights normalized from the early 1950s.',
      "Women's property claims enter family bargaining far earlier.",
      'Expanded legal autonomy likely shifts education, work, and household negotiation.',
    ],
  },
  {
    title: 'If the Bill Never Passed',
    tone: 'grim',
    deck: 'A republic that leaves patriarchal private law largely intact.',
    bullets: [
      'Mitakshara dominance shapes succession for much longer.',
      'Divorce rights remain fragmented and severely restricted.',
      'Gender justice in family law faces a steeper and slower political climb.',
    ],
  },
];
