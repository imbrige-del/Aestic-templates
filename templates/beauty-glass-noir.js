// ─────────────────────────────────────────────
//  TEMPLATE: Luxury Beauty — Glass Noir
//  Category: Beauty
//  Layout:   centered-glass
// ─────────────────────────────────────────────

export default {
  id: 'beauty-glass-noir',
  name: 'Glass Noir',
  category: 'Beauty',
  layout: 'centered-glass',
  tags: ['beauty', 'fragrance', 'luxury', 'dark', 'glass', 'skincare', 'premium', 'cosmetics'],

  defaults: {
    brand:    'LUMIÈRE',
    headline: 'Midnight\nBloom.',
    sub:      'Eau de Parfum',
    desc:     'A nocturnal garden of jasmine, dark rose, and smoked amber. For the woman who owns the night.',
    badge:    'NEW COLLECTION',
    price:    '€ 290',
    cta:      'Discover Now',
    handle:   '@lumiereparfums',
    accent:   '#d4af82',       // warm gold
    accent2:  '#b07bba',       // mauve
    bg:       'linear-gradient(145deg, #12091a 0%, #1a0e2e 40%, #0e1220 100%)',
    img:      'https://images.unsplash.com/photo-1541643600914-78b084683702?w=800&q=80',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Jost:wght@200;300;400;500&display=swap');

    .tpl-glass-noir {
      width: 100%; height: 100%;
      background: var(--bg);
      color: #f5f0eb;
      position: relative;
      overflow: hidden;
      font-family: 'Jost', sans-serif;
    }

    /* Full-canvas background image with overlay */
    .gn-bg-img {
      position: absolute;
      inset: 0;
      width: 100%; height: 100%;
      object-fit: cover;
      opacity: 0.28;
    }
    .gn-bg-overlay {
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse 80% 60% at 50% 50%, rgba(180,100,180,0.1) 0%, transparent 70%),
                  radial-gradient(ellipse 60% 80% at 20% 80%, rgba(212,175,130,0.08) 0%, transparent 60%);
    }

    /* Decorative orbit rings */
    .gn-orbit {
      position: absolute;
      border-radius: 50%;
      border: 1px solid rgba(212,175,130,0.1);
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      pointer-events: none;
    }
    .gn-orbit-1 { width: 320px; height: 320px; }
    .gn-orbit-2 { width: 450px; height: 450px; border-color: rgba(176,123,186,0.07); }

    /* ── MAIN CARD (glassmorphism) ── */
    .gn-card {
      position: absolute;
      inset: 28px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 4px;
      backdrop-filter: blur(2px);
      display: flex;
      flex-direction: column;
      overflow: hidden;
    }

    /* Thin gold top bar */
    .gn-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 16px 24px;
      border-bottom: 1px solid rgba(212,175,130,0.2);
      flex-shrink: 0;
    }
    .gn-brand {
      font-family: 'Playfair Display', serif;
      font-size: 14px;
      font-weight: 400;
      letter-spacing: 6px;
      text-transform: uppercase;
      color: var(--gold);
    }
    .gn-badge {
      font-family: 'Jost', sans-serif;
      font-size: 8px;
      font-weight: 500;
      letter-spacing: 2.5px;
      text-transform: uppercase;
      color: var(--mauve);
      border: 1px solid rgba(176,123,186,0.4);
      padding: 4px 10px;
    }

    /* ── BODY: image-left, text-right ── */
    .gn-body {
      flex: 1;
      display: grid;
      grid-template-columns: 1fr 1fr;
      overflow: hidden;
    }

    /* Left: product image centered */
    .gn-img-wrap {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 20px;
      border-right: 1px solid rgba(255,255,255,0.07);
    }
    /* Soft glow behind product */
    .gn-img-wrap::before {
      content: '';
      position: absolute;
      width: 200px; height: 200px;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(212,175,130,0.18) 0%, transparent 70%);
    }
    .gn-product-img {
      width: 90%; height: 90%;
      object-fit: contain;
      position: relative;
      z-index: 2;
      filter: drop-shadow(0 20px 60px rgba(0,0,0,0.7));
    }

    /* Right: text content */
    .gn-text {
      padding: 32px 24px;
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
    .gn-sub {
      font-size: 10px;
      font-weight: 300;
      letter-spacing: 4px;
      text-transform: uppercase;
      color: var(--gold);
      opacity: 0.7;
      margin-bottom: 14px;
    }
    .gn-headline {
      font-family: 'Playfair Display', serif;
      font-size: 46px;
      font-weight: 700;
      font-style: italic;
      line-height: 0.95;
      letter-spacing: -1px;
      color: #f5f0eb;
      white-space: pre-line;
      margin-bottom: 20px;
    }

    /* gold rule */
    .gn-rule {
      display: flex;
      align-items: center;
      gap: 10px;
      margin-bottom: 18px;
    }
    .gn-rule-line {
      flex: 1;
      height: 1px;
      background: linear-gradient(to right, rgba(212,175,130,0.5), transparent);
    }
    .gn-rule-diamond {
      width: 5px; height: 5px;
      transform: rotate(45deg);
      background: var(--gold);
      opacity: 0.6;
      flex-shrink: 0;
    }

    .gn-desc {
      font-size: 12px;
      font-weight: 300;
      line-height: 1.8;
      color: rgba(245,240,235,0.55);
      margin-bottom: 28px;
    }

    /* Price + CTA stacked */
    .gn-purchase {
      display: flex;
      flex-direction: column;
      gap: 10px;
    }
    .gn-price {
      font-family: 'Playfair Display', serif;
      font-size: 22px;
      font-weight: 400;
      color: var(--gold);
      letter-spacing: 1px;
    }
    .gn-cta {
      font-family: 'Jost', sans-serif;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 3px;
      text-transform: uppercase;
      color: var(--gold);
      border: 1px solid rgba(212,175,130,0.5);
      padding: 11px 20px;
      display: inline-block;
      width: fit-content;
      cursor: default;
      transition: all 0.3s;
    }

    /* ── BOTTOM BAR ── */
    .gn-footer {
      border-top: 1px solid rgba(255,255,255,0.07);
      padding: 12px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
    }
    .gn-handle {
      font-size: 10px;
      font-weight: 300;
      letter-spacing: 2px;
      color: rgba(245,240,235,0.3);
    }
    /* decorative dot-chain */
    .gn-dots {
      display: flex;
      gap: 5px;
      align-items: center;
    }
    .gn-d {
      width: 3px; height: 3px;
      border-radius: 50%;
      background: rgba(212,175,130,0.3);
    }
    .gn-d.g { background: var(--mauve); opacity: 0.7; }
  `,

  render(s) {
    return `
      <div class="tpl-glass-noir" style="
        --bg: ${s.bg};
        --gold: ${s.accent};
        --mauve: ${s.accent2 || '#b07bba'};
      ">
        <img src="${s.img}" class="gn-bg-img" alt="" crossorigin="anonymous"/>
        <div class="gn-bg-overlay"></div>
        <div class="gn-orbit gn-orbit-1"></div>
        <div class="gn-orbit gn-orbit-2"></div>

        <div class="gn-card">
          <!-- Top bar -->
          <div class="gn-topbar">
            <div class="gn-brand">${s.brand}</div>
            <div class="gn-badge">${s.badge}</div>
          </div>

          <!-- Body -->
          <div class="gn-body">
            <div class="gn-img-wrap">
              <img src="${s.img}" class="gn-product-img" alt="" crossorigin="anonymous"/>
            </div>

            <div class="gn-text">
              <div class="gn-sub">${s.sub}</div>
              <div class="gn-headline">${s.headline}</div>
              <div class="gn-rule">
                <div class="gn-rule-line"></div>
                <div class="gn-rule-diamond"></div>
              </div>
              <div class="gn-desc">${s.desc}</div>
              <div class="gn-purchase">
                <div class="gn-price">${s.price}</div>
                <div class="gn-cta">${s.cta}</div>
              </div>
            </div>
          </div>

          <!-- Footer -->
          <div class="gn-footer">
            <div class="gn-handle">${s.handle}</div>
            <div class="gn-dots">
              <div class="gn-d"></div>
              <div class="gn-d g"></div>
              <div class="gn-d"></div>
              <div class="gn-d g"></div>
              <div class="gn-d"></div>
            </div>
          </div>
        </div>
      </div>`;
  }
};