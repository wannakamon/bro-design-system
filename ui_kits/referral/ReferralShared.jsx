(function(){
const { Button, Badge, Input2, SocialButton, Icon, AlertBanner } = window.BroGameDesignSystem_84b2ac;

const NAV = [
  {key:'home', label:'หน้าหลัก'},
  {key:'library', label:'คลังเกม'},
  {key:'plays', label:'การเล่นของฉัน'},
  {key:'member', label:'สมาชิก', badge:'ULTIMATE'},
  {key:'payment', label:'การชำระเงิน'},
  {key:'referral', label:'ชวนเพื่อน', badge:'+10', children:[
    {key:'rewards', label:'รางวัลของฉัน'}
  ]},
];

function Toast({msg}) {
  if (!msg) return null;
  return React.createElement('div', {style:{
    position:'fixed', bottom:24, left:'50%', transform:'translateX(-50%)',
    background:'rgb(24,25,29)', border:'1px solid rgb(118,186,0)', borderRadius:8,
    padding:'12px 20px', color:'#fff', fontFamily:'var(--font-sans)', fontSize:14,
    boxShadow:'0 0 25px rgba(177,245,122,0.33)', zIndex:200, maxWidth:'calc(100vw - 48px)'
  }}, msg);
}

function StampNotification({data, onClose, onView}) {
  if (!data) return null;
  return React.createElement('div', {style:{
    position:'fixed', top:20, right:20, width:320, maxWidth:'calc(100vw - 40px)',
    background:'rgb(24,25,29)', border:'1px solid rgb(118,186,0)', borderRadius:12,
    padding:16, boxShadow:'0 0 30px rgba(177,245,122,0.35)', zIndex:210,
    display:'flex', gap:12, animation:'none'
  }},
    React.createElement('div', {style:{width:40,height:40,borderRadius:'50%',background:'rgba(118,186,0,0.2)',display:'flex',alignItems:'center',justifyContent:'center',flexShrink:0}},
      React.createElement('span', {style:{fontFamily:'var(--font-latin)',fontWeight:700,fontSize:14,color:'rgb(163,255,71)'}}, `+${data.stamp}`)
    ),
    React.createElement('div', {style:{flex:1,minWidth:0}},
      React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:14,color:'#fff'}}, 'ได้รับ Stamp เพิ่ม!'),
      React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontSize:13,color:'rgb(181,181,181)',margin:'2px 0 8px'}}, `${data.name} สมัครผ่านลิงก์ของคุณสำเร็จ`),
      React.createElement('div', {style:{display:'flex',alignItems:'center'}},
        React.createElement('span', {onClick:onView, style:{marginLeft:'auto',fontFamily:'var(--font-sans)',fontSize:12,color:'rgb(163,255,71)',cursor:'pointer'}}, 'ดูรางวัล ›')
      )
    ),
    React.createElement('span', {onClick:onClose, style:{cursor:'pointer',color:'rgb(139,146,158)',fontSize:16,lineHeight:1}}, '×')
  );
}

function ClaimRewardModal({reward, onClaim, onStartNew, onClose}) {
  if (!reward) return null;
  return React.createElement('div', {style:{position:'fixed',inset:0,background:'rgba(0,0,0,0.7)',zIndex:220,display:'flex',alignItems:'center',justifyContent:'center',padding:20}, onClick:onClose},
    React.createElement('div', {onClick:e=>e.stopPropagation(), style:{background:'rgb(24,25,29)',border:'1px solid rgb(118,186,0)',borderRadius:16,padding:32,maxWidth:360,width:'100%',textAlign:'center',boxShadow:'0 0 40px rgba(177,245,122,0.35)'}},
      React.createElement('div', {style:{width:72,height:72,borderRadius:'50%',background:'rgba(118,186,0,0.15)',display:'flex',alignItems:'center',justifyContent:'center',margin:'0 auto 20px'}},
        React.createElement(Icon, {name:'IconGift', size:36, style:{color:'rgb(163,255,71)'}})
      ),
      React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:20,color:'#fff',marginBottom:8}}, 'ปลดล็อกรางวัลแล้ว!'),
      React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontSize:14,color:'rgb(181,181,181)',marginBottom:24}}, `สะสมครบ ${reward.threshold} ดวง — รับ "${reward.label}" ได้เลย`),
      React.createElement('div', {style:{display:'flex',gap:12,justifyContent:'center'}},
        React.createElement(Button, {color:'secondary', style2:'ghost', size:'md', label:'เริ่มสะสมใหม่', showIcon:false, onClick:onStartNew}),
        React.createElement(Button, {color:'primary', style2:'fill', size:'md', label:'รับรางวัลเลย', showIcon:false, onClick:onClaim})
      )
    )
  );
}

