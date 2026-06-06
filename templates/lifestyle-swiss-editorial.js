// ─────────────────────────────────────────────
//  TEMPLATE: Swiss Editorial — Magazine Grid
//  Category: Lifestyle
//  Layout:   magazine-grid
// ─────────────────────────────────────────────

export default {
  id: 'editorial-swiss',
  name: 'Swiss Editorial',
  category: 'Lifestyle',
  layout: 'magazine-grid',
  tags: ['editorial', 'magazine', 'lifestyle', 'minimal', 'typography', 'swiss', 'clean'],

  defaults: {
    issue:    'NO. 12',
    season:   'AUTUMN — WINTER',
    eyebrow:  'FEATURE STORY',
    headline: 'The Art of\nSlowing Down.',
    sub:      'Why the world\'s most creative minds are choosing less — and creating more.',
    author:   'WORDS BY ELENA MORROW',
    tag:      'MINDFULNESS',
    cta:      'READ THE ISSUE',
    handle:   '@theslowreview',
    accent:   '#e8341c',   // classic editorial red
    bg:       '#f7f4ef',   // warm newsprint
    text:     '#111110',
    img:      'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=IBM+Plex+Serif:ital,wght@0,300;0,700;1,300;1,700&family=IBM+Plex+Mono:wght@400;700&family=Barlow+Condensed:wght@300;400;500;600;700;800&display=swap');

    .tpl-swiss {
      width: 100%; height: 100%;
      background: var(--bg);
      color: var(--text);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
    }

    /* ── TOP BAR: Masthead ── */
    .sw-masthead {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 18px 28px 16px;
      border-bottom: 2.5px solid var(--text);
      flex-shrink: 0;
    }
    .sw-issue {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 9px;
      letter-spacing: 2px;
      color: var(--text);
      opacity: 0.5;
    }
    .sw-masthead-center {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 1px;
    }
    .sw-logo {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 26px;
      font-weight: 800;
      letter-spacing: 8px;
      text-transform: uppercase;
      color: var(--text);
      line-height: 1;
    }
    .sw-season {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 7px;
      letter-spacing: 3px;
      color: var(--text);
      opacity: 0.45;
    }
    .sw-tag {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 9px;
      letter-spacing: 1px;
      color: var(--accent);
      font-weight: 700;
      border: 1.5px solid var(--accent);
      padding: 3px 8px;
    }

    /* ── MIDDLE: Image + Content ── */
    .sw-body {
      flex: 1;
      display: grid;
      grid-template-columns: 5fr 4fr;
      overflow: hidden;
    }

    /* LEFT: image */
    .sw-image-col {
      position: relative;
      overflow: hidden;
    }
    .sw-img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: top center;
      display: block;
    }
    /* Red overlay strip at bottom of image */
    .sw-img-label {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      background: var(--accent);
      padding: 8px 16px;
      font-family: 'IBM Plex Mono', monospace;
      font-size: 9px;
      letter-spacing: 2px;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
    }

    /* RIGHT: content */
    .sw-content-col {
      border-left: 2.5px solid var(--text);
      display: flex;
      flex-direction: column;
      padding: 28px 26px;
      overflow: hidden;
    }
    .sw-eyebrow {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 8px;
      letter-spacing: 2.5px;
      color: var(--accent);
      font-weight: 700;
      margin-bottom: 14px;
      text-transform: uppercase;
    }
    .sw-headline {
      font-family: 'IBM Plex Serif', serif;
      font-size: 38px;
      font-weight: 700;
      line-height: 1;
      letter-spacing: -1px;
      color: var(--text);
      white-space: pre-line;
      margin-bottom: 16px;
      flex-shrink: 0;
    }

    /* Rule */
    .sw-rule {
      width: 100%;
      height: 1px;
      background: var(--text);
      opacity: 0.2;
      margin: 14px 0;
      flex-shrink: 0;
    }

    .sw-sub {
      font-family: 'IBM Plex Serif', serif;
      font-style: italic;
      font-size: 14px;
      font-weight: 300;
      line-height: 1.65;
      color: var(--text);
      opacity: 0.75;
      margin-bottom: auto;
    }

    .sw-author {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 8px;
      letter-spacing: 1.5px;
      color: var(--text);
      opacity: 0.45;
      margin-bottom: 20px;
    }

    /* Slanted CTA block */
    .sw-cta-block {
      background: var(--text);
      color: var(--bg);
      padding: 14px 18px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      flex-shrink: 0;
    }
    .sw-cta-text {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 2px;
      text-transform: uppercase;
      line-height: 1;
    }
    .sw-cta-arrow {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 18px;
      flex-shrink: 0;
    }

    /* ── BOTTOM BAR ── */
    .sw-footer {
      border-top: 1px solid rgba(17,17,16,0.15);
      padding: 10px 28px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
    }
    .sw-handle {
      font-family: 'IBM Plex Mono', monospace;
      font-size: 9px;
      letter-spacing: 1px;
      color: var(--text);
      opacity: 0.4;
    }
    .sw-dot-row {
      display: flex;
      gap: 4px;
      align-items: center;
    }
    .sw-dot {
      width: 4px; height: 4px;
      border-radius: 50%;
      background: var(--text);
      opacity: 0.2;
    }
    .sw-dot.active {
      background: var(--accent);
      opacity: 1;
    }
  `,

  render(s) {
    return `
      <div class="tpl-swiss" style="
        --bg: ${s.bg};
        --text: ${s.text};
        --accent: ${s.accent};
      ">
        <!-- Masthead -->
        <div class="sw-masthead">
          <span class="sw-issue">${s.issue}</span>
          <div class="sw-masthead-center">
            <div class="sw-logo">${s.handle.replace('@','')}</div>
            <div class="sw-season">${s.season}</div>
          </div>
          <span class="sw-tag">${s.tag}</span>
        </div>

        <!-- Body grid -->
        <div class="sw-body">
          <div class="sw-image-col">
            <img src="${s.img}" class="sw-img" alt="" crossorigin="anonymous"/>
            <div class="sw-img-label">${s.eyebrow}</div>
          </div>

          <div class="sw-content-col">
            <div class="sw-eyebrow">${s.eyebrow}</div>
            <div class="sw-headline">${s.headline}</div>
            <div class="sw-rule"></div>
            <div class="sw-sub">${s.sub}</div>
            <div class="sw-author">${s.author}</div>
            <div class="sw-cta-block">
              <span class="sw-cta-text">${s.cta}</span>
              <span class="sw-cta-arrow">→</span>
            </div>
          </div>
        </div>

        <!-- Footer -->
        <div class="sw-footer">
          <span class="sw-handle">${s.handle}</span>
          <div class="sw-dot-row">
            <div class="sw-dot"></div>
            <div class="sw-dot active"></div>
            <div class="sw-dot"></div>
          </div>
        </div>
      </div>`;
  }
};