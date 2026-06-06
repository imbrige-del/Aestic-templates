// templates/focus-studio.js
// ─────────────────────────────────────────────────────────────
//  FOCUS STUDIO — Clean white editorial typography
//  Aesthetic: White background, bold serif + italic orange text,
//  minimal layout, professional photography/agency style.
//  Based on: Shoot / Edit / Deliver / Repeat design
// ─────────────────────────────────────────────────────────────

export default {
  id:       'focus-studio',
  name:     'Focus Studio',
  category: 'Editorial',
  layout:   'focus-studio',
  tags:     ['white', 'editorial', 'typography', 'minimal', 'agency', 'clean'],

  defaults: {
    // Brand / logo area (top left)
    brand:      'Focus Studio',

    // Website badge (top right)
    website:    'focus.studio',

    // The 4 big lines — alternating bold + italic orange
    line1:      'Shoot',       // bold black
    line2:      'Edit',        // italic orange
    line3:      'Deliver',     // bold black
    line4:      'Repeat',      // italic orange

    // Bottom left tagline
    tagline:    "Let's make your brand unforgettable",

    // Bottom right address / info
    address:    '546 Kenny Wren Rd,\nDillingham, Alaska, USA',

    // Colors
    accent:     '#e8440a',     // the orange color
    bg:         '#f5f4f0',     // off-white background
    textDark:   '#1a1a1a',     // near-black for bold lines

    // No image needed for this layout — set to empty
    imgKeyword: '',
  },

  // Gallery sidebar thumbnail
  previewHtml: `
    <div style="
      width:100%; height:100%;
      background:#f5f4f0;
      display:flex; flex-direction:column;
      padding:7px 8px; justify-content:space-between;
    ">
      <!-- Top bar -->
      <div style="display:flex; align-items:center; justify-content:space-between">
        <div style="display:flex; align-items:center; gap:3px">
          <div style="width:7px; height:9px; display:flex; flex-direction:column; gap:1px; justify-content:center">
            <div style="height:1.5px; background:#e8440a; border-radius:1px"></div>
            <div style="height:1.5px; background:#e8440a; border-radius:1px"></div>
            <div style="height:1.5px; background:#e8440a; border-radius:1px"></div>
          </div>
          <div style="height:5px; width:28px; background:#1a1a1a; border-radius:1px; opacity:.7"></div>
        </div>
        <div style="height:7px; width:22px; background:rgba(0,0,0,.12); border-radius:10px"></div>
      </div>
      <!-- Big type lines -->
      <div style="display:flex; flex-direction:column; gap:1px; align-items:center">
        <div style="height:8px; width:55%; background:#1a1a1a; border-radius:1px; opacity:.85"></div>
        <div style="height:8px; width:38%; background:#e8440a; border-radius:1px; opacity:.9"></div>
        <div style="height:8px; width:62%; background:#1a1a1a; border-radius:1px; opacity:.85"></div>
        <div style="height:8px; width:44%; background:#e8440a; border-radius:1px; opacity:.9"></div>
      </div>
      <!-- Bottom -->
      <div style="display:flex; justify-content:space-between">
        <div style="height:4px; width:30%; background:#1a1a1a; border-radius:1px; opacity:.3"></div>
        <div style="height:4px; width:25%; background:#1a1a1a; border-radius:1px; opacity:.3"></div>
      </div>
    </div>`,

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,900;1,700&family=DM+Sans:wght@400;500;700&display=swap');

    .fs-wrap {
      width: 100%; height: 100%;
      position: relative; overflow: hidden;
      display: flex; flex-direction: column;
      font-family: 'DM Sans', sans-serif;
    }

    /* ── Background ── */
    .fs-bg {
      position: absolute; inset: 0;
    }

    /* ── Inner layout ── */
    .fs-inner {
      position: relative; z-index: 2;
      display: flex; flex-direction: column;
      height: 100%;
      padding: 30px 34px;
    }

    /* ── TOP BAR ── */
    .fs-topbar {
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-shrink: 0;
    }

    /* Logo: bar icon + name */
    .fs-logo {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .fs-logo-bars {
      display: flex;
      flex-direction: column;
      gap: 3px;
      padding-top: 1px;
    }
    .fs-logo-bar {
      height: 2.5px;
      border-radius: 2px;
    }
    .fs-logo-bar:nth-child(1) { width: 18px; }
    .fs-logo-bar:nth-child(2) { width: 13px; }
    .fs-logo-bar:nth-child(3) { width: 18px; }
    .fs-logo-name {
      font-family: 'DM Sans', sans-serif;
      font-size: 15px;
      font-weight: 700;
      letter-spacing: -0.3px;
    }

    /* Website pill badge */
    .fs-badge {
      display: flex;
      align-items: center;
      gap: 7px;
      border: 1.5px solid rgba(0,0,0,0.18);
      border-radius: 100px;
      padding: 6px 10px 6px 14px;
      font-size: 11px;
      font-weight: 500;
      letter-spacing: 0.1px;
    }
    .fs-badge-dot {
      width: 22px; height: 22px;
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-size: 11px;
      font-weight: 800;
      color: #fff;
      flex-shrink: 0;
    }

    /* ── CENTER — Big typography ── */
    .fs-hero {
      flex: 1;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      gap: 0px;
      text-align: center;
    }

    /* Bold black lines */
    .fs-line-bold {
      font-family: 'Playfair Display', serif;
      font-size: 86px;
      font-weight: 900;
      font-style: normal;
      line-height: 1.0;
      letter-spacing: -2px;
      display: block;
    }

    /* Italic orange lines */
    .fs-line-italic {
      font-family: 'Playfair Display', serif;
      font-size: 86px;
      font-weight: 700;
      font-style: italic;
      line-height: 1.0;
      letter-spacing: -2px;
      display: block;
    }

    /* ── BOTTOM BAR ── */
    .fs-bottom {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      flex-shrink: 0;
      padding-top: 12px;
    }

    .fs-tagline {
      font-size: 11.5px;
      font-weight: 400;
      line-height: 1.55;
      max-width: 160px;
      opacity: 0.55;
    }

    .fs-address {
      font-size: 11px;
      font-weight: 400;
      line-height: 1.6;
      text-align: right;
      opacity: 0.5;
      white-space: pre-line;
    }
  `,

  render(s) {
    const bg     = s.bg       || '#f5f4f0';
    const accent = s.accent   || '#e8440a';
    const dark   = s.textDark || '#1a1a1a';

    // Convert \n in address to <br>
    const address = (s.address || '').replace(/\\n|\n/g, '<br>');

    return `
      <div class="fs-wrap">

        <!-- Background -->
        <div class="fs-bg" style="background:${bg}"></div>

        <div class="fs-inner">

          <!-- ── TOP BAR ── -->
          <div class="fs-topbar">

            <!-- Logo -->
            <div class="fs-logo">
              <div class="fs-logo-bars">
                <div class="fs-logo-bar" style="background:${accent}"></div>
                <div class="fs-logo-bar" style="background:${accent}; width:13px"></div>
                <div class="fs-logo-bar" style="background:${accent}"></div>
              </div>
              <span class="fs-logo-name" style="color:${dark}">${s.brand}</span>
            </div>

            <!-- Website badge -->
            <div class="fs-badge" style="color:${dark}; border-color:${dark}22">
              <span>${s.website}</span>
              <div class="fs-badge-dot" style="background:${accent}">↗</div>
            </div>

          </div>

          <!-- ── CENTER HERO TYPE ── -->
          <div class="fs-hero">
            <span class="fs-line-bold"   style="color:${dark}">${s.line1}</span>
            <span class="fs-line-italic" style="color:${accent}">${s.line2}</span>
            <span class="fs-line-bold"   style="color:${dark}">${s.line3}</span>
            <span class="fs-line-italic" style="color:${accent}">${s.line4}</span>
          </div>

          <!-- ── BOTTOM BAR ── -->
          <div class="fs-bottom">
            <div class="fs-tagline" style="color:${dark}">${s.tagline}</div>
            <div class="fs-address" style="color:${dark}">${address}</div>
          </div>

        </div>
      </div>
    `;
  }
};