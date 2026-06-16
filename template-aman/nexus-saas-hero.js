
// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Nexus — SaaS Dark Hero
//  Category: SaaS / Technology
//  Style:    Deep space dark bg, glowing orb mesh gradient,
//            nav bar, centered hero type, dual CTA,
//            floating badge, particle-dot atmosphere
//  Best for: SaaS platforms, dashboards, dev tools,
//            analytics products, B2B tech brands
//  Sizes:    Fully responsive — 1:1, 4:5, 16:9, wide
// ═══════════════════════════════════════════════════════════

module.exports = {
  id: 'nexus-saas-hero',
  name: 'Nexus — SaaS Dark Hero',
  category: 'SaaS / Technology',
  layout: 'hero',
  tags: ['saas', 'dark', 'tech', 'hero', 'gradient', 'glow', 'navbar', 'cta', 'dashboard', 'b2b'],

  defaults: {
    logo:         'SaaS',
    logoIcon:     '◈',
    navLinks:     'Home · Features · Pricing · Docs · Contact',
    badgeText:    'Now in Public Beta',
    headline:     'Supercharge Your\nGrowth Pipeline',
    subline:      'Unify your analytics, automate campaigns, and turn every data point into a decision — all inside one intelligent workspace.',
    ctaPrimary:   'Join now',
    accentBlue:   '#0062ff',
    accentCyan:   '#18b8d4',
    bg:           '#030711',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700;800&family=DM+Sans:wght@300;400&display=swap');

    /* ── Root ── */
    .tpl-nexus {
      container-type: size;
      container-name: nx;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      font-family: var(--font-body, 'Sora', sans-serif);
      background: #030711;
    }

    /* ════════════════════════════════════════
       BACKGROUND SYSTEM
    ════════════════════════════════════════ */

    /* Deep base gradient */
    .nx-bg {
      position: absolute; inset: 0; z-index: 0;
      background:
        radial-gradient(ellipse 80% 60% at 50% 0%,
          rgba(6, 182, 212, 0.13) 0%,
          transparent 65%
        ),
        radial-gradient(ellipse 60% 50% at 20% 60%,
          rgba(59, 130, 246, 0.10) 0%,
          transparent 60%
        ),
        radial-gradient(ellipse 50% 40% at 80% 70%,
          rgba(99, 102, 241, 0.08) 0%,
          transparent 55%
        ),
        linear-gradient(175deg, #060d1f 0%, #030711 40%, #020508 100%);
    }

    /* Central glow orb — the hero light source */
    .nx-orb {
      position: absolute;
      top: -8cqb;
      left: 50%;
      transform: translateX(-50%);
      width: 75cqi;
      height: 75cqi;
      border-radius: 50%;
      background: radial-gradient(
        ellipse at center,
        rgba(6, 182, 212, 0.18) 0%,
        rgba(59, 130, 246, 0.12) 30%,
        rgba(99, 102, 241, 0.06) 55%,
        transparent 72%
      );
      filter: blur(clamp(20px, 3cqi, 48px));
      z-index: 1;
      pointer-events: none;
    }

    /* Star-field dots — CSS only */
    .nx-stars {
      position: absolute; inset: 0; z-index: 1;
      pointer-events: none;
      background-image:
        radial-gradient(1px 1px at 12% 18%, rgba(255,255,255,0.55) 0%, transparent 100%),
        radial-gradient(1px 1px at 28% 7%,  rgba(255,255,255,0.35) 0%, transparent 100%),
        radial-gradient(1px 1px at 44% 22%, rgba(255,255,255,0.45) 0%, transparent 100%),
        radial-gradient(1px 1px at 60% 12%, rgba(255,255,255,0.30) 0%, transparent 100%),
        radial-gradient(1px 1px at 76% 19%, rgba(255,255,255,0.50) 0%, transparent 100%),
        radial-gradient(1px 1px at 88% 8%,  rgba(255,255,255,0.40) 0%, transparent 100%),
        radial-gradient(1px 1px at 8%  38%, rgba(255,255,255,0.25) 0%, transparent 100%),
        radial-gradient(1px 1px at 92% 42%, rgba(255,255,255,0.30) 0%, transparent 100%),
        radial-gradient(1px 1px at 35% 55%, rgba(255,255,255,0.20) 0%, transparent 100%),
        radial-gradient(1px 1px at 65% 48%, rgba(255,255,255,0.22) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 50% 32%, rgba(6,182,212,0.6) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 22% 62%, rgba(59,130,246,0.5) 0%, transparent 100%),
        radial-gradient(1.5px 1.5px at 78% 55%, rgba(99,102,241,0.5) 0%, transparent 100%);
    }

    /* Horizontal grid lines — subtle tech texture */
    .nx-grid {
      position: absolute; inset: 0; z-index: 1;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px);
      background-size: clamp(32px, 5.5cqi, 72px) clamp(32px, 5.5cqi, 72px);
      mask-image: radial-gradient(ellipse 90% 80% at 50% 50%, black 30%, transparent 80%);
    }

    /* Bottom fade to black */
    .nx-floor {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 30cqb;
      background: linear-gradient(to top, #030711 0%, transparent 100%);
      z-index: 2;
      pointer-events: none;
    }

    /* ════════════════════════════════════════
       CONTENT SHELL
    ════════════════════════════════════════ */
    .nx-content {
      position: absolute; inset: 0; z-index: 3;
      display: grid;
      grid-template-rows: auto 1fr auto;
    }

    /* ════════════════════════════════════════
       NAV BAR
    ════════════════════════════════════════ */
    .nx-nav {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 3cqb 5cqi 0;
      gap: 2cqi;
    }

    /* Logo */
    .nx-logo {
      display: flex;
      align-items: center;
      gap: 0.7cqi;
      flex-shrink: 0;
    }
    .nx-logo-icon {
      font-size: clamp(13px, 2cqi, 22px);
      line-height: 1;
    }
    .nx-logo-name {
      font-family: var(--font-display, 'DM Serif Display', serif);
      font-weight: 700;
      font-size: clamp(12px, 1.8cqi, 20px);
      letter-spacing: -0.01em;
      color: #ffffff;
    }

    /* Nav links */
    .nx-links {
      display: flex;
      align-items: center;
      gap: 3cqi;
      flex: 1;
      justify-content: center;
    }
    .nx-link {
      font-size: clamp(9px, 1.2cqi, 13px);
      font-weight: 400;
      color: rgba(255,255,255,0.5);
      letter-spacing: 0.02em;
      white-space: nowrap;
    }

    /* CTA pill button */
    .nx-nav-cta {
      flex-shrink: 0;
      padding: 0.8cqb 2.2cqi;
      border-radius: 999px;
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 600;
      font-size: clamp(9px, 1.2cqi, 13px);
      letter-spacing: 0.02em;
      color: #ffffff;
      cursor: default;
      white-space: nowrap;
    }

    /* ════════════════════════════════════════
       HERO CENTER — badge + headline + subline + ctas
    ════════════════════════════════════════ */
    .nx-hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      padding: 0 7cqi;
      gap: 0;
    }

    /* Floating badge */
    .nx-badge {
      display: inline-flex;
      align-items: center;
      gap: 0.7cqi;
      padding: 0.7cqb 2cqi;
      border-radius: 999px;
      border: 1px solid rgba(6,182,212,0.3);
      background: rgba(6,182,212,0.08);
      margin-bottom: 3cqb;
      backdrop-filter: blur(8px);
    }
    .nx-badge-dot {
      width: clamp(5px, 0.65cqi, 7px);
      height: clamp(5px, 0.65cqi, 7px);
      border-radius: 50%;
      background: #06b6d4;
      box-shadow: 0 0 6px rgba(6,182,212,0.8);
      flex-shrink: 0;
    }
    .nx-badge-text {
      font-size: clamp(8px, 1.1cqi, 12px);
      font-weight: 400;
      color: rgba(6,182,212,0.95);
      letter-spacing: 0.04em;
      white-space: nowrap;
    }

    /* Headline */
    .nx-headline {
      font-family: ;
      font-weight: 500;
      font-size: clamp(28px, 7.5cqi, 96px);
      line-height: 1.05;
      letter-spacing: -0.03em;
      color: #ffffff;
      margin: 0 0 2.5cqb 0;
      white-space: pre-line;

      /* Gradient text — white → cyan shimmer */
      background: linear-gradient(
        160deg,
        #ffffff 0%,
        #e0f2fe 40%,
        #bae6fd 65%,
        #ffffff 100%
      );
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Subline */
    .nx-subline {
      font-size: clamp(10px, 1.5cqi, 17px);
      font-weight: 300;
      color: rgba(255,255,255,0.42);
      line-height: 1.75;
      max-width: 55%;
      margin: 0 0 3.5cqb 0;
      letter-spacing: 0.01em;
    }

    /* CTA row */
    .nx-ctas {
      display: flex;
      align-items: center;
      gap: 1.8cqi;
      flex-wrap: wrap;
      justify-content: center;
    }

    .nx-cta-primary {
      padding: 1.1cqb 3cqi;
      border-radius: 999px;
      font-family: 'Bricolage Grotesque', sans-serif;
      font-weight: 600;
      font-size: clamp(10px, 1.3cqi, 14px);
      letter-spacing: 0.01em;
      color: #ffffff;
      cursor: default;
      white-space: nowrap;
      box-shadow:
        0 0 20px rgba(59,130,246,0.35),
        0 0 40px rgba(59,130,246,0.15),
        inset 0 1px 0 rgba(255,255,255,0.15);
    }

    .nx-cta-secondary {
      display: inline-flex;
      align-items: center;
      gap: 0.8cqi;
      font-size: clamp(10px, 1.3cqi, 14px);
      font-weight: 400;
      color: rgba(255,255,255,0.6);
      cursor: default;
      letter-spacing: 0.01em;
      white-space: nowrap;
      border-bottom: 1px solid rgba(255,255,255,0.2);
      padding-bottom: 0.15cqb;
    }

    /* ════════════════════════════════════════
       BOTTOM STATUS BAR
    ════════════════════════════════════════ */
    .nx-bottom {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 3cqi;
      padding: 0 5cqi 3cqb;
      flex-wrap: wrap;
    }

    .nx-stat {
      display: flex;
      align-items: center;
      gap: 0.8cqi;
    }
    .nx-stat-pip {
      width: clamp(4px, 0.5cqi, 6px);
      height: clamp(4px, 0.5cqi, 6px);
      border-radius: 50%;
      background: rgba(6,182,212,0.6);
      flex-shrink: 0;
    }
    .nx-stat-text {
      font-size: clamp(7px, 1cqi, 10px);
      font-weight: 300;
      color: rgba(255,255,255,0.28);
      letter-spacing: 0.06em;
      text-transform: uppercase;
      white-space: nowrap;
    }

    .nx-stat-divider {
      width: 1px;
      height: clamp(8px, 1.2cqi, 14px);
      background: rgba(255,255,255,0.1);
    }

    /* ════════════════════════════════════════
       CONTAINER QUERIES
    ════════════════════════════════════════ */

    /* 1:1 Square */
    @container nx (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .nx-links      { display: none; }
      .nx-hero       { padding: 0 5cqi; }
      .nx-headline   { font-size: clamp(26px, 7cqi, 80px); }
      .nx-subline    { max-width: 78%; font-size: clamp(9px, 1.4cqi, 15px); }
      .nx-bottom     { gap: 2cqi; }
    }

    /* Portrait 4:5 */
    @container nx (max-aspect-ratio: 0.82/1) {
      .nx-links      { display: none; }
      .nx-hero       { padding: 0 5cqi; }
      .nx-headline   { font-size: clamp(28px, 8cqi, 88px); }
      .nx-subline    { max-width: 85%; font-size: clamp(10px, 1.6cqi, 17px); }
      .nx-nav        { padding: 3cqb 4cqi 0; }
    }

    /* Wide 16:9+ */
    @container nx (min-aspect-ratio: 1.55/1) {
      .nx-headline   { font-size: clamp(28px, 6.5cqi, 88px); }
      .nx-subline    { max-width: 46%; }
      .nx-hero       { padding: 0 10cqi; }
    }
  `,

  render(s) {
    const blue = s.accentBlue || '#3b82f6';
    const cyan = s.accentCyan || '#06b6d4';

    // Parse nav links string into individual spans
    const links = (s.navLinks || '').split('·').map(l =>
      `<span class="nx-link">${l.trim()}</span>`
    ).join('');

    return `
    <div class="tpl-nexus" style="background:${s.bg}">

      <!-- Background layers -->
      <div class="nx-bg"></div>
      <div class="nx-orb"></div>
      <div class="nx-stars"></div>
      <div class="nx-grid"></div>
      <div class="nx-floor" style="background:linear-gradient(to top,${s.bg} 0%,transparent 100%)"></div>

      <!-- Content -->
      <div class="nx-content">

        <!-- Nav -->
        <nav class="nx-nav">
          <div class="nx-logo">
            <span class="nx-logo-icon" style="color:${cyan}">${s.logoIcon}</span>
            <span class="nx-logo-name">${s.logo}</span>
          </div>
          <div class="nx-links">${links}</div>
          <div class="nx-nav-cta"
            style="background:linear-gradient(135deg,${blue},${cyan});box-shadow:0 0 18px ${blue}55">
            Contact
          </div>
        </nav>

        <!-- Hero center -->
        <div class="nx-hero">
          <div class="nx-badge">
            <div class="nx-badge-dot" style="background:${cyan};box-shadow:0 0 6px ${cyan}cc"></div>
            <span class="nx-badge-text">${s.badgeText}</span>
          </div>

          <h1 class="nx-headline">${s.headline}</h1>

          <p class="nx-subline">${s.subline}</p>

          <div class="nx-ctas">
            <div class="nx-cta-primary"
              style="background:linear-gradient(135deg,${blue} 0%,${cyan} 100%);box-shadow:0 0 22px ${blue}44,0 0 44px ${blue}22,inset 0 1px 0 rgba(255,255,255,0.18)">
              ${s.ctaPrimary}
            </div>
          </div>
        </div>

        <!-- Bottom stats bar -->
        <div class="nx-bottom">
          <div class="nx-stat">
            <div class="nx-stat-pip" style="background:${cyan}99"></div>
            <span class="nx-stat-text">10,000+ Teams</span>
          </div>
          <div class="nx-stat-divider"></div>
          <div class="nx-stat">
            <div class="nx-stat-pip" style="background:${blue}99"></div>
            <span class="nx-stat-text">99.9% Uptime</span>
          </div>
          <div class="nx-stat-divider"></div>
          <div class="nx-stat">
            <div class="nx-stat-pip" style="background:${cyan}99"></div>
            <span class="nx-stat-text">SOC 2 Certified</span>
          </div>
        </div>

      </div>
    </div>`;
  }
};