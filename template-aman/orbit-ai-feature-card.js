// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Orbit — AI Feature Showcase Card
//  Category: SaaS / Product
//  Style:    Clean white card, centered serif headline,
//            floating feature chips orbiting a dashed arc,
//            eyebrow label, pill CTA with accent arrow icon.
//            Features radiate from center with icon badges.
//  Best for: AI products, SaaS feature pages, product hunts,
//            app landing sections, LinkedIn / social posts
//  Sizes:    Fully responsive — 1:1, 4:5, 16:9, wide
//
//  FONTS:    Uses CSS variables from global fonts.css
// ═══════════════════════════════════════════════════════════

module.exports = {
  id: 'orbit-ai-feature-card',
  name: 'Orbit — AI Feature Showcase Card',
  category: 'SaaS / Product',
  layout: 'card',
  tags: ['ai', 'saas', 'white', 'features', 'orbit', 'product', 'minimal', 'chips', 'card'],

  defaults: {
    eyebrow:    'Co-pilot',
    headline:   'Meet your AI\nClient Assistant',
    ctaLabel:   'Learn more',
    accent:     '#f97316',
    bg:         '#0a0a0a',
    cardBg:     '#f9f8f6',

    // Six feature chips — icon (emoji or text) + label
    feat1Icon:  '💬',  feat1Label: 'Reply suggestions',
    feat2Icon:  '📋',  feat2Label: 'Auto-summaries',
    feat3Icon:  '📁',  feat3Label: 'File & document insights',
    feat4Icon:  '⚡',  feat4Label: 'Smart task drafting',
    feat5Icon:  '🔔',  feat5Label: 'Smart reminders',
    feat6Icon:  '🎯',  feat6Label: 'Priority detection',

    // Icon bg colors matching the reference app-icon style
    feat1Color: '#e879f9',
    feat2Color: '#60a5fa',
    feat3Color: '#34d399',
    feat4Color: '#38bdf8',
    feat5Color: '#a78bfa',
    feat6Color: '#f87171',
  },

  css: `
    /* ── Root ── */
    .tpl-orbit {
      container-type: size;
      container-name: ob;
      width: 100%; height: 100%;
      position: relative;
      overflow: hidden;
      font-family: var(--font-body, 'DM Sans', sans-serif);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ════════════════════════════════════════
       OUTER BG — dark grid like the reference
    ════════════════════════════════════════ */
    .ob-outer {
      position: absolute; inset: 0; z-index: 0;
      background: #0a0a0a;
    }



    /* ════════════════════════════════════════
       CARD
    ════════════════════════════════════════ */
    .ob-card {
      position: relative;
      z-index: 2;
      width: 82cqi;
      height: 78cqb;
      max-width: 92cqi;
      border-radius: clamp(12px, 1.8cqi, 24px);
      overflow: hidden;
      box-shadow:
        0 2px 4px rgba(0,0,0,0.06),
        0 12px 40px rgba(0,0,0,0.14),
        0 40px 80px rgba(0,0,0,0.12);
    }

    /* Card inner bg */
    .ob-card-bg {
      position: absolute; inset: 0;
      background: #f9f8f6;
      z-index: 0;
    }

    /* Very subtle warm radial on card */
    .ob-card-glow {
      position: absolute; inset: 0; z-index: 1; pointer-events: none;
      background: radial-gradient(
        ellipse 65% 55% at 50% 50%,
        rgba(249,115,22,0.045) 0%,
        transparent 70%
      );
    }

    /* ════════════════════════════════════════
       CENTER CONTENT — eyebrow + headline + CTA
    ════════════════════════════════════════ */
    .ob-center {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      z-index: 10;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: clamp(8px, 1.5cqb, 16px);
      width: 38cqi;
    }

    /* Eyebrow pill */
    .ob-eyebrow {
      display: inline-flex;
      align-items: center;
      padding: clamp(4px, 0.6cqb, 7px) clamp(10px, 1.8cqi, 18px);
      border-radius: 999px;
      border: 1px solid rgba(0,0,0,0.12);
      background: rgba(255,255,255,0.85);
      backdrop-filter: blur(4px);
      font-size: clamp(8px, 1.15cqi, 12px);
      font-weight: 400;
      color: rgba(0,0,0,0.5);
      letter-spacing: 0.03em;
      white-space: nowrap;
      box-shadow: 0 1px 4px rgba(0,0,0,0.06);
    }

    /* Headline */
    .ob-headline {
      font-family: var(--font-display, 'DM Serif Display', serif);
      font-weight: 400;
      font-size: clamp(20px, 5cqi, 62px);
      line-height: 1.08;
      letter-spacing: -0.02em;
      color: #0d0d0d;
      margin: 0;
      white-space: pre-line;
    }

    /* CTA pill */
    .ob-cta {
      display: inline-flex;
      align-items: center;
      gap: clamp(6px, 1cqi, 10px);
      padding: clamp(8px, 1.2cqb, 13px) clamp(12px, 2cqi, 20px);
      border-radius: 999px;
      background: #111111;
      cursor: default;
      box-shadow:
        0 2px 6px rgba(0,0,0,0.18),
        0 6px 20px rgba(0,0,0,0.12);
    }
    .ob-cta-label {
      font-family: var(--font-body, 'DM Sans', sans-serif);
      font-weight: 500;
      font-size: clamp(10px, 1.4cqi, 15px);
      color: #ffffff;
      letter-spacing: 0.01em;
      white-space: nowrap;
    }
    .ob-cta-icon {
      width: clamp(20px, 3.2cqi, 30px);
      height: clamp(20px, 3.2cqi, 30px);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: clamp(9px, 1.3cqi, 13px);
      color: #ffffff;
      flex-shrink: 0;
      font-weight: 700;
    }


    /* ════════════════════════════════════════
       FEATURE CHIPS — absolutely positioned
    ════════════════════════════════════════ */
    .ob-chip {
      position: absolute;
      z-index: 8;
      display: inline-flex;
      align-items: center;
      gap: clamp(6px, 1cqi, 10px);
      padding: clamp(6px, 0.9cqb, 10px) clamp(10px, 1.8cqi, 16px);
      border-radius: clamp(10px, 1.4cqi, 16px);
      background: rgba(255,255,255,0.95);
      backdrop-filter: blur(6px);
      box-shadow:
        0 1px 3px rgba(0,0,0,0.06),
        0 4px 14px rgba(0,0,0,0.07),
        0 0 0 1px rgba(0,0,0,0.05);
      white-space: nowrap;
      transform: translate(-50%, -50%);
    }

    .ob-chip-icon {
      width: clamp(22px, 3.5cqi, 30px);
      height: clamp(22px, 3.5cqi, 30px);
      border-radius: clamp(6px, 0.9cqi, 9px);
      display: flex; align-items: center; justify-content: center;
      font-size: clamp(10px, 1.5cqi, 14px);
      flex-shrink: 0;
    }

    .ob-chip-label {
      font-size: clamp(9px, 1.2cqi, 13px);
      font-weight: 500;
      color: #111111;
      letter-spacing: 0.01em;
    }

    /* Chip positions — symmetric 3-left / 3-right layout
       Left column anchored near left edge, right near right.
       Three evenly-spaced rows: top / mid / bottom.        */

    /* Left column */
    .ob-chip--1 { top: 22%; left: 30%; }   /* top-left    */
    .ob-chip--6 { top: 50%; left: 18%; }   /* mid-left    */
    .ob-chip--5 { top: 78%; left: 24%; }   /* bottom-left */

    /* Right column */
    .ob-chip--2 { top: 22%; left: 76%; }   /* top-right   */
    .ob-chip--3 { top: 50%; left: 82%; }   /* mid-right   */
    .ob-chip--4 { top: 78%; left: 76%; }   /* bottom-right */

    /* ════════════════════════════════════════
       CONTAINER QUERIES
    ════════════════════════════════════════ */

    /* 1:1 Square */
    @container ob (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .ob-card    { width: 88cqi; height: 84cqb; }
      .ob-center  { width: 46cqi; }
      .ob-headline{ font-size: clamp(18px, 5.5cqi, 52px); }
      .ob-chip--1 { top: 22%; left: 20%; }
      .ob-chip--6 { top: 50%; left: 14%; }
      .ob-chip--5 { top: 78%; left: 20%; }
      .ob-chip--2 { top: 22%; left: 80%; }
      .ob-chip--3 { top: 50%; left: 86%; }
      .ob-chip--4 { top: 78%; left: 80%; }
    }

    /* Portrait 4:5 / 9:16 */
    @container ob (max-aspect-ratio: 0.82/1) {
      .ob-card    { width: 90cqi; height: 82cqb; }
      .ob-center  { width: 55cqi; }
      .ob-headline{ font-size: clamp(20px, 6.5cqi, 58px); }
      .ob-chip    { padding: clamp(5px,0.7cqb,8px) clamp(8px,1.4cqi,14px); }
      .ob-chip--1 { top: 18%; left: 22%; }
      .ob-chip--6 { top: 50%; left: 14%; }
      .ob-chip--5 { top: 80%; left: 22%; }
      .ob-chip--2 { top: 18%; left: 78%; }
      .ob-chip--3 { top: 50%; left: 86%; }
      .ob-chip--4 { top: 80%; left: 78%; }
    }

    /* Wide 16:9+ */
    @container ob (min-aspect-ratio: 1.55/1) {
      .ob-card   { width: 80cqi; height: 75cqb; }
      .ob-center { width: 34cqi; }
      .ob-headline{ font-size: clamp(20px, 4.2cqi, 58px); }
    }
  `,

  render(s) {
    const accent = s.accent || '#f97316';

    // Arc path: a cubic bezier from top-center sweeping right and down
    // Drawn relative to the card's coordinate space (100x100 viewBox)
    const arcPath = `M 42,10 C 60,10 88,18 88,45 C 88,65 85,80 80,92`;

    const chips = [
      { cls: '1', icon: s.feat1Icon, label: s.feat1Label, color: s.feat1Color },
      { cls: '2', icon: s.feat2Icon, label: s.feat2Label, color: s.feat2Color },
      { cls: '3', icon: s.feat3Icon, label: s.feat3Label, color: s.feat3Color },
      { cls: '4', icon: s.feat4Icon, label: s.feat4Label, color: s.feat4Color },
      { cls: '5', icon: s.feat5Icon, label: s.feat5Label, color: s.feat5Color },
      { cls: '6', icon: s.feat6Icon, label: s.feat6Label, color: s.feat6Color },
    ];

    const chipHTML = chips.map(c => `
      <div class="ob-chip ob-chip--${c.cls}">
        <div class="ob-chip-icon" style="background:${c.color}20;color:${c.color}">
          ${c.icon}
        </div>
        <span class="ob-chip-label">${c.label}</span>
      </div>
    `).join('');

    return `
    <div class="tpl-orbit">

      <!-- Outer dark bg -->
      <div class="ob-outer"></div>

      <!-- Card -->
      <div class="ob-card">
        <div class="ob-card-bg" style="background:${s.cardBg}"></div>
        <div class="ob-card-glow"></div>


        <!-- Feature chips -->
        ${chipHTML}

        <!-- Center content -->
        <div class="ob-center">
          <div class="ob-eyebrow">${s.eyebrow}</div>
          <h1 class="ob-headline">${s.headline}</h1>
          <div class="ob-cta">
            <span class="ob-cta-label">${s.ctaLabel}</span>
            <div class="ob-cta-icon" style="background:${accent}">↗</div>
          </div>
        </div>

      </div>
    </div>`;
  }
};