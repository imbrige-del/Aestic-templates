// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Luxury Gold Noir
//  Category: Luxury & Premium
//  Style:    Dark editorial with gold foil typography,
//            diagonal accent line, refined serif headline
//  Best for: High-end fashion, jewellery, luxury brands
// ═══════════════════════════════════════════════════════════

export default {
  id: 'luxury-gold-noir',
  name: 'Gold Noir',
  category: 'Luxury & Premium',
  layout: 'luxury',
  tags: ['luxury', 'gold', 'dark', 'editorial', 'fashion', 'premium'],

  defaults: {
    headline: 'Crafted for the\nExtraordinary Few',
    subline: 'New Autumn Collection',
    desc: 'Where timeless elegance meets modern desire. Each piece tells a story written in the finest materials.',
    cta: 'Discover the Collection',
    brand: 'MAISON ÉLITE',
    season: 'AW 2026',
    accent: '#c9a84c',
    bg: '#0a0804',
    img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Tenor+Sans&display=swap');

    .tpl-luxury-gold-noir {
      width: 100%; height: 100%;
      background: #0a0804;
      position: relative; overflow: hidden;
      font-family: 'Tenor Sans', sans-serif;
    }

    /* Full bleed image with deep overlay */
    .lgn-img {
      position: absolute; inset: 0;
    }
    .lgn-img img {
      width: 100%; height: 100%;
      object-fit: cover;
      filter: saturate(0.6) brightness(0.45);
    }

    /* Diagonal gold stripe */
    .lgn-stripe {
      position: absolute;
      top: -20%; left: 55%;
      width: 2px; height: 160%;
      background: linear-gradient(180deg, transparent 0%, #c9a84c 30%, #e8cc80 50%, #c9a84c 70%, transparent 100%);
      transform: rotate(15deg);
      opacity: 0.5;
    }

    /* Corner ornament top-left */
    .lgn-ornament {
      position: absolute;
      top: 28px; left: 28px;
      width: 48px; height: 48px;
      border-top: 1px solid #c9a84c;
      border-left: 1px solid #c9a84c;
      opacity: 0.8;
    }
    /* Corner ornament bottom-right */
    .lgn-ornament-br {
      position: absolute;
      bottom: 28px; right: 28px;
      width: 48px; height: 48px;
      border-bottom: 1px solid #c9a84c;
      border-right: 1px solid #c9a84c;
      opacity: 0.8;
    }

    .lgn-content {
      position: absolute; inset: 0;
      display: flex; flex-direction: column;
      padding: 48px 40px;
      justify-content: space-between;
    }

    /* Top: brand + season */
    .lgn-top {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    .lgn-brand {
      font-family: 'Tenor Sans', sans-serif;
      font-size: 11px;
      letter-spacing: 5px;
      text-transform: uppercase;
      color: #c9a84c;
    }
    .lgn-season {
      font-size: 10px;
      letter-spacing: 3px;
      color: rgba(201,168,76,0.6);
      text-transform: uppercase;
    }

    /* Middle: headline block */
    .lgn-mid {
      flex: 1;
      display: flex;
      align-items: center;
      padding: 20px 0;
    }
    .lgn-headline-block {}
    .lgn-subline {
      font-size: 10px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #c9a84c;
      margin-bottom: 16px;
      display: flex;
      align-items: center;
      gap: 12px;
    }
    .lgn-subline::before {
      content: '';
      display: block;
      width: 28px; height: 1px;
      background: #c9a84c;
    }
    .lgn-headline {
      font-family: 'Cormorant Garamond', serif;
      font-size: 52px;
      font-weight: 300;
      line-height: 1.1;
      color: #f5ead0;
      letter-spacing: -0.5px;
      white-space: pre-line;
    }
    .lgn-headline em {
      font-style: italic;
      color: #c9a84c;
    }

    /* Bottom: desc + cta */
    .lgn-bottom {}
    .lgn-rule {
      width: 100%; height: 1px;
      background: linear-gradient(to right, #c9a84c44, #c9a84c, #c9a84c44);
      margin-bottom: 20px;
    }
    .lgn-desc {
      font-size: 12.5px;
      line-height: 1.8;
      color: rgba(245,234,208,0.55);
      max-width: 300px;
      margin-bottom: 22px;
      font-family: 'Cormorant Garamond', serif;
      font-weight: 300;
      letter-spacing: 0.3px;
    }
    .lgn-cta {
      display: inline-flex;
      align-items: center;
      gap: 14px;
      font-size: 10px;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: #c9a84c;
      cursor: default;
    }
    .lgn-cta::after {
      content: '→';
      font-size: 14px;
      letter-spacing: 0;
    }
  `,

  render(s) {
    const accent = s.accent || '#c9a84c';
    return `
    <div class="tpl-luxury-gold-noir" style="background:${s.bg}">
      <div class="lgn-img"><img src="${s.img}" alt=""/></div>
      <div class="lgn-stripe" style="background:linear-gradient(180deg,transparent 0%,${accent} 30%,${accent}cc 50%,${accent} 70%,transparent 100%)"></div>
      <div class="lgn-ornament" style="border-color:${accent}"></div>
      <div class="lgn-ornament-br" style="border-color:${accent}"></div>
      <div class="lgn-content">
        <div class="lgn-top">
          <div class="lgn-brand" style="color:${accent}">${s.brand}</div>
          <div class="lgn-season" style="color:${accent}99">${s.season}</div>
        </div>
        <div class="lgn-mid">
          <div class="lgn-headline-block">
            <div class="lgn-subline" style="color:${accent}">${s.subline}</div>
            <div class="lgn-headline">${s.headline}</div>
          </div>
        </div>
        <div class="lgn-bottom">
          <div class="lgn-rule" style="background:linear-gradient(to right,${accent}33,${accent},${accent}33)"></div>
          <div class="lgn-desc">${s.desc}</div>
          <div class="lgn-cta" style="color:${accent}">${s.cta}</div>
        </div>
      </div>
    </div>`;
  }
};