function ClaimedStamp({size}) {
  const fontSize = size==='lg'?22:size==='sm'?11:16;
  const padding = size==='lg'?'8px 20px':size==='sm'?'3px 8px':'5px 14px';
  const border = size==='lg'?4:size==='sm'?2:3;
  return React.createElement('div', {style:{
    position:'absolute', top:'50%', left:'50%', transform:'translate(-50%,-50%) rotate(-14deg)',
    border:`${border}px solid rgba(224,62,62,0.85)`, borderRadius:6, padding,
    color:'rgba(224,62,62,0.85)', fontFamily:'var(--font-sans)', fontWeight:800, fontSize,
    letterSpacing:1, whiteSpace:'nowrap', pointerEvents:'none', zIndex:2,
    boxShadow:'0 0 0 1px rgba(224,62,62,0.15)', background:'rgba(24,25,29,0.35)'
  }}, 'รับแล้ว');
}

function CircleStamp({filled, size}) {
  const s = size || 40;
  return React.createElement('div', {style:{
    width:s, height:s, borderRadius:'50%', flexShrink:0,
    background: filled ? 'rgb(118,186,0)' : 'rgb(30,31,35)',
    border: filled ? 'none' : '1px solid rgb(44,48,58)',
    boxShadow: filled ? '0 0 12px rgba(177,245,122,0.5)' : 'none',
    display:'flex', alignItems:'center', justifyContent:'center'
  }}, React.createElement(Icon, {name: filled ? 'IconCheck' : 'IconLock', size: Math.round(s*0.45), style:{color: filled ? '#0a0a0a' : 'rgb(139,146,158)'}}));
}

function ProgressDial({count, total, size}) {
  const s = size || 200;
  const pct = Math.min(100, Math.round((count/total)*100));
  return React.createElement('div', {style:{width:s, height:s, borderRadius:'50%', flexShrink:0,
    background:`conic-gradient(rgb(163,255,71) ${pct}%, rgb(40,42,48) 0)`,
    display:'flex',alignItems:'center',justifyContent:'center',boxShadow:'0 0 30px rgba(177,245,122,0.25)'}},
    React.createElement('div', {style:{width:s-24,height:s-24,borderRadius:'50%',background:'rgb(18,19,22)',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center'}},
      React.createElement('span', {style:{fontFamily:'var(--font-latin)',fontWeight:700,fontSize:Math.round(s*0.2),color:'rgb(163,255,71)'}}, count),
      React.createElement('span', {style:{fontFamily:'var(--font-latin)',fontSize:Math.round(s*0.08),color:'rgb(181,181,181)'}}, '/ '+total+' ดวง')
    )
  );
}

function Sidebar({open, onNavigate, current}) {
  const parentOf = (key) => NAV.find(n => n.children && n.children.some(c=>c.key===key));
  const [expanded, setExpanded] = React.useState(() => new Set([current, (parentOf(current)||{}).key].filter(Boolean)));
  React.useEffect(() => {
    const p = parentOf(current);
    if (p) setExpanded(s => new Set(s).add(p.key));
  }, [current]);
  return React.createElement(React.Fragment, null,
    React.createElement('div', {className:'sidebar-scrim'+(open?' open':''), onClick:()=>onNavigate(null,false)}),
    React.createElement('div', {className:'sidebar'+(open?' open':''), style:{width:220,background:'rgb(10,10,10)',borderRight:'1px solid rgb(44,48,58)',display:'flex',flexDirection:'column',padding:'20px 16px',gap:24,flexShrink:0,height:'100vh',boxSizing:'border-box'}},
      React.createElement('img', {src:'../../assets/logo-white.png', style:{height:32,alignSelf:'flex-start'}}),
      React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:4,flex:1}},
        NAV.map(n => React.createElement(React.Fragment, {key:n.key},
          React.createElement('div', {onClick:()=>{
            if (n.children) setExpanded(s => { const ns=new Set(s); ns.has(n.key)?ns.delete(n.key):ns.add(n.key); return ns; });
            onNavigate(n.key,false);
          }, style:{
            display:'flex',alignItems:'center',justifyContent:'space-between',padding:'10px 12px',borderRadius:8,
            background: current===n.key ? 'rgba(118,186,0,0.15)' : 'transparent',
            color: current===n.key ? 'rgb(163,255,71)' : 'rgb(181,181,181)',
            fontFamily:'var(--font-sans)',fontWeight:500,fontSize:15,cursor:'pointer'
          }},
            React.createElement('span', null, n.label),
            React.createElement('div', {style:{display:'flex',alignItems:'center',gap:8}},
              n.badge && React.createElement(Badge, {status: (n.badge==='NEW'||n.badge==='+10')?'success':'info', label:n.badge}),
              n.children && React.createElement('span', {style:{fontSize:10,color:'inherit'}}, expanded.has(n.key) ? '▾' : '▸')
            )
          ),
          n.children && expanded.has(n.key) && n.children.map(c => React.createElement('div', {key:c.key, onClick:()=>onNavigate(c.key,false), style:{
            display:'flex',alignItems:'center',padding:'8px 12px 8px 28px',borderRadius:8,
            background: current===c.key ? 'rgba(118,186,0,0.15)' : 'transparent',
            color: current===c.key ? 'rgb(163,255,71)' : 'rgb(139,146,158)',
            fontFamily:'var(--font-sans)',fontWeight:500,fontSize:14,cursor:'pointer'
          }}, c.label))
        ))
      ),
      React.createElement('div', {style:{borderTop:'1px solid rgb(44,48,58)',paddingTop:16,color:'rgb(181,181,181)',fontFamily:'var(--font-sans)',fontSize:14}}, 'ออกจากระบบ')
    )
  );
}

