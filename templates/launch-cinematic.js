// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Cinematic Launch
//  Category: Product Launch
//  Style:    Full-bleed cinematic photo, split text overlay,
//            large price badge, award ribbon feel
//  Best for: Tech products, sneakers, premium gadgets
// ═══════════════════════════════════════════════════════════

export default {
  id: 'launch-cinematic',
  name: 'Cinematic Launch',
  category: 'Product Launch',
  layout: 'launch',
  tags: ['launch', 'product', 'cinematic', 'dark', 'tech', 'sneaker'],

  defaults: {
    headline: 'The Next\nChapter',
    subline: 'World Premiere',
    desc: 'Engineered beyond expectation. A product that redefines what is possible.',
    cta: 'Be First in Line',
    brand: 'APEX',
    price: '₹12,999',
    badge: 'Limited Edition',
    accent: '#ff3d3d',
    bg: '#08090a',
    img: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@200;300;400;500;600;700;800&family=Barlow:wght@300;400&display=swap');

    .tpl-launch-cinematic {
      width: 100%; height: 100%;
      background: #08090a;
      position: relative;
      overflow: hidden;
      font-family: 'Barlow', sans-serif;
    }

    /* Full bg image */
    .cin-bg {
      position: absolute; inset: 0;
    }
    .cin-bg img {
      width: 100%; height: 100%;
      object-fit: cover;
      object-position: center 30%;
      filter: brightness(0.4) saturate(1.2);
    }

    /* Cinematic letterbox bars */
    .cin-bar-top {
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 60px;
      background: linear-gradient(180deg, #08090a 0%, transparent 100%);
    }
    .cin-bar-bottom {
      position: absolute;
      bottom: 0; left: 0; right: 0;
      height: 160px;
      background: linear-gradient(0deg, #08090a 0%, transparent 100%);
    }

    /* Red vertical accent bar */
    .cin-accent-bar {
      position: absolute;
      top: 0; left: 36px;
      width: 3px; height: 100%;
    }

    .cin-content {
      position: absolute; inset: 0;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      padding: 32px 36px 36px 52px;
    }

    /* Top */
    .cin-top {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
    }
    .cin-brand {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 13px;
      font-weight: 700;
      letter-spacing: 8px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.9);
    }
    .cin-badge {
      font-size: 9px;
      letter-spacing: 2px;
      text-transform: uppercase;
      padding: 5px 12px;
      border: 1px solid currentColor;
      font-weight: 500;
    }

    /* Middle — subline */
    .cin-subline {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 10px;
      font-weight: 600;
      letter-spacing: 6px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.4);
      margin-bottom: 8px;
    }

    /* Big headline */
    .cin-headline {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 88px;
      font-weight: 800;
      line-height: 0.9;
      text-transform: uppercase;
      color: #ffffff;
      letter-spacing: -2px;
      white-space: pre-line;
    }

    /* Bottom */
    .cin-bottom {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
    }
    .cin-bottom-left {}
    .cin-desc {
      font-size: 12px;
      line-height: 1.75;
      color: rgba(255,255,255,0.45);
      font-weight: 300;
      max-width: 220px;
      margin-bottom: 18px;
      letter-spacing: 0.2px;
    }
    .cin-cta {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 11px;
      font-weight: 600;
      letter-spacing: 3px;
      text-transform: uppercase;
      padding: 11px 22px;
      cursor: default;
      display: inline-block;
    }

    /* Price block */
    .cin-price-block {
      text-align: right;
    }
    .cin-price-label {
      font-size: 9px;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: rgba(255,255,255,0.3);
      margin-bottom: 4px;
    }
    .cin-price {
      font-family: 'Barlow Condensed', sans-serif;
      font-size: 38px;
      font-weight: 700;
      color: #fff;
      line-height: 1;
    }
  `,

  render(s) {
    const accent = s.accent || '#ff3d3d';
    return `
    <div class="tpl-launch-cinematic" style="background:${s.bg}">
      <div class="cin-bg"><img src="${s.img}" alt=""/></div>
      <div class="cin-bar-top"></div>
      <div class="cin-bar-bottom"></div>
      <div class="cin-accent-bar" style="background:linear-gradient(180deg,transparent,${accent},transparent)"></div>
      <div class="cin-content">
        <div class="cin-top">
          <div class="cin-brand">${s.brand}</div>
          <div class="cin-badge" style="color:${accent};border-color:${accent}">${s.badge}</div>
        </div>
        <div>
          <div class="cin-subline">${s.subline}</div>
          <div class="cin-headline">${s.headline}</div>
        </div>
        <div class="cin-bottom">
          <div class="cin-bottom-left">
            <div class="cin-desc">${s.desc}</div>
            <div class="cin-cta" style="background:${accent};color:#fff">${s.cta}</div>
          </div>
          <div class="cin-price-block">
            <div class="cin-price-label">Starting at</div>
            <div class="cin-price" style="color:${accent}">${s.price}</div>
          </div>
        </div>
      </div>
    </div>`;
  }
};