(function(){
const {Card, Button, Icon, GetYourLink, StampHistory, RewardStrip, CircleStamp, ProgressDial, StampRewardCard, AlertBanner, ClaimedStamp} = window;

function Hero({compact}) {
  return React.createElement('div', {className:'hero', style:{position:'relative',borderRadius:16,overflow:'hidden',background:'linear-gradient(135deg, rgb(10,10,10), rgb(18,30,10))',padding:24,display:'flex',alignItems:'center',justifyContent:'space-between',gap:20,border:'1px solid rgb(44,48,58)'}},
    React.createElement('div', null,
      React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize: compact?24:32,color:'#fff',lineHeight:1.2}}, 'ชวนเพื่อน เล่น GFN'),
      React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize: compact?24:32,color:'rgb(163,255,71)',lineHeight:1.2,marginBottom:12}}, 'รับรางวัลไปด้วยกัน!'),
      React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontSize:15,color:'rgb(181,181,181)',maxWidth:420}}, 'เพื่อนสมัครผ่านลิงก์ของคุณ และซื้อแพ็กเกจสำเร็จ คุณจะได้รับ Stamp ทันที')
    )
  );
}

function CardNav({cardNumber, canPrevCard, canNextCard, onPrevCard, onNextCard}) {
  const btnStyle = (enabled) => ({display:'flex',alignItems:'center',justifyContent:'center',width:28,height:28,borderRadius:8,background:'rgb(24,25,29)',border:'1px solid rgb(44,48,58)',cursor: enabled?'pointer':'default',opacity: enabled?1:0.35});
  return React.createElement('div', {style:{display:'flex',justifyContent:'space-between',alignItems:'center'}},
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:18,color:'#fff'}}, 'STAMP MILESTONE · การ์ดที่ '+cardNumber),
    React.createElement('div', {style:{display:'flex',gap:6}},
      React.createElement('div', {onClick: canPrevCard?onPrevCard:undefined, style:btnStyle(canPrevCard)}, React.createElement(Icon, {name:'IconChevronLeft', size:16, style:{color: canPrevCard?'#fff':'rgb(139,146,158)'}})),
      React.createElement('div', {onClick: canNextCard?onNextCard:undefined, style:btnStyle(canNextCard)}, React.createElement(Icon, {name:'IconChevronRight', size:16, style:{color: canNextCard?'#fff':'rgb(139,146,158)'}}))
    )
  );
}

function StampMilestoneCompact({count, total, cardNumber, canPrevCard, canNextCard, onPrevCard, onNextCard}) {
  const dots = Array.from({length: Math.min(total,10)});
  const filled = Math.round((count/total)*dots.length);
  return React.createElement(Card, null,
    React.createElement(CardNav, {cardNumber, canPrevCard, canNextCard, onPrevCard, onNextCard}),
    React.createElement('div', {style:{display:'flex',justifyContent:'space-between',alignItems:'baseline'}},
      React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:13,color:'rgb(181,181,181)'}}, 'คุณมี Stamp แล้ว'),
      React.createElement('span', {style:{fontFamily:'var(--font-latin)',fontWeight:700,fontSize:15,color:'rgb(163,255,71)'}}, count+' / '+total+' ดวง')
    ),
    React.createElement('div', {style:{display:'flex',gap:6,flexWrap:'wrap'}},
      dots.map((_,i) => React.createElement(CircleStamp, {key:i, filled: i<filled, size:28}))
    ),
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',color:'#fff',fontSize:13}}, `อีก ${total-count} ดวง จะปลดล็อกรางวัลถัดไป!`)
  );
}