function Header({title, onToggleSidebar}) {
  return React.createElement('div', {style:{height:64,display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 20px',borderBottom:'1px solid rgb(44,48,58)',flexShrink:0,gap:12}},
    React.createElement('div', {style:{display:'flex',alignItems:'center',gap:12,minWidth:0}},
      React.createElement('div', {className:'hamburger', onClick:onToggleSidebar, style:{cursor:'pointer',flexDirection:'column',gap:4,width:22,height:16,justifyContent:'center'}},
        React.createElement('div', {style:{height:2,background:'#fff',borderRadius:1}}),
        React.createElement('div', {style:{height:2,background:'#fff',borderRadius:1}}),
        React.createElement('div', {style:{height:2,background:'#fff',borderRadius:1}})
      ),
      React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'rgb(181,181,181)',fontSize:15,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}, title)
    ),
    React.createElement('div', {style:{display:'flex',alignItems:'center',gap:12,flexShrink:0}},
      React.createElement(Icon, {name:'IconUserCircle', size:22, style:{color:'#fff'}}),
      React.createElement('span', {style:{fontFamily:'var(--font-latin)',color:'#fff',fontSize:14,fontWeight:600}}, 'Gamer_Pro'),
      React.createElement(Badge, {status:'success', label:'ULTIMATE'})
    )
  );
}

function Card({title, children, style, className}) {
  return React.createElement('div', {className, style:Object.assign({background:'rgb(24,25,29)',border:'1px solid rgb(44,48,58)',borderRadius:12,padding:24,display:'flex',flexDirection:'column',gap:16,minWidth:0,boxSizing:'border-box'},style)},
    title && React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:18,color:'#fff'}}, title),
    children
  );
}

