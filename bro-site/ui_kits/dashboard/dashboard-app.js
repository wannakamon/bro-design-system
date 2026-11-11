const { Button, Badge, AlertBanner, Input, Input2, Modal, SiteMenuDashboard, SocialButton, Stamp, UserAccount, Icon } = window.BroGameDesignSystem_84b2ac;

function Toast({message}) {
  if (!message) return null;
  return React.createElement('div', {style:{position:'fixed',bottom:24,right:24,background:'rgb(24,25,29)',border:'1px solid rgb(163,255,71)',borderRadius:8,padding:'12px 20px',color:'#fff',fontFamily:'var(--font-sans)',fontSize:14,fontWeight:500,boxShadow:'0 0 20px rgba(163,255,71,0.25)',zIndex:1000}}, message);
}

function Header({onProfile}) {
  const [lang, setLang] = React.useState('EN');
  return React.createElement('div', {style:{height:64,background:'rgb(13,14,17)',borderBottom:'1px solid rgb(44,48,58)',display:'flex',alignItems:'center',justifyContent:'space-between',padding:'0 24px',flexShrink:0}},
    React.createElement('span', {style:{fontFamily:'var(--font-latin)',fontWeight:600,fontSize:20,letterSpacing:'0.5px',color:'#fff'}}, 'membership bro.game'),
    React.createElement('div', {style:{display:'flex',alignItems:'center',gap:16}},
      React.createElement('div', {style:{display:'flex',background:'rgb(24,25,29)',border:'1px solid rgb(44,48,58)',borderRadius:6,padding:2,cursor:'pointer'},onClick:()=>setLang(l=>l==='EN'?'TH':'EN')},
        ['EN','TH'].map(l => React.createElement('span', {key:l, style:{fontFamily:'var(--font-latin)',fontWeight:600,fontSize:13,padding:'6px 10px',borderRadius:4,color: lang===l ? '#000' : 'rgb(181,181,181)', background: lang===l ? 'rgb(163,255,71)' : 'transparent'}}, l))
      ),
      React.createElement('div', {style:{background:'rgb(163,255,71)',borderRadius:6,padding:'8px 16px',boxShadow:'0 0 15px rgba(163,255,71,0.3)',fontFamily:'var(--font-latin)',fontWeight:600,fontSize:16,color:'#000'}}, 'Download App'),
      React.createElement('div', {onClick:onProfile, style:{width:36,height:36,borderRadius:'50%',background:'rgb(163,255,71)',display:'flex',alignItems:'center',justifyContent:'center',fontFamily:'var(--font-sans)',fontWeight:700,fontSize:14,color:'#000',cursor:'pointer',flexShrink:0}}, 'P')
    )
  );
}

const NAV = [
  {key:'default', label:'ภาพรวม', section:'main'},
  {key:'plan', label:'แพ็กเกจ', section:'main'},
  {key:'payment', label:'การชำระเงิน', section:'main'},
  {key:'redeem code', label:'แลกโค้ด', section:'main'},
  {key:'friend', label:'ชวนเพื่อน', section:'main'},
  {key:'profile', label:'โปรไฟล์', section:'settings'},
  {key:'history', label:'ประวัติการเล่น', section:'settings'},
  {key:'device', label:'อุปกรณ์', section:'settings'},
];

function Sidebar({active, onSelect}) {
  const item = (n, sectionLabel) => React.createElement('div', {
    key:n.key, onClick:()=>onSelect(n.key),
    style:{display:'flex',alignItems:'center',height:52,padding:'0 12px',borderRadius:8,cursor:'pointer',
      background: active===n.key ? 'rgba(118,186,0,0.15)' : 'transparent',
      color: active===n.key ? 'rgb(163,255,71)' : 'rgb(181,181,181)',
      fontFamily:'var(--font-sans)', fontWeight:500, fontSize:16}
  }, n.label);
  return React.createElement('div', {style:{width:228,background:'rgb(13,14,17)',borderRight:'1px solid rgb(44,48,58)',display:'flex',flexDirection:'column',gap:32,padding:20,flexShrink:0,overflowY:'auto',minHeight:0}},
    React.createElement('img', {src:'../../assets/logo-white.png', style:{height:36,alignSelf:'flex-start'}}),
    React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:8}},
      React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:14,color:'rgb(181,181,181)'}}, 'เมนูหลัก'),
      ...NAV.filter(n=>n.section==='main').map(n=>item(n))
    ),
    React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:8}},
      React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:14,color:'rgb(181,181,181)'}}, 'ตั้งค่า'),
      ...NAV.filter(n=>n.section==='settings').map(n=>item(n))
    )
  );
}