function RewardSlider({rewards, onClaim}) {
  const firstLocked = rewards.findIndex(r => r.status==='locked');
  const [idx, setIdx] = React.useState(firstLocked===-1 ? rewards.length-1 : firstLocked);
  const r = rewards[idx];
  const go = (d) => setIdx(i => Math.max(0, Math.min(rewards.length-1, i+d)));
  const statusLabel = {locked:'ยังไม่ปลดล็อก', unlocked:'พร้อมรับ!', claimed:'รับแล้ว'};
  const statusColor = {locked:'rgb(139,146,158)', unlocked:'rgb(163,255,71)', claimed:'rgb(33,86,238)'};
  return React.createElement('div', {className:'reward-slider', style:{
    position:'relative', borderRadius:16, padding:'28px 24px', background:'linear-gradient(160deg, rgba(118,186,0,0.18), rgb(24,25,29))',
    border:'1px solid rgb(118,186,0)', boxShadow:'0 0 30px rgba(177,245,122,0.25)',
    display:'flex', flexDirection:'column', gap:16, alignItems:'center'
  }},
    React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:18,color:'#fff',alignSelf:'flex-start'}}, 'REWARD PROGRESS'),
    React.createElement('div', {style:{display:'flex',alignItems:'center',gap:8,width:'100%',justifyContent:'center'}},
      React.createElement('div', {onClick:()=>go(-1), style:{width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',cursor: idx===0?'default':'pointer', opacity: idx===0?0.3:1, fontSize:24, color:'#fff', userSelect:'none'}}, '‹'),
      React.createElement('div', {style:{position:'relative',display:'flex',flexDirection:'column',alignItems:'center',gap:10,minWidth:160}},
        r.status==='claimed' && React.createElement(ClaimedStamp, {size:'lg'}),
        React.createElement('div', {style:{display:'flex',flexDirection:'column',alignItems:'center',gap:10, filter: r.status==='claimed'?'grayscale(1)':'none', opacity: r.status==='claimed'?0.5:1}},
          React.createElement(CircleStamp, {filled: r.status!=='locked', size:72}),
          React.createElement('span', {style:{fontFamily:'var(--font-latin)',fontWeight:700,fontSize:20,color:'#fff'}}, r.threshold+' ดวง'),
          React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:14,color:'#fff',textAlign:'center'}}, r.status==='locked' ? '???' : r.label),
          React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:12,color:statusColor[r.status]}}, statusLabel[r.status])
        ),
        r.status==='unlocked' && React.createElement(Button, {color:'primary', style2:'fill', size:'sm', label:'รับรางวัล', showIcon:false, onClick:()=>onClaim && onClaim(r)})
      ),
      React.createElement('div', {onClick:()=>go(1), style:{width:44,height:44,display:'flex',alignItems:'center',justifyContent:'center',cursor: idx===rewards.length-1?'default':'pointer', opacity: idx===rewards.length-1?0.3:1, fontSize:24, color:'#fff', userSelect:'none'}}, '›')
    ),
    React.createElement('div', {style:{display:'flex',gap:6}},
      rewards.map((_,i) => React.createElement('div', {key:i, onClick:()=>setIdx(i), style:{
        width: i===idx?18:8, height:8, borderRadius:4, cursor:'pointer',
        background: i===idx ? 'rgb(163,255,71)' : 'rgb(60,63,70)', transition:'width .2s'
      }}))
    )
  );
}

function ReferralTermsBanner({fill}) {
  return React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:8, height: fill?'100%':undefined}},
    React.createElement('div', {style:{border:'1px solid rgb(44,48,58)', borderRadius:8, padding:'10px 14px', fontFamily:'var(--font-sans)', fontSize:13, color:'rgb(181,181,181)', display:'flex', flexDirection:'column', gap:4, height: fill?'100%':undefined, width: fill?'100%':undefined, boxSizing:'border-box'}},
      React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:600,fontSize:14,color:'#fff'}}, 'เงื่อนไขการสมัครแบบ Referral'),
      React.createElement('div', null, '• ต้องเป็นสมาชิกใหม่เท่านั้น'),
      React.createElement('div', null, '• ไม่มีการ Refund'),
      React.createElement('div', null, '• Stamp จะเข้าระบบภายใน 24 ชม. หลังเพื่อนซื้อแพ็กเกจสำเร็จ')
    )
  );
}

function GetYourLinkHistoryCard({onShare, history}) {
  return React.createElement(React.Fragment, null,
    React.createElement('div', {className:'gyl-mobile-fix'},
      React.createElement(Card, null, React.createElement(GetYourLink, {onShare, bare:true}))
    ),
    React.createElement(Card, {title:'STAMP HISTORY'},
      React.createElement('div', {className:'history-scroll', style:{maxHeight:220, overflowY:'auto'}}, React.createElement(StampHistory, {history, compact:true, bare:true}))
    )
  );
}
function Layout1({count, total, rewards, history, cardNumber, viewedCard, viewedCount, viewedRewards, canPrevCard, canNextCard, onPrevCard, onNextCard, onShare, onClaim}) {
  return React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:20}},
    React.createElement(Hero, null),
    React.createElement('div', {className:'grid2'},
      React.createElement(StampRewardCard, {count:viewedCount, total, rewards:viewedRewards, cardNumber:viewedCard, canPrevCard, canNextCard, onPrevCard, onNextCard, onClaim}),
      React.createElement(GetYourLinkHistoryCard, {onShare, history})
    ),
    React.createElement(ReferralTermsBanner, null)
  );
}

