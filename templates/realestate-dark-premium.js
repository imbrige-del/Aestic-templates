export default {
  id: 'realestate-dark-premium',
  name: 'Property Dark Premium',
  category: 'Real Estate',
  layout: 'hero-product-social',
  tags: ['real estate', 'premium', 'dark', 'gold', 'luxury', 'property'],

  defaults: {
    headline1:  'Unlock',
    headline2:  'Grow',
    headline3:  'Starts with',
    headline4:  'Property',
    desc:       'This modern real estate website UI is designed to grow faster enhance user experience with clean layouts.',
    website:    'inforealestate.com',
    cta:        'Follow Us',
    bg:         '#0b0b0c',
    img:        'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&q=80',
  },

  css: `
  @import url('https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800;900&display=swap');

  .tpl-dark {
    width: 100%; height: 100%;
    background: radial-gradient(circle at 30% 20%, #1a1a1c, #0b0b0c 70%);
    position: relative;
    overflow: hidden;
    font-family: 'Plus Jakarta Sans', sans-serif;
    display: flex;
    flex-direction: column;
  }

  /* PREMIUM WAVE BACKGROUND */
  .dark-bg {
    position: absolute; inset: 0;
    background:
      repeating-linear-gradient(
        120deg,
        rgba(255,215,150,0.05) 0px,
        rgba(255,215,150,0.05) 2px,
        transparent 2px,
        transparent 40px
      );
    opacity: 0.3;
  }

  .dark-wrap {
    position: relative;
    z-index: 5;
    flex: 1;
    display: flex;
    flex-direction: column;
  }

  /* LOGO */
  .dark-top {
    padding: 28px 26px 0;
  }

  .dark-logo {
    display: flex;
    justify-content: center;
    margin-bottom: 18px;
  }

  /* HEADLINE */
  .dark-row {
    font-size: 54px;
    font-weight: 800;
    line-height: 1.05;
    letter-spacing: -2px;
  }

  .dark-w { color: #eaeaea; }

  .dark-g {
    background: linear-gradient(90deg, #f6d365, #fda085);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-weight: 900;
  }

  /* DESCRIPTION */
  .dark-desc {
    font-size: 14px;
    line-height: 1.6;
    color: rgba(255,255,255,0.7);
    max-width: 390px;
  }

  /* IMAGE AREA */
  .dark-img-wrap {
    flex: 1;
    position: relative;
  }

  .dark-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(0.55) contrast(1.1);
  }

  /* GOLD GLOW EFFECT */
  .gold-glow {
    position: absolute;
    bottom: 30%;
    left: 50%;
    transform: translateX(-50%);
    width: 200px;
    height: 200px;
    background: radial-gradient(circle, rgba(255,200,120,0.4), transparent 70%);
    filter: blur(40px);
  }

  /* FOOTER */
  .dark-footer {
    background: rgba(255,255,255,0.05);
    border-top: 1px solid rgba(255,255,255,0.1);
    padding: 12px 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  /* CTA */
  .dark-follow {
    display: flex;
    align-items: center;
    gap: 10px;
    background: linear-gradient(135deg, #f6d365, #fda085);
    border-radius: 8px;
    padding: 8px 16px;
  }

  .dark-follow-label {
    font-size: 13px;
    font-weight: 700;
    color: #000;
  }

  /* SOCIAL */
  .dark-socials {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  .dark-website {
    font-size: 12px;
    color: rgba(255,255,255,0.8);
  }
  `,

  render(s) {
    return `
    <div class="tpl-dark">
      <div class="dark-bg"></div>

      <div class="dark-wrap">

        <div class="dark-top">

          <!-- LOGO -->
          <div class="dark-logo">
            <svg width="54" height="54" viewBox="0 0 54 54" fill="none">
              <rect x="2" y="26" width="12" height="24" rx="1.2" fill="#f6d365"/>
              <rect x="17" y="13" width="20" height="37" rx="1.2" fill="#fda085"/>
              <rect x="40" y="26" width="12" height="24" rx="1.2" fill="#f6d365"/>
            </svg>
          </div>

          <!-- HEADLINE -->
          <div>
            <div class="dark-row">
              <span class="dark-w">${s.headline1} </span>
              <span class="dark-g">${s.headline2}</span>
            </div>
            <div class="dark-row">
              <span class="dark-w">${s.headline3} </span>
              <span class="dark-g">${s.headline4}</span>
            </div>
          </div>

          <p class="dark-desc">${s.desc}</p>
        </div>

        <!-- IMAGE -->
        <div class="dark-img-wrap">
          <img class="dark-img" src="${s.img}" />
          <div class="gold-glow"></div>
        </div>

        <!-- FOOTER -->
        <div class="dark-footer">
          <div class="dark-follow">
            <span class="dark-follow-label">${s.cta}</span>
          </div>

          <div class="dark-socials">
            <span class="dark-website">${s.website}</span>
          </div>
        </div>

      </div>
    </div>
    `;
  }
};