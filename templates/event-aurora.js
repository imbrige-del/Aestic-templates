// ═══════════════════════════════════════════════════════════
//  TEMPLATE: Aurora Event
//  Category: Event
//  Style:    Deep midnight with aurora borealis gradient,
//            floating date badge, editorial typeset,
//            layered blur panels, premium gala feel
//  Best for: Luxury events, galas, product launches, awards
// ═══════════════════════════════════════════════════════════

export default {
  id: 'event-aurora',
  name: 'Aurora Event',
  category: 'Event',
  layout: 'event',
  tags: ['event', 'gala', 'dark', 'aurora', 'gradient', 'luxury', 'night', 'awards'],

  defaults: {
    headline:  'The Grand\nSommit Gala',
    type:      'Annual Awards Night',
    date:      '15 March 2026',
    day:       'Saturday',
    time:      '7:00 PM Onwards',
    venue:     'The Taj Mahal Palace, Mumbai',
    cta:       'Request Invitation',
    brand:     'SUMMIT GROUP',
    seats:     'By Invitation Only',
    accent:    '#a78bfa',
    accent2:   '#f472b6',
    bg:        '#05050f',
    img:       'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=90',
  },

  css: `
    @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300;1,400&family=DM+Sans:wght@200;300;400;500&display=swap');

    .tpl-aurora-event {
      width:100%; height:100%;
      position:relative; overflow:hidden;
      font-family:'DM Sans',sans-serif;
    }

    /* BG image */
    .ae-img {
      position:absolute; inset:0;
    }
    .ae-img img {
      width:100%; height:100%;
      object-fit:cover;
      filter:brightness(.25) saturate(1.2);
    }

    /* Aurora gradient overlay */
    .ae-aurora {
      position:absolute; inset:0;
      opacity:.45;
    }

    /* Deep bottom fade */
    .ae-fade {
      position:absolute;
      bottom:0; left:0; right:0; height:70%;
      background:linear-gradient(to top,#05050f 0%,#05050f88 40%,transparent 100%);
    }

    /* Thin horizontal rules */
    .ae-hline {
      position:absolute; left:0; right:0;
      height:1px; background:rgba(255,255,255,.06);
    }

    /* Content */
    .ae-content {
      position:absolute; inset:0;
      display:flex; flex-direction:column;
      padding:32px;
      justify-content:space-between;
    }

    /* Top */
    .ae-top {
      display:flex; align-items:flex-start;
      justify-content:space-between;
    }
    .ae-brand {
      font-size:9px; letter-spacing:6px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.5);
    }
    .ae-seats {
      font-size:8px; letter-spacing:2px;
      text-transform:uppercase;
      padding:5px 12px;
      border:1px solid rgba(255,255,255,.12);
      color:rgba(255,255,255,.35);
    }

    /* Date badge — floating pill */
    .ae-date-badge {
      display:flex; align-items:center; gap:0;
      background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.1);
      backdrop-filter:blur(12px);
      width:fit-content;
      overflow:hidden;
    }
    .ae-date-num {
      font-family:'Cormorant Garamond',serif;
      font-size:52px; font-weight:300;
      line-height:1; padding:12px 16px;
      color:#fff;
    }
    .ae-date-right {
      padding:12px 16px 12px 0;
      display:flex; flex-direction:column;
      justify-content:center; gap:3px;
      border-left:1px solid rgba(255,255,255,.08);
    }
    .ae-date-month {
      font-size:9px; letter-spacing:3px;
      text-transform:uppercase; font-weight:300;
      color:rgba(255,255,255,.6);
    }
    .ae-date-day {
      font-size:8px; letter-spacing:2px;
      text-transform:uppercase; font-weight:200;
      color:rgba(255,255,255,.3);
    }

    /* Middle */
    .ae-mid {
      flex:1; display:flex;
      align-items:flex-end; padding-bottom:12px;
    }
    .ae-type {
      font-size:9px; letter-spacing:4px;
      text-transform:uppercase; font-weight:300;
      margin-bottom:10px;
    }
    .ae-headline {
      font-family:'Cormorant Garamond',serif;
      font-size:58px; font-weight:300;
      line-height:1; color:#fff;
      white-space:pre-line; letter-spacing:-.5px;
    }

    /* Bottom */
    .ae-bottom {}
    .ae-details {
      display:flex; flex-direction:column; gap:8px;
      margin-bottom:20px;
    }
    .ae-detail-row {
      display:flex; align-items:center; gap:10px;
    }
    .ae-detail-dot {
      width:4px; height:4px; border-radius:50%;
      flex-shrink:0;
    }
    .ae-detail-text {
      font-size:11.5px; font-weight:300;
      color:rgba(255,255,255,.5);
      letter-spacing:.3px;
    }
    .ae-detail-divider {
      color:rgba(255,255,255,.15); font-size:10px;
    }

    /* CTA row */
    .ae-cta-row {
      display:flex; align-items:center;
      justify-content:space-between;
    }
    .ae-cta {
      font-size:9px; letter-spacing:4px;
      text-transform:uppercase; font-weight:400;
      padding:12px 24px; cursor:default;
    }
    .ae-logo-mark {
      font-family:'Cormorant Garamond',serif;
      font-size:36px; font-weight:300;
      font-style:italic;
      color:rgba(255,255,255,.15);
      line-height:1;
    }
  `,

  render(s) {
    const a = s.accent || '#a78bfa';
    const a2 = s.accent2 || '#f472b6';
    const dateParts = s.date ? s.date.split(' ') : ['15','March','2026'];
    return `
    <div class="tpl-aurora-event" style="background:${s.bg}">
      <div class="ae-img"><img src="${s.img}" alt=""/></div>
      <div class="ae-aurora" style="background:radial-gradient(ellipse 100% 60% at 50% 0%,${a}66 0%,${a2}33 50%,transparent 80%)"></div>
      <div class="ae-fade"></div>
      <div class="ae-hline" style="top:30%"></div>
      <div class="ae-content">
        <div class="ae-top">
          <div class="ae-brand">${s.brand}</div>
          <div class="ae-seats">${s.seats}</div>
        </div>
        <div class="ae-mid">
          <div>
            <div class="ae-date-badge" style="margin-bottom:20px">
              <div class="ae-date-num">${dateParts[0]||'15'}</div>
              <div class="ae-date-right" style="padding-left:14px">
                <div class="ae-date-month" style="color:${a}">${dateParts[1]||'March'} ${dateParts[2]||'2026'}</div>
                <div class="ae-date-day">${s.day}</div>
              </div>
            </div>
            <div class="ae-type" style="color:${a}">${s.type}</div>
            <div class="ae-headline">${s.headline}</div>
          </div>
        </div>
        <div class="ae-bottom">
          <div class="ae-details">
            <div class="ae-detail-row">
              <div class="ae-detail-dot" style="background:${a}"></div>
              <div class="ae-detail-text">${s.time}</div>
            </div>
            <div class="ae-detail-row">
              <div class="ae-detail-dot" style="background:${a}"></div>
              <div class="ae-detail-text">${s.venue}</div>
            </div>
          </div>
          <div class="ae-cta-row">
            <div class="ae-cta" style="background:${a};color:#05050f">${s.cta}</div>
            <div class="ae-logo-mark">${s.brand.charAt(0)}</div>
          </div>
        </div>
      </div>
    </div>`;
  }
};