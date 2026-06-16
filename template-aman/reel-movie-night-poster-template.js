// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Reel — Movie Night Event Poster
//  Category: Entertainment / Restaurant
// ═══════════════════════════════════════════════════════════

module.exports = {
  id: 'reel-movie-night-poster',
  name: 'Reel — Movie Night Event Poster',
  category: 'Entertainment / Restaurant',
  layout: 'poster',
  tags: ['movie', 'night', 'event', 'restaurant', 'poster', 'cinema', 'entertainment', 'funky', 'gold'],

  defaults: {
    logo:         'Recreation Entertainment',
    logoIcon:     '🎬',
    headline1:    'MOVIE NIGHT',
    dateLabel:    '1ST MAY 2025',
    timeLabel:    '4PM PROMPT',
    location:     'RE CENTRE, 5 Smile Station Road, Portharcourt, Rivers State.',
    bg:           '#f5f4f2',
    accentRed:    '#e8192c',
    accentGold:   '#c9930a',
    img:          'https://images.unsplash.com/photo-1585647347483-22b66260dfff?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Barlow:wght@400;500;600;700&display=swap');

    .tpl-reel {
      container-type: size;
      container-name: rl;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'Barlow', sans-serif;
    }

    /* ── Background ── */
    .rl-bg {
      position: absolute; inset: 0; z-index: 0;
    }
    .rl-dots {
      position: absolute; inset: 0; z-index: 1; pointer-events: none;
      background-image: radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px);
      background-size: clamp(16px, 2.8cqi, 30px) clamp(16px, 2.8cqi, 30px);
    }
    .rl-glow {
      position: absolute;
      top: 30%; left: 50%;
      transform: translate(-50%, -50%);
      width: 80cqi; height: 50cqb;
      border-radius: 50%;
      background: radial-gradient(ellipse at center,
        rgba(255,210,60,0.15) 0%, transparent 70%
      );
      filter: blur(clamp(20px,4cqi,50px));
      z-index: 1; pointer-events: none;
    }

    /* ── Decorative reels ── */
    .rl-reel {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      z-index: 2;
      border: clamp(2px, 0.4cqi, 5px) solid rgba(0,0,0,0.08);
    }
    .rl-reel--tl {
      width: clamp(50px, 12cqi, 120px);
      height: clamp(50px, 12cqi, 120px);
      top: 1cqb; left: -3cqi;
    }
    .rl-reel--tr {
      width: clamp(40px, 10cqi, 90px);
      height: clamp(40px, 10cqi, 90px);
      top: 0.5cqb; right: -2cqi;
    }
    .rl-reel--bl {
      width: clamp(60px, 14cqi, 130px);
      height: clamp(60px, 14cqi, 130px);
      bottom: 10cqb; left: -4cqi;
    }

    /* ════════════════════════════════════════
       CONTENT SHELL — tight flex column
    ════════════════════════════════════════ */
    .rl-shell {
      position: absolute; inset: 0; z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      /* Small top pad — kills the big gap */
      padding-top: 1.8cqb;
    }

    /* ── Nav — compact ── */
    .rl-nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: clamp(4px, 0.6cqi, 8px);
      /* Minimal bottom margin */
      margin-bottom: 1.5cqb;
    }
    .rl-nav-icon {
      font-size: clamp(12px, 2cqi, 18px);
    }
    .rl-nav-name {
      font-size: clamp(9px, 1.2cqi, 12px);
      font-weight: 600;
      color: #111;
      line-height: 1.25;
    }

    /* ── Headline — no extra margins ── */
    .rl-headline-wrap {
      width: 100%;
      text-align: center;
      z-index: 6;
      position: relative;
      /* Tight gap below headline before image */
      margin-bottom: 1.2cqb;
      line-height: 1;
    }

    .rl-h1, .rl-h2 {
      display: block;
      font-family: 'DM Serif Display', Georgia, serif;
      font-weight: 400;
      letter-spacing: 0.05em;
      line-height: 0.9;
      margin: 0;
      text-align: center;
      width: 100%;
      background: linear-gradient(
        175deg,
        #fff8c0 0%,
        #f5d020 12%,
        #c9930a 32%,
        #f5d020 50%,
        #e8a000 65%,
        #c9930a 78%,
        #f0d060 92%,
        #fff1a0 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      filter: drop-shadow(0 3px 6px rgba(140,70,0,0.40))
              drop-shadow(0 1px 2px rgba(80,40,0,0.55));
    }

    .rl-h1 { font-size: clamp(52px, 13cqi, 200px); }
    .rl-h2 { font-size: clamp(46px, 18cqi, 180px); }

    /* ── Image ── */
    .rl-img-wrap {
      position: relative;
      width: 88cqi;
      /* Flex 1 fills remaining space above footer */
      flex: 1;
      min-height: 0;
      z-index: 5;
      border-radius: clamp(14px, 3cqi, 32px);
      overflow: hidden;
    }

    .rl-img-wrap img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center center;
      display: block;
      filter: contrast(1.04) saturate(1.08);
    }

    /* Soft inset vignette */
    .rl-img-vignette {
      position: absolute; inset: 0;
      border-radius: clamp(14px, 3cqi, 32px);
      box-shadow: inset 0 0 clamp(20px,5cqi,60px) clamp(12px,3.5cqi,44px) #f5f4f2;
      z-index: 2; pointer-events: none;
    }

    /* ════════════════════════════════════════
       FOOTER — single compact line
    ════════════════════════════════════════ */
    .rl-bar {
      width: 100%;
      display: flex;
      align-items: center;
      gap: clamp(6px, 1cqi, 12px);
      /* Compact vertical padding */
      padding: clamp(7px, 1.2cqb, 12px) clamp(10px, 2.5cqi, 20px);
      background: #ffffff;
      border-top: 1.5px solid rgba(0,0,0,0.07);
      flex-wrap: nowrap;
      flex-shrink: 0;
    }

    /* Inline chip — single line, no flex-column */
    .rl-chip {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: clamp(3px, 0.5cqb, 6px) clamp(6px, 1cqi, 11px);
      border-radius: clamp(3px, 0.4cqi, 6px);
      border: 1.5px solid;
      flex-shrink: 0;
      white-space: nowrap;
    }
    .rl-chip-text {
      font-weight: 700;
      font-size: clamp(8px, 1.3cqi, 12px);
      letter-spacing: 0.02em;
      text-transform: uppercase;
      line-height: 1;
    }

    .rl-sep {
      width: 1px;
      height: clamp(14px, 2cqb, 22px);
      background: rgba(0,0,0,0.10);
      flex-shrink: 0;
    }

    .rl-location {
      display: flex;
      align-items: center;
      gap: clamp(3px, 0.4cqi, 5px);
      flex: 1;
      min-width: 0;
      overflow: hidden;
    }
    .rl-pin {
      font-size: clamp(10px, 1.5cqi, 14px);
      flex-shrink: 0;
    }
    .rl-location-text {
      font-size: clamp(8px, 1.2cqi, 11px);
      font-weight: 500;
      color: #111;
      line-height: 1;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* ── Container queries ── */
    @container rl (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .rl-h1 { font-size: clamp(48px, 18cqi, 160px); }
      .rl-h2 { font-size: clamp(42px, 16cqi, 140px); }
    }
    @container rl (max-aspect-ratio: 0.82/1) {
      .rl-h1 { font-size: clamp(58px, 21cqi, 200px); }
      .rl-h2 { font-size: clamp(50px, 19cqi, 180px); }
      .rl-img-wrap { width: 90cqi; }
    }
    @container rl (min-aspect-ratio: 1.55/1) {
      .rl-h1 { font-size: clamp(44px, 13cqi, 140px); }
      .rl-h2 { font-size: clamp(38px, 11cqi, 120px); }
    }
  `,

  render(s) {
    const red  = s.accentRed  || '#e8192c';
    const gold = s.accentGold || '#c9930a';
    const bg   = s.bg         || '#f5f4f2';

    return `
    <div class="tpl-reel" style="background:${bg}">

      <div class="rl-bg" style="background:${bg}"></div>
      <div class="rl-dots"></div>
      <div class="rl-glow"></div>
      <div class="rl-reel rl-reel--tl"></div>
      <div class="rl-reel rl-reel--tr"></div>
      <div class="rl-reel rl-reel--bl"></div>

      <div class="rl-shell">

        <!-- Nav -->
        <div class="rl-nav">
          <span class="rl-nav-icon">${s.logoIcon}</span>
          <span class="rl-nav-name">${s.logo}</span>
        </div>

        <!-- Headline -->
        <div class="rl-headline-wrap">
          <span class="rl-h1">${s.headline1}</span>
          
        </div>

        <!-- Image fills remaining space -->
        <div class="rl-img-wrap">
          <img src="${s.img}" alt="" />
          <div class="rl-img-vignette" style="box-shadow:inset 0 0 clamp(20px,5cqi,60px) clamp(12px,3.5cqi,44px) ${bg}"></div>
        </div>

        <!-- Single line footer -->
        <div class="rl-bar">
          <div class="rl-chip" style="border-color:${gold}">
            <span class="rl-chip-text" style="color:${gold}">${s.dateLabel}</span>
          </div>
          <div class="rl-sep"></div>
          <div class="rl-chip" style="border-color:${red}">
            <span class="rl-chip-text" style="color:${red}">${s.timeLabel}</span>
          </div>
          <div class="rl-sep"></div>
          <div class="rl-location">
            <span class="rl-pin">📍</span>
            <span class="rl-location-text">${s.location}</span>
          </div>
        </div>

      </div>
    </div>`;
  }
};