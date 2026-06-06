// ─────────────────────────────────────────────
//  TEMPLATE: Real Estate — Orange Hero v2
//  Category: Real Estate
//  Layout:   hero-product-social
// ─────────────────────────────────────────────

export default {
  id: 'realestate-orange-hero',
  name: 'Property Hero',
  category: 'Real Estate',
  layout: 'hero-product-social',
  tags: ['real estate', 'property', 'orange', 'bold', 'hero', 'housing', 'agent', 'realty'],

  defaults: {
    headline1:  'Unlock',
    headline2:  'Grow',
    headline3:  'Starts with',
    headline4:  'Property',
    desc:       'This modern real estate website UI is designed to grow faster enhance user experience with clean layouts.',
    website:    'inforealestate.com',
    cta:        'Follow Us',
    bg:         '#f05205',
    img:        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

    .tpl-re2 {
      width: 100%; height: 100%;
      background: var(--bg);
      position: relative;
      overflow: hidden;
      font-family: 'Plus Jakarta Sans', sans-serif;
      display: flex;
      flex-direction: column;
    }

    /* Diagonal swirl stripes — matches reference */
    .re2-bg {
      position: absolute; inset: 0; z-index: 0;
      background: repeating-linear-gradient(
        -52deg,
        transparent 0px,       transparent 22px,
        rgba(255,255,255,0.07) 22px, rgba(255,255,255,0.07) 26px,
        transparent 26px,      transparent 54px,
        rgba(255,255,255,0.07) 54px, rgba(255,255,255,0.07) 58px,
        transparent 58px,      transparent 86px,
        rgba(255,255,255,0.07) 86px, rgba(255,255,255,0.07) 90px
      );
    }

    .re2-wrap {
      position: relative; z-index: 5;
      flex: 1; display: flex; flex-direction: column;
    }

    /* TOP */
    .re2-top {
      padding: 28px 26px 0;
      flex-shrink: 0;
    }

    /* LOGO centred */
    .re2-logo {
      display: flex; justify-content: center;
      margin-bottom: 18px;
    }

    /* HEADLINE rows */
    .re2-headline { margin-bottom: 14px; }
    .re2-row {
      display: block;
      font-size: 54px;
      font-weight: 800;
      line-height: 1.02;
      letter-spacing: -2px;
      white-space: nowrap;
    }
    .re2-w { color: #ffffff; }
    .re2-b { color: #111111; font-weight: 900; }

    /* DESC */
    .re2-desc {
      font-size: 14px; font-weight: 400;
      line-height: 1.65; color: rgba(255,255,255,0.9);
      max-width: 390px; margin: 0;
    }

    /* IMAGE fills remaining height, bleeds to edges */
    .re2-img-wrap {
      flex: 1; position: relative; overflow: hidden;
    }
    .re2-img {
      width: 100%; height: 100%;
      object-fit: cover; object-position: center 8%;
      display: block;
    }
    /* fade top of image into orange */
    .re2-img-fade {
      position: absolute; top: 0; left: 0; right: 0;
      height: 90px; z-index: 2;
      background: linear-gradient(to bottom, var(--bg) 0%, transparent 100%);
    }

    /* FOOTER */
    .re2-footer {
      flex-shrink: 0; position: relative; z-index: 10;
      background: rgba(255,255,255,0.14);
      border-top: 1px solid rgba(255,255,255,0.22);
      padding: 12px 22px;
      display: flex; align-items: center;
      justify-content: space-between; gap: 10px;
    }

    /* Follow Us pill */
    .re2-follow {
      display: flex; align-items: center; gap: 10px;
      background: rgba(255,255,255,0.15);
      border: 1px solid rgba(255,255,255,0.28);
      border-radius: 8px;
      padding: 7px 18px 7px 7px;
    }
    .re2-follow-box {
      width: 30px; height: 30px;
      background: var(--bg); border-radius: 6px;
      display: flex; align-items: center; justify-content: center;
      flex-shrink: 0;
      border: 1px solid rgba(255,255,255,0.3);
    }
    .re2-follow-label {
      font-size: 13.5px; font-weight: 700; color: #ffffff;
    }

    /* Socials */
    .re2-socials {
      display: flex; align-items: center; gap: 9px;
    }
    .re2-ico {
      width: 20px; height: 20px;
      display: flex; align-items: center; justify-content: center;
    }
    .re2-website {
      font-size: 12px; font-weight: 500;
      color: rgba(255,255,255,0.9); letter-spacing: 0.1px;
    }
    .re2-vsep {
      width: 1px; height: 16px;
      background: rgba(255,255,255,0.28); flex-shrink: 0;
    }
  `,

  render(s) {
    return `
      <div class="tpl-re2" style="--bg:${s.bg};">
        <div class="re2-bg"></div>

        <div class="re2-wrap">

          <!-- LOGO -->
          <div class="re2-top">
            <div class="re2-logo">
              <svg width="54" height="54" viewBox="0 0 54 54" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="2"  y="26" width="12" height="24" rx="1.2" fill="white"/>
                <rect x="5"  y="18" width="6"  height="8"  rx="0.8" fill="white"/>
                <rect x="17" y="13" width="20" height="37" rx="1.2" fill="white"/>
                <rect x="22" y="4"  width="10" height="9"  rx="0.8" fill="white"/>
                <rect x="40" y="26" width="12" height="24" rx="1.2" fill="white"/>
                <rect x="43" y="18" width="6"  height="8"  rx="0.8" fill="white"/>
              </svg>
            </div>

            <!-- HEADLINE -->
            <div class="re2-headline">
              <span class="re2-row">
                <span class="re2-w">${s.headline1}&nbsp;</span><span class="re2-b">${s.headline2}</span>
              </span>
              <span class="re2-row">
                <span class="re2-w">${s.headline3}&nbsp;</span><span class="re2-b">${s.headline4}</span>
              </span>
            </div>

            <!-- DESC -->
            <p class="re2-desc">${s.desc}</p>
          </div>

          <!-- IMAGE -->
          <div class="re2-img-wrap">
            <img class="re2-img" src="${s.img}" alt="" crossorigin="anonymous"/>
            <div class="re2-img-fade"></div>
          </div>

          <!-- FOOTER -->
          <div class="re2-footer">

            <div class="re2-follow">
              <div class="re2-follow-box">
                <!-- diagonal arrow -->
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 13L13 3M13 3H6M13 3V10" stroke="white" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="re2-follow-label">${s.cta}</span>
            </div>

            <div class="re2-socials">
              <!-- TikTok -->
              <div class="re2-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(255,255,255,0.88)">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.77 0 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 12.68 0V8.69a8.19 8.19 0 0 0 4.79 1.54V6.78a4.85 4.85 0 0 1-1.02-.09z"/>
                </svg>
              </div>
              <!-- Instagram -->
              <div class="re2-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="2" stroke-linecap="round">
                  <rect x="2" y="2" width="20" height="20" rx="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="rgba(255,255,255,0.88)" stroke="none"/>
                </svg>
              </div>
              <!-- @ -->
              <div class="re2-ico">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.88)" stroke-width="2" stroke-linecap="round">
                  <circle cx="12" cy="12" r="4"/>
                  <path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-3.92 7.94"/>
                </svg>
              </div>
              <div class="re2-vsep"></div>
              <span class="re2-website">${s.website}</span>
            </div>

          </div>
        </div>
      </div>`;
  }
};