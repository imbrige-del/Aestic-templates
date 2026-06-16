// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Crew — Workspace Profile Card
//  Category: UI / App Card
//  Style:    Playful yet premium — soft warm background,
//            bubbly card with spring shadows, avatar with
//            status ring, editable name row, stacked
//            collaborator avatars with overflow count,
//            chunky pill save button with checkmark.
//            Vibrant accent pops against a creamy base.
//  Best for: App onboarding screens, profile settings UI,
//            team workspace cards, mobile UI mockups
//  Sizes:    Fully responsive — 1:1, 4:5, 9:16, wide
//
//  FONTS:    Uses CSS variables from global fonts.css
// ═══════════════════════════════════════════════════════════

module.exports = {
  id: 'crew-workspace-card',
  name: 'Crew — Workspace Profile Card',
  category: 'UI / App Card',
  layout: 'card',
  tags: ['ui', 'card', 'profile', 'workspace', 'team', 'app', 'playful', 'mobile', 'onboarding'],

  defaults: {
    workspaceLabel:   'Workspace',
    workspaceName:    'Bill Epstein',
    collaboratorLabel:'Collaborators',
    collaboratorCount:'+10',
    ctaLabel:         'Apply Now',
    accent:           '#ff6b35',
    accentAlt:        '#ff9500',
    bg:               '#f7f4f0',
    cardBg:           '#ffffff',

    avatarMain: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=85',
    collab1:    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=85',
    collab2:    'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=85',
    collab3:    'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=85',
  },

  css: `
    /* ── Root ── */
    .tpl-crew {
      container-type: size;
      container-name: cw;
      width: 100%; height: 100%;
      position: relative;
      overflow: hidden;
      font-family: var(--font-inter);
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ════════════════════════════════════════
       BACKGROUND — warm gradient + dot pattern
    ════════════════════════════════════════ */
    .cw-bg {
      position: absolute; inset: 0; z-index: 0;
      background:
        radial-gradient(ellipse 80% 70% at 30% 20%,
          rgba(255,107,53,0.10) 0%, transparent 60%),
        radial-gradient(ellipse 60% 50% at 80% 80%,
          rgba(255,149,0,0.08) 0%, transparent 55%);
    }

    /* Polka dot texture */
    .cw-dots {
      position: absolute; inset: 0; z-index: 0;
      background-image: radial-gradient(circle, rgba(0,0,0,0.055) 1px, transparent 1px);
      background-size: clamp(16px, 3cqi, 28px) clamp(16px, 3cqi, 28px);
      pointer-events: none;
    }

    /* Decorative blobs — pure CSS shapes */
    .cw-blob {
      position: absolute;
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      filter: blur(clamp(24px, 4cqi, 60px));
    }
    .cw-blob--a {
      width: 28cqi; height: 28cqi;
      top: -6cqb; left: -4cqi;
      background: rgba(255,107,53,0.14);
    }
    .cw-blob--b {
      width: 22cqi; height: 22cqi;
      bottom: -4cqb; right: -3cqi;
      background: rgba(255,149,0,0.12);
    }
    .cw-blob--c {
      width: 16cqi; height: 16cqi;
      top: 55%; left: 72%;
      background: rgba(255,200,100,0.10);
    }

    /* ════════════════════════════════════════
       CARD
    ════════════════════════════════════════ */
    .cw-card {
      position: relative;
      z-index: 2;
      width: clamp(220px, 62cqi, 420px);
      background: #ffffff;
      border-radius: clamp(20px, 3.5cqi, 36px);
      padding: clamp(24px, 4.5cqb, 48px) clamp(20px, 4cqi, 40px);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: clamp(14px, 2.8cqb, 28px);

      /* Layered spring shadow — fun depth */
      box-shadow:
        0 1px 2px rgba(0,0,0,0.04),
        0 4px 12px rgba(0,0,0,0.06),
        0 16px 40px rgba(0,0,0,0.08),
        0 0 0 1.5px rgba(0,0,0,0.04);
    }

    /* ── Avatar section ── */
    .cw-avatar-wrap {
      position: relative;
      flex-shrink: 0;
    }

    .cw-avatar {
      width: clamp(64px, 13cqi, 100px);
      height: clamp(64px, 13cqi, 100px);
      border-radius: 50%;
      overflow: hidden;
      border: clamp(3px, 0.5cqi, 5px) solid #ffffff;
      box-shadow:
        0 0 0 clamp(3px, 0.5cqi, 5px) rgba(255,107,53,0.25),
        0 4px 16px rgba(255,107,53,0.20);
      position: relative;
    }
    .cw-avatar img {
      width: 100%; height: 100%;
      object-fit: cover; object-position: center top;
      display: block;
    }

    /* Camera badge on avatar */
    .cw-avatar-badge {
      position: absolute;
      bottom: clamp(0px, 0.3cqi, 3px);
      right: clamp(0px, 0.3cqi, 3px);
      width: clamp(18px, 3.2cqi, 26px);
      height: clamp(18px, 3.2cqi, 26px);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: clamp(8px, 1.4cqi, 12px);
      border: clamp(2px, 0.3cqi, 3px) solid #ffffff;
      box-shadow: 0 2px 8px rgba(0,0,0,0.15);
      cursor: default;
    }

    /* ── Divider ── */
    .cw-divider {
      width: 100%;
      height: 1px;
      background: rgba(0,0,0,0.06);
      border-radius: 1px;
    }

    /* ── Workspace name row ── */
    .cw-name-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: clamp(4px, 0.8cqb, 8px);
    }

    .cw-section-label {
      font-size: clamp(9px, 1.4cqi, 13px);
      font-weight: 400;
      color: rgba(0,0,0,0.35);
      letter-spacing: 0.02em;
      text-align: center;
    }

    .cw-name-row {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: clamp(6px, 1.2cqi, 12px);
    }

    .cw-name {
      font-family: var(--font-raleway);
      font-weight: 700;
      font-size: clamp(16px, 3.5cqi, 28px);
      color: #0d0d0d;
      letter-spacing: -0.02em;
      line-height: 1.1;
    }

    /* ── Collaborators section ── */
    .cw-collabs-section {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: clamp(8px, 1.5cqb, 14px);
    }

    .cw-collabs-row {
      display: flex;
      align-items: center;
    }

    /* Each collaborator avatar */
    .cw-collab {
      width: clamp(34px, 7cqi, 52px);
      height: clamp(34px, 7cqi, 52px);
      border-radius: 50%;
      overflow: hidden;
      border: clamp(2px, 0.4cqi, 3.5px) solid #ffffff;
      margin-left: clamp(-8px, -1.5cqi, -10px);
      box-shadow: 0 2px 8px rgba(0,0,0,0.10);
      flex-shrink: 0;
    }
    .cw-collab:first-child { margin-left: 0; }
    .cw-collab img {
      width: 100%; height: 100%;
      object-fit: cover; object-position: center top;
      display: block;
    }

    /* Overflow count bubble */
    .cw-collab-count {
      width: clamp(34px, 7cqi, 52px);
      height: clamp(34px, 7cqi, 52px);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-family: var(--font-inter);
      font-weight: 700;
      font-size: clamp(12px, 1.6cqi, 16px);
      color: #ffffff;
      border: clamp(2px, 0.4cqi, 3.5px) solid #ffffff;
      margin-left: clamp(-8px, -1.5cqi, -10px);
      flex-shrink: 0;
      box-shadow: 0 2px 8px rgba(255,107,53,0.30);
      letter-spacing: -0.02em;
    }

    /* ── Save CTA ── */
    .cw-cta {
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: clamp(12px, 2.2cqb, 18px) clamp(16px, 3.5cqi, 28px);
      border-radius: clamp(14px, 2.5cqi, 20px);
      cursor: default;
      gap: clamp(8px, 1.5cqi, 14px);
      box-shadow:
        0 4px 14px rgba(0,0,0,0.15),
        0 1px 3px rgba(0,0,0,0.10),
        inset 0 1px 0 rgba(255,255,255,0.12);
    }

    .cw-cta-label {
      font-family: var(--font-raleway);
      font-weight: 600;
      font-size: clamp(13px, 2.4cqi, 20px);
      color: #ffffff;
      letter-spacing: -0.01em;
      line-height: 1;
    }

    .cw-cta-check {
      width: clamp(26px, 4.5cqi, 36px);
      height: clamp(26px, 4.5cqi, 36px);
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.18);
      display: flex; align-items: center; justify-content: center;
      font-size: clamp(14px, 2cqi, 20px);
      flex-shrink: 0;
      border: 1px solid rgba(255,255,255,0.25);
    }

    /* ════════════════════════════════════════
       CONTAINER QUERIES
    ════════════════════════════════════════ */

    /* 1:1 Square */
    @container cw (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .cw-card { width: clamp(200px, 58cqi, 380px); gap: clamp(12px, 2.2cqb, 22px); }
    }

    /* Portrait 4:5 / 9:16 */
    @container cw (max-aspect-ratio: 0.82/1) {
      .cw-card { width: clamp(210px, 72cqi, 400px); gap: clamp(14px, 2.5cqb, 26px); }
      .cw-avatar { width: clamp(70px, 16cqi, 110px); height: clamp(70px, 16cqi, 110px); }
    }

    /* Wide 16:9+ */
    @container cw (min-aspect-ratio: 1.55/1) {
      .cw-card { width: clamp(220px, 38cqi, 400px); }
    }
  `,

  render(s) {
    const accent    = s.accent    || '#ff6b35';
    const accentAlt = s.accentAlt || '#ff9500';

    return `
    <div class="tpl-crew" style="background:${s.bg}">

      <!-- Background layers -->
      <div class="cw-bg"></div>
      <div class="cw-dots"></div>
      <div class="cw-blob cw-blob--a"></div>
      <div class="cw-blob cw-blob--b"></div>
      <div class="cw-blob cw-blob--c"></div>

      <!-- Card -->
      <div class="cw-card" style="background:${s.cardBg}">

        <!-- Avatar -->
        <div class="cw-avatar-wrap">
          <div class="cw-avatar">
            <img src="${s.avatarMain}" alt="" />
          </div>
        </div>

        <div class="cw-divider"></div>

        <!-- Workspace name -->
        <div class="cw-name-section">
          <span class="cw-section-label">${s.workspaceLabel} name</span>
          <div class="cw-name-row">
            <span class="cw-name">${s.workspaceName}</span>
          </div>
        </div>

        <div class="cw-divider"></div>

        <!-- Collaborators -->
        <div class="cw-collabs-section">
          <span class="cw-section-label">${s.collaboratorLabel}</span>
          <div class="cw-collabs-row">
            <div class="cw-collab"><img src="${s.collab1}" alt="" /></div>
            <div class="cw-collab"><img src="${s.collab2}" alt="" /></div>
            <div class="cw-collab"><img src="${s.collab3}" alt="" /></div>
            <div class="cw-collab-count"
              style="background:linear-gradient(135deg,${accent},${accentAlt})">
              ${s.collaboratorCount}
            </div>
          </div>
        </div>

        <!-- Save CTA -->
        <div class="cw-cta"
          style="background:linear-gradient(135deg,#111111 0%,#2a2a2a 100%)">
          <span class="cw-cta-label">${s.ctaLabel}</span>
          <div class="cw-cta-check" style="background:${accent};border-color:${accent}">✓</div>
        </div>

      </div>
    </div>`;
  }
};