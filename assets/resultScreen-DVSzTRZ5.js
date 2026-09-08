const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/chatScreen-BYHVQqAp.js","assets/index-BVK9jDO4.js","assets/index-DDcLJi5_.css","assets/difficultyScreen-BrySVx6q.js"])))=>i.map(i=>d[i]);
import{a as E,l as a,x as f,M as T,_ as i,b as x}from"./index-BVK9jDO4.js";import{D as $}from"./difficultyScreen-BrySVx6q.js";const m={levelup:t=>`🎊 레벨 ${t.level} 달성!`,promoted:t=>`${a(t.level).badge} ${a(t.level).name} 승급!`,leveldown:t=>`레벨 ${t.level} 로 하락`,shielded:()=>"⚠️ 강등 위기 — 다음에 지면 리그가 내려갑니다",demoted:t=>`💧 ${a(t.level).name} 로 강등`};function L(t,s,{difficulty:l,win:o,turns:_}){const c=s.store.loadProgress(),e=E(c,x(l,o));s.store.saveProfile(e),o&&s.store.unlockDifficulty(l+1);const b=o&&l===3&&c.unlockedDifficulty<4,d=o&&l+1<$.length,v=a(e.level),r=f(e.level),g=r?Math.min(100,Math.round(e.xp/r*100)):100,p=e.level>=T,h=p&&e.gained===0?"최고 레벨 도달":`${e.gained>0?"+":""}${e.gained} XP`,u=m[e.event]?m[e.event](e):"";t.innerHTML=`<div class="screen center">
    <h1>${o?"🎉 승리!":"😵 패배"}</h1>
    <p class="sub">${$[l].name} · ${_}단어 이음</p>
    <p class="xpgain">${h}</p>
    <div class="profile">
      <span class="badge">${v.badge}</span>
      <span class="lvtext">${v.name} · Lv.${e.level}</span>
      <div class="xpbar"><i id="fill"></i></div>
      <span class="xpnum">${p?"만렙":`${e.xp} / ${r}`}</span>
    </div>
    ${u?`<p class="event ${e.event}">${u}</p>`:""}
    ${b?'<p class="unlock">🔓 멀티플레이가 열렸어요!</p>':""}
    ${d?'<button class="btn primary" id="next">다음 난이도</button>':""}
    <button class="btn" id="retry">다시하기</button>
    <button class="btn ghost" id="list">난이도 선택</button>
  </div>`,requestAnimationFrame(()=>{const n=t.querySelector("#fill");n&&(n.style.width=`${g}%`)}),(e.event==="promoted"||e.event==="levelup")&&s.audio.play("win"),d&&(t.querySelector("#next").onclick=()=>i(()=>import("./chatScreen-BYHVQqAp.js"),__vite__mapDeps([0,1,2,3])).then(n=>s.go(n.chatScreen,{difficulty:l+1}))),t.querySelector("#retry").onclick=()=>i(()=>import("./chatScreen-BYHVQqAp.js"),__vite__mapDeps([0,1,2,3])).then(n=>s.go(n.chatScreen,{difficulty:l})),t.querySelector("#list").onclick=()=>i(()=>import("./difficultyScreen-BrySVx6q.js").then(n=>n.d),__vite__mapDeps([3,1,2])).then(n=>s.go(n.difficultyScreen))}export{L as resultScreen};
