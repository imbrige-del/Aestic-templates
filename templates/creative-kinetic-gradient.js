// ─────────────────────────────────────────────
//  TEMPLATE: Kinetic Gradient — Color Field
//  Category: Creative
//  Layout:   abstract-color-field
//
//  Design concept: The BACKGROUND is a pure
//  CSS gradient "painting" — vivid abstract
//  blobs that shift based on accent colors.
//  Typography floats clean and white on top.
//  No stock photo. The color IS the content.
//  Think: Spotify campaign meets MOMA poster.
// ─────────────────────────────────────────────

export default {
  id: 'creative-kinetic-gradient',
  name: 'Kinetic Gradient',
  category: 'Creative',
  layout: 'abstract-color-field',
  tags: ['creative', 'gradient', 'abstract', 'music', 'podcast', 'brand', 'product', 'colorful', 'bold', 'modern'],

  defaults: {
    eyebrow:  'NOW PLAYING',
    headline: 'Where Sound\nMeets Soul.',
    artist:   'NORA QUINN',
    album:    'Lucid EP — 2025',
    desc:     'Four tracks. Forty minutes. One uninterrupted feeling.',
    badge:    '● STREAMING NOW',
    cta:      'LISTEN FREE',
    handle:   '@noraquinnmusic',
    c1:       '#ff006e',   // hot pink blob
    c2:       '#8338ec',   // electric violet
    c3:       '#06d6a0',   // mint
    c4:       '#ffbe0b',   // gold
    bg:       '#0d0d0d',
    text:     '#ffffff',
    accent:   '#ff006e',
    img:      '',           // no image — pure CSS gradient art
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=Syne+Mono&display=swap');

    .tpl-kinetic {
      width: 100%; height: 100%;
      background: var(--bg);
      color: var(--text);
      position: relative;
      overflow: hidden;
      font-family: 'Syne', sans-serif;
    }

    /* ── ABSTRACT BLOB BACKGROUND ── */
    /* Layered radial gradients simulate organic blobs */
    .kg-canvas {
      position: absolute; inset: 0;
      background:
        radial-gradient(ellipse 55% 55% at 15% 20%, var(--c1) 0%, transparent 65%),
        radial-gradient(ellipse 60% 45% at 80% 70%, var(--c2) 0%, transparent 60%),
        radial-gradient(ellipse 40% 50% at 70% 15%, var(--c3) 0%, transparent 60%),
        radial-gradient(ellipse 50% 40% at 20% 80%, var(--c4) 0%, transparent 55%),
        var(--bg);
      opacity: 0.75;
    }

    /* Frosted glass overlay — key to the "Spotify artwork" feel */
    .kg-frost {
      position: absolute; inset: 0;
      background: linear-gradient(
        160deg,
        rgba(13,13,13,0.55) 0%,
        rgba(13,13,13,0.15) 40%,
        rgba(13,13,13,0.6) 100%
      );
    }

    /* Fine grain texture */
    .kg-grain {
      position: absolute; inset: 0;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='g'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='512' height='512' filter='url(%23g)'/%3E%3C/svg%3E");
      opacity: 0.06;
      pointer-events: none;
    }

    /* ── CONTENT LAYER ── */
    .kg-content {
      position: absolute; inset: 0;
      display: flex;
      flex-direction: column;
      padding: 34px;
      z-index: 10;
    }

    /* TOP: eyebrow + badge */
    .kg-top {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .kg-eyebrow {
      font-family: 'Syne Mono', monospace;
      font-size: 9px;
      letter-spacing: 4px;
      font-weight: 400;
      color: rgba(255,255,255,0.5);
      text-transform: uppercase;
    }
    .kg-badge {
      font-family: 'Syne Mono', monospace;
      font-size: 9px;
      font-weight: 700;
      letter-spacing: 1.5px;
      color: var(--c1);
      text-shadow: 0 0 20px var(--c1);
    }

    /* MIDDLE: main content */
    .kg-mid {
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .kg-headline {
      font-size: 68px;
      font-weight: 800;
      line-height: 0.9;
      letter-spacing: -3px;
      color: #ffffff;
      white-space: pre-line;
      margin-bottom: 28px;
      text-shadow: 0 4px 60px rgba(0,0,0,0.5);
    }

    /* Thin colored divider */
    .kg-divider {
      width: 60px;
      height: 2px;
      background: var(--c3);
      margin-bottom: 20px;
      box-shadow: 0 0 16px var(--c3);
    }

    .kg-desc {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.7;
      color: rgba(255,255,255,0.6);
      max-width: 280px;
      margin-bottom: 0;
    }

    /* BOTTOM */
    .kg-bottom {
      display: flex;
      flex-direction: column;
      gap: 18px;
    }

    /* Artist row */
    .kg-artist-row {
      display: flex;
      align-items: center;
      gap: 14px;
    }
    /* Avatar circle — uses blob color */
    .kg-avatar {
      width: 42px; height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, var(--c1), var(--c2));
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      font-weight: 800;
      color: #fff;
      flex-shrink: 0;
      box-shadow: 0 0 24px rgba(0,0,0,0.5);
    }
    .kg-artist-info {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }
    .kg-artist-name {
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 2px;
      color: #ffffff;
    }
    .kg-album {
      font-family: 'Syne Mono', monospace;
      font-size: 10px;
      font-weight: 400;
      color: rgba(255,255,255,0.4);
      letter-spacing: 1px;
    }

    /* CTA + handle */
    .kg-action-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .kg-cta {
      font-size: 11px;
      font-weight: 700;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--bg);
      background: #ffffff;
      padding: 13px 26px;
      display: inline-block;
      cursor: default;
    }
    .kg-handle {
      font-family: 'Syne Mono', monospace;
      font-size: 10px;
      color: rgba(255,255,255,0.3);
      letter-spacing: 1.5px;
    }

    /* Bleed color edge — left strip */
    .kg-edge {
      position: absolute;
      left: 0; top: 0; bottom: 0;
      width: 4px;
      background: linear-gradient(to bottom, var(--c1), var(--c2), var(--c3));
      z-index: 15;
    }
  `,

  render(s) {
    // Avatar initial from artist name
    const initial = (s.artist || 'A')[0].toUpperCase();

    return `
      <div class="tpl-kinetic" style="
        --bg: ${s.bg};
        --text: ${s.text};
        --c1: ${s.c1 || s.accent};
        --c2: ${s.c2 || '#8338ec'};
        --c3: ${s.c3 || '#06d6a0'};
        --c4: ${s.c4 || '#ffbe0b'};
      ">
        <!-- Abstract color field background -->
        <div class="kg-canvas"></div>
        <div class="kg-frost"></div>
        <div class="kg-grain"></div>
        <div class="kg-edge"></div>

        <div class="kg-content">
          <!-- Top -->
          <div class="kg-top">
            <span class="kg-eyebrow">${s.eyebrow}</span>
            <span class="kg-badge">${s.badge}</span>
          </div>

          <!-- Middle -->
          <div class="kg-mid">
            <div class="kg-headline">${s.headline}</div>
            <div class="kg-divider"></div>
            <div class="kg-desc">${s.desc}</div>
          </div>

          <!-- Bottom -->
          <div class="kg-bottom">
            <div class="kg-artist-row">
              <div class="kg-avatar">${initial}</div>
              <div class="kg-artist-info">
                <div class="kg-artist-name">${s.artist}</div>
                <div class="kg-album">${s.album}</div>
              </div>
            </div>
            <div class="kg-action-row">
              <div class="kg-cta">${s.cta}</div>
              <div class="kg-handle">${s.handle}</div>
            </div>
          </div>
        </div>
      </div>`;
  }
};