function GetYourLink({onShare, full, hideTerms, bare, showCode}) {
  const [state, setState] = React.useState('default');
  const link = '/sign-up/referral?ref=ABCDEFG123456';
  const copy = () => {
    navigator.clipboard && navigator.clipboard.writeText(location.origin + link).catch(()=>{});
    setState('copied');
    onShare('คัดลอกลิงก์แล้ว!');
    setTimeout(()=>setState('default'), 2000);
  };
  const content = React.createElement(React.Fragment, null,
    showCode
      ? React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'#77BA03',fontSize:14}},
          React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'#fff',fontSize:14,width:'100%',display:'inline-block',textAlign:'left'}}, 'โค้ดของคุณ'),
          React.createElement('b', {style:{color:'#6BAC01',fontSize:29,width:'100%',display:'inline-block',textAlign:'center'}}, 'GFNREFFFRIEND')
        )
      : React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'rgb(181,181,181)',fontSize:14}}, 'คัดลอกลิงก์ของคุณ แล้วแชร์ให้เพื่อนเลย'),
    React.createElement('div', {onClick:copy, style:{cursor:'pointer',width:'100%'}}, React.createElement(Input2, {state, text1:link, style:{width:'100%'}})),
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'#fff',fontSize:14}}, 'แชร์ลิงก์'),
    React.createElement('div', {style:{display:'flex',flexWrap:'wrap',gap:8}},
      React.createElement('div', {onClick:()=>onShare('แชร์ลิงก์ผ่าน LINE แล้ว!'), style:{cursor:'pointer'}}, React.createElement(SocialButton,{socialMedia:'line',button:'full'})),
      React.createElement('div', {onClick:()=>onShare('แชร์ลิงก์ผ่าน Facebook แล้ว!'), style:{cursor:'pointer'}}, React.createElement(SocialButton,{socialMedia:'facebook',button:'full'})),
      React.createElement(Button, {color:'secondary', style2:'outline', size:'md', label:'Copy Link', showIcon:false, onClick:copy}),
      React.createElement(Button, {color:'secondary', style2:'ghost', size:'md', label:'More', showIcon:false, onClick:()=>onShare('เปิดตัวเลือกแชร์เพิ่มเติม')})
    ),
    !hideTerms && React.createElement('div', {style:{display:'flex',alignItems:'flex-start',gap:8,padding:12,border:'1px solid rgb(44,48,58)',borderRadius:8}},
      React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontSize:13,color:'rgb(181,181,181)'}},
        React.createElement('div', {style:{color:'#fff',marginBottom:4}}, 'เงื่อนไขการสมัครแบบ Referral'),
        React.createElement('div', null, '• ไม่มีการ Refund'),
        React.createElement('div', null, '• ต้องเป็นสมาชิกใหม่เท่านั้น')
      )
    )
  );
  if (bare) return content;
  return React.createElement(Card, {title:'GET YOUR LINK', style:full ? {gridColumn:'span 2'} : {}}, content);
}

function StampHistory({history, full, compact, bare}) {
  const content = React.createElement(React.Fragment, null,
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:13,color:'rgb(181,181,181)'}}, 'เพื่อนที่สมัครผ่านลิงก์ของคุณ (นับเฉพาะที่ซื้อแพ็กเกจสำเร็จ)'),
    React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:4,overflowX:'auto'}},
      !compact && React.createElement('div', {style:{display:'grid',gridTemplateColumns:'minmax(120px,2fr) minmax(70px,0.8fr) minmax(70px,0.8fr) minmax(70px,0.8fr) minmax(50px,0.5fr)',gap:8,padding:'0 0 8px',fontFamily:'var(--font-sans)',fontSize:11,color:'rgb(139,146,158)',minWidth:520}},
        React.createElement('span',null,'เพื่อนของคุณ'), React.createElement('span',null,'Plan Tier'), React.createElement('span',null,'Duration'), React.createElement('span',null,'วันที่'), React.createElement('span',null,'Stamp')
      ),
      history.map((r,i) => compact
        ? React.createElement('div', {key:i, style:{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'10px 0',borderBottom:'1px solid rgb(44,48,58)',fontFamily:'var(--font-sans)',fontSize:13,color:'#fff'}},
            React.createElement('div', null,
              React.createElement('div', null, r.name),
              React.createElement('div', {style:{color:'rgb(139,146,158)',fontSize:11}}, `${r.tier} · ${r.dur} · ${r.date}`)
            ),
            React.createElement('span', {style:{color:'rgb(163,255,71)',fontWeight:600}}, r.stamp)
          )
        : React.createElement('div', {key:i, style:{display:'grid',gridTemplateColumns:'minmax(120px,2fr) minmax(70px,0.8fr) minmax(70px,0.8fr) minmax(70px,0.8fr) minmax(50px,0.5fr)',gap:8,alignItems:'center',padding:'10px 0',borderBottom:'1px solid rgb(44,48,58)',fontFamily:'var(--font-sans)',fontSize:13,color:'#fff',minWidth:520}},
            React.createElement('div', {style:{overflow:'hidden'}},
              React.createElement('div', {style:{whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}, r.name),
              React.createElement('div', {style:{color:'rgb(139,146,158)',fontSize:11,whiteSpace:'nowrap',overflow:'hidden',textOverflow:'ellipsis'}}, r.email)
            ),
            React.createElement('span', {style:{color: r.tier==='Ultimate'?'rgb(163,255,71)':'rgb(33,86,238)',whiteSpace:'nowrap'}}, r.tier),
            React.createElement('span', {style:{color:'rgb(181,181,181)',whiteSpace:'nowrap',fontSize:12}}, r.dur),
            React.createElement('span', {style:{color:'rgb(181,181,181)',whiteSpace:'nowrap',fontSize:12}}, r.date),
            React.createElement('span', {style:{color:'rgb(163,255,71)',fontWeight:600,whiteSpace:'nowrap'}}, r.stamp)
          )
      )
    )
  );
  if (bare) return content;
  return React.createElement(Card, {title:'STAMP HISTORY', style:full ? {gridColumn:'span 2'} : {}}, content);
}

