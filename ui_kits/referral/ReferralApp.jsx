(function(){
const {Toast, StampNotification, ClaimRewardModal, Sidebar, Header, RewardsPage, Layout1, Layout2, Layout3} = window;

const INITIAL_HISTORY = [
  {name:'Player_One', email:'playerone@email.com', tier:'Ultimate', dur:'12 Months', date:'20/05/2025', stamp:'+15'},
  {name:'Neon_Gamer', email:'neongamer@email.com', tier:'Performance', dur:'6 Months', date:'18/05/2025', stamp:'+5'},
  {name:'Speed_Demon', email:'speeddemon@email.com', tier:'Ultimate', dur:'1 Month', date:'15/05/2025', stamp:'+2'},
  {name:'Cloud_Playz', email:'cloudplayz@email.com', tier:'Performance', dur:'1 Month', date:'12/05/2025', stamp:'+1'},
];
const CARD_SIZE = 15;
const TIER_TEMPLATE = [
  {at:1, hours:5},
  {at:5, hours:10},
  {at:15, hours:20},
];
function buildRewards(cardNumber, posInCard, claimedKeys) {
  return TIER_TEMPLATE.map(t => {
    const key = cardNumber+'-'+t.at;
    const reached = posInCard >= t.at;
    return {
      threshold: t.at,
      label: t.hours+' ชั่วโมงเล่นเกมฟรี',
      cardNumber,
      status: claimedKeys.includes(key) ? 'claimed' : reached ? 'unlocked' : 'locked'
    };
  });
}
const DEMO_FRIENDS = ['Boss_Level','Sky_Walker','Turbo_Fox','Nova_Star','Rex_Gamer'];

const LAYOUT_TABS = [
  {key:1, label:'1 · Card Grid'},
  {key:2, label:'2 · Timeline'},
  {key:3, label:'3 · Level Path'},
];

function LayoutTabs({active, onChange}) {
  return React.createElement('div', {className:'layout-tabs', style:{display:'flex',gap:8,marginBottom:4}},
    LAYOUT_TABS.map(t => React.createElement('div', {key:t.key, onClick:()=>onChange(t.key), style:{
      padding:'8px 16px', borderRadius:8, cursor:'pointer', whiteSpace:'nowrap',
      fontFamily:'var(--font-sans)', fontSize:13, fontWeight:600,
      background: active===t.key ? 'rgb(118,186,0)' : 'rgb(24,25,29)',
      color: active===t.key ? '#000' : 'rgb(181,181,181)',
      border: '1px solid ' + (active===t.key ? 'rgb(118,186,0)' : 'rgb(44,48,58)')
    }}, t.label))
  );
}

function ReferralApp() {
  const [view, setView] = React.useState('referral');
  const [sidebarOpen, setSidebarOpen] = React.useState(false);
  const [layout, setLayout] = React.useState(1);
  const [totalStamps, setTotalStamps] = React.useState(6);
  const [claimedKeys, setClaimedKeys] = React.useState(['1-1']);
  const total = CARD_SIZE;
  const cardNumber = Math.floor((totalStamps>0?totalStamps-1:0)/CARD_SIZE)+1;
  const count = totalStamps - (cardNumber-1)*CARD_SIZE;
  const rewards = buildRewards(cardNumber, count, claimedKeys);
  const [history, setHistory] = React.useState(INITIAL_HISTORY);
  const [claimedLog, setClaimedLog] = React.useState([{label:'5 ชั่วโมงเล่นเกมฟรี', date:'01/05/2025'}]);
  const [viewedCard, setViewedCard] = React.useState(1);
  React.useEffect(() => { setViewedCard(cardNumber); }, [cardNumber]);
  const viewedCount = viewedCard < cardNumber ? CARD_SIZE : count;
  const viewedRewards = buildRewards(viewedCard, viewedCount, claimedKeys);
  const canPrevCard = viewedCard > 1;
  const canNextCard = viewedCard < cardNumber;
  const startNewCard = () => { setViewedCard(cardNumber); setClaimModal(null); };
  const [toast, setToast] = React.useState('');
  const [notif, setNotif] = React.useState(null);
  const [claimModal, setClaimModal] = React.useState(null);

  const showToast = (msg) => { setToast(msg); clearTimeout(window.__t); window.__t = setTimeout(()=>setToast(''), 2200); };

  React.useEffect(() => {
    if (!notif) return;
    const t = setTimeout(() => setNotif(null), 5000);
    return () => clearTimeout(t);
  }, [notif]);

  const onNavigate = (key, forceOpen) => {
    if (key === null) { setSidebarOpen(false); return; }
    if (key === 'referral' || key === 'rewards') setView(key);
    setSidebarOpen(false);
  };

  const simulateStamp = () => {
    const name = DEMO_FRIENDS[Math.floor(Math.random()*DEMO_FRIENDS.length)];
    const gain = [1,2,5][Math.floor(Math.random()*3)];
    const next = totalStamps + gain;
    setHistory(h => [{name, email:name.toLowerCase()+'@email.com', tier: gain>=5?'Ultimate':'Performance', dur: gain>=5?'6 Months':'1 Month', date: new Date().toLocaleDateString('th-TH'), stamp:'+'+gain}, ...h]);
    setTotalStamps(next);
    setNotif({name, stamp:gain});
    let lastUnlocked = null;
    const fromCard = cardNumber, toCard = Math.floor((next-1)/CARD_SIZE)+1;
    for (let c=fromCard; c<=toCard; c++) {
      TIER_TEMPLATE.forEach(t => {
        const g = (c-1)*CARD_SIZE + t.at;
        if (g>totalStamps && g<=next) lastUnlocked = {threshold:t.at, label:t.hours+' ชั่วโมงเล่นเกมฟรี', cardNumber:c, status:'unlocked'};
      });
    }
    if (lastUnlocked) setClaimModal(lastUnlocked);
  };

  const claimReward = (reward) => {
    setClaimedKeys(k => [...k, reward.cardNumber+'-'+reward.threshold]);
    setClaimedLog(l => [{label:reward.label, date:new Date().toLocaleDateString('th-TH')}, ...l]);
    setClaimModal(null);
    showToast('รับรางวัล "'+reward.label+'" สำเร็จ!');
  };

  const layoutProps = {count, total, rewards, history, cardNumber, viewedCard, viewedCount, viewedRewards, canPrevCard, canNextCard, onPrevCard:()=>setViewedCard(c=>Math.max(1,c-1)), onNextCard:()=>setViewedCard(c=>Math.min(cardNumber,c+1)), onShare:showToast, onClaim:setClaimModal};
  const LayoutComp = layout===1 ? Layout1 : layout===2 ? Layout2 : Layout3;

  return React.createElement('div', {style:{display:'flex',fontFamily:'var(--font-sans)'}},
    React.createElement(Sidebar, {open:sidebarOpen, onNavigate, current:view}),
    React.createElement('div', {style:{flex:1,display:'flex',flexDirection:'column',minHeight:'100vh',minWidth:0}},
      React.createElement(Header, {title: view==='rewards' ? 'รางวัลของฉัน' : 'Referral / ชวนเพื่อน', onToggleSidebar:()=>setSidebarOpen(s=>!s)}),
      React.createElement('div', {className:'main-pane', style:{padding:24,display:'flex',flexDirection:'column',gap:16,overflow:'auto',minWidth:0}},
        view==='referral' && React.createElement(React.Fragment, null,
          React.createElement('div', {style:{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:12}},
            React.createElement(LayoutTabs, {active:layout, onChange:setLayout}),
            React.createElement('div', {onClick:simulateStamp, style:{
              cursor:'pointer', padding:'8px 14px', borderRadius:8, background:'rgb(24,25,29)',
              border:'1px dashed rgb(118,186,0)', color:'rgb(163,255,71)', fontFamily:'var(--font-sans)', fontSize:13, fontWeight:600
            }}, '🔔 จำลอง: เพื่อนสมัครสำเร็จ')
          ),
          React.createElement(LayoutComp, layoutProps)
        ),
        view==='rewards' && React.createElement(RewardsPage, {rewards, claimedLog, cardNumber, onClaim:setClaimModal})
      )
    ),
    React.createElement(Toast, {msg:toast}),
    React.createElement(StampNotification, {data:notif, onClose:()=>setNotif(null), onView:()=>{setNotif(null); setView('rewards');}}),
    React.createElement(ClaimRewardModal, {reward:claimModal, onClaim:()=>claimReward(claimModal), onStartNew:startNewCard, onClose:()=>setClaimModal(null)})
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(ReferralApp));

})();
