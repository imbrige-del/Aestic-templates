// templates/versum-impact.js
// ─────────────────────────────────────────────────────────────
//  VERSUM IMPACT — Human × AI Collaboration Poster
//  Aesthetic: Clean white/gray bg, giant red bg typography
//  behind center hero image, bold headline top-left, minimal
//  brand logo top-right, pixel arrow bottom-right.
//  Perfect for: Tech, AI, startup, innovation brands.
// ─────────────────────────────────────────────────────────────

export default {
  id:       'versum-impact',
  name:     'Versum Impact',
  category: 'Editorial',
  layout:   'versum-impact',
  tags:     ['white', 'bold', 'editorial', 'tech', 'ai', 'modern', 'corporate', 'impact'],

  defaults: {
    headline:   'Artificial Intelligence\nThe Future of Smart\nInnovation.',
    bgWord:     'AI',
    brand:      'versum',
    desc:       'Transforming the way we think,\nwork, and live through intelligent\ntechnology.',
    accent:     '#e8151b',
    bg:         '#f0f0ee',
    textDark:   '#0d0d0d',
    imgKeyword: 'human robot handshake artificial intelligence technology',
  },

  previewHtml: `
    <div style="width:100%;height:100%;background:#f0f0ee;position:relative;overflow:hidden;font-family:sans-serif">
      <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-45%);
        font-size:72px;font-weight:900;color:#e8151b;letter-spacing:-4px;line-height:1;
        white-space:nowrap;z-index:1">AI</div>
      <div style="position:absolute;top:16px;left:-4px;right:-4px;bottom:16px;
        background:linear-gradient(135deg,rgba(180,160,140,.35),rgba(140,150,160,.35));z-index:2"></div>
      <div style="position:absolute;top:0;left:0;right:0;z-index:3;padding:6px 7px;
        display:flex;justify-content:space-between;align-items:flex-start">
        <div style="display:flex;flex-direction:column;gap:2px">
          <div style="height:4px;width:38px;background:#111;border-radius:1px;opacity:.85"></div>
          <div style="height:4px;width:30px;background:#111;border-radius:1px;opacity:.85"></div>
          <div style="height:4px;width:20px;background:#111;border-radius:1px;opacity:.85"></div>
        </div>
        <div style="display:flex;align-items:center;gap:3px">
          <div style="width:0;height:0;border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:7px solid #e8151b"></div>
          <div style="height:4px;width:18px;background:#111;border-radius:1px;opacity:.6"></div>
        </div>
      </div>
      <div style="position:absolute;bottom:0;left:0;right:0;z-index:3;padding:5px 7px;
        display:flex;justify-content:space-between;align-items:flex-end">
        <div style="display:flex;flex-direction:column;gap:1.5px">
          <div style="height:2.5px;width:26px;background:#333;border-radius:1px;opacity:.45"></div>
          <div style="height:2.5px;width:20px;background:#333;border-radius:1px;opacity:.45"></div>
          <div style="height:2.5px;width:22px;background:#333;border-radius:1px;opacity:.45"></div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(5,4px);gap:1px">
          ${[0,0,1,0,0,0,0,0,1,0,1,1,1,1,1,0,0,0,1,0,0,0,1,0,0]
            .map(on=>`<div style="width:4px;height:4px;border-radius:.5px;background:#e8151b;opacity:${on?1:0}"></div>`).join('')}
        </div>
      </div>
    </div>`,

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@400;500;600;700;800;900&family=DM+Sans:wght@400;500;600&display=swap');

    .vi-wrap {
      width: 100%; height: 100%;
      position: relative; overflow: hidden;
      font-family: 'DM Sans', sans-serif;
    }

    /* Layer 1 — background color */
    .vi-bg {
      position: absolute; inset: 0;
      z-index: 0;
    }

    /* Layer 2 — giant bg word, centered, bleeds off edges */
    .vi-bg-word {
      position: absolute;
      z-index: 1;
      top: 50%; left: 50%;
      transform: translate(-50%, -46%);
      font-family: 'Barlow', 'Arial Black', Impact, sans-serif;
      font-weight: 900;
      font-size: 268px;
      line-height: 1;
      letter-spacing: -12px;
      white-space: nowrap;
      pointer-events: none;
      user-select: none;
    }

    /* Layer 3 — hero image, over bg word */
    .vi-img {
      position: absolute;
      z-index: 2;
      top: 74px;
      left: -20px; right: -20px;
      bottom: 68px;
      background-size: cover;
      background-position: center;
    }
    /* Fade edges to blend with bg */
    .vi-img-fade-top {
      position: absolute; inset: 0; z-index: 3;
      background: linear-gradient(to bottom, var(--vi-bg) 0%, transparent 22%);
      pointer-events: none;
    }
    .vi-img-fade-bot {
      position: absolute; inset: 0; z-index: 3;
      background: linear-gradient(to top, var(--vi-bg) 0%, transparent 22%);
      pointer-events: none;
    }

    /* Layer 4 — all UI text/logo/arrow */
    .vi-ui {
      position: absolute; inset: 0;
      z-index: 4;
      display: flex; flex-direction: column;
      justify-content: space-between;
      padding: 24px 26px 22px;
    }

    /* ── TOP ROW ── */
    .vi-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 8px;
    }

    /* Headline — top left, black, bold, multiline */
    .vi-headline {
      font-family: 'Barlow', sans-serif;
      font-size: 23px;
      font-weight: 700;
      line-height: 1.26;
      letter-spacing: -0.3px;
      white-space: pre-line;
      max-width: 235px;
      /* Subtle bg glow keeps readable over image */
      text-shadow:
        0 0 20px var(--vi-bg),
        0 0 12px var(--vi-bg),
        0 0  6px var(--vi-bg);
    }

    /* Logo — top right */
    .vi-logo {
      display: flex;
      align-items: center;
      gap: 6px;
      flex-shrink: 0;
      margin-top: 2px;
      text-shadow:
        0 0 14px var(--vi-bg),
        0 0  6px var(--vi-bg);
    }
    /* CSS triangle logo mark */
    .vi-logo-tri {
      width: 0; height: 0;
      border-left:   7px solid transparent;
      border-right:  7px solid transparent;
      border-bottom: 12px solid currentColor;
      flex-shrink: 0;
    }
    .vi-logo-name {
      font-family: 'Barlow', sans-serif;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: -0.2px;
    }

    /* ── BOTTOM ROW ── */
    .vi-bottom {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      gap: 12px;
    }

    /* Caption — bottom left */
    .vi-desc {
      font-size: 10px;
      font-weight: 400;
      line-height: 1.65;
      white-space: pre-line;
      max-width: 185px;
      text-shadow:
        0 0 16px var(--vi-bg),
        0 0  8px var(--vi-bg),
        0 0  4px var(--vi-bg);
    }

    /* ── Pixel arrow — 5×5 dot grid ── */
    .vi-arrow {
      display: grid;
      grid-template-columns: repeat(5, 9px);
      grid-template-rows:    repeat(5, 9px);
      gap: 2.5px;
      flex-shrink: 0;
    }
    .vi-px {
      width: 9px; height: 9px;
      border-radius: 2px;
    }
    .vi-px.on  { opacity: 1; }
    .vi-px.off { opacity: 0; }
  `,

  render(s) {
    const bg    = s.bg       || '#f0f0ee';
    const acc   = s.accent   || '#e8151b';
    const dark  = s.textDark || '#0d0d0d';

    // Image: server sets _imgOverride after /api/image fetch
    const img = s._imgOverride
      || `https://picsum.photos/seed/${
          Math.abs((s.imgKeyword||'ai').split('').reduce((a,c)=>a+c.charCodeAt(0),0)) % 1000
        }/800/800`;

    // Handle escaped newlines from AI JSON edits
    const headline = (s.headline || '').replace(/\\n/g, '\n');
    const desc     = (s.desc     || '').replace(/\\n/g, '\n');
    const bgWord   = s.bgWord || 'AI';

    // 5×5 pixel right-arrow pattern
    // 1=filled, 0=transparent
    const px = [
      0,0,1,0,0,
      0,0,0,1,0,
      1,1,1,1,1,
      0,0,0,1,0,
      0,0,1,0,0,
    ];
    const dots = px.map(on =>
      `<div class="vi-px ${on?'on':'off'}" style="background:${acc}"></div>`
    ).join('');

    return `
      <div class="vi-wrap" style="--vi-bg:${bg}">

        <!-- Layer 1: background -->
        <div class="vi-bg" style="background:${bg}"></div>

        <!-- Layer 2: giant bg word (red, bleeds off edges) -->
        <div class="vi-bg-word" style="color:${acc}">${bgWord}</div>

        <!-- Layer 3: hero image over bg word -->
        <div class="vi-img" style="background-image:url('${img}')">
          <div class="vi-img-fade-top" style="--vi-bg:${bg}"></div>
          <div class="vi-img-fade-bot" style="--vi-bg:${bg}"></div>
        </div>

        <!-- Layer 4: UI content -->
        <div class="vi-ui">

          <!-- TOP: headline + logo -->
          <div class="vi-top">
            <div class="vi-headline" style="color:${dark}">${headline}</div>
            <div class="vi-logo" style="color:${dark}">
              <div class="vi-logo-tri" style="border-bottom-color:${acc}"></div>
              <span class="vi-logo-name">${s.brand}</span>
            </div>
          </div>

          <!-- BOTTOM: caption + pixel arrow -->
          <div class="vi-bottom">
            <div class="vi-desc" style="color:${dark};opacity:.65">${desc}</div>
            <div class="vi-arrow">${dots}</div>
          </div>

        </div>
      </div>
    `;
  }
};