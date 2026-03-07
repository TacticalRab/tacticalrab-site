import { useEffect, useRef } from 'react';
import { CHANNELS, AGGREGATE, CASE_STUDY, AGE_DATA, GEO_DATA, OFFERS } from './data';

/* ───────────────────────────── Utility Components ───────────────────────────── */

function SectionLabel({ children, center }) {
  return (
    <div className={`flex items-center gap-3 mb-4 text-accent uppercase tracking-[0.35em] text-[0.7rem] font-semibold ${center ? 'justify-center' : ''}`}>
      <span className="block w-6 h-0.5 bg-accent" />
      {children}
    </div>
  );
}

function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-[clamp(3rem,6vw,5.5rem)] leading-[0.95] tracking-wide mb-5">
      {children}
    </h2>
  );
}

function YouTubeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1C24 15.9 24 12 24 12s0-3.9-.5-5.8zM9.8 15.5V8.5l6.3 3.5-6.3 3.5z" />
    </svg>
  );
}

/* ───────────────────────────── useFadeUp Hook ───────────────────────────── */

function useFadeUp() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    document.querySelectorAll('.fade-up').forEach((el) => observer.observe(el));
    // Fallback
    const timer = setTimeout(() => {
      document.querySelectorAll('.fade-up:not(.visible)').forEach((el) => el.classList.add('visible'));
    }, 2000);
    return () => { observer.disconnect(); clearTimeout(timer); };
  }, []);
}

/* ───────────────────────────── Nav ───────────────────────────── */

function Nav() {
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (navRef.current) {
        navRef.current.classList.toggle('bg-bg/[0.92]', window.scrollY > 50);
        navRef.current.classList.toggle('backdrop-blur-lg', window.scrollY > 50);
        navRef.current.classList.toggle('border-b', window.scrollY > 50);
        navRef.current.classList.toggle('border-white/[0.07]', window.scrollY > 50);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav ref={navRef} className="fixed top-0 left-0 right-0 z-[900] px-6 md:px-[60px] py-5 flex justify-between items-center transition-all duration-300">
      <a href="#" className="font-display text-[1.6rem] tracking-[0.12em] text-white no-underline">
        Tactical<span className="text-accent">Rab</span>
      </a>
      <div className="flex gap-4 md:gap-8 items-center">
        <a href="#channels" className="hidden lg:inline text-[0.72rem] font-semibold tracking-[0.15em] uppercase text-muted no-underline hover:text-white transition-colors">Channels</a>
        <a href="#network" className="hidden lg:inline text-[0.72rem] font-semibold tracking-[0.15em] uppercase text-muted no-underline hover:text-white transition-colors">Numbers</a>
        <a href="#audience" className="hidden lg:inline text-[0.72rem] font-semibold tracking-[0.15em] uppercase text-muted no-underline hover:text-white transition-colors">Audience</a>
        <a href="#results" className="hidden lg:inline text-[0.72rem] font-semibold tracking-[0.15em] uppercase text-muted no-underline hover:text-white transition-colors">Results</a>
        <a href="#contact" className="bg-accent text-bg font-bold text-[0.75rem] tracking-[0.15em] uppercase px-6 py-2.5 no-underline btn-skew-sm hover:bg-white hover:-translate-y-0.5 transition-all">
          Partner With Me
        </a>
      </div>
    </nav>
  );
}

/* ───────────────────────────── Hero ───────────────────────────── */

