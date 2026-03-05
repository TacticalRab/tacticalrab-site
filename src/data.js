export const CHANNELS = [
  {
    id: 'cod',
    name: 'TacticalRab',
    game: 'Competitive CoD',
    handle: '@TacticalRab · Est. 2018',
    avatar: '/images/avatar-cod.png',
    logo: '/images/logo-cod.jpg',
    color: 'cod',
    subs: '133K',
    views90: '5.1M',
    views365: '23M',
    avgDuration: '8m 57s',
    uniqueMonthly: '186K',
    cadence: '2 videos / day',
    highlight: 'Regular viewers',
    highlightVal: '80%',
    topGeo: 'US 65% · UK 14%',
    coreAge: '25–34 (60%)',
    badge: '8 Years Running · Flagship Channel',
  },
  {
    id: 'val',
    name: 'Valorant News',
    game: 'Competitive Valorant',
    handle: '@TRValorant',
    avatar: '/images/avatar-valorant.png',
    logo: '/images/logo-valorant.png',
    color: 'val',
    subs: '82K',
    views90: '2.3M',
    views365: '12.3M',
    avgDuration: '5m 40s',
    uniqueMonthly: '231.7K',
    cadence: '1 video / day',
    highlight: 'New viewer discovery',
    highlightVal: '22%',
    topGeo: 'US 29% · IN 13%',
    coreAge: '18–34 (82%)',
    badge: 'Highest Discovery Rate',
  },
  {
    id: 'f1',
    name: 'F1 News',
    game: 'Formula 1',
    handle: '@F1NewsTR · Est. 2022',
    avatar: '/images/avatar-f1.png',
    logo: '/images/logo-f1.png',
    color: 'f1',
    subs: '92K',
    views90: '5.8M',
    views365: '22.9M',
    avgDuration: '10m 04s',
    uniqueMonthly: '359.6K',
    cadence: '1 video / day',
    highlight: 'TV viewership',
    highlightVal: '29.4%',
    topGeo: 'US 25% · UK 22%',
    coreAge: '25–54 (73%)',
    badge: 'Fastest Growing · Highest Views',
  },
];

export const AGGREGATE = {
  subs: '307K+',
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
  description: 'TacticalRab partnered with ZOWIE to promote two new product launches — the XL2566X+ monitor and 4K wireless mice — through dedicated video content on the TacticalRab channel.',
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
  f1: [
    { range: '18–24', pct: 9.3 },
    { range: '25–34', pct: 27.2 },
    { range: '35–44', pct: 26.4 },
    { range: '45–54', pct: 18.5 },
    { range: '55–64', pct: 11.8 },
  ],
};

export const GEO_DATA = [
  { flag: '🇺🇸', country: 'United States', pct: '~40%' },
  { flag: '🇬🇧', country: 'United Kingdom', pct: '~15%' },
  { flag: '🇨🇦', country: 'Canada', pct: '~6%' },
  { flag: '🇮🇳', country: 'India', pct: '~7%' },
  { flag: '🇦🇺', country: 'Australia', pct: '~4%' },
  { flag: '🌍', country: 'Rest of World', pct: '~28%' },
];

export const OFFERS = [
  {
    tag: 'Most Popular',
    title: 'Integrated Sponsorship',
    description: 'Woven into video content with a natural ad read — the format trusted by my audience, as proven by the ZOWIE campaign.',
    features: [
      '30–90 second in-video integration',
      'Description link + pinned comment',
      'Performance reporting included',
    ],
    featured: false,
  },
  {
    tag: 'Best Value',
    title: 'Long-Term Partnership',
    description: 'Ongoing brand presence across content — building familiarity and trust over weeks rather than a single touchpoint.',
    features: [
      'Recurring integration across videos',
      'Always-on rotational ad units',
      'Quarterly reporting & optimization',
    ],
    featured: true,
  },
  {
    tag: 'Widest Reach',
    title: 'Multi-Channel Package',
    description: 'Run across two or all three channels to reach distinct demographics — from 18-year-old Valorant fans to 45-year-old F1 enthusiasts.',
    features: [
      'Up to 777K+ unique monthly viewers',
      'Tailored creative per audience',
      'Cross-vertical impact reporting',
    ],
    featured: false,
  },
];
