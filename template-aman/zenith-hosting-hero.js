// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Zenith — Cloud Hosting Hero
//  Category: Technology / Hosting
//  Style:    Deep purple-dark vertical hero, bold condensed
//            headline top-left, product image right-weighted,
//            glowing neon edge accents, logo + domain nav bar,
//            subtle grid texture, layered depth gradients
//  Best for: Hosting providers, cloud infra, SaaS products,
//            tech brand posters, app store creatives
//  Sizes:    Fully responsive — 1:1, 4:5, 9:16, 16:9
//
//  FONTS:    Uses CSS variables from global fonts.css
// ═══════════════════════════════════════════════════════════

module.exports = {
  id: 'zenith-hosting-hero',
  name: 'Zenith — Cloud Hosting Hero',
  category: 'Technology / Hosting',
  layout: 'hero',
  tags: ['hosting', 'cloud', 'dark', 'purple', 'tech', 'server', 'poster', 'vertical', 'glow'],

  defaults: {
    logo:        'ZENITH',
    logoIcon:    '⬡',
    domain:      'zenith.cloud',
    headline:    'ULTRA\nCLOUD',
    subline:     'Unleash infinite scale — deploy & dominate anywhere.',
    ctaLabel:    'Get Started',
    tagline:     'Enterprise-grade infrastructure. Zero compromises.',
    accentPurple:'#7c3aed',
    accentBlue:  '#3b82f6',
    accentCyan:  '#06b6d4',
    bg:          '#0d0a1a',
    img:         'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@700;800;900&family=Barlow:wght@300;400;500&display=swap');

    /* ── Root ── */
    .tpl-zenith {
      container-type: size;
      container-name: zh;
      width: 100%; height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'Barlow', sans-serif;
      background: #0d0a1a;
    }

    /* ════════════════════════════════════════
       BACKGROUND SYSTEM
    ════════════════════════════════════════ */

    /* Base deep purple gradient */
    .zh-bg {
      position: absolute; inset: 0; z-index: 0;
      background:
        radial-gradient(ellipse 90% 60% at 70% 25%,
          rgba(124,58,237,0.28) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 20% 70%,
          rgba(59,130,246,0.14) 0%, transparent 55%),
        radial-gradient(ellipse 40% 35% at 85% 80%,
          rgba(6,182,212,0.10) 0%, transparent 50%),
        linear-gradient(165deg, #130d24 0%, #0d0a1a 45%, #07060f 100%);
    }

    /* Perspective grid — techy floor effect */
    .zh-grid {
      position: absolute; inset: 0; z-index: 1; pointer-events: none;
      background-image:
        linear-gradient(rgba(124,58,237,0.07) 1px, transparent 1px),
        linear-gradient(90deg, rgba(124,58,237,0.07) 1px, transparent 1px);
      background-size: clamp(28px,4.5cqi,56px) clamp(28px,4.5cqi,56px);
      mask-image: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.6) 40%, rgba(0,0,0,0.3) 100%);
    }

    /* Top-right corner accent lines */
    .zh-corner-tr {
      position: absolute;
      top: 0; right: 0;
      width: clamp(40px,10cqi,100px);
      height: clamp(40px,10cqi,100px);
      border-top: 1px solid rgba(124,58,237,0.5);
      border-right: 1px solid rgba(124,58,237,0.5);
      z-index: 2; pointer-events: none;
    }
    .zh-corner-bl {
      position: absolute;
      bottom: 0; left: 0;
      width: clamp(30px,7cqi,70px);
      height: clamp(30px,7cqi,70px);
      border-bottom: 1px solid rgba(59,130,246,0.4);
      border-left: 1px solid rgba(59,130,246,0.4);
      z-index: 2; pointer-events: none;
    }

    /* Bottom floor gradient */
    .zh-floor {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 45cqb;
      background: linear-gradient(to top, #07060f 0%, transparent 100%);
      z-index: 2; pointer-events: none;
    }

    /* ════════════════════════════════════════
       PRODUCT IMAGE — right side, large
    ════════════════════════════════════════ */
    .zh-img-wrap {
      position: absolute;
      right: -5cqi;
      top: 15cqb;
      width: 72cqi;
      height: 70cqb;
      z-index: 3;
    }

    .zh-img-wrap img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center top;
      /* Blend into dark bg — fade left and bottom */
      mask-image:
        linear-gradient(to left,  rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 55%, transparent 85%),
        linear-gradient(to top,   rgba(0,0,0,0.8) 0%, rgba(0,0,0,1)   40%);
      mask-composite: intersect;
      -webkit-mask-image:
        linear-gradient(to left,  rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.3) 55%, transparent 85%),
        linear-gradient(to top,   rgba(0,0,0,0.8) 0%, rgba(0,0,0,1)   40%);
      -webkit-mask-composite: source-in;
      filter: saturate(0.7) brightness(0.85) hue-rotate(200deg);
    }

    /* Glow bloom behind image */
    .zh-img-glow {
      position: absolute;
      right: 0; top: 10cqb;
      width: 60cqi; height: 55cqb;
      background: radial-gradient(ellipse at 60% 40%,
        rgba(124,58,237,0.22) 0%,
        rgba(59,130,246,0.12) 40%,
        transparent 70%
      );
      filter: blur(clamp(16px,3cqi,40px));
      z-index: 2; pointer-events: none;
    }

    /* Neon edge light on server — horizontal streak */
    .zh-neon-streak {
      position: absolute;
      right: 2cqi;
      top: 45cqb;
      width: 55cqi;
      height: 1px;
      background: linear-gradient(to left,
        transparent 0%,
        rgba(6,182,212,0.6) 30%,
        rgba(124,58,237,0.8) 60%,
        transparent 100%
      );
      filter: blur(1px);
      z-index: 4; pointer-events: none;
    }

    /* ════════════════════════════════════════
       CONTENT — three rows
    ════════════════════════════════════════ */
    .zh-content {
      position: absolute; inset: 0; z-index: 5;
      display: grid;
      grid-template-rows: auto 1fr auto;
      padding: 4cqb 5cqi 4.5cqb;
    }

    /* ── Top nav bar ── */
    .zh-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    .zh-logo {
      display: flex;
      align-items: center;
      gap: clamp(5px, 0.8cqi, 9px);
    }
    .zh-logo-icon {
      font-size: clamp(13px, 2.2cqi, 20px);
      line-height: 1;
      filter: drop-shadow(0 0 4px rgba(124,58,237,0.8));
    }
    .zh-logo-name {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: clamp(12px, 2cqi, 18px);
      letter-spacing: 0.08em;
      color: #ffffff;
      text-transform: uppercase;
    }

    .zh-domain {
      font-size: clamp(9px, 1.3cqi, 12px);
      font-weight: 400;
      color: rgba(255,255,255,0.35);
      letter-spacing: 0.05em;
    }

    /* ── Middle — headline block ── */
    .zh-middle {
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-top: 0;
      max-width: 58cqi;
    }

    /* Eyebrow */
    .zh-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: clamp(6px,1cqi,10px);
      margin-bottom: clamp(10px,2cqb,20px);
    }
    .zh-eyebrow-dot {
      width: clamp(5px,0.7cqi,7px);
      height: clamp(5px,0.7cqi,7px);
      border-radius: 50%;
      flex-shrink: 0;
      box-shadow: 0 0 6px currentColor;
    }
    .zh-eyebrow-text {
      font-size: clamp(7px,1.1cqi,11px);
      font-weight: 500;
      letter-spacing: 0.38em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.45);
    }

    /* Big condensed headline */
    .zh-headline {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: clamp(44px,13cqi,130px);
      line-height: 0.92;
      letter-spacing: -0.01em;
      color: #ffffff;
      text-transform: uppercase;
      white-space: pre-line;
      margin: 0 0 clamp(12px,2.2cqb,24px) 0;
      /* Subtle gradient on text */
      background: linear-gradient(160deg, #ffffff 0%, rgba(200,190,255,0.9) 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Subline */
    .zh-subline {
      font-size: clamp(10px,1.5cqi,15px);
      font-weight: 300;
      color: rgba(255,255,255,0.45);
      line-height: 1.65;
      max-width: 44cqi;
      margin: 0 0 clamp(16px,3cqb,32px) 0;
      letter-spacing: 0.01em;
    }

    /* CTA */
    .zh-cta {
      display: inline-flex;
      align-items: center;
      gap: clamp(8px,1.2cqi,12px);
      padding: clamp(9px,1.5cqb,15px) clamp(16px,3cqi,28px);
      border-radius: 999px;
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: clamp(10px,1.5cqi,14px);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: #ffffff;
      cursor: default;
      width: fit-content;
      box-shadow:
        0 0 20px rgba(124,58,237,0.4),
        0 0 40px rgba(124,58,237,0.15),
        inset 0 1px 0 rgba(255,255,255,0.15);
    }
    .zh-cta-arrow {
      font-size: 1.1em;
      line-height: 1;
    }

    /* ── Bottom — tagline ── */
    .zh-bottom {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 2cqi;
    }

    .zh-tagline {
      font-size: clamp(8px,1.1cqi,11px);
      font-weight: 300;
      color: rgba(255,255,255,0.22);
      letter-spacing: 0.05em;
      line-height: 1.5;
      max-width: 55%;
    }

    /* Status indicator bottom-right */
    .zh-status {
      display: flex;
      align-items: center;
      gap: clamp(5px,0.8cqi,8px);
      flex-shrink: 0;
    }
    .zh-status-dot {
      width: clamp(5px,0.65cqi,7px);
      height: clamp(5px,0.65cqi,7px);
      border-radius: 50%;
      background: #22c55e;
      box-shadow: 0 0 6px rgba(34,197,94,0.8);
      animation: zh-blink 2s ease-in-out infinite;
    }
    .zh-status-text {
      font-size: clamp(7px,1cqi,10px);
      font-weight: 400;
      color: rgba(255,255,255,0.28);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      white-space: nowrap;
    }

    @keyframes zh-blink {
      0%, 100% { opacity: 1; }
      50%       { opacity: 0.3; }
    }

    /* ════════════════════════════════════════
       CONTAINER QUERIES
    ════════════════════════════════════════ */

    /* 1:1 Square */
    @container zh (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .zh-headline  { font-size: clamp(40px, 12cqi, 110px); }
      .zh-middle    { max-width: 65cqi; }
      .zh-subline   { max-width: 55cqi; }
      .zh-img-wrap  { top: 20cqb; width: 65cqi; height: 60cqb; }
    }

    /* Portrait 4:5 / 9:16 — primary format */
    @container zh (max-aspect-ratio: 0.82/1) {
      .zh-headline  { font-size: clamp(48px, 14cqi, 130px); }
      .zh-middle    { max-width: 72cqi; }
      .zh-subline   { max-width: 62cqi; }
      .zh-img-wrap  { top: 30cqb; width: 85cqi; height: 60cqb; right: -8cqi; }
      .zh-img-glow  { width: 80cqi; right: -5cqi; }
    }

    /* Wide 16:9+ */
    @container zh (min-aspect-ratio: 1.55/1) {
      .zh-headline  { font-size: clamp(40px, 10cqi, 120px); }
      .zh-middle    { max-width: 50cqi; }
      .zh-subline   { max-width: 38cqi; }
      .zh-img-wrap  { top: 5cqb; width: 55cqi; height: 85cqb; right: -2cqi; }
    }
  `,

  render(s) {
    const purple = s.accentPurple || '#7c3aed';
    const blue   = s.accentBlue   || '#3b82f6';
    const cyan   = s.accentCyan   || '#06b6d4';

    return `
    <div class="tpl-zenith" style="background:${s.bg}">

      <!-- Background layers -->
      <div class="zh-bg"></div>
      <div class="zh-grid"></div>
      <div class="zh-corner-tr" style="border-color:${purple}66"></div>
      <div class="zh-corner-bl" style="border-color:${blue}55"></div>
      <div class="zh-floor" style="background:linear-gradient(to top,${s.bg} 0%,transparent 100%)"></div>

      <!-- Product image -->
      <div class="zh-img-glow"></div>
      <div class="zh-img-wrap">
        <img src="${s.img}" alt="" />
      </div>
      <div class="zh-neon-streak"></div>

      <!-- Content -->
      <div class="zh-content">

        <!-- Nav -->
        <div class="zh-nav">
          <div class="zh-logo">
            <span class="zh-logo-icon" style="color:${purple}">${s.logoIcon}</span>
            <span class="zh-logo-name">${s.logo}</span>
          </div>
          <span class="zh-domain">${s.domain}</span>
        </div>

        <!-- Headline block -->
        <div class="zh-middle">
          <div class="zh-eyebrow">
            
            <span class="zh-eyebrow-text">Next-Gen Infrastructure</span>
          </div>

          <h1 class="zh-headline">${s.headline}</h1>

          <p class="zh-subline">${s.subline}</p>

          <div class="zh-cta"
            style="background:linear-gradient(135deg,${purple} 100%)">
            <span>${s.ctaLabel}</span>
            <span class="zh-cta-arrow">→</span>
          </div>
        </div>

        <!-- Bottom bar -->
        <div class="zh-bottom">
          <span class="zh-tagline">${s.tagline}</span>
          <div class="zh-status">
            <div class="zh-status-dot"></div>
            <span class="zh-status-text">All Systems Live</span>
          </div>
        </div>

      </div>
    </div>`;
  }
};