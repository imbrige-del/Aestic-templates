// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Marble White
//  Category: Luxury & Premium
//  Style:    Ivory cream editorial, split layout,
//            refined Didot-style serif, architectural spacing
//  Best for: Skincare, cosmetics, interior design, bridal
// ═══════════════════════════════════════════════════════════

export default {
  id: 'luxury-marble-white',
  name: 'Marble White',
  category: 'Luxury & Premium',
  layout: 'luxury',
  tags: ['luxury', 'white', 'minimal', 'cream', 'skincare', 'bridal', 'editorial'],

  defaults: {
    headline: 'Pure Radiance\nRedefined',
    subline: 'Signature Collection',
    desc: 'Formulated with rare botanical extracts. A ritual of renewal for skin that speaks of quiet luxury.',
    cta: 'Shop the Edit',
    brand: 'LUMIÈRE',
    tag: 'New Arrival',
    accent: '#8b7355',
    bg: '#f8f4ef',
    img: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=Jost:wght@300;400;500&display=swap');

    .tpl-marble-white {
      width: 100%; height: 100%;
      background: #f8f4ef;
      display: flex;
      flex-direction: column;
      position: relative;
      overflow: hidden;
      font-family: 'Jost', sans-serif;
    }

    /* Top image — 55% height */
    .mw-img-wrap {
      height: 55%;
      position: relative;
      overflow: hidden;
      flex-shrink: 0;
    }
    .mw-img-wrap img {
      width: 100%; height: 100%;
      object-fit: cover;
    }
    /* Fade into body */
    .mw-img-wrap::after {
      content: '';
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 80px;
      background: linear-gradient(to bottom, transparent, #f8f4ef);
    }

    /* Tag pill overlaid on image */
    .mw-tag {
      position: absolute;
      top: 20px; right: 20px;
      font-size: 9px;
      letter-spacing: 3px;
      text-transform: uppercase;
      padding: 6px 14px;
      border: 1px solid currentColor;
      background: rgba(248,244,239,0.85);
      backdrop-filter: blur(4px);
    }

    /* Body content */
    .mw-body {
      flex: 1;
      padding: 10px 32px 30px;
      display: flex;
      flex-direction: column;
      gap: 0;
    }

    .mw-subline {
      font-size: 9px;
      letter-spacing: 4px;
      text-transform: uppercase;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;
    }
    .mw-subline::after {
      content: '';
      flex: 1;
      height: 1px;
      background: currentColor;
      opacity: 0.3;
    }

    .mw-headline {
      font-family: 'Cormorant Garamond', serif;
      font-size: 48px;
      font-weight: 300;
      line-height: 1.05;
      letter-spacing: -0.5px;
      color: #1a1612;
      white-space: pre-line;
      margin-bottom: 14px;
    }

    .mw-desc {
      font-size: 12px;
      line-height: 1.85;
      color: #7a6f63;
      font-weight: 300;
      letter-spacing: 0.2px;
      flex: 1;
    }

    .mw-footer {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding-top: 16px;
      border-top: 1px solid #d4c9b8;
      margin-top: 12px;
    }
    .mw-brand {
      font-size: 10px;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: #1a1612;
      font-weight: 500;
    }
    .mw-cta {
      font-size: 9px;
      letter-spacing: 3px;
      text-transform: uppercase;
      padding: 8px 18px;
      border: 1px solid currentColor;
      cursor: default;
      transition: all 0.2s;
    }
  `,

  render(s) {
    const accent = s.accent || '#8b7355';
    const bg = s.bg || '#f8f4ef';
    const textDark = '#1a1612';
    return `
    <div class="tpl-marble-white" style="background:${bg}">
      <div class="mw-img-wrap" style="background:${bg}">
        <img src="${s.img}" alt=""/>
        <div class="mw-tag" style="color:${accent};border-color:${accent}aa">${s.tag}</div>
      </div>
      <div class="mw-body">
        <div class="mw-subline" style="color:${accent}">${s.subline}</div>
        <div class="mw-headline" style="color:${textDark}">${s.headline}</div>
        <div class="mw-desc">${s.desc}</div>
        <div class="mw-footer">
          <div class="mw-brand" style="color:${textDark}">${s.brand}</div>
          <div class="mw-cta" style="color:${accent};border-color:${accent}">${s.cta}</div>
        </div>
      </div>
    </div>`;
  }
};