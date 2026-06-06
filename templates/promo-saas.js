// ─────────────────────────────────────────────
//  TEMPLATE: Modern Tech & SaaS
//  Category: Promotion
//  Layout:   glassmorphism
// ─────────────────────────────────────────────

export default {
  id: 'promo-saas',
  name: 'Tech Glassmorphism',
  category: 'Promotion',
  layout: 'promo',
  tags: ['tech', 'saas', 'dark', 'modern', 'glass'],

  defaults: {
    tag: 'NEW FEATURE',
    headline: 'Deploy Faster. Scale Smarter.',
    desc: 'Integrate our next-gen API into your workflow and reduce load times by up to 40%. Built for developers, designed for scale.',
    cta: 'Read the Docs',
    brand: 'DevCore_io',
    accent: '#00f2fe', // Cyber Blue
    bg: '#0f172a',     // Slate 900
    img: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=JetBrains+Mono:wght@700&display=swap');
    
    .tpl-saas {
      width: 100%; height: 100%; position: relative; overflow: hidden;
      font-family: 'Inter', sans-serif; box-sizing: border-box;
      display: flex; align-items: center; justify-content: center;
      background-size: cover; background-position: center;
    }
    
    /* Background Blur & Gradient Overlay */
    .tpl-saas .s-overlay {
      position: absolute; inset: 0;
      background: linear-gradient(135deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.95) 100%);
      z-index: 1;
    }
    
    /* Glowing Orbs */
    .tpl-saas .s-glow {
      position: absolute; width: 400px; height: 400px; border-radius: 50%;
      filter: blur(100px); opacity: 0.5; z-index: 2;
    }

    /* Glass Card */
    .tpl-saas .s-card {
      position: relative; z-index: 3;
      width: 85%; padding: 48px; border-radius: 24px;
      background: rgba(255, 255, 255, 0.03);
      backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px);
      border: 1px solid rgba(255, 255, 255, 0.1);
      box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
      color: #fff; display: flex; flex-direction: column; gap: 20px;
    }

    /* Typography */
    .tpl-saas .s-tag {
      font-family: 'JetBrains Mono', monospace; font-size: 12px;
      letter-spacing: 1px; text-transform: uppercase;
      padding: 6px 12px; border-radius: 6px; width: fit-content;
      background: rgba(255,255,255,0.1);
    }
    .tpl-saas .s-headline {
      font-size: 44px; font-weight: 800; line-height: 1.1; letter-spacing: -1px; margin: 0;
    }
    .tpl-saas .s-desc {
      font-size: 16px; line-height: 1.6; color: #94a3b8; margin: 0; max-width: 90%;
    }
    
    /* Footer */
    .tpl-saas .s-footer {
      display: flex; justify-content: space-between; align-items: center;
      margin-top: 24px; padding-top: 24px;
      border-top: 1px solid rgba(255,255,255,0.1);
    }
    .tpl-saas .s-cta {
      font-weight: 600; font-size: 14px;
      padding: 12px 24px; border-radius: 8px; color: #0f172a;
    }
    .tpl-saas .s-brand {
      font-family: 'JetBrains Mono', monospace; font-size: 14px; opacity: 0.8;
    }
  `,

  render(s) {
    return `
      <div class="tpl-saas" style="background-image: url('${s.img}'); background-color:${s.bg}">
        <div class="s-overlay"></div>
        <div class="s-glow" style="top: -100px; right: -100px; background: ${s.accent};"></div>
        <div class="s-glow" style="bottom: -100px; left: -100px; background: ${s.accent}88;"></div>
        
        <div class="s-card">
          <div class="s-tag" style="color: ${s.accent};">${s.tag}</div>
          <h1 class="s-headline">${s.headline}</h1>
          <p class="s-desc">${s.desc}</p>
          
          <div class="s-footer">
            <div class="s-cta" style="background: ${s.accent};">${s.cta}</div>
            <div class="s-brand">${s.brand}</div>
          </div>
        </div>
      </div>`;
  }
};