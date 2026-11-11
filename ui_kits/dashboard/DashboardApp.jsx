const { Button, Badge, AlertBanner, Input, Input2, Modal, SiteMenuDashboard, SocialButton, Stamp, UserAccount, Icon } = window.BroGameDesignSystem_84b2ac;

function Toast({message}) {
  if (!message) return null;
  return React.createElement('div', {style:{position:'fixed',bottom:24,right:24,background:'rgb(24,25,29)',border:'1px solid rgb(163,255,71)',borderRadius:8,padding:'12px 20px',color:'#fff',fontFamily:'var(--font-sans)',fontSize:14,fontWeight:500,boxShadow:'0 0 20px rgba(163,255,71,0.25)',zIndex:1000}}, message);
}

function TopBar() {
  const [open, setOpen] = React.useState(false);
  const [lang, setLang] = React.useState('ไทย');
  return React.createElement('div', {style:{height:46,display:'flex',justifyContent:'flex-end',alignItems:'center',gap:10,flexShrink:0}},
    React.createElement('div', {style:{position:'relative'}},
      React.createElement('div', {onClick:()=>setOpen(o=>!o), style:{height:46,boxSizing:'border-box',display:'flex',alignItems:'center',gap:8,padding:'0 14px',border:'1px solid rgba(255,255,255,0.31)',borderRadius:6,color:'#fff',cursor:'pointer',fontFamily:'var(--font-sans)',fontSize:16,fontWeight:500}},
        React.createElement(Icon,{name:'IconLanguage',size:20}), lang, React.createElement(Icon,{name:'IconChevronDown',size:16})),
      open && React.createElement('div', {style:{position:'absolute',top:52,left:0,right:0,background:'rgb(24,25,29)',border:'1px solid rgba(255,255,255,0.31)',borderRadius:6,overflow:'hidden',zIndex:10}},
        ['ไทย','English'].map(l=>React.createElement('div',{key:l,onClick:()=>{setLang(l);setOpen(false);},style:{padding:'10px 14px',color:'#fff',cursor:'pointer',fontSize:14}},l)))
    ),
    React.createElement(Button, {color:'primary',style2:'fill',size:'lg',label:'เริ่มเล่น GeForce NOW'})
  );
}

const NAV = [
  {key:'default', label:'ภาพรวม', icon:'IconAiGame', section:'main'},
  {key:'plan', label:'แพ็กเกจ', icon:'IconBlockGame', section:'main', sub:[{key:'main plan', label:'แพ็กเกจหลัก'}]},
  {key:'payment', label:'การชำระเงิน', icon:'IconWallet01', section:'main'},
  {key:'redeem code', label:'แลกรางวัล หรือ โค้ด', icon:'IconGift', section:'main'},
  {key:'friend', label:'ชวนเพื่อน', icon:'IconUsersFour', section:'main'},
  {key:'profile', label:'โปรไฟล์', icon:'IconUserCircle', section:'settings'},
  {key:'history', label:'ประวัติการเล่น', icon:'IconHistory', section:'settings'},
];

function Sidebar({active, onSelect}) {
  const [planOpen, setPlanOpen] = React.useState(true);
  const row = (key, label, icon, opts={}) => {
    const on = active===key;
    return React.createElement('div', {key, style:{position:'relative',display:'flex',alignItems:'center'}},
      on && React.createElement('div',{style:{position:'absolute',left:-12,width:4,height:24,borderRadius:2,background:'rgb(118,186,0)',boxShadow:'0 0 16px 4px rgba(118,186,0,0.45)'}}),
      React.createElement('div', {onClick:opts.onClick||(()=>onSelect(key)), style:{flex:1,display:'flex',alignItems:'center',gap:10,height:46,padding:icon?'0 16px':'0 16px 0 26px',boxSizing:'border-box',borderRadius:8,cursor:'pointer',
        background:on?'rgba(255,255,255,0.08)':'transparent', boxShadow:on?'inset 0 0 0 1px rgba(255,255,255,0.18)':'none',
        color:'#fff', fontFamily:'var(--font-sans)', fontWeight:on?500:400, fontSize:16}},
        icon && React.createElement(Icon,{name:icon,size:20}),
        React.createElement('span',{style:{flex:1}},label),
        opts.chevron && React.createElement('span',{style:{display:'flex',transform:planOpen?'rotate(180deg)':'none'}},React.createElement(Icon,{name:'IconChevronDown',size:16}))
      ));
  };
  const items = sec => NAV.filter(n=>n.section===sec).flatMap(n => n.sub
    ? [row(n.key,n.label,n.icon,{chevron:true,onClick:()=>setPlanOpen(o=>!o)}), ...(planOpen?n.sub.map(s=>row(s.key,s.label)):[])]
    : [row(n.key,n.label,n.icon)]);
  const head = t => React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:14,color:'rgb(181,181,181)',marginBottom:4}}, t);
  return React.createElement('div', {style:{width:274,boxSizing:'border-box',border:'1px solid rgba(255,255,255,0.31)',borderRadius:24,display:'flex',flexDirection:'column',gap:32,padding:20,flexShrink:0,overflowY:'auto',minHeight:0}},
    React.createElement('img', {src:'../../assets/logo-white.png', alt:'GeForce NOW powered by bro', style:{width:200,alignSelf:'flex-start'}}),
    React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:6}}, head('เมนูหลัก'), ...items('main')),
    React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:6,flex:1}}, head('ตั้งค่า'), ...items('settings')),
    React.createElement(UserAccount, {property1:'verified', text1:'JJ', text2:'JAN. JANJAN', text3:'wannakamon93@gmail.com', style:{alignSelf:'stretch',width:'auto'}})
  );
}