// Layout 2 — mobile: stacked single column; desktop: two columns side by side
function Layout2({count, total, rewards, history, cardNumber, viewedCard, viewedCount, viewedRewards, canPrevCard, canNextCard, onPrevCard, onNextCard, onShare, onClaim}) {
  return React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:16,width:'100%'}},
    React.createElement(Hero, {compact:true}),
    React.createElement('div', {className:'grid2', style:{alignItems:'start'}},
      React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:16,minWidth:0}},
        React.createElement(StampMilestoneCompact, {count:viewedCount, total, cardNumber:viewedCard, canPrevCard, canNextCard, onPrevCard, onNextCard}),
        React.createElement(StampHistory, {history, compact:true})
      ),
      React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:16,minWidth:0}},
        React.createElement('div', {className:'gyl-mobile-fix'}, React.createElement(GetYourLink, {onShare}))
      )
    )
  );
}

// Layout 3 — Level Path: tier stepper + current-level progress card + reward accordion
function TierRow({reward, isOpen, onToggle, count, onClaim}) {
  const locked = reward.status==='locked';
  const statusText = reward.status==='claimed' ? 'รับแล้ว' : reward.status==='unlocked' ? 'พร้อมรับ!' : `ปลดล็อกเมื่อสะสม ${reward.threshold} ดวง`;
  const claimed = reward.status==='claimed';
  return React.createElement('div', {style:{position:'relative',border:'1px solid rgb(44,48,58)',borderRadius:12,overflow:'hidden',flexShrink:0}},
    claimed && React.createElement(ClaimedStamp, {size:'sm'}),
    React.createElement('div', {onClick:onToggle, style:{display:'flex',alignItems:'center',gap:12,padding:'14px 16px',cursor:'pointer',background: isOpen?'rgba(118,186,0,0.08)':'transparent', filter: claimed?'grayscale(1)':'none', opacity: claimed?0.5:1}},
      React.createElement(CircleStamp, {filled: !locked, size:36}),
      React.createElement('div', {style:{flex:1,minWidth:0}},
        React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:15,color: locked?'rgb(139,146,158)':'#fff'}}, locked ? `??? (สะสมครบ ${reward.threshold} ดวง)` : reward.label),
        React.createElement('div', {style:{fontFamily:'var(--font-sans)',fontSize:12,color: reward.status==='claimed'?'rgb(33,86,238)':reward.status==='unlocked'?'rgb(163,255,71)':'rgb(139,146,158)'}}, statusText)
      ),
      React.createElement('span', {style:{fontSize:12,color:'rgb(139,146,158)'}}, isOpen?'▲':'▼')
    ),
    isOpen && React.createElement('div', {style:{padding:'0 16px 14px 64px',fontFamily:'var(--font-sans)',fontSize:13,color:'rgb(181,181,181)',display:'flex',flexDirection:'column',gap:10}},
      React.createElement('span', null, locked ? `ชวนเพื่อนอีก ${Math.max(0,reward.threshold-count)} ดวง เพื่อปลดล็อกรางวัลนี้` : reward.status==='unlocked' ? 'คุณสะสมครบแล้ว กดรับรางวัลได้เลย!' : 'รับรางวัลนี้ไปแล้ว'),
      reward.status==='unlocked' && React.createElement(Button, {color:'primary', style2:'fill', size:'sm', label:'รับรางวัล', showIcon:false, onClick:()=>onClaim({...reward, status:'unlocked'})})
    )
  );
}

