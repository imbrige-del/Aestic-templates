// ─────────────────────────────────────────────
//  TEMPLATE: Luxury Professional
//  Category: Promotion
//  Layout:   editorial
// ─────────────────────────────────────────────

export default {
  id: 'promo-luxury',
  name: 'Luxury Editorial',
  category: 'Promotion',
  layout: 'promo',
  tags: ['luxury', 'professional', 'elegant', 'premium', 'fashion'],

  // Default content — tailored for high-end retail, real estate, or services
  defaults: {
    headline: 'THE ELEGANCE COLLECTION',
    subhead: 'Spring / Summer 2026',
    desc: 'Experience uncompromising quality and timeless design. Tailored for those who appreciate the absolute finest in modern craftsmanship.',
    cta: 'DISCOVER MORE',
    brand: 'MAISON DE LUXE',
    accent: '#d4af37', // Metallic Gold
    bg: '#0a0a0a',     // Deep Charcoal / Onyx
    text: '#ffffff',   // Clean White
    img: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80',
  },

  // CSS injected into the post canvas
  css: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;600&display=swap');
    
    .tpl-promo-luxury {
      width: 100%; height: 100%;
      display: flex; flex-direction: column;
      position: relative; overflow: hidden;
      font-family: 'Montserrat', sans-serif;
      box-sizing: border-box;
    }
    
    /* Full background image with a sophisticated gradient overlay */
    .tpl-promo-luxury .l-bg-image {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background-size: cover; background-position: center;
      z-index: 0;
    }
    .tpl-promo-luxury .l-overlay {
      position: absolute; top: 0; left: 0; width: 100%; height: 100%;
      background: linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.9) 80%, rgba(10,10,10,1) 100%);
      z-index: 1;
    }

    /* Elegant inner framing */
    .tpl-promo-luxury .l-frame {
      position: relative; z-index: 2;
      width: calc(100% - 48px); height: calc(100% - 48px);
      margin: 24px;
      display: flex; flex-direction: column; justify-content: flex-end;
      padding: 40px; box-sizing: border-box;
    }

    /* Typography styling */
    .tpl-promo-luxury .l-brand {
      font-family: 'Montserrat', sans-serif;
      font-size: 11px; font-weight: 600; letter-spacing: 4px; text-transform: uppercase;
      margin-bottom: 16px;
    }
    .tpl-promo-luxury .l-headline {
      font-family: 'Playfair Display', serif;
      font-size: 42px; font-weight: 600; line-height: 1.1;
      text-transform: uppercase; letter-spacing: 2px; 
      margin: 0 0 12px 0;
    }
    .tpl-promo-luxury .l-subhead {
      font-family: 'Playfair Display', serif; font-style: italic;
      font-size: 16px; letter-spacing: 1px;
      margin-bottom: 24px; opacity: 0.9;
    }
    .tpl-promo-luxury .l-desc {
      font-size: 13px; line-height: 1.8; font-weight: 300;
      max-width: 85%; margin-bottom: 32px; opacity: 0.75;
    }
    
    /* High-end minimalist CTA button */
    .tpl-promo-luxury .l-bottom {
      display: flex; align-items: center; justify-content: space-between;
      border-top: 1px solid;
      padding-top: 24px;
    }
    .tpl-promo-luxury .l-cta {
      font-family: 'Montserrat', sans-serif;
      font-size: 10px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase;
      background: transparent; border: none; padding: 0; cursor: default;
      display: flex; align-items: center; gap: 8px;
    }
    .tpl-promo-luxury .l-cta::after {
      content: '→'; font-size: 14px;
    }
  `,

  // Render function
  render(s) {
    return `
      <div class="tpl-promo-luxury" style="background-color:${s.bg}; color:${s.text}">
        <div class="l-bg-image" style="background-image: url('${s.img}')"></div>
        <div class="l-overlay"></div>
        
        <div class="l-frame" style="border: 1px solid ${s.accent}44;">
          <div class="l-brand" style="color:${s.accent}">${s.brand}</div>
          <h1 class="l-headline">${s.headline}</h1>
          <div class="l-subhead" style="color:${s.accent}">${s.subhead}</div>
          <p class="l-desc">${s.desc}</p>
          
          <div class="l-bottom" style="border-top-color: ${s.accent}44;">
            <button class="l-cta" style="color:${s.text}">${s.cta}</button>
          </div>
        </div>
      </div>`;
  }
};