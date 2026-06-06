// ─────────────────────────────────────────────
//  TEMPLATE: Cyberpunk HUD (Advanced)
//  Category: Promotion
//  Layout:   sci-fi-interface
// ─────────────────────────────────────────────

export default {
  id: 'promo-cyberpunk-pro',
  name: 'Cyberpunk HUD Pro',
  category: 'Promotion',
  layout: 'promo',
  tags: ['cyberpunk', 'sci-fi', 'hud', 'interface', 'neon', 'gaming'],

  defaults: {
    headline: 'NEURAL LINK ESTABLISHED',
    sysWarning: 'WARNING: UNAUTHORIZED ACCESS DETECTED',
    desc: 'Bypass mainframe security protocols to unlock maximum kinetic potential. Cyberware integration at 94.2% and climbing. Proceed with caution.',
    cta: 'OVERRIDE SYSTEM',
    telemetry1: 'LAT: 35.6895° N // LNG: 139.6917° E',
    telemetry2: 'SEC_CLEARANCE: LEVEL_OMEGA',
    bg: '#05070a',         // Abyss Blue/Black
    primary: '#00f0ff',    // Neon Cyan
    secondary: '#ffde00',  // Warning Yellow
    danger: '#ff003c',     // Cyber Red
    img: 'https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?w=1000&q=80',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500;700;900&family=Share+Tech+Mono&display=swap');
    
    .tpl-hud {
      width: 100%; height: 100%; position: relative; overflow: hidden;
      background-color: var(--bg); color: #ffffff;
      font-family: 'Share Tech Mono', monospace;
      box-sizing: border-box; padding: 30px;
      display: flex; flex-direction: column; justify-content: space-between;
    }

    /* 1. Background & CRT Effects */
    .tpl-hud .h-bg {
      position: absolute; inset: 0;
      background-size: cover; background-position: center; 
      opacity: 0.4; filter: contrast(1.3) saturate(0.8);
      z-index: 0;
    }
    .tpl-hud .h-scanlines {
      position: absolute; inset: 0; z-index: 1; pointer-events: none;
      background: repeating-linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 0) 2px,
        rgba(0, 0, 0, 0.2) 2px,
        rgba(0, 0, 0, 0.2) 4px
      );
    }
    .tpl-hud .h-vignette {
      position: absolute; inset: 0; z-index: 2; pointer-events: none;
      background: radial-gradient(circle at center, transparent 30%, rgba(5,7,10,0.9) 100%);
    }

    /* 2. Complex Targeting Crosshairs & Borders */
    .tpl-hud .h-frame {
      position: absolute; inset: 30px; z-index: 3; pointer-events: none;
      border: 1px solid rgba(0, 240, 255, 0.2);
      clip-path: polygon(
        0 40px, 40px 0, calc(100% - 40px) 0, 100% 40px, 
        100% calc(100% - 40px), calc(100% - 40px) 100%, 40px 100%, 0 calc(100% - 40px)
      );
    }
    .tpl-hud .h-corner {
      position: absolute; width: 60px; height: 60px; z-index: 4;
      border: 3px solid var(--primary);
    }
    .tpl-hud .hc-tl { top: 20px; left: 20px; border-right: none; border-bottom: none; }
    .tpl-hud .hc-tr { top: 20px; right: 20px; border-left: none; border-bottom: none; }
    .tpl-hud .hc-bl { bottom: 20px; left: 20px; border-right: none; border-top: none; }
    .tpl-hud .hc-br { bottom: 20px; right: 20px; border-left: none; border-top: none; }

    /* 3. Top Telemetry Bar */
    .tpl-hud .h-top-bar {
      position: relative; z-index: 10;
      display: flex; justify-content: space-between; align-items: flex-start;
      border-bottom: 2px solid var(--primary); padding-bottom: 10px;
    }
    .tpl-hud .h-data-block {
      font-size: 12px; color: var(--primary); text-transform: uppercase;
      line-height: 1.4; text-shadow: 0 0 5px var(--primary-glow);
    }
    .tpl-hud .h-warning-badge {
      background: var(--secondary); color: #000; font-weight: bold;
      padding: 4px 12px; font-size: 11px; letter-spacing: 1px;
      clip-path: polygon(10px 0, 100% 0, calc(100% - 10px) 100%, 0 100%);
    }

    /* 4. Main Content Area */
    .tpl-hud .h-main {
      position: relative; z-index: 10;
      display: flex; flex-direction: column; justify-content: center;
      flex-grow: 1; padding: 0 40px;
    }
    .tpl-hud .h-headline-wrap { position: relative; margin-bottom: 16px; }
    .tpl-hud .h-headline {
      font-family: 'Orbitron', sans-serif; font-size: 58px; font-weight: 900;
      text-transform: uppercase; line-height: 1; margin: 0;
      color: #fff;
      text-shadow: 
        2px 0px 0px var(--danger),
        -2px 0px 0px var(--primary);
    }
    /* Static Glitch Slice Effect */
    .tpl-hud .h-headline::before {
      content: attr(data-text); position: absolute; left: -2px; top: 0;
      color: #fff; text-shadow: -2px 0 var(--danger);
      clip-path: polygon(0 20%, 100% 20%, 100% 35%, 0 35%);
      opacity: 0.8;
    }
    
    .tpl-hud .h-desc {
      font-size: 16px; line-height: 1.6; max-width: 600px;
      color: #b0c4de; border-left: 2px solid var(--secondary);
      padding-left: 20px; margin: 0 0 30px 0;
    }

    /* 5. Cybernetic Button */
    .tpl-hud .h-cta-wrap { display: flex; align-items: center; gap: 15px; }
    .tpl-hud .h-cta {
      font-family: 'Orbitron', sans-serif; font-size: 16px; font-weight: 700;
      color: #000; background: var(--primary);
      padding: 16px 36px; text-transform: uppercase; letter-spacing: 2px;
      clip-path: polygon(0 0, calc(100% - 15px) 0, 100% 15px, 100% 100%, 15px 100%, 0 calc(100% - 15px));
      box-shadow: 0 0 15px var(--primary-glow);
    }
    /* Fake Audio/Data Visualizer next to CTA */
    .tpl-hud .h-visualizer {
      width: 100px; height: 30px;
      background: repeating-linear-gradient(90deg, var(--primary), var(--primary) 3px, transparent 3px, transparent 6px);
      mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.1));
      -webkit-mask-image: linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0.1));
    }

    /* 6. Bottom HUD Interface */
    .tpl-hud .h-bottom-bar {
      position: relative; z-index: 10;
      display: flex; justify-content: space-between; align-items: flex-end;
      border-top: 1px solid rgba(255, 255, 255, 0.1); padding-top: 15px;
    }
    .tpl-hud .h-sys-status {
      font-size: 10px; color: #666; display: flex; gap: 20px;
    }
    .tpl-hud .h-sys-status span {
      display: flex; align-items: center; gap: 5px;
    }
    .tpl-hud .h-sys-status span::before {
      content: ''; display: inline-block; width: 6px; height: 6px;
      background: var(--danger); border-radius: 50%;
    }
  `,

  render(s) {
    return `
      <div class="tpl-hud" style="
        --bg: ${s.bg}; 
        --primary: ${s.primary}; --primary-glow: ${s.primary}66;
        --secondary: ${s.secondary}; 
        --danger: ${s.danger};
      ">
        <div class="h-bg" style="background-image: url('${s.img}');"></div>
        <div class="h-scanlines"></div>
        <div class="h-vignette"></div>
        
        <div class="h-frame"></div>
        <div class="h-corner hc-tl"></div>
        <div class="h-corner hc-tr"></div>
        <div class="h-corner hc-bl"></div>
        <div class="h-corner hc-br"></div>

        <div class="h-top-bar">
          <div class="h-data-block">
            SYS.OP.CORE // v9.0.2<br>
            ${s.telemetry1}
          </div>
          <div class="h-warning-badge">${s.sysWarning}</div>
          <div class="h-data-block" style="text-align: right;">
            ${s.telemetry2}<br>
            UPLINK: SECURE
          </div>
        </div>
        
        <div class="h-main">
          <div class="h-headline-wrap">
            <h1 class="h-headline" data-text="${s.headline}">${s.headline}</h1>
          </div>
          <p class="h-desc">${s.desc}</p>
          
          <div class="h-cta-wrap">
            <div class="h-cta">${s.cta}</div>
            <div class="h-visualizer"></div>
          </div>
        </div>

        <div class="h-bottom-bar">
          <div class="h-data-block" style="color: var(--secondary);">
            > AWAITING COMMAND_
          </div>
          <div class="h-sys-status">
            <span>MEM: 0xFF2A</span>
            <span>CPU: OVERRIDE</span>
            <span>NET: ENCRYPTED</span>
          </div>
        </div>
      </div>`;
  }
};