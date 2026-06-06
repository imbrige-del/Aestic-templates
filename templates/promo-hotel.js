// ─────────────────────────────────────────────
//  TEMPLATE: Luxury Hotel & Hospitality
//  Category: Promotion
//  Layout:   editorial-framed
// ─────────────────────────────────────────────

export default {
  id: 'promo-hotel',
  name: 'Luxury Resort & Spa',
  category: 'Promotion',
  layout: 'promo',
  tags: ['hotel', 'luxury', 'travel', 'hospitality', 'elegant', 'resort'],

  defaults: {
    brand: 'THE GRAND OAK',
    location: 'LAKE COMO, ITALY',
    headline: 'A Sanctuary of Unrivaled Elegance.',
    desc: 'Discover a world where timeless luxury meets breathtaking natural beauty. Experience our newly redesigned waterfront suites, Michelin-starred dining, and bespoke spa services.',
    price: 'From $850 / night',
    cta: 'RESERVE YOUR STAY',
    bg: '#fbfaf8',      // Pristine Alabaster / Warm Off-White
    text: '#1a1a1a',    // Soft Charcoal Black
    accent: '#a68a56',  // Muted Champagne Gold
    img: 'https://images.unsplash.com/photo-1542314831-c6a4d14d23a1?w=800&q=80',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Montserrat:wght@300;400;500;600&display=swap');
    
    .tpl-hotel {
      width: 100%; height: 100%;
      box-sizing: border-box;
      background-color: var(--bg); color: var(--text);
      padding: 24px; /* Creates the outer "matte" frame effect */
      display: flex; flex-direction: column;
    }

    /* Inner Gold Frame */
    .tpl-hotel .h-inner {
      flex: 1;
      border: 1px solid var(--accent);
      display: flex; flex-direction: column;
      position: relative; overflow: hidden;
    }

    /* Top Half: Image Section */
    .tpl-hotel .h-image-wrap {
      height: 55%; width: 100%;
      position: relative;
      border-bottom: 1px solid var(--accent);
    }
    .tpl-hotel .h-img {
      width: 100%; height: 100%; object-fit: cover;
    }
    
    /* 5-Star Floating Badge */
    .tpl-hotel .h-badge {
      position: absolute; top: 24px; left: 50%; transform: translateX(-50%);
      background: var(--bg); color: var(--text);
      font-family: 'Montserrat', sans-serif; font-size: 9px; font-weight: 600;
      letter-spacing: 3px; text-transform: uppercase;
      padding: 8px 16px; border-radius: 2px;
      box-shadow: 0 10px 30px rgba(0,0,0,0.1);
    }

    /* Bottom Half: Content Section */
    .tpl-hotel .h-content {
      height: 45%; padding: 32px 40px;
      display: flex; flex-direction: column; align-items: center; justify-content: center;
      text-align: center;
      background: var(--bg);
    }

    .tpl-hotel .h-stars {
      font-size: 14px; letter-spacing: 4px; color: var(--accent);
      margin-bottom: 12px;
    }

    .tpl-hotel .h-brand {
      font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 500;
      letter-spacing: 5px; text-transform: uppercase; margin-bottom: 16px;
    }

    .tpl-hotel .h-headline {
      font-family: 'Cormorant Garamond', serif; font-size: 38px; font-weight: 400;
      line-height: 1.1; margin: 0 0 16px 0; color: var(--text);
    }

    .tpl-hotel .h-desc {
      font-family: 'Montserrat', sans-serif; font-size: 12px; font-weight: 300;
      line-height: 1.8; margin: 0 0 32px 0; max-width: 85%; opacity: 0.8;
    }

    /* Perfectly Aligned Footer Grid */
    .tpl-hotel .h-footer {
      width: 100%;
      display: grid; 
      /* Divides the bottom into 3 equal sections for perfect centering */
      grid-template-columns: 1fr auto 1fr; 
      align-items: center;
      margin-top: auto;
      font-family: 'Montserrat', sans-serif;
    }

    .tpl-hotel .h-location {
      font-size: 10px; font-weight: 500; letter-spacing: 1px;
      text-transform: uppercase; text-align: left; opacity: 0.7;
      display: flex; align-items: center; gap: 6px;
    }

    .tpl-hotel .h-cta {
      font-size: 10px; font-weight: 600; letter-spacing: 2px;
      text-transform: uppercase; color: var(--bg); background: var(--text);
      padding: 12px 24px; cursor: default;
      transition: all 0.3s ease;
    }

    .tpl-hotel .h-price {
      font-size: 11px; font-weight: 500; font-style: italic;
      text-align: right; opacity: 0.7;
    }
  `,

  render(s) {
    return `
      <div class="tpl-hotel" style="
        --bg: ${s.bg}; 
        --text: ${s.text}; 
        --accent: ${s.accent};
      ">
        <div class="h-inner">
          <div class="h-image-wrap">
            <div class="h-badge">★★★★★</div>
            <img src="${s.img}" class="h-img" alt="Resort View" />
          </div>
          
          <div class="h-content">
            <div class="h-brand">${s.brand}</div>
            <h1 class="h-headline">${s.headline}</h1>
            <p class="h-desc">${s.desc}</p>
            
            <div class="h-footer">
              <div class="h-location">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                ${s.location}
              </div>
              
              <div class="h-cta">${s.cta}</div>
              
              <div class="h-price">${s.price}</div>
            </div>
          </div>
        </div>
      </div>`;
  }
};