function Card({children, style}) {
  return React.createElement('div', {style:Object.assign({background:'rgb(24,25,29)',border:'1px solid rgb(44,48,58)',borderRadius:12,padding:24},style)}, children);
}
function H({children}) { return React.createElement('h2', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:22,color:'#fff',margin:'0 0 16px'}}, children); }

function Overview({onBuy}) {
  const used=0,total=0,pct=total?used/total*100:0;
  return React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:32}},
    React.createElement('div', {style:{display:'flex',alignItems:'center',gap:10}},
      React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:30,color:'#fff'}}, 'สวัสดี JAN.'),
      React.createElement('span', {style:{color:'var(--color-text-success)',display:'flex'}}, React.createElement(Icon,{name:'IconVerified',size:24}))),
    React.createElement('div', {style:{border:'1px solid rgba(255,255,255,0.31)',borderRadius:12,padding:20,background:'linear-gradient(135deg, rgb(48,48,50) 0%, rgb(30,30,32) 60%, rgb(24,24,26) 100%)',display:'flex',flexDirection:'column',gap:16}},
      React.createElement('div', {style:{display:'flex',justifyContent:'space-between',alignItems:'flex-start',gap:16,flexWrap:'wrap'}},
        React.createElement('div', {style:{display:'flex',alignItems:'center',gap:12,color:'#fff'}}, React.createElement(Icon,{name:'IconGameController',size:32}),
          React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:36}}, 'Ultimate')),
        React.createElement('div', {style:{display:'flex',flexDirection:'column',alignItems:'flex-end',gap:16}},
          React.createElement('span', {style:{background:'rgb(118,186,0)',color:'#fff',borderRadius:4,padding:'4px 10px',fontSize:12,fontWeight:500}}, 'แพ็กเกจปัจจุบัน'),
          React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:18,color:'rgb(209,213,219)'}}, 'รอบบิลถัดไป: 26 พฤศจิกายน 2026'))),
      React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontSize:20,marginTop:12}},
        React.createElement('span',{style:{color:'#fff'}},'คงเหลือ '+used+' ชั่วโมง '), React.createElement('span',{style:{color:'rgb(140,140,140)'}},'จาก '+total+' ชั่วโมง')),
      React.createElement('div', {style:{height:8,borderRadius:4,background:'rgba(255,255,255,0.12)',overflow:'hidden'}}, React.createElement('div',{style:{width:pct+'%',height:'100%',background:'rgb(118,186,0)'}})),
      React.createElement('div', {style:{display:'flex',justifyContent:'flex-end',marginTop:24}},
        React.createElement(Button, {color:'primary',style2:'fill',size:'lg',label:'ซื้อชั่วโมงเพิ่ม',style:{width:200},onClick:onBuy})))
  );
}