function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-[60px] pb-16 md:pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/about-photo.jpg"
          alt="Arran 'Rab' Francis in Lisbon"
          className="hero-bg-img w-full h-full object-cover opacity-100"
        />
        {/* Bottom gradient */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(7,7,15,0.4) 0%, rgba(7,7,15,0.05) 25%, rgba(7,7,15,0.3) 55%, rgba(7,7,15,0.95) 85%, rgba(7,7,15,1) 100%)'
        }} />
        {/* Left gradient for text readability */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to right, rgba(7,7,15,0.8) 0%, rgba(7,7,15,0.35) 30%, rgba(7,7,15,0.0) 55%, rgba(7,7,15,0.15) 100%)'
        }} />
      </div>

      {/* Grid overlay */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: 'linear-gradient(rgba(226,255,0,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(226,255,0,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        maskImage: 'radial-gradient(ellipse 70% 50% at 30% 70%, black 20%, transparent 100%)',
      }} />

      {/* Content */}
      <div className="relative z-10 max-w-[800px]">
        <h1 className="font-display text-[clamp(2.2rem,5.5vw,5.5rem)] leading-[0.95] tracking-wide mb-6 md:mb-8">
          #1 in F1 & esports news.<br />
          <span className="text-accent">250M+ lifetime views.</span>
        </h1>

        <div className="flex items-end gap-6 md:gap-10">
          <div>
            <div className="font-display text-[clamp(3rem,6vw,5rem)] tracking-wide text-accent leading-none">
              777K<span className="text-white/40">+</span>
            </div>
            <div className="text-[0.72rem] font-semibold tracking-[0.2em] uppercase text-muted mt-1.5">
              Unique viewers every month
            </div>
          </div>
          <a href="#about" className="text-white/50 text-[0.82rem] font-medium tracking-[0.1em] uppercase no-underline border-b border-white/20 pb-0.5 hover:text-white hover:border-white transition-all mb-2">
            Learn more ↓
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hidden md:flex absolute bottom-10 right-[60px] z-10 items-center gap-3 text-[0.65rem] tracking-[0.2em] uppercase text-muted">
        Scroll
        <div className="scroll-line w-10 h-px bg-muted relative overflow-hidden" />
      </div>
    </section>
  );
}

/* ───────────────────────────── About ───────────────────────────── */