function RewardStrip({rewards}) {
  return React.createElement(Card, {title:'REWARD PROGRESS'},
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:13,color:'rgb(181,181,181)'}}, 'ยิ่งชวนเยอะ ยิ่งเข้าใกล้ของรางวัลมากขึ้น'),
    React.createElement('div', {style:{display:'flex',justifyContent:'space-between',gap:8,flexWrap:'wrap'}},
      rewards.map((s,i) => React.createElement('div', {key:i, style:{display:'flex',flexDirection:'column',alignItems:'center',gap:6,flex:'1 0 70px'}},
        React.createElement(CircleStamp, {filled: s.status!=='locked', size:36}),
        React.createElement('span', {style:{fontFamily:'var(--font-latin)',fontSize:13,color:'#fff'}}, s.threshold+' ดวง'),
        React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:11,color:'rgb(139,146,158)',textAlign:'center'}}, s.status==='locked' ? '???' : s.label)
      ))
    ),
    React.createElement('div', {style:{display:'flex',alignItems:'center',gap:12,background:'rgba(118,186,0,0.1)',border:'1px solid rgb(118,186,0)',borderRadius:8,padding:12}},
      React.createElement(Icon, {name:'IconGift', size:24, style:{color:'rgb(163,255,71)'}}),
      React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:13,color:'#fff'}}, 'รางวัลถัดไปเป็นรางวัลลับ! สะสมให้ครบ 15 ดวง เพื่อปลดล็อก')
    )
  );
}

function RewardsPage({rewards, claimedLog, cardNumber, onClaim}) {
  const statusLabel = {locked:'ยังไม่ปลดล็อก', unlocked:'พร้อมรับ', claimed:'รับแล้ว'};
  const statusColor = {locked:'rgb(139,146,158)', unlocked:'rgb(163,255,71)', claimed:'rgb(33,86,238)'};
  return React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:20}},
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:24,color:'#fff'}}, 'รางวัลของฉัน · การ์ดที่ '+cardNumber),
    React.createElement('div', {className:'grid2'},
      rewards.map((r,i) => React.createElement(Card, {key:i, style:{position:'relative'}},
        r.status==='claimed' && React.createElement(ClaimedStamp, {size:'md'}),
        React.createElement('div', {style:{display:'flex',alignItems:'center',gap:12, filter: r.status==='claimed'?'grayscale(1)':'none', opacity: r.status==='claimed'?0.5:1}},
          React.createElement(CircleStamp, {filled: r.status!=='locked', size:44}),
          React.createElement('div', {style:{flex:1,minWidth:0}},
            React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontWeight:700,color:'#fff',fontSize:15}}, r.status==='locked' ? '??? (สะสมครบ '+r.threshold+' ดวง)' : r.label),
            React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontSize:12,color:statusColor[r.status]}}, statusLabel[r.status])
          ),
          r.status==='unlocked' && React.createElement(Button, {color:'primary', style2:'fill', size:'sm', label:'รับรางวัล', showIcon:false, onClick:()=>onClaim(r)})
        )
      ))
    ),
    React.createElement(Card, {title:'ประวัติการรับรางวัล'},
      claimedLog.length===0
        ? React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:13,color:'rgb(139,146,158)'}}, 'ยังไม่มีรางวัลที่รับ')
        : claimedLog.map((c,i) => React.createElement('div', {key:i, style:{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid rgb(44,48,58)',fontFamily:'var(--font-sans)',fontSize:14,color:'#fff'}},
            React.createElement('span', null, c.label), React.createElement('span', {style:{color:'rgb(139,146,158)'}}, c.date)
          ))
    )
  );
}