function Plan({showToast}) {
  const plans = [
    {name:'Basic', price:'฿199', cta:'สมัครเลย', features:['1080p · 60fps','คิวธรรมดา']},
    {name:'Performance', price:'฿399', cta:'แพ็กเกจปัจจุบัน', features:['1440p · 60fps','คิวเร็ว']},
    {name:'Ultimate', price:'฿799', cta:'เปลี่ยนแพ็กเกจ', features:['4K · 60fps · RTX','คิวเร็วที่สุด']},
  ];
  return React.createElement('div', {style:{display:'flex',gap:20}},
    plans.map(p => React.createElement(Card, {key:p.name, style:{flex:1,display:'flex',flexDirection:'column'}},
      React.createElement(H, null, p.name),
      React.createElement('div', {style:{display:'flex',alignItems:'baseline',gap:4,marginBottom:16}},
        React.createElement('span', {style:{fontFamily:'var(--font-latin)',fontSize:28,fontWeight:700,color:'rgb(163,255,71)',whiteSpace:'nowrap'}}, p.price),
        React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:14,color:'rgb(181,181,181)'}}, '/เดือน')
      ),
      React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:6,marginBottom:20,flex:1}},
        p.features.map(f => React.createElement('span', {key:f, style:{fontFamily:'var(--font-sans)',fontSize:14,color:'rgb(209,213,219)'}}, '✓ '+f))
      ),
      React.createElement(Button, {color:'primary',style2: p.name==='Performance'?'disable':'fill',size:'md',label:p.cta,onClick: p.name!=='Performance' ? ()=>showToast && showToast('เปลี่นเป็นแพ็กเกจ '+p.name+' เรียบร้อยแล้ว') : undefined})
    ))
  );
}

function Payment({showToast}) {
  const [confirming, setConfirming] = React.useState(false);
  return React.createElement('div', {style:{display:'flex',gap:24,flexWrap:'wrap'}},
    React.createElement(Card, {style:{width:280}},
      React.createElement(H, null, 'ช่องทางชำระเงิน'),
      React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:12}},
        React.createElement(Button, {color:'secondary',style2:'outline',size:'md',label:'บัตรเครดิต/เดบิต'}),
        React.createElement(Button, {color:'secondary',style2:'outline',size:'md',label:'พร้อมเพย์'})
      ),
      React.createElement('div', {style:{marginTop:16}}, React.createElement(Button, {color:'primary',style2:'fill',size:'md',label:'ยืนยันการชำระเงิน',onClick:()=>setConfirming(true)}))
    ),
    confirming && React.createElement('div', {onClick:()=>setConfirming(false), style:{position:'fixed',inset:0,background:'rgba(0,0,0,0.6)',display:'flex',alignItems:'center',justifyContent:'center',zIndex:999}},
      React.createElement('div', {onClick:e=>e.stopPropagation(), style:{position:'relative'}},
        React.createElement('div', {onClick:()=>setConfirming(false), style:{position:'absolute',top:-12,right:-12,width:28,height:28,borderRadius:'50%',background:'rgb(44,48,58)',display:'flex',alignItems:'center',justifyContent:'center',cursor:'pointer',color:'#fff',fontSize:14,zIndex:1}}, '✕'),
        React.createElement(Modal, {property1:'default', devices:'desktop', text1:'ยืนยันการชำระเงิน', text2:'ตรวจสอบยอดชำระก่อนยืนยันการสมัครแพ็กเกจของคุณ', secondaryLabel:'ยกเลิก', primaryLabel:'ยืนยันการชำระเงิน', onSecondaryClick:()=>setConfirming(false), onPrimaryClick:()=>{setConfirming(false); showToast && showToast('ชำระเงินสำเร็จแล้ว');}})
      )
    )
  );
}

function Redeem({showToast}) {
  const [status, setStatus] = React.useState(null);
  const confirm = () => {
    const ok = Math.random() > 0.5;
    if (ok) { setStatus(null); showToast && showToast('แลกโค้ดสำเร็จ! ได้รับรางวัลแล้ว'); }
    else setStatus('error');
  };
  return React.createElement(Card, {style:{maxWidth:420}},
    React.createElement(H, null, 'แลกโค้ด'),
    React.createElement(Input, {inputState: status==='error' ? 'code incorrect' : 'default', text1:'', text3:'กรอกโค้ดที่นี่', text4: status==='error' ? 'โค้ดไม่ถูกต้องหรือถูกใช้ไปแล้ว' : undefined}),
    React.createElement('div', {style:{marginTop:16,display:'flex',alignItems:'center',gap:12}},
      React.createElement(Button, {color:'primary',style2:'fill',size:'md',label:'ยืนยัน',onClick:confirm}),
      status==='error' && React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'rgb(239,68,68)',fontSize:14}}, 'โค้ดไม่ถูกต้องหรือถูกใช้ไปแล้ว')
    )
  );
}

