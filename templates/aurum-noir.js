// templates/aurum-noir.js
// ─────────────────────────────────────────────────────────────
//  AURUM NOIR — My original luxury editorial template
//
//  Creative direction:
//  ┌ Concept ────────────────────────────────────────────────┐
//  │  A private auction house catalogue page. Think          │
//  │  Sotheby's meets Bottega Veneta meets a Swiss watch ad. │
//  │  The kind of design that never shouts — it whispers     │
//  │  and you lean in.                                       │
//  └─────────────────────────────────────────────────────────┘
//
//  ┌ Typography ─────────────────────────────────────────────┐
//  │  Display:  Playfair Display — heavy italic for the      │
//  │            price/number — raw contrast against delicate │
//  │  Serif:    Cormorant Garamond Light 300 — headline,     │
//  │            the most refined serif on Google Fonts       │
//  │  Sans:     Raleway — spaced-out caps for labels,        │
//  │            almost disappears into the layout            │
//  └─────────────────────────────────────────────────────────┘
//
//  ┌ Color palette ──────────────────────────────────────────┐
//  │  #0a0907  — Near-black warm (not cold — feels organic)  │
//  │  #141210  — Surface (cards, strips)                     │
//  │  #d4a853  — Burnished gold (warm, not yellow)           │
//  │  #e8e0d0  — Warm ivory (text — not harsh white)         │
//  │  #5c5248  — Warm gray muted text                        │
//  └─────────────────────────────────────────────────────────┘
//
//  ┌ Layout ─────────────────────────────────────────────────┐
//  │  [LOT 042]          [⬡ AURUM]  ← minimal top strip     │
//  │                                                          │
//  │  [full-bleed photo, occupies ~55% of canvas]            │
//  │                                                          │
//  │  ────────── gold hairline ──────────                    │
//  │                                                          │
//  │  PROVENANCE          ESTIMATE                            │
//  │  Paris, 1924    ·   $48,000 — 65,000                   │
//  │                                                          │
//  │  The headline                                            │
//  │  in italic                ← Cormorant, large            │
//  │  Garamond                                                │
//  │                                                          │
//  │  Brief description in Raleway light, muted.             │
//  │                                                          │
//  │  [PLACE BID →]          Lot 042 of 180                  │
//  └─────────────────────────────────────────────────────────┘
// ─────────────────────────────────────────────────────────────