function StampRewardCard({count, total, rewards, cardNumber, canPrevCard, canNextCard, onPrevCard, onNextCard, onClaim}) {
  const dots = Array.from({length: total});
  const tierAtDot = {};
  rewards.forEach(r => { tierAtDot[r.threshold] = r.label.split(' ')[0]+' ชม.'; });
  const nextLocked = rewards.find(r => r.status==='locked');
  const unlocked = rewards.find(r => r.status==='unlocked');
  const navBtnStyle = (enabled) => ({display:'flex',alignItems:'center',justifyContent:'center',width:28,height:28,borderRadius:8,background:'rgb(24,25,29)',border:'1px solid rgb(44,48,58)',cursor: enabled?'pointer':'default',opacity: enabled?1:0.35});
  return React.createElement(Card, null,
    React.createElement('div', {style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},
      React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:18,color:'#fff'}}, 'STAMP MILESTONE · การ์ดที่ '+cardNumber),
      React.createElement('div', {style:{display:'flex',gap:6}},
        React.createElement('div', {onClick: canPrevCard?onPrevCard:undefined, style:navBtnStyle(canPrevCard)}, React.createElement(Icon, {name:'IconChevronLeft', size:16, style:{color: canPrevCard?'#fff':'rgb(139,146,158)'}})),
        React.createElement('div', {onClick: canNextCard?onNextCard:undefined, style:navBtnStyle(canNextCard)}, React.createElement(Icon, {name:'IconChevronRight', size:16, style:{color: canNextCard?'#fff':'rgb(139,146,158)'}}))
      )
    ),
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'rgb(181,181,181)',fontSize:14,textAlign:'center'}}, 'คุณมี Stamp แล้ว'),
    React.createElement('div', {style:{display:'flex',alignItems:'baseline',gap:4,justifyContent:'center'}},
      React.createElement('span', {style:{fontFamily:'var(--font-latin)',fontWeight:700,fontSize:40,color:'rgb(163,255,71)'}}, count),
      React.createElement('span', {style:{fontFamily:'var(--font-latin)',fontSize:20,color:'rgb(181,181,181)'}}, '/ '+total+' ดวง')
    ),
    React.createElement('div', {style:{display:'grid',gridTemplateColumns:'repeat(5,1fr)',gap:8,justifyItems:'center'}},
      dots.map((_,i) => React.createElement('div', {key:i, style:{display:'flex',flexDirection:'column',alignItems:'center',gap:3,width:28}},
        React.createElement(CircleStamp, {filled: i<count, size:28}),
        tierAtDot[i+1] && React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:9,fontWeight:700,color:'rgb(163,255,71)',whiteSpace:'nowrap'}}, tierAtDot[i+1])
      ))
    ),
    unlocked && React.createElement('div', {style:{display:'flex',alignItems:'center',justifyContent:'space-between',gap:12,background:'rgba(118,186,0,0.1)',border:'1px solid rgb(118,186,0)',borderRadius:8,padding:12,flexWrap:'wrap'}},
      React.createElement('div', {style:{display:'flex',alignItems:'center',gap:12}},
        React.createElement(Icon, {name:'IconGift', size:24, style:{color:'rgb(163,255,71)'}}),
        React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:13,color:'#fff'}}, `รางวัล "${unlocked.label}" พร้อมให้รับแล้ว!`)
      ),
      React.createElement(Button, {color:'primary', style2:'fill', size:'sm', label:'รับรางวัล', showIcon:false, onClick:()=>onClaim && onClaim(unlocked)})
    ),
    !unlocked && nextLocked && React.createElement('div', {style:{display:'flex',alignItems:'center',gap:12,background:'rgba(118,186,0,0.1)',border:'1px solid rgb(118,186,0)',borderRadius:8,padding:12}},
      React.createElement(Icon, {name:'IconGift', size:24, style:{color:'rgb(163,255,71)'}}),
      React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:13,color:'#fff'}}, `อีก ${nextLocked.threshold-count} ดวง จะปลดล็อกรางวัลลับถัดไป!`)
    )
  );
}

Object.assign(window, {Toast, StampNotification, ClaimRewardModal, CircleStamp, ProgressDial, ClaimedStamp, Sidebar, Header, Card, Button, Icon, GetYourLink, StampHistory, RewardStrip, RewardsPage, StampRewardCard, AlertBanner, NAV});

})();
