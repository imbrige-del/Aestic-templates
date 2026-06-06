// ─────────────────────────────────────────────
//  TEMPLATE: Event Poster
//  Category: Event
//  Layout:   event
// ─────────────────────────────────────────────

export default {
  id: 'event-poster',
  name: 'Event Poster',
  category: 'Event',
  layout: 'event',
  tags: ['event', 'purple', 'poster', 'date'],

  defaults: {
    headline: 'Annual Brand Summit 2026',
    type: 'Exclusive Event',
    date: '📅 March 15, 2026',
    time: '🕐 10:00 AM — 6:00 PM',
    venue: '📍 Grand Hyatt, Mumbai',
    cta: 'Register Now',
    seats: 'Limited seats available',
    accent: '#7209b7',
    bg: 'linear-gradient(135deg,#0a001a,#1a003a)',
    bgEnd: '#0a001a',
    img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&q=80',
  },

  css: `
    .tpl-event-poster {
      width:100%;height:100%;
      display:flex;flex-direction:column;
    }
    .tpl-event-poster .e-top { height:200px;position:relative;overflow:hidden;flex-shrink:0; }
    .tpl-event-poster .e-top img { width:100%;height:100%;object-fit:cover;filter:saturate(1.3); }
    .tpl-event-poster .e-top .overlay { position:absolute;inset:0; }
    .tpl-event-poster .e-body {
      padding:24px 32px;flex:1;display:flex;flex-direction:column;gap:10px;
    }
    .tpl-event-poster .e-type {
      font-size:9px;letter-spacing:3px;text-transform:uppercase;font-weight:700;
    }
    .tpl-event-poster .e-title {
      font-family:'Syne',sans-serif;font-size:28px;font-weight:800;line-height:1.1;color:#fff;
    }
    .tpl-event-poster .e-details { display:flex;flex-direction:column;gap:6px;margin-top:4px; }
    .tpl-event-poster .e-row {
      display:flex;align-items:center;gap:8px;font-size:13px;color:rgba(255,255,255,.6);
    }
    .tpl-event-poster .e-icon {
      width:20px;height:20px;border-radius:5px;
      display:flex;align-items:center;justify-content:center;font-size:11px;flex-shrink:0;
    }
    .tpl-event-poster .e-foot {
      display:flex;align-items:center;justify-content:space-between;margin-top:auto;
    }
    .tpl-event-poster .e-seats { font-size:12px;color:rgba(255,255,255,.4); }
    .tpl-event-poster .e-btn {
      font-family:'Syne',sans-serif;font-size:12px;font-weight:700;
      padding:10px 22px;border-radius:9px;cursor:default;letter-spacing:.3px;
      border:none;color:#fff;
    }
  `,

  render(s) {
    return `
      <div class="tpl-event-poster" style="background:${s.bg}">
        <div class="e-top">
          <img src="${s.img}" alt="event"/>
          <div class="overlay" style="background:linear-gradient(to bottom,transparent 30%,${s.bgEnd||'#0a001a'})"></div>
        </div>
        <div class="e-body">
          <div class="e-type" style="color:${s.accent}">${s.type}</div>
          <h2 class="e-title">${s.headline}</h2>
          <div class="e-details">
            <div class="e-row">
              <div class="e-icon" style="background:${s.accent}33">📅</div>${s.date}
            </div>
            <div class="e-row">
              <div class="e-icon" style="background:${s.accent}33">🕐</div>${s.time}
            </div>
            <div class="e-row">
              <div class="e-icon" style="background:${s.accent}33">📍</div>${s.venue}
            </div>
          </div>
          <div class="e-foot">
            <div class="e-seats">${s.seats}</div>
            <button class="e-btn" style="background:${s.accent}">${s.cta}</button>
          </div>
        </div>
      </div>`;
  }
};