export default {
  id:       'aurum-noir',
  name:     'Aurum Noir',
  category: 'Luxury',
  layout:   'aurum-noir',
  tags:     ['luxury', 'dark', 'gold', 'premium', 'auction', 'editorial', 'noir', 'warm'],

  defaults: {
    // Top strip
    lot:        'LOT 042',
    brand:      'AURUM',

    // Provenance + estimate bar
    provenance: 'Paris, 1924',
    estimate:   '$48,000 — 65,000',

    // Main content
    headline:   'The Last\nMasterpiece\nOf Its Kind',
    desc:       'A singular work of uncompromising craft — each detail resolved with patience that modernity rarely permits.',

    // Footer
    cta:        'PLACE BID',
    lotLine:    'Lot 042 of 180',

    // Colors
    accent:     '#d4a853',    // burnished gold
    bg:         '#0a0907',    // warm near-black
    surface:    '#141210',    // card surface
    textMain:   '#e8e0d0',    // warm ivory
    textMuted:  '#5c5248',    // warm gray

    // Image
    imgKeyword: 'luxury object dark dramatic studio photography still life',
  },

  previewHtml: `
    <div style="width:100%;height:100%;background:#0a0907;display:flex;flex-direction:column;font-family:serif;position:relative;overflow:hidden">
      <!-- Top strip -->
      <div style="background:#141210;padding:4px 8px;display:flex;align-items:center;justify-content:space-between;border-bottom:1px solid rgba(212,168,83,.1)">
        <div style="height:3px;width:22px;background:rgba(212,168,83,.5);border-radius:1px"></div>
        <div style="display:flex;align-items:center;gap:3px">
          <div style="width:8px;height:8px;border:1px solid rgba(212,168,83,.5);transform:rotate(45deg)"></div>
          <div style="height:3px;width:18px;background:rgba(232,224,208,.3);border-radius:1px"></div>
        </div>
      </div>
      <!-- Photo -->
      <div style="height:38%;background:linear-gradient(160deg,#1e1810,#0d0d12);flex-shrink:0"></div>
      <!-- Gold rule -->
      <div style="height:1px;background:linear-gradient(90deg,transparent,rgba(212,168,83,.5),transparent);margin:0 8px"></div>
      <!-- Provenance bar -->
      <div style="padding:3px 8px;display:flex;justify-content:space-between">
        <div style="height:3px;width:24px;background:rgba(92,82,72,.8);border-radius:1px"></div>
        <div style="height:3px;width:30px;background:rgba(212,168,83,.4);border-radius:1px"></div>
      </div>
      <!-- Headline -->
      <div style="padding:2px 8px;display:flex;flex-direction:column;gap:3px">
        <div style="height:7px;width:65%;background:rgba(232,224,208,.25);border-radius:1px"></div>
        <div style="height:7px;width:50%;background:rgba(232,224,208,.2);border-radius:1px"></div>
        <div style="height:7px;width:55%;background:rgba(232,224,208,.15);border-radius:1px"></div>
      </div>
      <!-- Desc -->
      <div style="padding:3px 8px;display:flex;flex-direction:column;gap:2px">
        <div style="height:3px;width:90%;background:rgba(92,82,72,.5);border-radius:1px"></div>
        <div style="height:3px;width:75%;background:rgba(92,82,72,.4);border-radius:1px"></div>
      </div>
      <!-- Footer -->
      <div style="margin-top:auto;background:#141210;padding:4px 8px;display:flex;align-items:center;justify-content:space-between;border-top:1px solid rgba(212,168,83,.1)">
        <div style="height:12px;width:40px;border:1px solid rgba(212,168,83,.5);border-radius:1px"></div>
        <div style="height:3px;width:24px;background:rgba(92,82,72,.5);border-radius:1px"></div>
      </div>
    </div>`,

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700;1,900&family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400;1,500&family=Raleway:wght@300;400;500;600;700&display=swap');

    /* ── Root ── */
    .an-wrap {
      width: 100%; height: 100%;
      position: relative; overflow: hidden;
      display: flex; flex-direction: column;
    }

    /* ── Subtle warm grain overlay ── */
    .an-grain {
      position: absolute; inset: 0; z-index: 20;
      pointer-events: none; opacity: .025;
      background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
      mix-blend-mode: soft-light;
    }

    /* ── TOP STRIP ── */
    .an-top {
      flex-shrink: 0;
      height: 40px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 22px;
      position: relative;
      z-index: 5;
    }

    .an-lot {
      font-family: 'Raleway', sans-serif;
      font-size: 8.5px;
      font-weight: 600;
      letter-spacing: 4px;
      text-transform: uppercase;
    }

    /* Diamond + brand name mark */
    .an-brand-mark {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .an-diamond {
      width: 10px; height: 10px;
      transform: rotate(45deg);
      flex-shrink: 0;
      border: 1.5px solid currentColor;
    }
    .an-brand-name {
      font-family: 'Raleway', sans-serif;
      font-size: 10px;
      font-weight: 700;
      letter-spacing: 5px;
      text-transform: uppercase;
    }

    /* ── PHOTO ── */
    .an-photo-wrap {
      /* Takes about 48% of canvas height */
      height: 242px;
      flex-shrink: 0;
      position: relative;
      overflow: hidden;
    }
    .an-photo {
      position: absolute; inset: 0;
      background-size: cover;
      background-position: center;
      /* Desaturate slightly for luxury moodboard feel */
      filter: saturate(0.82) brightness(0.88) contrast(1.06);
    }
    /* Heavy vignette — pure darkness on all edges */
    .an-photo-vignette {
      position: absolute; inset: 0;
      background:
        linear-gradient(to bottom, rgba(10,9,7,.75) 0%, transparent 35%),
        linear-gradient(to top,    rgba(10,9,7,.85) 0%, transparent 40%),
        linear-gradient(to right,  rgba(10,9,7,.5)  0%, transparent 30%),
        linear-gradient(to left,   rgba(10,9,7,.5)  0%, transparent 30%);
    }
    /* Lot number watermark floating over photo — top left */
    .an-lot-watermark {
      position: absolute;
      top: 16px; left: 22px;
      font-family: 'Playfair Display', serif;
      font-size: 72px;
      font-weight: 900;
      font-style: italic;
      line-height: 1;
      opacity: .06;
      color: #fff;
      user-select: none;
      pointer-events: none;
    }

    /* ── GOLD HAIRLINE RULE ── */
    .an-rule {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      padding: 0 22px;
      margin: 14px 0 12px;
    }
    .an-rule-seg {
      flex: 1;
      height: 1px;
      opacity: .45;
    }
    .an-rule-seg.l { background: linear-gradient(90deg, transparent, var(--an-gold)); }
    .an-rule-seg.r { background: linear-gradient(90deg, var(--an-gold), transparent); }
    .an-rule-pip {
      width: 5px; height: 5px;
      border-radius: 50%;
      flex-shrink: 0;
      margin: 0 14px;
      opacity: .6;
    }

    /* ── PROVENANCE + ESTIMATE BAR ── */
    .an-meta {
      flex-shrink: 0;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 22px;
      margin-bottom: 14px;
    }
    .an-meta-item {
      display: flex;
      flex-direction: column;
      gap: 3px;
    }
    .an-meta-label {
      font-family: 'Raleway', sans-serif;
      font-size: 7px;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
    }
    .an-meta-value {
      font-family: 'Cormorant Garamond', serif;
      font-size: 14px;
      font-weight: 400;
      font-style: italic;
      letter-spacing: .3px;
    }
    /* Estimate value — gold, slightly larger */
    .an-meta-value.estimate {
      font-size: 15px;
      font-weight: 500;
    }
    /* Center divider dot */
    .an-meta-sep {
      font-size: 18px;
      opacity: .2;
      line-height: 1;
      margin-top: 10px;
    }

    /* ── HEADLINE ── */
    .an-headline {
      flex-shrink: 0;
      padding: 0 22px;
      margin-bottom: 12px;
      font-family: 'Cormorant Garamond', serif;
      font-size: 46px;
      font-weight: 300;
      font-style: italic;
      line-height: .95;
      letter-spacing: -1px;
      white-space: pre-line;
    }

    /* ── DESCRIPTION ── */
    .an-desc {
      flex: 1;
      padding: 0 22px;
      font-family: 'Raleway', sans-serif;
      font-size: 10px;
      font-weight: 300;
      line-height: 1.8;
      letter-spacing: .4px;
    }

    /* ── FOOTER STRIP ── */
    .an-footer {
      flex-shrink: 0;
      height: 46px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 22px;
      position: relative;
      z-index: 5;
    }

    /* CTA — gold bordered, double border detail */
    .an-cta {
      border: 1px solid var(--an-gold);
      padding: 8px 18px;
      font-family: 'Raleway', sans-serif;
      font-size: 8px;
      font-weight: 700;
      letter-spacing: 4px;
      text-transform: uppercase;
      position: relative;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .an-cta::before {
      content: '';
      position: absolute;
      inset: 2.5px;
      border: 1px solid rgba(212,168,83,.18);
    }
    .an-cta-arrow {
      font-size: 10px;
      letter-spacing: 0;
    }

    /* Lot line */
    .an-lot-line {
      font-family: 'Raleway', sans-serif;
      font-size: 8px;
      font-weight: 400;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  `,

  render(s) {
    const bg      = s.bg       || '#0a0907';
    const surf    = s.surface  || '#141210';
    const gold    = s.accent   || '#d4a853';
    const ivory   = s.textMain || '#e8e0d0';
    const muted   = s.textMuted|| '#5c5248';

    let img =
  s.img ||
  s.image ||
  s.photo ||
  s.src ||
  s.url ||
  s._imgOverride;

if(!img){
  const seed = Math.abs(
    (s.imgKeyword || s.headline || 'luxury')
      .split('')
      .reduce((a,c)=>a+c.charCodeAt(0),0)
  ) % 999;

  img = `https://picsum.photos/seed/${seed}/900/700`;
}

    const headline = (s.headline || '').replace(/\\n/g, '\n');

    return `
      <div class="an-wrap" style="background:${bg};--an-gold:${gold}">

        <!-- Grain texture -->
        <div class="an-grain"></div>

        <!-- ── TOP STRIP ── -->
        <div class="an-top" style="background:${surf};border-bottom:1px solid ${gold}18">
          <span class="an-lot" style="color:${muted}">${s.lot || 'LOT 042'}</span>
          <div class="an-brand-mark" style="color:${gold}">
            <div class="an-diamond"></div>
            <span class="an-brand-name">${s.brand || 'AURUM'}</span>
          </div>
        </div>

        <!-- ── PHOTO ── -->
        <div class="an-photo-wrap">
          <div class="an-photo" style="background-image:url('${img}')"></div>
          <div class="an-photo-vignette"></div>
          <!-- Lot number ghost watermark -->
          <div class="an-lot-watermark">${(s.lot||'042').replace(/[^0-9]/g,'')}</div>
        </div>

        <!-- ── GOLD RULE ── -->
        <div class="an-rule">
          <div class="an-rule-seg l"></div>
          <div class="an-rule-pip" style="background:${gold}"></div>
          <div class="an-rule-seg r"></div>
        </div>

        <!-- ── PROVENANCE + ESTIMATE ── -->
        <div class="an-meta">
          <div class="an-meta-item">
            <span class="an-meta-label" style="color:${muted}">Provenance</span>
            <span class="an-meta-value" style="color:${ivory}">${s.provenance || 'Paris, 1924'}</span>
          </div>
          <div class="an-meta-sep" style="color:${muted}">·</div>
          <div class="an-meta-item" style="text-align:right">
            <span class="an-meta-label" style="color:${muted}">Estimate</span>
            <span class="an-meta-value estimate" style="color:${gold}">${s.estimate || '$48,000 — 65,000'}</span>
          </div>
        </div>

        <!-- ── HEADLINE ── -->
        <div class="an-headline" style="color:${ivory}">${headline}</div>

        <!-- ── DESCRIPTION ── -->
        <div class="an-desc" style="color:${muted}">${s.desc || ''}</div>

        <!-- ── FOOTER ── -->
        <div class="an-footer" style="background:${surf};border-top:1px solid ${gold}18">
          <div class="an-cta" style="border-color:${gold};color:${gold}">
            ${s.cta || 'PLACE BID'}
            <span class="an-cta-arrow">→</span>
          </div>
          <span class="an-lot-line" style="color:${muted}">${s.lotLine || 'Lot 042 of 180'}</span>
        </div>

      </div>
    `;
  }
};