function LevelPath({count, total, rewards, cardNumber, onClaim}) {
  let lastAchieved = -1;
  rewards.forEach((r,i) => { if (r.status!=='locked') lastAchieved = i; });
  const nextTier = rewards[lastAchieved+1] || null;
  const prevThreshold = lastAchieved>=0 ? rewards[lastAchieved].threshold : 0;
  const currentLabel = lastAchieved>=0 ? rewards[lastAchieved].label : 'เริ่มต้นชวนเพื่อน';
  const progressPct = nextTier ? Math.min(100, Math.round(((count-prevThreshold)/(nextTier.threshold-prevThreshold))*100)) : 100;
  const tabActiveIdx = nextTier ? lastAchieved+1 : Math.max(0,lastAchieved);
  const [openIdx, setOpenIdx] = React.useState(tabActiveIdx);
  return React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:16}},
    React.createElement('div', {className:'level-tabs', style:{display:'flex',alignItems:'center',gap:4,overflowX:'auto',paddingBottom:4}},
      rewards.map((r,i) => React.createElement(React.Fragment, {key:i},
        i>0 && React.createElement('span', {style:{color:'rgb(60,63,70)',fontSize:14,flexShrink:0}}, '›'),
        React.createElement('div', {onClick:()=>setOpenIdx(i), style:{cursor:'pointer',display:'flex',alignItems:'center',gap:6,padding:'8px 14px',borderRadius:8,flexShrink:0,
          background: i===tabActiveIdx ? 'rgb(163,255,71)' : 'rgb(24,25,29)',
          color: i===tabActiveIdx ? '#0a0a0a' : (r.status==='locked' ? 'rgb(139,146,158)' : r.status==='claimed' ? 'rgb(163,255,71)' : '#fff'),
          border: i===tabActiveIdx ? 'none' : (i===openIdx ? '1px solid rgb(163,255,71)' : '1px solid rgb(44,48,58)'),
          fontFamily:'var(--font-sans)',fontWeight:700,fontSize:13,whiteSpace:'nowrap'
        }},
          r.status==='locked' && i!==tabActiveIdx && React.createElement(Icon, {name:'IconLock', size:12, style:{color:'inherit',marginRight:4,verticalAlign:'middle'}}),
          r.status==='claimed' && '✓ ',
          'ระดับ '+(i+1)
        )
      ))
    ),
    React.createElement('div', {className:'level-card', style:{position:'relative',borderRadius:16,padding:24,background:'linear-gradient(135deg, rgb(118,186,0), rgb(70,130,0))',overflow:'hidden',display:'flex',flexDirection:'column',gap:14}},
      React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:14,color:'#0a0a0a',background:'rgba(10,10,10,0.15)',padding:'4px 10px',borderRadius:6,alignSelf:'flex-start'}}, 'ระดับ '+(tabActiveIdx+1)),
      React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontWeight:700,fontSize:20,color:'#0a0a0a'}}, currentLabel),
      React.createElement('div', {style:{display:'flex',justifyContent:'space-between',alignItems:'baseline'}},
        React.createElement('span', {style:{fontFamily:'var(--font-sans)',fontSize:13,color:'rgba(10,10,10,0.7)'}}, 'ยอดสะสมปัจจุบัน · การ์ดที่ '+cardNumber),
        React.createElement('span', {style:{fontFamily:'var(--font-latin)',fontWeight:700,fontSize:20,color:'#0a0a0a'}}, count+' / '+total+' ดวง')
      ),
      React.createElement('div', {style:{position:'relative',padding:'8px 0 20px',marginTop:4}},
        React.createElement('div', {style:{height:8,borderRadius:4,background:'rgba(10,10,10,0.18)',overflow:'hidden'}},
          React.createElement('div', {style:{height:'100%',width:Math.min(100,Math.round((count/total)*100))+'%',background:'#0a0a0a',borderRadius:4}})
        ),
        rewards.map((r,i) => React.createElement('div', {key:'dot'+i, style:{position:'absolute', left:Math.min(100,(r.threshold/total)*100)+'%', top:8, transform:'translate(-50%,-50%)', width:10,height:10,borderRadius:'50%', background: r.status==='locked' ? 'rgba(10,10,10,0.5)' : '#fff', border:'2px solid #0a0a0a'}})),
        rewards.map((r,i) => React.createElement('span', {key:'lbl'+i, style:{position:'absolute', left:Math.min(100,(r.threshold/total)*100)+'%', top:20, transform: r.threshold===total?'translateX(-100%)':(r.threshold<=1?'translateX(0%)':'translateX(-50%)'), fontFamily:'var(--font-sans)',fontWeight:700,fontSize:11,color:'rgba(10,10,10,0.75)',whiteSpace:'nowrap'}}, r.threshold+' ดวง'))
      ),
      React.createElement('span', {style:{alignSelf:'flex-end',fontFamily:'var(--font-sans)',fontSize:12,color:'rgba(10,10,10,0.7)'}}, nextTier ? `เลื่อนระดับเมื่อถัง ${nextTier.threshold} ดวง` : 'ระดับสูงสุด — สะสมต่อได้ไม่มีสิ้นสุด')
    ),
    React.createElement('div', {className:'reward-list', style:{display:'flex',flexDirection:'column',gap:10,maxHeight:290,overflowY:'auto',paddingRight:4}},
      rewards.map((r,i) => React.createElement(TierRow, {key:i, reward:r, isOpen: i===openIdx, onToggle:()=>setOpenIdx(o=>o===i?-1:i), count, onClaim}))
    ),
    React.createElement(ReferralTermsBanner, {fill:true})
  );
}

function Layout3({count, total, rewards, history, cardNumber, onShare, onClaim}) {
  return React.createElement('div', {className:'grid2', style:{alignItems:'start'}},
    React.createElement(LevelPath, {count, total, rewards, cardNumber, onClaim}),
    React.createElement('div', {style:{display:'flex',flexDirection:'column',gap:20,minWidth:0}},
      React.createElement('div', {className:'gyl-mobile-fix'}, React.createElement(GetYourLink, {onShare, hideTerms:true, showCode:true})),
      React.createElement(StampHistory, {history, compact:true})
    )
  );
}

Object.assign(window, {Layout1, Layout2, Layout3});

})();
