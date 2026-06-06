// ─────────────────────────────────────────────
//  TEMPLATE: Brutalist Neon — Type as Image
//  Category: Creative
//  Layout:   typographic-brutalist
//
//  Design concept: The TYPOGRAPHY is the visual.
//  No stock photo. No conventional grid.
//  Giant oversized numbers + fragmented text
//  blocks collide across a dark canvas —
//  like a club flyer designed by a fine-art grad.
// ─────────────────────────────────────────────

export default {
  id: 'creative-brutalist-neon',
  name: 'Neon Brutalist',
  category: 'Creative',
  layout: 'typographic-brutalist',
  tags: ['creative', 'brutalist', 'neon', 'music', 'event', 'club', 'agency', 'bold', 'typographic', 'art', 'fashion'],

  defaults: {
    brand:    'STUDIO',
    number:   '07',
    headline: 'OBSESS LESS.\nCREATE MORE.',
    sub:      'The creative brief nobody asked for.',
    tag1:     'AGENCY',
    tag2:     'MMXXV',
    tag3:     'WORK',
    cta:      'START A PROJECT',
    handle:   '@studio.co',
    accent:   '#00ff87',    // electric green
    accent2:  '#ff006e',    // hot pink
    bg:       '#0a0a0a',
    text:     '#f0f0f0',
    img:      '',           // intentionally blank — type IS the visual
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;700;900&family=Martian+Mono:wght@300;400;700&display=swap');

    .tpl-brut {
      width: 100%; height: 100%;
      background: var(--bg);
      color: var(--text);
      position: relative;
      overflow: hidden;
      font-family: 'Unbounded', sans-serif;
    }

    /* ── GRID LINES (blueprint feel) ── */
    .br-grid {
      position: absolute; inset: 0;
      pointer-events: none;
      background-image:
        linear-gradient(rgba(240,240,240,0.025) 1px, transparent 1px),
        linear-gradient(90deg, rgba(240,240,240,0.025) 1px, transparent 1px);
      background-size: 50px 50px;
      z-index: 1;
    }

    /* ── GIANT BG NUMBER ── */
    .br-bg-num {
      position: absolute;
      top: -20px; right: -10px;
      font-size: 320px;
      font-weight: 900;
      line-height: 1;
      letter-spacing: -20px;
      /* Hollow outline — visible through everything */
      -webkit-text-stroke: 1.5px rgba(240,240,240,0.07);
      color: transparent;
      pointer-events: none;
      z-index: 2;
      user-select: none;
    }

    /* ── BRAND STRIP (diagonal) ── */
    .br-brand-strip {
      position: absolute;
      top: 28px; left: 28px;
      z-index: 10;
      display: flex;
      align-items: center;
      gap: 14px;
    }
    .br-brand-name {
      font-family: 'Martian Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 5px;
      color: var(--green);
      text-transform: uppercase;
    }
    .br-brand-dot {
      width: 5px; height: 5px;
      border-radius: 50%;
      background: var(--green);
      flex-shrink: 0;
    }
    .br-brand-handle {
      font-family: 'Martian Mono', monospace;
      font-size: 9px;
      font-weight: 300;
      letter-spacing: 2px;
      color: rgba(240,240,240,0.3);
    }

    /* ── TAG ROW — TOP RIGHT ── */
    .br-tags {
      position: absolute;
      top: 28px; right: 28px;
      z-index: 10;
      display: flex;
      gap: 8px;
      align-items: center;
    }
    .br-tag {
      font-family: 'Martian Mono', monospace;
      font-size: 7px;
      font-weight: 700;
      letter-spacing: 2px;
      border: 1px solid rgba(240,240,240,0.15);
      padding: 4px 10px;
      color: rgba(240,240,240,0.4);
    }
    .br-tag.hot {
      border-color: var(--pink);
      color: var(--pink);
    }

    /* ── MAIN HEADLINE — absolute centered-ish ── */
    .br-headline-block {
      position: absolute;
      left: 0; right: 0;
      top: 50%;
      transform: translateY(-58%);
      z-index: 10;
      padding: 0 28px;
    }

    /* "slash" accent before headline */
    .br-slash {
      font-family: 'Martian Mono', monospace;
      font-size: 10px;
      font-weight: 700;
      color: var(--green);
      letter-spacing: 3px;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .br-slash::before {
      content: '';
      display: inline-block;
      width: 30px; height: 1.5px;
      background: var(--green);
    }

    .br-headline {
      font-size: 58px;
      font-weight: 900;
      line-height: 0.88;
      letter-spacing: -3px;
      text-transform: uppercase;
      color: var(--text);
      white-space: pre-line;
      position: relative;
    }

    /* Second line gets pink highlight */
    .br-headline em {
      font-style: normal;
      position: relative;
      display: inline-block;
    }
    .br-headline em::after {
      content: '';
      position: absolute;
      left: 0; right: -4px;
      bottom: 4px;
      height: 8px;
      background: var(--pink);
      z-index: -1;
      opacity: 0.7;
    }

    .br-sub {
      font-family: 'Martian Mono', monospace;
      font-size: 10px;
      font-weight: 300;
      letter-spacing: 1px;
      color: rgba(240,240,240,0.45);
      margin-top: 20px;
      line-height: 1.8;
      max-width: 320px;
    }

    /* ── BOTTOM STRIP — full-width bar ── */
    .br-bottom {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      border-top: 1px solid rgba(240,240,240,0.1);
      z-index: 10;
      display: flex;
      align-items: stretch;
    }

    .br-cta-block {
      flex: 1;
      background: var(--green);
      padding: 18px 28px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .br-cta-text {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 3px;
      color: var(--bg);
      text-transform: uppercase;
    }
    .br-cta-arrow {
      font-size: 18px;
      color: var(--bg);
      font-weight: 900;
      margin-left: auto;
    }

    .br-stat-block {
      padding: 0 24px;
      border-left: 1px solid rgba(240,240,240,0.1);
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 2px;
      min-width: 80px;
    }
    .br-stat-num {
      font-size: 20px;
      font-weight: 900;
      letter-spacing: -1px;
      color: var(--text);
      line-height: 1;
    }
    .br-stat-label {
      font-family: 'Martian Mono', monospace;
      font-size: 6px;
      font-weight: 400;
      letter-spacing: 2px;
      color: rgba(240,240,240,0.3);
      text-transform: uppercase;
    }

    /* ── FLOATING SIDE LABEL (rotated) ── */
    .br-side-label {
      position: absolute;
      right: -60px;
      top: 50%;
      transform: translateY(-50%) rotate(90deg);
      font-family: 'Martian Mono', monospace;
      font-size: 8px;
      font-weight: 700;
      letter-spacing: 6px;
      color: rgba(240,240,240,0.12);
      text-transform: uppercase;
      z-index: 5;
      white-space: nowrap;
    }

    /* ── SCANLINE overlay (CRT feel) ── */
    .br-scanlines {
      position: absolute; inset: 0;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(0,0,0,0.04) 2px,
        rgba(0,0,0,0.04) 4px
      );
      pointer-events: none;
      z-index: 20;
    }

    /* ── NOISE TEXTURE (pure CSS, no images) ── */
    .br-noise {
      position: absolute; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='f'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23f)' opacity='1'/%3E%3C/svg%3E");
      opacity: 0.018;
      pointer-events: none;
      z-index: 19;
    }

    /* Accent color rectangle — decorative */
    .br-accent-rect {
      position: absolute;
      width: 3px;
      background: var(--green);
      left: 14px;
      top: 80px;
      bottom: 65px;
      z-index: 10;
      opacity: 0.6;
    }
  `,

  render(s) {
    // Split headline: wrap the second line in <em> for the pink underline
    const lines = (s.headline || '').split('\n');
    const headlineHtml = lines
      .map((line, i) => i === 1 ? `<em>${line}</em>` : line)
      .join('\n');

    return `
      <div class="tpl-brut" style="
        --bg: ${s.bg};
        --text: ${s.text};
        --green: ${s.accent};
        --pink: ${s.accent2 || '#ff006e'};
      ">
        <!-- Atmospherics -->
        <div class="br-grid"></div>
        <div class="br-scanlines"></div>
        <div class="br-noise"></div>
        <div class="br-accent-rect"></div>

        <!-- Giant ghost number -->
        <div class="br-bg-num">${s.number}</div>

        <!-- Brand top-left -->
        <div class="br-brand-strip">
          <span class="br-brand-name">${s.brand}</span>
          <div class="br-brand-dot"></div>
          <span class="br-brand-handle">${s.handle}</span>
        </div>

        <!-- Tags top-right -->
        <div class="br-tags">
          <span class="br-tag hot">${s.tag1}</span>
          <span class="br-tag">${s.tag2}</span>
          <span class="br-tag">${s.tag3}</span>
        </div>

        <!-- Main headline -->
        <div class="br-headline-block">
          <div class="br-slash">SELECTED WORK</div>
          <div class="br-headline">${headlineHtml}</div>
          <div class="br-sub">${s.sub}</div>
        </div>

        <!-- Rotated side label -->
        <div class="br-side-label">${s.brand} · ${s.tag2} · ${s.tag3}</div>

        <!-- Bottom bar -->
        <div class="br-bottom">
          <div class="br-cta-block">
            <span class="br-cta-text">${s.cta}</span>
            <span class="br-cta-arrow">→</span>
          </div>
          <div class="br-stat-block">
            <span class="br-stat-num">4K+</span>
            <span class="br-stat-label">clients</span>
          </div>
          <div class="br-stat-block">
            <span class="br-stat-num">${s.number}</span>
            <span class="br-stat-label">years</span>
          </div>
        </div>
      </div>`;
  }
};