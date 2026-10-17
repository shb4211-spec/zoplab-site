(function(){
const $=s=>document.querySelector(s);
const S=window.SCENES,SRC=window.SRC,FB=window.FEEDBACK;
const NAME={t:'솔솔 쌤',z:'조피',n:'내레이션'};
const ZIMG={neutral:'zopi_cook_neutral',thinking:'zopi_cook_thinking',oops:'zopi_cook_oops',happy:'zopi_cook_happy',mask:'zopi_cook_neutral_mask'};
const TIMG={smile:'hansogeum_smile',show:'hansogeum_show',wait:'hansogeum_wait'};
const LAB={field:'현장 기억 · 공식 아님',zop:'ZOP LAB 팁 · 공식 아님'};
const KLAB={field:'현장 기억 · 공식 아님',zop:'ZOP LAB 팁 · 공식 아님',none:'공개 자료 없음'};
// 장면 소품 (단순 SVG, 로고·번호표 없음)
const F='fill="none" stroke="#1f2a24" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"';
const fish=(x,y,c='#c98a4a',w=34)=>`<rect x="${x}" y="${y}" width="${w}" height="12" rx="5" fill="${c}" stroke="#1f2a24" stroke-width="2.5"/>`;
const flame=(x)=>`<path d="M${x},62 q-7,-9 0,-20 q7,11 0,20z" fill="#e8873a" stroke="#1f2a24" stroke-width="2"/>`;
const grill=`<rect x="14" y="30" width="92" height="22" rx="3" ${F}/><path d="M30,30v22M46,30v22M62,30v22M78,30v22M94,30v22" stroke="#1f2a24" stroke-width="1.5"/>`;
const plate=`<ellipse cx="60" cy="44" rx="50" ry="24" fill="#fff" stroke="#1f2a24" stroke-width="3"/><ellipse cx="60" cy="44" rx="36" ry="15" fill="none" stroke="#ddd" stroke-width="2"/>`;
const PROP={
 note:`<rect x="20" y="8" width="80" height="62" rx="4" fill="#fff" ${F}/><text x="60" y="34" text-anchor="middle" font-family="Gaegu" font-weight="700" font-size="15" fill="#1f2a24">북어구이 20분</text><text x="60" y="54" text-anchor="middle" font-family="Gaegu" font-weight="700" font-size="11" fill="#b6533a">세로로 자르면 안 됨</text>`,
 cap:`<path d="M28,50 Q30,18 62,18 Q92,18 92,50Z" fill="#4f8a5b" stroke="#1f2a24" stroke-width="3"/><path d="M88,50 L112,56 L88,58Z" fill="#3f7049" stroke="#1f2a24" stroke-width="3"/><text x="60" y="74" text-anchor="middle" font-size="10" fill="#555">녹색 볼캡</text>`,
 greenhat:`<path d="M24,52 Q22,16 60,14 Q98,16 96,52 Q60,44 24,52Z" fill="#4f8a5b" stroke="#1f2a24" stroke-width="3"/><text x="60" y="72" text-anchor="middle" font-size="10" fill="#555">녹색 위생모</text>`,
 nametag:`<rect x="26" y="20" width="68" height="32" rx="5" fill="#b39c6d" stroke="#1f2a24" stroke-width="3"/><text x="60" y="43" text-anchor="middle" font-family="Gaegu" font-weight="700" font-size="20" fill="#1f2a24">조피</text><text x="60" y="70" text-anchor="middle" font-size="10" fill="#555">가슴에 붙은 금색 명찰</text>`,
 fulldress:`<text x="60" y="22" text-anchor="middle" font-size="11" fill="#1f2a24">흰 위생모 · 흰 위생복</text><text x="60" y="40" text-anchor="middle" font-size="11" fill="#1f2a24">흰 앞치마 · 마스크</text><text x="60" y="58" text-anchor="middle" font-size="11" fill="#1f2a24">긴바지 · 작업화</text><text x="60" y="74" text-anchor="middle" font-size="10" fill="#555">손목엔 아무것도 없음</text>`,
 timer:`<circle cx="60" cy="40" r="28" fill="#fff" ${F}/><text x="60" y="47" text-anchor="middle" font-size="17" font-weight="700" fill="#1f2a24">20:00</text>`,
 syrup:`<path d="M48,22h24v8l6,8v32h-36v-32l6,-8z" fill="#f4d58d" stroke="#1f2a24" stroke-width="3"/><text x="60" y="58" text-anchor="middle" font-family="Gaegu" font-weight="700" font-size="16" fill="#1f2a24">물엿</text>`,
 grill1:grill+fish(20,24)+fish(58,24)+fish(40,10)+flame(60),
 grill2:grill+fish(20,24)+fish(58,24)+fish(40,10)+flame(40)+flame(84),
 taste:`<ellipse cx="46" cy="52" rx="30" ry="12" fill="#c0392b" stroke="#1f2a24" stroke-width="3"/><path d="M84,16 L70,46" stroke="#1f2a24" stroke-width="9" stroke-linecap="round"/><path d="M84,16 L70,46" stroke="#f3dcc0" stroke-width="5" stroke-linecap="round"/>`,
 pan:`<circle cx="52" cy="42" r="28" fill="#555" stroke="#1f2a24" stroke-width="3"/><path d="M80,42h32" stroke="#1f2a24" stroke-width="7" stroke-linecap="round"/>`+fish(30,30)+fish(42,44),
 burnt:grill+fish(20,24)+fish(58,24,'#2b2b2b')+`<path d="M70,18 q-6,-6 0,-12 M80,18 q-6,-6 0,-12" ${F} stroke="#888"/>`,
 split:plate+fish(22,32)+fish(58,32)+fish(40,50,'#c98a4a',34).replace('height="12"','height="6"')+fish(40,58,'#c98a4a',34).replace('height="12"','height="6"'),
 three:plate+fish(26,32,'#b7552e')+fish(62,32,'#b7552e')+fish(44,48,'#b7552e'),
 messy:plate+fish(26,32,'#b7552e')+fish(62,32,'#b7552e')+fish(44,48,'#b7552e')+`<path d="M16,40 q4,8 10,6 q-2,6 4,10" stroke="#c0392b" stroke-width="5" fill="none" stroke-linecap="round"/><circle cx="92" cy="52" r="3.5" fill="#222"/>`
};
let i=0,q=[],rec={},timer=null,t0=0,remain=1200,used=null,started=0,maskOn=false;

function show(id){document.querySelectorAll('.screen').forEach(e=>e.classList.toggle('on',e.id===id))}
function setChar(who,expr){
  const z=$('#zopi'),t=$('#teacher');
  if(who==='z'){let k=expr||'neutral'; if(maskOn&&k==='neutral')k='mask'; z.src='img/'+ZIMG[k]+'.png';}
  if(who==='t'&&expr) t.src='img/'+TIMG[expr]+'.png';
  z.classList.toggle('dim',who==='t'); t.classList.toggle('dim',who==='z');
  if(who==='n'){z.classList.remove('dim');t.classList.remove('dim')}
}
function say(it){
  const [who,text,expr,lab]=it;
  $('#who').textContent=NAME[who]||''; $('#who').className='who '+who;
  const tg=$('#tag'); if(lab){tg.textContent=LAB[lab]||lab;tg.className='tag'+(lab==='sys'?' sys':'');} else tg.className='tag hide';
  if(who==='s'){$('#who').textContent='';tg.textContent=it[3];tg.className='tag sys';}
  $('#line').textContent=text; setChar(who,expr);
}
function btns(list){const a=$('#actions');a.innerHTML='';list.forEach(([label,cls,fn])=>{const b=document.createElement('button');b.className='btn '+cls;b.textContent=label;b.onclick=fn;a.appendChild(b)})}
function next(){ if(!q.length) return; const it=q.shift(); if(typeof it==='function') return it(); say(it); btns([['다음 ▸','',next]]); }
function srcBox(ids,link){
  const el=$('#src');
  const li=ids.map(id=>{const s=SRC[id];if(!s)return'';return `<li>${s.t}${s.k!=='off'?`<span class="lab">${KLAB[s.k]}</span>`:''}</li>`}).join('');
  el.innerHTML=`<details><summary>출처 보기</summary><ul style="margin:4px 0;padding-left:16px">${li}</ul>${link?`<a href="${link.u}" target="_blank" rel="noopener">${link.t} ↗</a>`:''}</details>`;
  el.classList.remove('hide');
}
function fmt(s){s=Math.max(0,Math.round(s));return String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0')}
function startTimer(){ if(timer)return; $('#timer').classList.remove('hide'); t0=Date.now();
  timer=setInterval(()=>{const r=remain-(Date.now()-t0)/1000;$('#clock').textContent=r<=0?'00:00':fmt(r);$('#timer').classList.toggle('low',r<300);if(r<=0)stopTimer()},250)}
function stopTimer(){ if(!timer)return; clearInterval(timer);timer=null; used=Math.min(remain,(Date.now()-t0)/1000)}

function scene(){
  const s=S[i]; if(!s) return finish();
  $('#part').textContent=s.step?`조리 ${s.step}/8 · ${s.title}`:`${s.part} · ${s.title}`;
  $('#prop').innerHTML=s.prop&&PROP[s.prop]?`<svg viewBox="0 0 120 80">${PROP[s.prop]}</svg>`:'';
  $('#stage').classList.toggle('dim',!!s.bgDim);
  $('#screenText').innerHTML='<b>화면</b> · '+(s.intro?s.intro+' ':'')+s.screen;
  $('#src').classList.add('hide'); $('#check').classList.add('hide');
  if(s.mask) maskOn=true;
  if(s.startTimer) startTimer();
  if(s.type==='check') renderCheck(s);
  q=[];
  if(s.type==='talk'){ q.push(...s.lines, ()=>{srcBox(s.src);btns([['다음 장면 ▸','main',go]])}); }
  else { q.push(...s.setup, ()=>judgeButtons(s)); }
  next();
}
function renderCheck(s){
  const c=$('#check'); c.innerHTML=''; c.classList.remove('hide');
  s.items.forEach(([name,has])=>{
    if(!has && s.kind==='tools') return; // 석쇠는 가방에서 나오지 않음
    const b=document.createElement('button');
    if(!has){b.className='chip empty';b.textContent='(빈 자리)';}
    else{b.className='chip';b.textContent=name;b.onclick=()=>{b.classList.toggle('on');upd()}}
    c.appendChild(b)});
  const p=document.createElement('div');p.className='hint';p.textContent=s.hint;c.appendChild(p);
  const g=document.createElement('div');g.className='prog';c.appendChild(g);
  function upd(){const on=c.querySelectorAll('.chip.on').length,all=c.querySelectorAll('.chip:not(.empty)').length;g.textContent=`확인 ${on}/${all}`}
  upd();
}
function judgeButtons(s){
  $('#line').textContent=$('#line').textContent; // 마지막 대사 유지
  btns([['이의 있음!','obj',()=>judge(s,true)],['괜찮아요','ok',()=>judge(s,false)]]);
}
function judge(s,obj){
  const right=(obj===s.fix); rec[s.id]={right,fix:s.fix};
  $('#check').querySelectorAll('.chip').forEach(b=>b.onclick=null);
  q=[];
  if(s.fix&&obj) q.push(['t','맞아요, 거기!','show']);
  else if(s.fix&&!obj) q.push(['s','이 장면엔 고칠 점이 있었어요. 같이 봐요.',null,'놓친 장면']);
  else if(!s.fix&&obj) q.push(['s','이번 장면은 괜찮았어요. 선생님 얘기 들어 봐요.',null,'이번엔 괜찮은 장면']);
  q.push(...s.explain);
  q.push(()=>{srcBox(s.src,s.link);
    if(s.retry){ btns([['다시 해 보기','retry',()=>{ if(s.stopTimer)stopTimer(); say(['n',s.retry]); setChar('z','happy'); afterLines(s)}]]); }
    else { if(s.stopTimer)stopTimer(); afterLines(s); }
  });
  next();
}
function afterLines(s){
  const rest=(s.after||[]).slice();
  const done=()=>btns([[i===S.length-1?'선생님 피드백 받기 ▸':'다음 장면 ▸','main',go]]);
  if(!rest.length){ if(s.retry) done(); else done(); return; }
  q=[...rest,done];
  if(s.retry) btns([['다음 ▸','',next]]); else next();
}
function go(){ i++; scene(); }
function finish(){
  stopTimer(); show('result'); $('#timer').classList.add('hide');
  const missed=S.filter(s=>rec[s.id]&&!rec[s.id].right), caught=S.filter(s=>rec[s.id]&&rec[s.id].right);
  const totalMin=((Date.now()-started)/60000);
  const li=a=>a.map(x=>`<li>${x}</li>`).join('');
  const miss=missed.map(s=>`<details><summary>${s.id==='S8b'?'S8-다시':s.id}. ${s.title}</summary>${s.explain.map(e=>`<p>${e[1].replace(/\n/g,'<br>')}${e[3]?` <span class="lab">${LAB[e[3]]}</span>`:''}</p>`).join('')}<p class="small">출처: ${s.src.map(id=>SRC[id].t+(SRC[id].k!=='off'?' ('+KLAB[SRC[id].k]+')':'')).join(' / ')}</p></details>`).join('');
  $('#result').innerHTML=`
   <p class="kicker">학원식 실기연습 · 북어구이</p><h2>솔솔 쌤 피드백</h2>
   <div class="say"><img src="img/hansogeum_show.png" alt=""><p>${FB.intro}</p></div>
   <div class="fb good"><h3>잘한 점</h3><ul>${li(FB.good)}</ul></div>
   <div class="fb fix"><h3>고칠 점</h3><ul>${li(FB.fix)}</ul></div>
   <div class="fb"><h3>체크 눈이 같이 본 장면</h3>
     ${caught.length?`<p style="margin:0 0 6px;font-size:14px">잘 짚은 장면: ${caught.map(s=>s.title).join(', ')}</p>`:''}
     ${missed.length?`<p style="margin:6px 0 2px;font-size:14px"><b>놓친 장면 다시 보기</b> (눌러서 펼치기)</p>${miss}`:'<p style="margin:0;font-size:14px">놓친 장면 없이 같이 봤어요.</p>'}
     <p class="small" style="margin-top:6px">연습용 타이머: 20분 중 ${fmt(used||0)} 사용</p></div>
   <div class="say"><img src="img/zopi_cook_happy.png" alt=""><p>${FB.zopi}</p></div>
   <div class="say"><img src="img/hansogeum_smile.png" alt=""><p>${FB.teacher}</p></div>
   <div class="closing">${FB.closing}</div>
   <p class="update">품목은 계속 업데이트됩니다.</p>
   <p class="small">${FB.small}</p>
   <button class="btn main" id="again">처음부터 다시 연습하기</button>`;
  $('#again').onclick=()=>location.reload();
  window.__playMinutes=totalMin;
}
$('#go').onclick=()=>{ started=Date.now(); show('play'); i=0; scene(); };
$('#box').onclick=()=>{ const a=$('#actions .btn'); if(a&&a.textContent==='다음 ▸') next(); };
window.__debug={get i(){return i},rec};
})();