function Card({children, style}) {
  return React.createElement('div', {style:Object.assign({background:'rgb(24,25,29)',border:'1px solid rgb(44,48,58)',borderRadius:12,padding:24},style)}, children);
}
function H({children}) { return React.createElement('h2', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:22,color:'#fff',margin:'0 0 16px'}}, children); }

function Overview() {
  return React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:20}},
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:24,color:'#fff'}}, 'สวัสดี Peter'),
    React.createElement(AlertBanner, {alertStatus:'info', text1:'แพ็กเกจของคุณ', text2:'เล่น GeForce NOW ฟรี 24 ชั่วโมง — สิ้นสุด 26 ก.พ.2569 15:14:21'}),
    React.createElement('div', {style:{display:'flex',gap:20}},
      React.createElement(Card, {style:{flex:1}},
        React.createElement(H, null, 'แพ็กเกจ Performance'),
        React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'rgb(181,181,181)',fontSize:14}}, 'คงเหลือ 100 จาก 105 ชั่วโมง'),
        React.createElement('div', {style:{marginTop:16}}, React.createElement(Button, {color:'primary',style2:'fill',size:'md',label:'เติมชั่วโมงเล่น'}))
      ),
      React.createElement(Card, {style:{flex:1}},
        React.createElement(H, null, 'รอบบิลถัดไป'),
        React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'rgb(181,181,181)',fontSize:14}}, 'เริ่มใช้งาน 15 เม.ย. 2569'),
        React.createElement('div', {style:{display:'flex',gap:8,marginTop:16}}, React.createElement(Badge,{status:'success',label:'Active'}))
      )
    )
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

function Device() {
  return React.createElement(Card, null,
    React.createElement(H, null, 'อุปกรณ์ที่เชื่อมต่อ'),
    React.createElement('div', {style:{display:'flex',gap:16}},
      ['Windows PC','iPhone 15'].map(d => React.createElement('div', {key:d, style:{display:'flex',alignItems:'center',gap:12,padding:'12px 16px',border:'1px solid rgb(44,48,58)',borderRadius:8,fontFamily:'var(--font-sans)',color:'#fff'}},
        React.createElement('div', {style:{display:'flex',alignItems:'center',justifyContent:'center',width:32,height:32,flexShrink:0}}, React.createElement(Icon,{name:'IconMonitorSmartphone',size:20})), d
      ))
    )
  );
}

const PANES = {default:Overview, plan:Plan, payment:Payment, 'redeem code':Redeem, friend:Friend, profile:Profile, history:History, device:Device};

function App() {
  const [active, setActive] = React.useState('default');
  const [toast, setToast] = React.useState(null);
  const showToast = (msg) => { setToast(msg); clearTimeout(window.__toastTimer); window.__toastTimer = setTimeout(()=>setToast(null), 2500); };
  const Pane = PANES[active];
  return React.createElement('div', {style:{display:'flex',flexDirection:'column',height:'100vh',fontFamily:'var(--font-sans)'}},
    React.createElement(Header, {onProfile:()=>setActive('profile')}),
    React.createElement('div', {style:{display:'flex',flex:1,overflow:'hidden'}},
      React.createElement(Sidebar, {active, onSelect:setActive}),
      React.createElement('div', {style:{flex:1,padding:32,overflow:'auto'}}, React.createElement(Pane, {showToast}))
    ),
    React.createElement(Toast, {message:toast})
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
