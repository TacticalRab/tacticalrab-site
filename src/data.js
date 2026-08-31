export const CHANNELS = [
  {
    id: 'f1',
    name: 'F1 News',
    game: 'Formula 1',
    handle: '@F1NewsTR · Est. 2022',
    avatar: '/images/avatar-f1.png',
    logo: '/images/logo-f1.png',
    color: 'f1',
    subs: '100,000+',
    views90: '5.8M',
    views365: '22.9M',
    avgDuration: '10m 04s',
    uniqueMonthly: '360K',
    cadence: '1 video / day',
    highlight: 'Watched on TV',
    highlightVal: '29.4%',
    topGeo: 'US 25% · UK 22%',
    coreAge: '25–54 (73%)',
    badge: 'Flagship · Highest Reach',
  },
  {
    id: 'cod',
    name: 'TacticalRab',
    game: 'Competitive CoD',
    handle: '@TacticalRab · Est. 2018',
    avatar: '/images/avatar-cod.png',
    logo: '/images/logo-cod.jpg',
    color: 'cod',
    subs: '136,000+',
    views90: '5.1M',
    views365: '23M',
    avgDuration: '8m 57s',
    uniqueMonthly: '186K',
    cadence: '2 videos / day',
    highlight: 'Regular viewers',
    highlightVal: '80%',
    topGeo: 'US 65% · UK 14%',
    coreAge: '25–34 (60%)',
    badge: 'Longest Running · Most Subscribers',
  },
  {
    id: 'val',
    name: 'Valorant News',
    game: 'Competitive Valorant',
    handle: '@TRValorant · Est. 2021',
    avatar: '/images/avatar-valorant.png',
    logo: '/images/logo-valorant.png',
    color: 'val',
    subs: '84,000+',
    views90: '2.3M',
    views365: '12.3M',
    avgDuration: '5m 40s',
    uniqueMonthly: '232K',
    cadence: '1 video / day',
    highlight: 'New viewer discovery',
    highlightVal: '22%',
    topGeo: 'US 29% · IN 13%',
    coreAge: '18–34 (82%)',
    badge: 'Highest Discovery Rate',
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
  intro: "I keep this deliberately simple. There's one integration format, refined over several campaigns, and a few decisions we make together to fit your budget and goals.",
  core: [
    {
      title: '60-second integration',
      body: 'A dedicated segment where I actually talk about the product — what it is, why it matters to this audience, and why I use it. Read in my own words, not a scripted ad. Includes a description link and a pinned comment.',
    },
    {
      title: 'Always-on ticker',
      body: 'A rolling promotional unit in the lower corner running throughout the video, carrying your product and a QR code. On the ZOWIE campaign this delivered roughly 8 product exposures per viewer on top of the spoken read.',
    },
  ],
  dials: [
    {
      title: 'Which channels',
      body: 'F1, CoD, Valorant, or any combination. Three separate audiences with no meaningful overlap, so a multi-channel buy is genuine incremental reach rather than the same viewers counted again.',
    },
    {
      title: 'One-off or ongoing',
      body: 'A single campaign, or a recurring presence across weeks. Long-term placements build familiarity and consistently outperform one-off reads.',
    },
    {
      title: 'Reporting depth',
      body: 'Impressions, click-throughs, watch time and audience response after every campaign as standard. Ongoing partnerships get quarterly reviews and optimisation.',
    },
  ],
  closer: 'No tiered packages and no rate card — audiences and objectives differ too much for that to be useful. Tell me what you\'re launching and what success looks like, and I\'ll come back with a straight number.',
};

export const PAST_PARTNERS = {
  label: 'Previously Partnered With',
  brands: ['ZOWIE BenQ', 'Corsair', 'PrizePicks', 'Underdog Fantasy'],
  note: 'Campaigns delivered across the gaming channels over the past two years.',
};
