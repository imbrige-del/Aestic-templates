// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Volt — EV Charging Mode Dashboard
//  Category: Dashboard / Automotive
//  Style:    Dark premium gauge UI, animated SVG arc that
//            fills on load, glowing orange progress,
//            pulsing battery icon, live percent counter,
//            subtle scanline texture, frosted stat pills
//  Best for: EV dashboards, product demos, IoT UIs,
//            automotive app mockups, tech presentations
//  Sizes:    Fully responsive — 1:1, 4:5, 16:9, wide
//
//  FONTS:    Uses CSS variables from global fonts.css
//  DYNAMIC:  Arc animates from 0 → chargePercent on load.
//            Counter increments in sync with arc fill.
//            Battery icon pulses at charging rate.
// ═══════════════════════════════════════════════════════════

module.exports = {
  id: 'volt-charging-gauge',
  name: 'Volt — EV Charging Mode Dashboard',
  category: 'Dashboard / Automotive',
  layout: 'card',
  tags: ['ev', 'charging', 'gauge', 'dashboard', 'automotive', 'dark', 'animated', 'iot', 'tech'],

  defaults: {
    title:          'CHARGING MODE',
    chargePercent:  74,
    powerLabel:     'Power',
    powerValue:     '5A / 220V',
    inputLabel:     'Input',
    inputValue:     '200 KWH',
    accentOrange:   '#f97316',
    accentGlow:     '#ff6500',
    bg:             '#141414',
    cardBg:         '#1a1a1c',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Barlow:wght@300;400;500;600;700&family=Barlow+Condensed:wght@300;400;500;600;700;800&display=swap');

    /* ── Root ── */
    .tpl-volt {
      container-type: size;
      container-name: vt;
      width: 100%; height: 100%;
      position: relative;
      overflow: hidden;
      font-family: 'Barlow', sans-serif;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    /* ── Outer bg ── */
    .vt-bg {
      position: absolute; inset: 0; z-index: 0;
      background: #141414;
    }

    /* Scanline texture overlay */
    .vt-scanlines {
      position: absolute; inset: 0; z-index: 1; pointer-events: none;
      background: repeating-linear-gradient(
        0deg,
        transparent,
        transparent 2px,
        rgba(255,255,255,0.012) 2px,
        rgba(255,255,255,0.012) 4px
      );
    }

    /* Ambient glow behind card */
    .vt-ambient {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      width: 60cqi; height: 60cqb;
      border-radius: 50%;
      background: radial-gradient(
        ellipse at center,
        rgba(249,115,22,0.08) 0%,
        transparent 70%
      );
      filter: blur(clamp(20px,4cqi,60px));
      z-index: 1; pointer-events: none;
    }

    /* ════════════════════════════════════════
       CARD
    ════════════════════════════════════════ */
    .vt-card {
      position: relative;
      z-index: 2;
      width: clamp(260px, 74cqi, 560px);
      padding: clamp(24px, 4.5cqb, 52px) clamp(20px, 5cqi, 52px) clamp(20px, 3.5cqb, 40px);
      border-radius: clamp(16px, 2.5cqi, 28px);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: clamp(14px, 2.5cqb, 28px);
      box-shadow:
        0 0 0 1px rgba(255,255,255,0.06),
        0 4px 16px rgba(0,0,0,0.4),
        0 24px 60px rgba(0,0,0,0.5),
        inset 0 1px 0 rgba(255,255,255,0.05);
    }

    /* ── Title ── */
    .vt-title {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: clamp(11px, 2.2cqi, 18px);
      letter-spacing: 0.32em;
      text-transform: uppercase;
      color: rgba(255,255,255,0.65);
      text-align: center;
      line-height: 1;
    }

    /* ════════════════════════════════════════
       GAUGE STAGE
    ════════════════════════════════════════ */
    .vt-gauge-wrap {
      position: relative;
      width: clamp(180px, 58cqi, 380px);
      /* height = half-circle ratio + overflow for labels */
      aspect-ratio: 1 / 0.58;
      flex-shrink: 0;
    }

    /* SVG fills the wrap */
    .vt-gauge-svg {
      position: absolute;
      inset: 0;
      width: 100%; height: 100%;
      overflow: visible;
    }

    /* ── Gauge center content ── */
    .vt-gauge-center {
      position: absolute;
      bottom: 12%;
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: clamp(4px, 0.8cqb, 8px);
      z-index: 4;
    }

    /* Battery icon */
    .vt-battery-icon {
      font-size: clamp(14px, 2.8cqi, 22px);
      line-height: 1;
      animation: vt-pulse 1.8s ease-in-out infinite;
    }

    /* Percent readout */
    .vt-percent {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 800;
      font-size: clamp(36px, 10cqi, 80px);
      line-height: 0.9;
      letter-spacing: -0.02em;
      color: #ffffff;
      text-align: center;
      white-space: nowrap;
    }
    .vt-percent-sym {
      font-size: 0.55em;
      font-weight: 600;
      opacity: 0.7;
      vertical-align: super;
    }

    /* 0% / 100% edge labels */
    .vt-gauge-label {
      position: absolute;
      bottom: 0;
      font-family: 'Barlow', sans-serif;
      font-size: clamp(8px, 1.4cqi, 12px);
      font-weight: 400;
      color: rgba(255,255,255,0.35);
    }
    .vt-gauge-label--left  { left: 4%; }
    .vt-gauge-label--right { right: 4%; }

    /* ════════════════════════════════════════
       STAT PILLS — bottom row
    ════════════════════════════════════════ */
    .vt-stats {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: clamp(8px, 2cqi, 16px);
    }

    .vt-stat {
      display: flex;
      align-items: baseline;
      gap: clamp(5px, 1cqi, 8px);
    }

    .vt-stat-label {
      font-size: clamp(8px, 1.3cqi, 12px);
      font-weight: 400;
      color: rgba(255,255,255,0.3);
      letter-spacing: 0.04em;
      white-space: nowrap;
    }

    .vt-stat-value {
      font-family: 'Barlow Condensed', sans-serif;
      font-weight: 600;
      font-size: clamp(11px, 2cqi, 16px);
      color: rgba(255,255,255,0.9);
      letter-spacing: 0.02em;
      white-space: nowrap;
    }

    /* Thin separator between stats */
    .vt-stat-sep {
      width: 1px;
      height: clamp(12px, 2.2cqi, 18px);
      background: rgba(255,255,255,0.1);
      flex-shrink: 0;
    }

    /* ════════════════════════════════════════
       ANIMATIONS
    ════════════════════════════════════════ */
    @keyframes vt-pulse {
      0%, 100% { opacity: 1;   transform: scale(1); }
      50%       { opacity: 0.5; transform: scale(0.88); }
    }

    /* Arc fill animation — driven by JS strokeDashoffset */
    .vt-arc-fill {
      transition: stroke-dashoffset 2.2s cubic-bezier(0.34, 1.2, 0.64, 1);
    }

    /* ════════════════════════════════════════
       CONTAINER QUERIES
    ════════════════════════════════════════ */
    @container vt (max-aspect-ratio: 1.15/1) and (min-aspect-ratio: 0.82/1) {
      .vt-card { width: clamp(240px, 78cqi, 520px); }
    }

    @container vt (max-aspect-ratio: 0.82/1) {
      .vt-card { width: clamp(240px, 84cqi, 480px); }
      .vt-percent { font-size: clamp(36px, 12cqi, 80px); }
    }

    @container vt (min-aspect-ratio: 1.55/1) {
      .vt-card { width: clamp(260px, 55cqi, 520px); }
    }
  `,

  render(s) {
    const pct         = Math.min(100, Math.max(0, Number(s.chargePercent) || 74));
    const orange      = s.accentOrange || '#f97316';
    const glow        = s.accentGlow   || '#ff6500';
    const cardBg      = s.cardBg       || '#1a1a1c';

    // ── SVG arc geometry ──────────────────────────────────
    // Semi-circle: center (50,52), radius 44, from 180° → 0°
    // Arc runs left-to-right (0% left, 100% right)
    const cx = 50, cy = 52, r = 44;
    // Total arc length of a semicircle
    const arcLen = Math.PI * r; // ≈ 138.2

    // strokeDasharray = arcLen, gap = arcLen (shows nothing)
    // strokeDashoffset = arcLen - (pct/100 * arcLen) = arcLen*(1 - pct/100)
    // We animate from arcLen (empty) → target offset via JS
    const totalArc   = Math.PI * r;
    const targetOffset = totalArc * (1 - pct / 100);

    // Track arc (gray background) — full semicircle
    const trackD = `M ${cx - r},${cy} A ${r},${r} 0 0,1 ${cx + r},${cy}`;

    // We split orange fill into two gradient-feeling arcs but keep it simple:
    // one orange arc from left to fill point
    // The fill arc uses the same path, stroked with dashoffset trick

    // Tip glow circle position along arc
    // Angle from left (180°) → right (0°), fraction = pct/100
    // angle in radians: π - (pct/100)*π  = π*(1 - pct/100)
    const tipAngleRad = Math.PI * (1 - pct / 100);
    const tipX = cx + r * Math.cos(Math.PI - tipAngleRad);
    const tipY = cy - r * Math.sin(Math.PI - tipAngleRad);
    // Fix: x = cx - r*cos(tipAngleRad), y = cy - r*sin(tipAngleRad)
    const tx = (cx + r * Math.cos(Math.PI - tipAngleRad)).toFixed(2);
    const ty = (cy - r * Math.sin(Math.PI - tipAngleRad)).toFixed(2);

    return `
    <div class="tpl-volt" style="background:${s.bg}">

      <div class="vt-bg" style="background:${s.bg}"></div>
      <div class="vt-scanlines"></div>
      <div class="vt-ambient"></div>

      <div class="vt-card" style="background:${cardBg}">

        <!-- Title -->
        <div class="vt-title">${s.title}</div>

        <!-- Gauge -->
        <div class="vt-gauge-wrap">

          <svg class="vt-gauge-svg" viewBox="0 0 100 56" preserveAspectRatio="xMidYMid meet">
            <defs>
              <!-- Gradient for fill arc: orange → orange-red -->
              <linearGradient id="vt-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%"   stop-color="${orange}"/>
                <stop offset="100%" stop-color="${glow}"/>
              </linearGradient>

              <!-- Radial glow filter for tip circle -->
              <filter id="vt-glow" x="-80%" y="-80%" width="260%" height="260%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.8" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>

              <!-- Soft glow filter for arc -->
              <filter id="vt-arc-glow" x="-20%" y="-100%" width="140%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1" result="blur"/>
                <feMerge>
                  <feMergeNode in="blur"/>
                  <feMergeNode in="SourceGraphic"/>
                </feMerge>
              </filter>
            </defs>

            <!-- Track — gray background arc -->
            <path
              d="${trackD}"
              fill="none"
              stroke="rgba(255,255,255,0.10)"
              stroke-width="5.5"
              stroke-linecap="round"
            />

            <!-- Track inner edge subtle highlight -->
            <path
              d="${trackD}"
              fill="none"
              stroke="rgba(255,255,255,0.04)"
              stroke-width="2"
              stroke-linecap="round"
            />

            <!-- Fill arc — orange, animated via JS -->
            <path
              id="vt-fill-arc"
              class="vt-arc-fill"
              d="${trackD}"
              fill="none"
              stroke="url(#vt-grad)"
              stroke-width="5.5"
              stroke-linecap="round"
              stroke-dasharray="${totalArc.toFixed(2)}"
              stroke-dashoffset="${totalArc.toFixed(2)}"
              filter="url(#vt-arc-glow)"
            />

            <!-- Glowing tip dot — repositioned by JS -->
            <circle
              id="vt-tip-dot"
              cx="${cx - r}"
              cy="${cy}"
              r="3"
              fill="${orange}"
              filter="url(#vt-glow)"
              opacity="0"
            />

            <!-- Center tick marks — decorative -->
            <line x1="50" y1="10" x2="50" y2="14"
              stroke="rgba(255,255,255,0.2)" stroke-width="0.8" stroke-linecap="round"/>
            <line x1="28" y1="14" x2="29.8" y2="17.8"
              stroke="rgba(255,255,255,0.12)" stroke-width="0.6" stroke-linecap="round"/>
            <line x1="72" y1="14" x2="70.2" y2="17.8"
              stroke="rgba(255,255,255,0.12)" stroke-width="0.6" stroke-linecap="round"/>
          </svg>

          <!-- Center overlay -->
          <div class="vt-gauge-center">
            <div class="vt-battery-icon" style="color:${orange}">🔋</div>
            <div class="vt-percent">
              <span id="vt-counter">0</span><span class="vt-percent-sym">%</span>
            </div>
          </div>

          <!-- Edge labels -->
          <span class="vt-gauge-label vt-gauge-label--left">0%</span>
          <span class="vt-gauge-label vt-gauge-label--right">100%</span>

        </div>

        <!-- Stats row -->
        <div class="vt-stats">
          <div class="vt-stat">
            <span class="vt-stat-label">${s.powerLabel}</span>
            <span class="vt-stat-value">${s.powerValue}</span>
          </div>
          <div class="vt-stat-sep"></div>
          <div class="vt-stat">
            <span class="vt-stat-label">${s.inputLabel}</span>
            <span class="vt-stat-value">${s.inputValue}</span>
          </div>
        </div>

      </div>
    </div>

    <script>
    (function() {
      // Wait for DOM + a short settle delay so CSS transition fires
      var target    = ${pct};
      var totalArc  = ${totalArc.toFixed(4)};
      var cx = ${cx}, cy = ${cy}, r = ${r};
      var orange    = '${orange}';

      function init() {
        var arc     = document.getElementById('vt-fill-arc');
        var dot     = document.getElementById('vt-tip-dot');
        var counter = document.getElementById('vt-counter');
        if (!arc || !dot || !counter) return;

        // Trigger arc fill after 120ms so transition is visible
        setTimeout(function() {
          var targetOffset = totalArc * (1 - target / 100);
          arc.style.strokeDashoffset = targetOffset;
          dot.style.opacity = '1';

          // Animate counter 0 → target in 2s
          var start = null;
          var duration = 2000;
          function step(ts) {
            if (!start) start = ts;
            var progress = Math.min((ts - start) / duration, 1);
            // ease out cubic
            var eased = 1 - Math.pow(1 - progress, 3);
            var current = Math.round(eased * target);
            counter.textContent = current;

            // Move tip dot along arc
            var angleRad = Math.PI * (1 - eased * target / 100);
            var tx = cx - r * Math.cos(angleRad);
            var ty = cy - r * Math.sin(angleRad);
            dot.setAttribute('cx', tx.toFixed(2));
            dot.setAttribute('cy', ty.toFixed(2));

            if (progress < 1) requestAnimationFrame(step);
          }
          requestAnimationFrame(step);
        }, 120);
      }

      if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
      } else {
        init();
      }
    })();
    </script>`;
  }
};