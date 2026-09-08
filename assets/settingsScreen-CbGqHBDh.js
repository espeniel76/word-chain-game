const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/index-BVK9jDO4.js","assets/index-DDcLJi5_.css"])))=>i.map(i=>d[i]);
import{_ as a}from"./index-BVK9jDO4.js";function i(t,s){const o=s.store.loadSettings(),n=(e,c)=>`<label class="row"><span>${c}</span>
    <input type="checkbox" data-k="${e}" ${o[e]?"checked":""} /></label>`;t.innerHTML=`<div class="screen">
    <header class="bar"><button id="back" class="btn ghost">←</button><b>설정</b></header>
    <div class="settings">
      ${n("duen","두음법칙 허용 (력→역)")}
      ${n("sound","효과음")}
      ${n("vibrate","진동")}
    </div>
  </div>`,t.querySelectorAll("input[type=checkbox]").forEach(e=>{e.onchange=()=>s.store.saveSettings({[e.dataset.k]:e.checked})}),t.querySelector("#back").onclick=()=>a(()=>import("./index-BVK9jDO4.js").then(e=>e.t),__vite__mapDeps([0,1])).then(e=>s.go(e.titleScreen))}export{i as settingsScreen};
