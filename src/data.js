// Update this month whenever the channel figures are refreshed.
export const DATA_AS_OF = 'March 2026';

export const CHANNELS = [
  {
    id: 'f1',
    name: 'F1 News',
    game: 'Formula 1',
    handle: '@F1NewsTR · Est. 2022',
    url: 'https://youtube.com/@F1NewsTR',
    avatar: '/images/avatar-f1.png',
    logo: '/images/logo-f1.png',
    color: 'f1',
    subs: '100,000+',
    views90: '6.1M',
    views365: '22.7M',
    avgDuration: '10m 20s',
    uniqueMonthly: '325K',
    cadence: '1 video / day',
    highlight: 'Watched on TV',
    highlightVal: '26.8%',
    topGeo: 'US 28% · UK 21%',
    coreAge: '25–54 (70%)',
    badge: 'Flagship · Highest Reach',
    podcast: {
      text: 'Also a daily podcast on Spotify',
      detail: '4.6★ from 201 ratings',
      url: 'https://open.spotify.com/show/0Il18Gc8fo9LSz3Y76YazH',
    },
  },
  {
    id: 'cod',
    name: 'TacticalRab',
    game: 'Competitive CoD',
    handle: '@TacticalRab · Est. 2018',
    url: 'https://youtube.com/@TacticalRab',
    avatar: '/images/avatar-cod.png',
    logo: '/images/logo-cod.jpg',
    color: 'cod',
    subs: '136,000+',
    views90: '6.0M',
    views365: '20M',
    avgDuration: '8m 41s',
    uniqueMonthly: '188K',
    cadence: '2 videos / day',
    highlight: 'Regular viewers',
    highlightVal: '84%',
    topGeo: 'US 66% · UK 13%',
    coreAge: '25–34 (60%)',
    badge: 'Longest Running · Most Subscribers',
  },
  {
    id: 'val',
    name: 'Valorant News',
    game: 'Competitive Valorant',
    handle: '@TRValorant · Est. 2021',
    url: 'https://youtube.com/@TRValorant',
    avatar: '/images/avatar-valorant.png',
    logo: '/images/logo-valorant.png',
    color: 'val',
    subs: '84,000+',
    views90: '2.0M',
    views365: '11.1M',
    avgDuration: '5m 38s',
    uniqueMonthly: '128K',
    cadence: '1 video / day',
    highlight: 'Audience outside US',
    highlightVal: '22%',
    topGeo: 'US 30% · IN 14%',
    coreAge: '18–34 (80%)',
    badge: 'Youngest · Most International',
  },
];

export const AGGREGATE = {
  subs: '300K+',
  yearlyViews: '58M+',
  views90: '13.2M',
  uniqueMonthly: '777K+',
  dailyUploads: '4+',
};

export const CASE_STUDY = {
  brand: 'ZOWIE BenQ',
  title: 'ZOWIE BenQ',
  campaign: 'XL2566X+ Monitor & 4K Wireless Mice Launch',
  event: 'Sentinels × ZOWIE VIP Event — Oct 5, 2024',
  description: 'TacticalRab partnered with ZOWIE to promote two new product launches — the XL2566X+ monitor and 4K wireless mice — through dedicated video content on the @TRValorant channel.',
  metrics: [
    { value: '0.9M', label: 'Total Ad Impressions', sub: 'Across two sponsored videos' },
    { value: '900+', label: 'Direct Click-Throughs', sub: 'To ZOWIE product pages' },
    { value: '8×', label: 'Product Exposures', sub: 'Per viewer via rotational units' },
    { value: '126.4K', label: 'Total Views', sub: '107.3K unique viewers' },
    { value: '11.1K', label: 'Hours Watched', sub: 'Of sponsored content' },
    { value: '5:14', label: 'Avg View Duration', sub: '63.2K avg views per video' },
  ],
  comments: [
    { text: '"Never been so happy to see an ad, only love to you mate, keep going"', handle: '@aneesharnav3008' },
    { text: '"This is the first time I\'ve ever watched a sponsorship ad in its entirety. Been here since BO4."', handle: '@jerrynguyen7705' },
    { text: '"W promo. I love to see it. Shoutout to BenQ and Zowie for supporting the homie."', handle: '@ThatGuyJD' },
  ],
};

export const AGE_DATA = {
  f1: [
    { range: '18–24', pct: 9.3 },
    { range: '25–34', pct: 27.2 },
    { range: '35–44', pct: 26.4 },
    { range: '45–54', pct: 18.5 },
    { range: '55–64', pct: 11.8 },
  ],
  cod: [
    { range: '18–24', pct: 16.3 },
    { range: '25–34', pct: 59.8 },
    { range: '35–44', pct: 17.8 },
  ],
  val: [
    { range: '18–24', pct: 39.2 },
    { range: '25–34', pct: 43.1 },
    { range: '35–44', pct: 9.1 },
  ],
};

export const GEO_DATA = [
  { flag: '🇺🇸', country: 'United States', pct: '~40%' },
  { flag: '🇬🇧', country: 'United Kingdom', pct: '~15%' },
  { flag: '🇨🇦', country: 'Canada', pct: '~6%' },
  { flag: '🇦🇺', country: 'Australia', pct: '~5%' },
  { flag: '🇮🇳', country: 'India', pct: '~4%' },
  { flag: '🌍', country: 'Rest of World', pct: '~30%' },
];

export const OFFER = {
  label: 'What You Get',
  titleTop: 'One Format.',
  titleBottom: 'Proven To Work.',
  intro: 'One format, refined over several campaigns. A few decisions to fit your budget and goals.',
  core: [
    {
      title: '60-second integration',
      body: 'A dedicated segment in my own words — what the product is and why it matters to this audience. Description link and pinned comment included.',
    },
    {
      title: 'Always-on ticker',
      body: 'A rolling lower-corner unit carrying your product and a QR code. Delivered roughly 8 exposures per viewer for ZOWIE, on top of the spoken read.',
    },
  ],
  dials: [
    {
      title: 'Which channels',
      body: 'F1, CoD, Valorant, or any combination. No meaningful overlap, so multi-channel is real incremental reach.',
    },
    {
      title: 'One-off or ongoing',
      body: 'A single campaign or a recurring presence. Long-term placements consistently outperform one-off reads.',
    },
    {
      title: 'Reporting',
      body: 'Impressions, click-throughs, watch time and audience response after every campaign.',
    },
  ],
  closer: "No tiers, no rate card. Tell me what you're launching and what success looks like, and I'll come back with a number.",
};

export const PAST_PARTNERS = {
  label: 'Previously Partnered With',
  brands: [
    { name: 'ZOWIE BenQ', logo: '/images/partner-zowie.png' },
    { name: 'Corsair', logo: '/images/partner-corsair.png' },
    { name: 'PrizePicks', logo: '/images/partner-prizepicks.png' },
  ],
};