function About() {
  return (
    <section id="about" className="bg-surface py-16 md:py-[100px] px-6 md:px-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-[1200px] mx-auto">
        {/* Photo */}
        <div className="relative">
          <img
            src="/images/hero-lisbon.jpg"
            alt="Arran 'Rab' Francis at a competitive Call of Duty event"
            className="w-full h-auto block border border-white/[0.07]"
          />
          <div className="absolute top-4 left-4 -right-4 -bottom-4 border-2 border-accent/30 pointer-events-none hidden md:block" />
        </div>

        {/* Text */}
        <div>
          <SectionLabel>About</SectionLabel>
          <h2 className="font-display text-[clamp(2.2rem,3.8vw,4rem)] leading-[0.95] tracking-wide mb-2">
            Arran <span className="text-accent">"Rab"</span> Francis
          </h2>
          <p className="text-[0.95rem] text-white/60 leading-[1.8] mb-4 font-light">
            I'm a sports news creator running three independent YouTube channels covering competitive Call of Duty, Valorant, and Formula 1. Publishing daily since 2018, I've built three genuinely separate audiences — no cross-promotion, no shared fanbases. Over eight years, I've established myself as one of the most consistent voices across competitive gaming and motorsport news.
          </p>
          <p className="text-[0.95rem] text-white/60 leading-[1.8] mb-6 font-light">
            My F1 channel is the fastest-growing of the three and the one I'm most excited about right now, reaching an audience across the US, UK, and beyond.
          </p>
          <a href="#channels" className="bg-accent text-bg font-bold text-[0.85rem] tracking-[0.15em] uppercase px-9 py-4 no-underline btn-skew hover:bg-white hover:-translate-y-0.5 transition-all inline-block">
            See the Channels
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Overlap Callout ───────────────────────────── */

function OverlapCallout() {
  return (
    <section className="bg-bg py-16 md:py-[100px] px-6 md:px-[60px]">
      <div className="max-w-[900px] mx-auto text-center">
        <div className="inline-block text-[0.65rem] font-bold tracking-[0.3em] uppercase text-accent px-4 py-1.5 border border-accent/25 mb-8">
          Key Differentiator
        </div>
        <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-wide mb-6">
          Three channels. Three audiences.<br />
          <span className="text-accent">Minimal overlap.</span>
        </h2>
        <p className="text-[1.05rem] text-white/55 leading-[1.8] max-w-[640px] mx-auto">
          Each channel was built organically with <strong className="text-white">no cross-promotion</strong>, serving entirely different communities. A partnership across all three channels reaches approximately <strong className="text-white">307K true unique subscribers</strong> and <strong className="text-white">777K+ unique monthly viewers</strong> — not the same audience counted three times.
        </p>
      </div>
    </section>
  );
}

/* ───────────────────────────── Channel Card ───────────────────────────── */

const colorMap = {
  cod: { tag: 'bg-cod/15 text-cod', dot: 'bg-cod', num: 'text-cod', border: 'channel-border-cod', avatarBorder: 'border-cod/40' },
  val: { tag: 'bg-val/15 text-val', dot: 'bg-val', num: 'text-val', border: 'channel-border-val', avatarBorder: 'border-val/40' },
  f1: { tag: 'bg-f1/15 text-f1light', dot: 'bg-f1light', num: 'text-f1light', border: 'channel-border-f1', avatarBorder: 'border-f1/40' },
};

function ChannelCard({ channel }) {
  const colors = colorMap[channel.color];
  return (
    <div className={`bg-bg p-8 md:p-10 relative overflow-hidden hover:-translate-y-1 transition-transform fade-up ${colors.border}`}>
      <div className="flex justify-between items-start gap-4">
        <div>
          <img src={channel.avatar} alt={channel.name} className={`w-[72px] h-[72px] rounded-full object-cover mb-5 border-2 ${colors.avatarBorder}`} />

          <div className={`inline-flex items-center gap-2 text-[0.62rem] font-bold tracking-[0.2em] uppercase px-3 py-1 mb-6 ${colors.tag}`}>
            <div className={`w-[7px] h-[7px] rounded-full ${colors.dot}`} />
            {channel.game}
          </div>

          <div className="font-display text-[2rem] tracking-[0.05em] mb-1 leading-tight">{channel.name}</div>
          <div className="text-[0.72rem] text-muted tracking-[0.1em] mb-8">{channel.handle}</div>
        </div>
        {channel.logo && (
          <img src={channel.logo} alt={channel.game} className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] object-contain mt-2" style={{ mixBlendMode: 'screen' }} />
        )}
      </div>

      {/* Hero stat */}
      <div className="mb-8 pb-8 border-b border-white/[0.07]">
        <div className={`font-display text-[3.2rem] leading-none tracking-wide ${colors.num}`}>{channel.subs}</div>
        <div className="text-[0.68rem] font-semibold tracking-[0.15em] uppercase text-muted mt-1">Subscribers</div>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 gap-5 mb-8">
        {[
          { num: channel.views90, label: 'Views / 90 Days' },
          { num: channel.views365, label: 'Views / Year' },
          { num: channel.avgDuration, label: 'Avg Watch Time' },
          { num: channel.uniqueMonthly, label: 'Unique Monthly' },
        ].map((s, i) => (
          <div key={i}>
            <div className="font-display text-[1.5rem] tracking-wide leading-none">{s.num}</div>
            <div className="text-[0.62rem] font-semibold tracking-[0.12em] uppercase text-muted mt-1">{s.label}</div>
          </div>
        ))}
      </div>

      {/* Demo rows */}
      {[
        { label: 'Upload cadence', value: channel.cadence },
        { label: channel.highlight, value: channel.highlightVal },
        { label: 'Top geo', value: channel.topGeo },
        { label: 'Core age', value: channel.coreAge },
      ].map((row, i) => (
        <div key={i} className="flex justify-between items-center text-[0.78rem] py-2 border-b border-white/[0.07] last:border-b-0 text-white/70">
          <span>{row.label}</span>
          <span className="font-semibold text-white">{row.value}</span>
        </div>
      ))}

      <div className="inline-block bg-accent/10 text-accent text-[0.62rem] font-bold tracking-[0.15em] uppercase px-2.5 py-1 mt-4 badge-skew">
        {channel.badge}
      </div>
    </div>
  );
}

function ChannelsSection() {
  return (
    <section id="channels" className="bg-surface py-16 md:py-[120px] px-6 md:px-[60px]">
      <SectionLabel>The Channels</SectionLabel>
      <SectionTitle>
        Three Verticals.<br />Built Daily.
      </SectionTitle>
      <p className="text-base text-white/50 max-w-[520px] leading-relaxed mb-12 md:mb-16">
        Each channel publishes daily news coverage to a loyal, engaged audience. Different games, different demographics — same editorial standard.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {CHANNELS.map((ch) => (
          <ChannelCard key={ch.id} channel={ch} />
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────────── Network Numbers ───────────────────────────── */

function NetworkSection() {
  const stats = [
    { num: AGGREGATE.subs, label: 'Total Subscribers', sub: 'Across 3 channels' },
    { num: AGGREGATE.views90, label: 'Views Last 90 Days', sub: 'Consistent growth trajectory' },
    { num: AGGREGATE.uniqueMonthly, label: 'Unique Monthly Viewers', sub: 'Minimal audience overlap' },
    { num: AGGREGATE.dailyUploads, label: 'Videos Published Daily', sub: '365 days a year' },
  ];

  return (
    <section id="network" className="bg-bg py-16 md:py-[120px] px-6 md:px-[60px] text-center">
      <div className="max-w-[1100px] mx-auto">
        <SectionLabel center>Combined Network</SectionLabel>
        <div className="font-display text-[clamp(2rem,4vw,3.2rem)] tracking-[0.05em] text-white/30 mb-12 md:mb-16 leading-relaxed">
          Across all three channels
          <strong className="text-white block text-[clamp(3.5rem,8vw,7rem)] leading-[0.9] tracking-wide">
            58<span className="text-accent">M+</span> Views per Year
          </strong>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-0.5 mb-12 md:mb-16">
          {stats.map((s, i) => (
            <div key={i} className="bg-surface p-8 md:p-11 relative overflow-hidden net-stat-glow">
              <div className="font-display text-[clamp(2.2rem,4vw,3.5rem)] tracking-wide leading-none text-accent">{s.num}</div>
              <div className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-muted mt-2.5 leading-relaxed">{s.label}</div>
              <div className="text-[0.78rem] text-white/35 mt-2.5 leading-relaxed">{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Audience ───────────────────────────── */

function DemoBar({ label, pct, color }) {
  return (
    <div className="flex items-center gap-4 mb-2.5">
      <span className="text-[0.72rem] font-medium text-white/60 w-[100px] shrink-0">{label}</span>
      <div className="flex-1 h-1 bg-white/[0.06] overflow-hidden">
        <div className="h-full transition-all duration-[1.5s]" style={{ width: `${pct}%`, background: color }} />
      </div>
      <span className="font-display text-base tracking-[0.05em] text-white w-11 text-right shrink-0">{pct}%</span>
    </div>
  );
}

function AudienceSection() {
  const colorHex = { cod: '#ff6b35', val: '#ff4655', f1: '#ff4444' };

  return (
    <section id="audience" className="bg-surface py-16 md:py-[120px] px-6 md:px-[60px]">
      <SectionLabel>Audience</SectionLabel>
      <SectionTitle>Who's<br />Watching.</SectionTitle>
      <p className="text-base text-white/50 max-w-[520px] leading-relaxed mb-12 md:mb-16">
        95%+ male across all three channels. US-dominant with strong global representation — spanning the full 18–54 male demographic.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
        {/* Age distribution */}
        <div>
          <div className="font-display text-[1.3rem] tracking-[0.1em] mb-6 text-white/60">
            Age Distribution by Channel
          </div>
          {Object.entries(AGE_DATA).map(([key, data]) => (
            <div key={key} className="mb-6">
              <div className="text-[0.68rem] font-semibold tracking-[0.15em] uppercase mb-2.5" style={{ color: colorHex[key] }}>
                ● {key === 'cod' ? 'CoD — TacticalRab' : key === 'val' ? 'Valorant News' : 'F1 News'}
              </div>
              {data.map((d, i) => (
                <DemoBar key={i} label={d.range} pct={d.pct} color={colorHex[key]} />
              ))}
            </div>
          ))}
          <div className="bg-bg p-7 border-l-[3px] border-accent mt-8">
            <p className="text-[0.88rem] text-white/65 leading-relaxed">
              The F1 channel skews significantly older than the esports channels — reaching a <strong className="text-white">more affluent 35–54 demographic</strong> with stronger purchasing power. Combined, the network spans the full 18–54 male range.
            </p>
          </div>
        </div>

        {/* Geography */}
        <div>
          <div className="font-display text-[1.3rem] tracking-[0.1em] mb-6 text-white/60">
            Top Geographies — Network
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            {GEO_DATA.map((g, i) => (
              <div key={i} className="bg-bg p-5">
                <div className="text-2xl mb-1.5">{g.flag}</div>
                <div className="text-[0.68rem] font-semibold tracking-[0.15em] uppercase text-muted mb-1">{g.country}</div>
                <div className="font-display text-[1.8rem] tracking-wide text-accent leading-none">{g.pct}</div>
              </div>
            ))}
          </div>

          <div className="bg-bg p-7 border-l-[3px] border-accent mt-7">
            <p className="text-[0.88rem] text-white/65 leading-relaxed">
              <strong className="text-white">95%+ male across all three channels.</strong> Core viewership aged 18–44. US-dominant with strong UK and global representation — suited to English-language product launches in tech, gaming, automotive, and lifestyle.
            </p>
          </div>
          <div className="bg-bg p-7 border-l-[3px] border-f1light mt-3">
            <p className="text-[0.88rem] text-white/65 leading-relaxed">
              The F1 channel's <strong className="text-white">29.4% TV viewership</strong> is notable for brand awareness. Nearly 1 in 3 viewers watches on a big screen — amplifying visual product integrations significantly beyond typical YouTube figures.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Credentials ───────────────────────────── */

function CredentialsSection() {
  return (
    <section className="bg-bg py-16 md:py-[100px] px-6 md:px-[60px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center max-w-[1200px] mx-auto">
        {/* Text — left side on desktop */}
        <div>
          <SectionLabel>On the Ground</SectionLabel>
          <h2 className="font-display text-[clamp(2.5rem,5vw,4.5rem)] leading-[0.95] tracking-wide mb-6">
            Not just online.<br />
            <span className="text-accent">In the room.</span>
          </h2>
          <p className="text-[0.95rem] text-white/55 leading-[1.8] mb-8 font-light">
            Real-world presence across both esports and motorsport — embedded in the communities I cover, not just commentating from the outside.
          </p>
          <div className="flex flex-col gap-4">
            {[
              '10+ events attended as accredited press & creator',
              'Multiple CDL analyst desk appearances',
              'Trackside at the 2025 Canadian Grand Prix',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-accent text-sm">→</span>
                <span className="text-[0.92rem] text-white/75 font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Photo — right side on desktop, below on mobile */}
        <div className="relative">
          <img
            src="/images/credentials-f1.jpg"
            alt="TacticalRab trackside at the 2025 Canadian Grand Prix"
            className="w-full h-[280px] md:h-[360px] object-cover object-[center_55%] block border border-white/[0.07]"
          />
          <div className="absolute top-4 -left-4 right-4 -bottom-4 border-2 border-accent/30 pointer-events-none hidden md:block" />
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Case Study ───────────────────────────── */

function CaseStudySection() {
  return (
    <section id="results" className="bg-bg py-16 md:py-[120px] px-6 md:px-[60px]">
      <SectionLabel>Partnership Results</SectionLabel>
      <SectionTitle>Proven.<br />Measurable. Real.</SectionTitle>
      <p className="text-base text-white/50 max-w-[520px] leading-relaxed mb-12 md:mb-16">
        A track record of delivering results for brands — and an audience that responds positively to sponsors.
      </p>

      <div className="bg-surface border border-white/[0.07] overflow-hidden">
        {/* Header */}
        <div className="relative overflow-hidden p-8 md:p-14 flex flex-col md:flex-row justify-between items-start md:items-end gap-8 case-watermark" style={{ background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 100%)' }}>
          <div>
            <div className="text-[0.68rem] font-bold tracking-[0.3em] uppercase text-pink mb-3.5">Case Study · Q4 2024</div>
            <h3 className="font-display text-[2rem] md:text-[2.6rem] tracking-[0.05em] leading-none">
              ZOWIE BenQ <span className="text-pink">×</span> TacticalRab
            </h3>
          </div>
          <p className="text-[0.88rem] text-white/60 leading-relaxed max-w-[380px]">
            {CASE_STUDY.description}
          </p>
        </div>

        {/* Metrics grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px">
          {CASE_STUDY.metrics.map((m, i) => (
            <div key={i} className="p-7 md:p-9 bg-surface2 border-r border-white/[0.07] last:border-r-0">
              <div className="font-display text-[2.4rem] md:text-[3.2rem] tracking-wide text-pink leading-none">{m.value}</div>
              <div className="text-[0.68rem] font-semibold tracking-[0.15em] uppercase text-muted mt-2 leading-relaxed">{m.label}</div>
              <div className="text-[0.78rem] text-white/40 mt-1.5">{m.sub}</div>
            </div>
          ))}
        </div>

        {/* Audience reaction */}
        <div className="p-8 md:p-14 border-t border-white/[0.07] bg-surface2">
          <div className="text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-accent mb-5">
            ★ Audience Response to the Sponsorship
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {CASE_STUDY.comments.map((c, i) => (
              <div key={i} className="bg-bg p-5 border-l-2 border-accent/20">
                <div className="text-[0.82rem] text-white/70 leading-relaxed mb-2.5 italic">{c.text}</div>
                <div className="text-[0.62rem] font-semibold tracking-[0.1em] uppercase text-muted">{c.handle}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Partnership Options ───────────────────────────── */

function OffersSection() {
  return (
    <section id="offer" className="bg-surface py-16 md:py-[120px] px-6 md:px-[60px]">
      <SectionLabel>Partnership Formats</SectionLabel>
      <SectionTitle>Ways to<br />Work Together.</SectionTitle>
      <p className="text-base text-white/50 max-w-[520px] leading-relaxed mb-12 md:mb-16">
        Flexible formats tailored to your goals — from one-off activations to long-term brand presence.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5">
        {OFFERS.map((offer, i) => (
          <div
            key={i}
            className={`p-8 md:p-10 relative overflow-hidden hover:-translate-y-1 transition-transform fade-up ${
              offer.featured ? 'bg-accent text-bg' : 'bg-bg'
            }`}
          >
            <div className={`inline-block text-[0.6rem] font-bold tracking-[0.2em] uppercase px-2.5 py-1 mb-5 ${
              offer.featured ? 'bg-black/15 text-bg' : 'bg-accent/10 text-accent'
            }`}>
              {offer.tag}
            </div>
            <div className={`font-display text-[2rem] tracking-[0.04em] mb-2.5 leading-none ${
              offer.featured ? 'text-bg' : ''
            }`}>
              {offer.title}
            </div>
            <p className={`text-[0.85rem] leading-relaxed mb-7 ${
              offer.featured ? 'text-bg/65' : 'text-white/50'
            }`}>
              {offer.description}
            </p>
            <ul className="list-none p-0 m-0">
              {offer.features.map((f, j) => (
                <li key={j} className={`flex items-start gap-2.5 text-[0.82rem] py-2.5 border-b leading-relaxed last:border-b-0 ${
                  offer.featured ? 'border-black/15 text-bg/85' : 'border-white/[0.07] text-white/65'
                }`}>
                  <span className={`shrink-0 mt-0.5 ${offer.featured ? 'text-bg' : 'text-accent'}`}>→</span>
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ───────────────────────────── Contact ───────────────────────────── */

function ContactSection() {
  return (
    <section id="contact" className="bg-bg py-16 md:py-[120px] px-6 md:px-[60px] text-center">
      <div className="max-w-[700px] mx-auto">
        <SectionLabel center>Get In Touch</SectionLabel>
        <h2 className="font-display text-[clamp(3rem,7vw,6rem)] leading-[0.95] tracking-wide mb-6">
          Let's Build<br />Something <span className="text-accent">Together</span>
        </h2>
        <p className="text-base text-white/50 leading-[1.8] mb-12">
          Whether you want to discuss a specific campaign or explore what's possible, reach out directly. All partnership enquiries are handled personally.
        </p>
        <a
          href="mailto:tacticalrab@breakingpoint.gg"
          className="inline-block font-display text-[clamp(1.5rem,3.5vw,2.6rem)] tracking-[0.05em] text-white no-underline border-b-2 border-accent pb-1 mb-12 hover:text-accent transition-colors"
        >
          tacticalrab@breakingpoint.gg
        </a>
        <div className="flex justify-center gap-5 flex-wrap">
          {[
            { label: 'TacticalRab', url: 'https://youtube.com/@TacticalRab' },
            { label: 'Valorant News', url: 'https://youtube.com/@TRValorant' },
            { label: 'F1 News', url: 'https://youtube.com/@F1NewsTR' },
          ].map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[0.68rem] font-semibold tracking-[0.15em] uppercase text-muted no-underline px-4 py-2.5 border border-white/[0.07] hover:text-white hover:border-white/30 transition-all"
            >
              <YouTubeIcon />
              {s.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────────── Footer ───────────────────────────── */

function Footer() {
  return (
    <footer className="px-6 md:px-[60px] py-7 border-t border-white/[0.07] flex flex-col md:flex-row justify-between items-center gap-3 text-center md:text-left">
      <div className="font-display text-[1.1rem] tracking-[0.12em] text-white/40">
        Tactical<span className="text-accent/50">Rab</span>
      </div>
      <div className="text-[0.68rem] text-muted tracking-[0.08em]">
        © {new Date().getFullYear()} TacticalRab · tacticalrab.com · All rights reserved
      </div>
    </footer>
  );
}

/* ───────────────────────────── App ───────────────────────────── */

export default function App() {
  useFadeUp();

  // Smooth scroll for hash links
  useEffect(() => {
    const handleClick = (e) => {
      const href = e.target.closest('a')?.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return (
    <>
      <Nav />
      <Hero />
      <About />
      <OverlapCallout />
      <ChannelsSection />
      <NetworkSection />
      <AudienceSection />
      <CredentialsSection />
      <CaseStudySection />
      <OffersSection />
      <ContactSection />
      <Footer />
    </>
  );
}
