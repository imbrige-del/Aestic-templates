// ═══════════════════════════════════════════════════════════════════
//  TEMPLATE: Bloom — Browser Chrome UI Card
//  Category: UI Elements / Product Marketing
//  Style:    Clean white floating card with macOS-style browser
//            chrome, gradient sakura icon, pill URL bar, SVG nav
//            icons, and a full-bleed editorial photo strip below.
//            Inspired by modern SaaS product pages and Dribbble
//            browser mockup shots.
//  Best for: SaaS landing pages, app launches, product showcases,
//            portfolio headers, social media posts, tech editorial
//  Sizes:    Fully responsive — 1:1, 4:5, 16:9, wide
// ═══════════════════════════════════════════════════════════════════

export default {
  id: 'bloom-browser-header',
  name: 'Bloom — Browser Chrome UI Card',
  category: 'UI Elements / Product Marketing',
  layout: 'browser-card',
  tags: ['browser', 'mac', 'ui', 'saas', 'product', 'minimal', 'clean', 'card', 'chrome', 'mockup'],

  defaults: {
    // Brand
    appName:              'Bloom',
    appUrl:               'https://bloom.app',

    // Icon gradient (three stops)
    iconGradientA:        '#ff85b8',
    iconGradientB:        '#ff6b9d',
    iconGradientC:        '#f95c8a',

    // Eyebrow tag above headline
    eyebrow:              'Introducing Bloom',

    // Main editorial headline (use \n for line breaks)
    headline:             'The Workspace\nBuilt for What\nComes Next',

    // Supporting subline
    subline:              'Bloom brings together your tools, teams and ideas into one beautifully simple space.',

    // Bottom CTA text
    ctaText:              'Get Early Access',

    // Hero photo (full-bleed below URL bar)
    img:                  'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200&q=90',

    // Color scheme
    bg:                   '#eef0f4',       // outer page bg
    cardBg:               '#ffffff',       // card surface
    topBarBg:             '#e4e6eb',       // macOS title bar bg
    urlBarBg:             '#f3f4f6',       // URL pill bg
    accent:               '#0d0d0d',       // text + icon accent
    accentLight:          '#f0f0f0',       // secondary surfaces
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300;0,9..144,700;1,9..144,400&family=DM+Sans:wght@300;400;500&display=swap');

    /* ── Root wrapper ── */
    .tpl-bloom {
      container-type: size;
      container-name: bl;
      width: 100%;
      height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'DM Sans', sans-serif;
      background: #eef0f4;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ── Outer background — fine dot grid ── */
    .bl-bg {
      position: absolute;
      inset: 0;
      background-image: radial-gradient(circle, rgba(0,0,0,0.07) 1px, transparent 1px);
      background-size: clamp(18px, 3cqi, 32px) clamp(18px, 3cqi, 32px);
      z-index: 0;
    }

    /* ── Card ── */
    .bl-card {
      position: relative;
      z-index: 1;
      width: 88cqi;
      height: 88cqb;
      border-radius: clamp(10px, 1.5cqi, 22px);
      overflow: hidden;
      background: #ffffff;
      display: flex;
      flex-direction: column;
      box-shadow:
        0 1px 2px rgba(0,0,0,0.04),
        0 6px 20px rgba(0,0,0,0.07),
        0 28px 60px rgba(0,0,0,0.10),
        inset 0 0 0 1px rgba(0,0,0,0.07);
    }

    /* ══════════════════════════════════════
       BROWSER CHROME
    ══════════════════════════════════════ */

    /* Title bar */
    .bl-titlebar {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: clamp(7px, 1.1cqb, 14px) clamp(10px, 1.6cqi, 20px);
      background: #e4e6eb;
    }

    .bl-dots {
      display: flex;
      align-items: center;
      gap: clamp(5px, 0.6cqi, 8px);
    }

    .bl-dot {
      width: clamp(9px, 1.2cqi, 13px);
      height: clamp(9px, 1.2cqi, 13px);
      border-radius: 50%;
      flex-shrink: 0;
    }

    .bl-dot--red    { background: #ff5f57; }
    .bl-dot--yellow { background: #febc2e; }
    .bl-dot--green  { background: #28c840; }

    /* Tab pill */
    .bl-tab {
      display: flex;
      align-items: center;
      gap: clamp(5px, 0.7cqi, 10px);
      background: #ffffff;
      border-radius: clamp(6px, 0.9cqi, 10px);
      padding: clamp(4px, 0.5cqb, 7px) clamp(10px, 1.4cqi, 16px);
      box-shadow: inset 0 0 0 1px rgba(0,0,0,0.08);
    }

    .bl-tab-icon {
      width: clamp(16px, 2cqi, 24px);
      height: clamp(16px, 2cqi, 24px);
      border-radius: clamp(4px, 0.5cqi, 7px);
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .bl-tab-icon svg {
      width: 60%;
      height: 60%;
      display: block;
    }

    .bl-tab-name {
      font-family: 'DM Sans', sans-serif;
      font-weight: 500;
      font-size: clamp(10px, 1.35cqi, 15px);
      letter-spacing: -0.01em;
      color: #111827;
      white-space: nowrap;
    }

    .bl-tab-close {
      font-size: clamp(9px, 1.1cqi, 13px);
      color: #9ca3af;
      cursor: pointer;
      line-height: 1;
      margin-left: clamp(4px, 0.6cqi, 8px);
    }

    /* URL bar row */
    .bl-urlrow {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      gap: clamp(8px, 1.1cqi, 16px);
      padding: clamp(6px, 0.9cqb, 12px) clamp(10px, 1.6cqi, 20px);
      background: #ffffff;
      border-bottom: 1px solid rgba(0,0,0,0.06);
    }

    /* Nav buttons */
    .bl-nav {
      display: flex;
      align-items: center;
      gap: clamp(6px, 0.8cqi, 12px);
    }

    .bl-nav-btn {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      opacity: 0.5;
      transition: opacity 0.15s;
    }

    .bl-nav-btn:hover { opacity: 1; }

    .bl-nav-btn svg {
      width: clamp(12px, 1.4cqi, 18px);
      height: clamp(12px, 1.4cqi, 18px);
      display: block;
    }

    /* URL pill */
    .bl-url {
      flex: 1;
      display: flex;
      align-items: center;
      gap: clamp(5px, 0.6cqi, 8px);
      background: #f3f4f6;
      border: 1px solid #e5e7eb;
      border-radius: 999px;
      padding: clamp(4px, 0.5cqb, 7px) clamp(12px, 1.5cqi, 18px);
    }

    .bl-url svg {
      width: clamp(9px, 1cqi, 12px);
      height: clamp(9px, 1cqi, 12px);
      flex-shrink: 0;
      display: block;
    }

    .bl-url-text {
      font-size: clamp(10px, 1.25cqi, 14px);
      color: #374151;
      font-family: 'DM Sans', sans-serif;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    /* ══════════════════════════════════════
       EDITORIAL CONTENT BODY
    ══════════════════════════════════════ */

    .bl-body {
      flex: 1;
      min-height: 0;
      position: relative;
      display: flex;
      flex-direction: column;
    }

    /* Top editorial text zone */
    .bl-editorial {
      position: relative;
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: clamp(14px, 3cqb, 36px) clamp(16px, 7cqi, 60px) clamp(10px, 2cqb, 24px);
      flex-shrink: 0;
      background: #ffffff;
    }

    /* Eyebrow */
    .bl-eyebrow {
      display: inline-flex;
      align-items: center;
      gap: clamp(5px, 0.7cqi, 9px);
      margin-bottom: clamp(8px, 1.4cqb, 16px);
    }

    .bl-eyebrow-bar {
      width: clamp(18px, 2.5cqi, 30px);
      height: 1.5px;
      background: #111;
      flex-shrink: 0;
    }

    .bl-eyebrow-text {
      font-size: clamp(7px, 0.95cqi, 10px);
      font-weight: 400;
      letter-spacing: 0.36em;
      text-transform: uppercase;
      color: rgba(0,0,0,0.38);
      white-space: nowrap;
    }

    .bl-eyebrow-bar--right {
      opacity: 0.3;
    }

    /* Headline */
    .bl-headline {
      font-family: 'Fraunces', Georgia, serif;
      font-weight: 700;
      font-size: clamp(20px, 5.2cqi, 62px);
      line-height: 1.05;
      letter-spacing: -0.025em;
      color: #0d0d0d;
      text-align: center;
      white-space: pre-line;
      margin: 0 0 clamp(8px, 1.5cqb, 18px) 0;
      max-width: 86%;
    }

    .bl-headline em {
      font-style: italic;
      font-weight: 300;
      color: #555;
    }

    /* Decorative rule */
    .bl-rule {
      display: flex;
      align-items: center;
      gap: clamp(8px, 1.2cqi, 16px);
      width: 55%;
      margin-bottom: clamp(8px, 1.4cqb, 16px);
    }

    .bl-rule-line {
      flex: 1;
      height: 1px;
      background: rgba(0,0,0,0.08);
    }

    .bl-rule-diamond {
      width: clamp(4px, 0.55cqi, 7px);
      height: clamp(4px, 0.55cqi, 7px);
      border: 1px solid rgba(0,0,0,0.22);
      transform: rotate(45deg);
      flex-shrink: 0;
    }

    /* Subline */
    .bl-subline {
      font-family: 'DM Sans', sans-serif;
      font-weight: 300;
      font-size: clamp(9px, 1.35cqi, 15px);
      line-height: 1.7;
      color: rgba(0,0,0,0.42);
      text-align: center;
      max-width: 60%;
      margin: 0;
    }

    /* ══════════════════════════════════════
       PHOTO + BOTTOM STRIP
    ══════════════════════════════════════ */

    .bl-photo {
      flex: 1;
      min-height: 0;
      position: relative;
      overflow: hidden;
    }

    .bl-photo img {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      width: 100%;
      height: 120%;
      object-fit: cover;
      object-position: center 30%;
      filter: grayscale(100%) contrast(1.08) brightness(0.95);
    }

    /* White fade at top of photo — bleeds into editorial */
    .bl-photo-fade-top {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 50%;
      background: linear-gradient(to bottom, #ffffff 0%, transparent 100%);
      z-index: 1;
      pointer-events: none;
    }

    /* Dark vignette at bottom */
    .bl-photo-vignette {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 35%;
      background: linear-gradient(to top, rgba(0,0,0,0.22) 0%, transparent 100%);
      z-index: 1;
      pointer-events: none;
    }

    /* Bottom overlay bar */
    .bl-footer {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      z-index: 2;
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      padding: 0 clamp(12px, 3cqi, 28px) clamp(12px, 2.5cqb, 24px);
    }

    .bl-footer-label {
      font-size: clamp(7px, 0.9cqi, 10px);
      font-weight: 300;
      letter-spacing: 0.34em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.45);
    }

    .bl-cta {
      display: inline-flex;
      align-items: center;
      gap: clamp(5px, 0.7cqi, 10px);
      background: #0d0d0d;
      border-radius: 999px;
      padding: clamp(7px, 0.9cqb, 12px) clamp(14px, 2cqi, 22px);
      cursor: default;
    }

    .bl-cta-text {
      font-family: 'DM Sans', sans-serif;
      font-size: clamp(7px, 0.95cqi, 11px);
      font-weight: 400;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: #ffffff;
    }

    .bl-cta-arrow {
      color: rgba(255,255,255,0.7);
      font-size: clamp(9px, 1.1cqi, 13px);
      line-height: 1;
    }

    /* ══════════════════════════════════════
       CONTAINER QUERIES — responsive tuning
    ══════════════════════════════════════ */

    /* Square 1:1 */
    @container bl (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .bl-headline   { font-size: clamp(18px, 5cqi, 52px); max-width: 90%; }
      .bl-subline    { font-size: clamp(9px, 1.3cqi, 14px); max-width: 72%; }
      .bl-rule       { width: 68%; }
      .bl-editorial  { padding: clamp(12px, 2.5cqb, 28px) clamp(14px, 5cqi, 40px) clamp(8px, 1.5cqb, 18px); }
    }

    /* Portrait 4:5 */
    @container bl (max-aspect-ratio: 0.82/1) {
      .bl-headline   { font-size: clamp(22px, 5.8cqi, 60px); max-width: 88%; }
      .bl-subline    { font-size: clamp(10px, 1.5cqi, 16px); max-width: 78%; }
      .bl-rule       { width: 62%; }
      .bl-editorial  { padding: clamp(14px, 3cqb, 32px) clamp(14px, 5cqi, 40px) clamp(10px, 2cqb, 20px); }
    }

    /* Wide 16:9+ */
    @container bl (min-aspect-ratio: 1.55/1) {
      .bl-headline   { font-size: clamp(20px, 4.5cqi, 58px); }
      .bl-subline    { max-width: 48%; font-size: clamp(9px, 1.2cqi, 14px); }
      .bl-rule       { width: 44%; }
      .bl-editorial  { padding: clamp(10px, 2cqb, 24px) clamp(20px, 9cqi, 80px) clamp(8px, 1.6cqb, 18px); }
    }
  `,

  /* ─────────────────────────────────────
     Private SVG helpers
  ───────────────────────────────────── */

  _flowerSVG() {
    return `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="8" cy="8" r="2.1" fill="white"/>
      <ellipse cx="8" cy="2.7" rx="1.75" ry="2.3" fill="white"/>
      <ellipse cx="8" cy="2.7" rx="1.75" ry="2.3" fill="white" transform="rotate(60 8 8)"/>
      <ellipse cx="8" cy="2.7" rx="1.75" ry="2.3" fill="white" transform="rotate(120 8 8)"/>
      <ellipse cx="8" cy="2.7" rx="1.75" ry="2.3" fill="white" transform="rotate(180 8 8)"/>
      <ellipse cx="8" cy="2.7" rx="1.75" ry="2.3" fill="white" transform="rotate(240 8 8)"/>
      <ellipse cx="8" cy="2.7" rx="1.75" ry="2.3" fill="white" transform="rotate(300 8 8)"/>
    </svg>`;
  },

  _chevronLeft() {
    return `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 12L6 8l4-4" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  _chevronRight() {
    return `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M6 12l4-4-4-4" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  _reload() {
    return `<svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13 8A5 5 0 1 1 8 3" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round"/>
      <path d="M8 1v3l2-1.5" stroke="#9ca3af" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>`;
  },

  _lock() {
    return `<svg viewBox="0 0 11 13" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="1" y="4.5" width="9" height="8" rx="1.5" stroke="#6b7280" stroke-width="1.2"/>
      <path d="M3 4.5V3a2.5 2.5 0 0 1 5 0v1.5" stroke="#6b7280" stroke-width="1.2" stroke-linecap="round"/>
    </svg>`;
  },

  /* ─────────────────────────────────────
     render(settings) → HTML string
  ───────────────────────────────────── */

  render(s = {}) {
    const cfg = { ...this.defaults, ...s };

    const {
      appName, appUrl,
      iconGradientA, iconGradientB, iconGradientC,
      eyebrow, headline, subline, ctaText,
      img, bg, cardBg, accent,
    } = cfg;

    const iconBg = `linear-gradient(145deg, ${iconGradientA}, ${iconGradientB}, ${iconGradientC})`;

    return `
<div class="tpl-bloom" style="background:${bg}">

  <div class="bl-bg"></div>

  <div class="bl-card" style="background:${cardBg}">

    <!-- ── Browser chrome: title bar ── -->
    <div class="bl-titlebar">
      <div class="bl-dots">
        <div class="bl-dot bl-dot--red"></div>
        <div class="bl-dot bl-dot--yellow"></div>
        <div class="bl-dot bl-dot--green"></div>
      </div>

      <div class="bl-tab">
        <div class="bl-tab-icon" style="background:${iconBg}">
          ${this._flowerSVG()}
        </div>
        <span class="bl-tab-name" style="color:${accent}">${appName}</span>
        <span class="bl-tab-close">✕</span>
      </div>

      <div style="width:clamp(40px,5cqi,60px)"></div>
    </div>

    <!-- ── Browser chrome: URL bar ── -->
    <div class="bl-urlrow">
      <div class="bl-nav">
        <button class="bl-nav-btn" aria-label="Back">${this._chevronLeft()}</button>
        <button class="bl-nav-btn" aria-label="Forward">${this._chevronRight()}</button>
        <button class="bl-nav-btn" aria-label="Reload">${this._reload()}</button>
      </div>
      <div class="bl-url">
        ${this._lock()}
        <span class="bl-url-text">${appUrl}</span>
      </div>
    </div>

    <!-- ── Editorial body ── -->
    <div class="bl-body">

      <!-- Text zone -->
      <div class="bl-editorial">

        <div class="bl-eyebrow">
          <div class="bl-eyebrow-bar"></div>
          <span class="bl-eyebrow-text">${eyebrow}</span>
          <div class="bl-eyebrow-bar bl-eyebrow-bar--right"></div>
        </div>

        <h1 class="bl-headline" style="color:${accent}">${headline}</h1>

        <div class="bl-rule">
          <div class="bl-rule-line"></div>
          <div class="bl-rule-diamond" style="border-color:${accent}33"></div>
          <div class="bl-rule-line"></div>
        </div>

        <p class="bl-subline">${subline}</p>

      </div>

      <!-- Photo + footer -->
      <div class="bl-photo">
        <img src="${img}" alt="" />
        <div class="bl-photo-fade-top" style="background:linear-gradient(to bottom,${cardBg} 0%,transparent 100%)"></div>
        <div class="bl-photo-vignette"></div>

        <div class="bl-footer">
          <span class="bl-footer-label">${appName} — ${eyebrow}</span>
          <div class="bl-cta" style="background:${accent}">
            <span class="bl-cta-text">${ctaText}</span>
            <span class="bl-cta-arrow">→</span>
          </div>
        </div>
      </div>

    </div>

  </div>

</div>`.trim();
  },

  /* ─────────────────────────────────────
     mount(containerEl, settings?)
     Injects <style> + HTML into any DOM element.
  ───────────────────────────────────── */

  mount(containerEl, settings = {}) {
    if (!(containerEl instanceof HTMLElement)) {
      throw new Error(`${this.id}: mount() requires a valid HTMLElement`);
    }

    const styleId = `__tpl-style-${this.id}`;
    if (!document.getElementById(styleId)) {
      const tag = document.createElement('style');
      tag.id = styleId;
      tag.textContent = this.css;
      document.head.appendChild(tag);
    }

    containerEl.innerHTML = this.render(settings);
  },
};