function Friend({showToast}) {
  return React.createElement(Card, {style:{maxWidth:480}},
    React.createElement(H, null, 'GET YOUR LINK'),
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'#fff',fontSize:16,display:'block',marginBottom:12}}, 'คัดลอกลิงก์ของคุณ แล้วแชร์ให้เพื่อนเลย'),
    React.createElement('div', {onClick:()=>navigator.clipboard && navigator.clipboard.writeText('/sign-up/referral?ref=peter123').then(()=>showToast && showToast('คัดลอกลิงก์แล้ว')), style:{cursor:'pointer'}},
      React.createElement(Input2, {state:'default', text1:'/sign-up/referral?ref=peter123'})
    ),
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'#fff',fontSize:16,display:'block',margin:'20px 0 12px'}}, 'แชร์ลิงก์'),
    React.createElement('div', {style:{display:'flex',flexWrap:'wrap',gap:8,marginBottom:24}},
      ['facebook','x (twitter)','line','discord'].map(m => React.createElement(SocialButton,{key:m, socialMedia:m, button:'full'}))
    ),
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'#fff',fontSize:16,display:'block',marginBottom:4}}, 'รางวัลของคุณ'),
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'rgb(181,181,181)',fontSize:13,display:'block',marginBottom:12}}, 'ชวนเพื่อนสำเร็จ 2 จาก 4 คน เพื่อปลดล็อกรางวัลถัดไป'),
    React.createElement('div', {style:{display:'flex',gap:12}},
      React.createElement(Stamp, {state:'stamp'}), React.createElement(Stamp, {state:'stamp'}), React.createElement(Stamp, {state:'lock'}), React.createElement(Stamp, {state:'lock'})
    )
  );
}

function Profile() {
  return React.createElement(Card, {style:{maxWidth:480}},
    React.createElement(UserAccount, {property1:'verified', text2:'Peter Chaiyasit', text3:'peter@bro.game'}),
    React.createElement('div', {style:{marginTop:20,display:'flex',flexDirection:'column',gap:12}},
      React.createElement(Input, {inputState:'default', text1:'ชื่อ', text3:'Peter Chaiyasit'}),
      React.createElement(Input, {inputState:'default', text1:'อีเมล', text3:'peter@bro.game'})
    )
  );
}

function History() {
  const rows = [
    {d:'02 ส.ค. 2569', a:'เล่น GeForce NOW', h:'2 ชม.'},
    {d:'01 ส.ค. 2569', a:'เติมชั่วโมงเล่น', h:'+10 ชม.'},
    {d:'30 ก.ค. 2569', a:'เล่น GeForce NOW', h:'1.5 ชม.'},
  ];
  return React.createElement(Card, null,
    React.createElement(H, null, 'ประวัติการเล่น'),
    React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:8}},
      rows.map((r,i) => React.createElement('div', {key:i, style:{display:'flex',justifyContent:'space-between',padding:'10px 0',borderBottom:'1px solid rgb(44,48,58)',fontFamily:'var(--font-sans)',color:'#fff',fontSize:14}},
        React.createElement('span',null,r.d), React.createElement('span',null,r.a), React.createElement('span',{style:{color:'rgb(163,255,71)'}},r.h)
      ))
    )
  );
}

const PANES = {default:Overview, plan:Plan, 'main plan':Plan, payment:Payment, 'redeem code':Redeem, friend:Friend, profile:Profile, history:History};

function App() {
  const [active, setActive] = React.useState('default');
  const [toast, setToast] = React.useState(null);
  const showToast = (msg) => { setToast(msg); clearTimeout(window.__toastTimer); window.__toastTimer = setTimeout(()=>setToast(null), 2500); };
  const Pane = PANES[active];
  return React.createElement('div', {style:{display:'flex',gap:30,height:'100vh',boxSizing:'border-box',padding:40,background:'rgb(10,10,10)',fontFamily:'var(--font-sans)'}},
    React.createElement(Sidebar, {active, onSelect:setActive}),
    React.createElement('div', {style:{flex:1,minWidth:0,display:'flex',flexDirection:'column',gap:16,overflow:'hidden'}},
      React.createElement(TopBar),
      React.createElement('div', {style:{flex:1,overflow:'auto',paddingTop:8}}, React.createElement(Pane, {showToast, onBuy:()=>setActive('plan')}))
    ),
    React.createElement(Toast, {message:toast})
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
