// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Minimal App Promo
//  Category: App Marketing
//  Style:    Apple-style dark hero, left text + right phone
//  Best for: App intro, SaaS, startup ads, launch screens
// ═══════════════════════════════════════════════════════════

export default {
  id: 'minimal-app-hero',
  name: 'Minimal App Hero',
  category: 'App Marketing',
  layout: 'hero-split',
  tags: ['app', 'startup', 'dark', 'minimal', 'iphone', 'saas'],

  defaults: {
    headline: 'Tired of Feeling\nOverwhelmed?',
    subline: 'Get more done with Aekbharat!',
    brand: 'AEKBHARAT',
    accent: '#ffffff',
    bg: '#000000',
    img: 'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=900&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

    .tpl-minimal-hero {
      width:100%; height:100%;
      background:#000;
      color:#fff;
      font-family:'Inter',sans-serif;
      position:relative;
      overflow:hidden;
    }

    /* soft background wave */
    .hero-wave {
      position:absolute;
      inset:0;
      opacity:.15;
      background:
        radial-gradient(1200px 400px at -200px 80%, #ffffff22, transparent 60%),
        radial-gradient(900px 300px at 40% 120%, #ffffff15, transparent 70%);
    }

    .hero-inner {
      position:absolute;
      inset:0;
      display:flex;
      align-items:center;
      justify-content:space-between;
      padding:70px;
    }

    /* LEFT CONTENT */
    .hero-left {
      max-width:520px;
    }

    .hero-brand {
      font-size:13px;
      letter-spacing:6px;
      text-transform:uppercase;
      opacity:.6;
      margin-bottom:18px;
    }

    .hero-headline {
      font-size:64px;
      font-weight:800;
      line-height:1.05;
      letter-spacing:-1.5px;
      margin-bottom:20px;
      white-space:pre-line;
    }

    .hero-subline {
      font-size:20px;
      color:#cfcfcf;
      font-weight:400;
      letter-spacing:.2px;
    }

    /* RIGHT PHONE */
    .hero-right {
      position:relative;
      width:420px;
      height:700px;
      display:flex;
      align-items:center;
      justify-content:center;
    }

    .phone-glow {
      position:absolute;
      width:520px;
      height:520px;
      background:radial-gradient(circle, #ffffff22 0%, transparent 70%);
      filter:blur(40px);
    }

    .phone-img {
      position:relative;
      width:360px;
      height:720px;
      object-fit:cover;
      border-radius:38px;
      box-shadow:
        0 40px 120px rgba(0,0,0,.8),
        0 0 0 1px rgba(255,255,255,.06);
    }

    /* responsive */
    @media(max-width:900px){
      .hero-inner{
        flex-direction:column;
        text-align:center;
        padding:40px;
      }
      .hero-right{
        margin-top:40px;
        transform:scale(.8);
      }
      .hero-headline{
        font-size:46px;
      }
    }
  `,

  render(s){
    return `
    <div class="tpl-minimal-hero" style="background:${s.bg}">
      <div class="hero-wave"></div>

      <div class="hero-inner">

        <div class="hero-left">
          <div class="hero-brand">${s.brand}</div>
          <div class="hero-headline">${s.headline}</div>
          <div class="hero-subline">${s.subline}</div>
        </div>

        <div class="hero-right">
          <div class="phone-glow"></div>
          <img class="phone-img" src="${s.img}" alt="app preview"/>
        </div>

      </div>
    </div>
    `;
  }
};