// ─────────────────────────────────────────────
//  TEMPLATE: Corporate Event / Webinar
//  Category: Event
//  Layout:   split-screen
// ─────────────────────────────────────────────

export default {
  id: 'event-corporate',
  name: 'Corporate Webinar',
  category: 'Event',
  layout: 'split',
  tags: ['event', 'webinar', 'corporate', 'business', 'light'],

  defaults: {
    eventType: 'LIVE MASTERCLASS',
    title: 'Navigating Global Market Shifts in 2026',
    date: 'OCTOBER 15 • 2:00 PM EST',
    speaker: 'Dr. Sarah Jenkins',
    speakerRole: 'Chief Economist, Global Insights',
    cta: 'Register for Free',
    bg: '#ffffff',
    text: '#1e293b',
    accent: '#2563eb', // Corporate Blue
    img: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?w=800&q=80',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;700&display=swap');
    
    .tpl-event {
      width: 100%; height: 100%; box-sizing: border-box;
      font-family: 'Poppins', sans-serif;
      display: flex; flex-direction: column;
    }
    
    /* Top Half - Image */
    .tpl-event .e-image-wrap {
      height: 45%; width: 100%; position: relative;
    }
    .tpl-event .e-image {
      width: 100%; height: 100%; object-fit: cover;
    }
    
    /* Bottom Half - Content */
    .tpl-event .e-content {
      height: 55%; padding: 32px 40px;
      display: flex; flex-direction: column; justify-content: space-between;
    }
    
    .tpl-event .e-type {
      font-size: 12px; font-weight: 700; letter-spacing: 2px;
      margin-bottom: 12px;
    }
    .tpl-event .e-title {
      font-size: 32px; font-weight: 700; line-height: 1.2; margin: 0 0 16px 0;
    }
    
    /* Details block */
    .tpl-event .e-details {
      display: flex; align-items: center; justify-content: space-between;
      background: #f8fafc; padding: 16px; border-radius: 12px;
    }
    .tpl-event .e-speaker-info {
      display: flex; flex-direction: column;
    }
    .tpl-event .e-name {
      font-size: 15px; font-weight: 700;
    }
    .tpl-event .e-role {
      font-size: 12px; color: #64748b;
    }
    
    /* Bottom Footer */
    .tpl-event .e-footer {
      display: flex; justify-content: space-between; align-items: center;
      margin-top: 16px;
    }
    .tpl-event .e-date {
      font-size: 14px; font-weight: 700; display: flex; align-items: center; gap: 8px;
    }
    .tpl-event .e-cta {
      padding: 10px 20px; color: #fff; font-size: 13px; font-weight: 500;
      border-radius: 100px;
    }
  `,

  render(s) {
    return `
      <div class="tpl-event" style="background-color:${s.bg}; color:${s.text}">
        <div class="e-image-wrap">
          <img src="${s.img}" class="e-image" />
        </div>
        
        <div class="e-content">
          <div>
            <div class="e-type" style="color:${s.accent}">${s.eventType}</div>
            <h1 class="e-title">${s.title}</h1>
          </div>
          
          <div class="e-details">
            <div class="e-speaker-info">
              <div class="e-name">${s.speaker}</div>
              <div class="e-role">${s.speakerRole}</div>
            </div>
          </div>
          
          <div class="e-footer">
            <div class="e-date">
              <span style="color:${s.accent}">📅</span> ${s.date}
            </div>
            <div class="e-cta" style="background:${s.accent}">${s.cta}</div>
          </div>
        </div>
      </div>`;
  }
};