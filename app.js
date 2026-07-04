/* =========================================================
   صدقة جارية لروح مصطفى أبو الدهب — رحمه الله
   HTML/CSS/JS خالص، بدون أي مكتبات، ليبقى يعمل للأبد.
   نص القرآن يُجلب من AlQuran Cloud (رواية حفص/عثماني)
   ويُخزّن محليًا ليعمل حتى بدون إنترنت بعد أول فتح.
   ========================================================= */

/* ----------- بيانات الأدعية ----------- */
const DUAA = [
  "اللَّهُمَّ اغْفِرْ لَهُ وَارْحَمْهُ، وَعَافِهِ وَاعْفُ عَنْهُ، وَأَكْرِمْ نُزُلَهُ، وَوَسِّعْ مُدْخَلَهُ، وَاغْسِلْهُ بِالْمَاءِ وَالثَّلْجِ وَالْبَرَدِ، وَنَقِّهِ مِنَ الْخَطَايَا كَمَا نَقَّيْتَ الثَّوْبَ الْأَبْيَضَ مِنَ الدَّنَسِ.",
  "اللَّهُمَّ أَبْدِلْهُ دَارًا خَيْرًا مِنْ دَارِهِ، وَأَهْلًا خَيْرًا مِنْ أَهْلِهِ، وَأَدْخِلْهُ الْجَنَّةَ، وَأَعِذْهُ مِنْ عَذَابِ الْقَبْرِ وَمِنْ عَذَابِ النَّارِ.",
  "اللَّهُمَّ اغْفِرْ لِحَيِّنَا وَمَيِّتِنَا، وَشَاهِدِنَا وَغَائِبِنَا، وَصَغِيرِنَا وَكَبِيرِنَا، وَذَكَرِنَا وَأُنْثَانَا، وَمَنْ تَوَفَّيْتَهُ مِنَّا فَتَوَفَّهُ عَلَى الْإِيمَانِ.",
  "اللَّهُمَّ اجْعَلْ قَبْرَهُ رَوْضَةً مِنْ رِيَاضِ الْجَنَّةِ، وَلَا تَجْعَلْهُ حُفْرَةً مِنْ حُفَرِ النِّيرَانِ.",
  "اللَّهُمَّ نَوِّرْ لَهُ فِي قَبْرِهِ، وَوَسِّعْ لَهُ فِيهِ، وَآنِسْ وَحْشَتَهُ، وَاجْعَلِ الْقُرْآنَ رَبِيعَ قَلْبِهِ.",
  "اللَّهُمَّ ثَبِّتْهُ عِنْدَ السُّؤَالِ، وَلَقِّنْهُ حُجَّتَهُ، وَاجْعَلْ مُنْقَلَبَهُ إِلَى رِضْوَانِكَ وَجَنَّتِكَ.",
  "اللَّهُمَّ إِنْ كَانَ مُحْسِنًا فَزِدْ فِي إِحْسَانِهِ، وَإِنْ كَانَ مُسِيئًا فَتَجَاوَزْ عَنْهُ يَا كَرِيمُ.",
  "اللَّهُمَّ إِنَّهُ فِي ذِمَّتِكَ وَحَبْلِ جِوَارِكَ، فَقِهِ فِتْنَةَ الْقَبْرِ وَعَذَابَ النَّارِ، وَأَنْتَ أَهْلُ الْوَفَاءِ وَالْحَقِّ، فَاغْفِرْ لَهُ وَارْحَمْهُ.",
  "اللَّهُمَّ عَامِلْهُ بِمَا أَنْتَ أَهْلُهُ، وَلَا تُعَامِلْهُ بِمَا هُوَ أَهْلُهُ، وَارْفَعْ دَرَجَتَهُ فِي عِلِّيِّينَ.",
  "اللَّهُمَّ لَا تَحْرِمْنَا أَجْرَهُ، وَلَا تَفْتِنَّا بَعْدَهُ، وَاغْفِرْ لَنَا وَلَهُ.",
  "رَبَّنَا اغْفِرْ لَنَا وَلِإِخْوَانِنَا الَّذِينَ سَبَقُونَا بِالْإِيمَانِ وَلَا تَجْعَلْ فِي قُلُوبِنَا غِلًّا لِلَّذِينَ آمَنُوا رَبَّنَا إِنَّكَ رَؤُوفٌ رَحِيمٌ.",
  "اللَّهُمَّ اجْعَلْ كُلَّ حَرْفٍ يُقْرَأُ هُنَا فِي مِيزَانِ حَسَنَاتِهِ، وَاجْعَلْهُ نُورًا لَهُ فِي قَبْرِهِ وَيَوْمَ يَلْقَاكَ. آمِين."
];

/* ----------- بيانات الأذكار (مع الهدف من التكرار) ----------- */
const AZKAR = [
  { text:"سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", target:100 },
  { text:"سُبْحَانَ اللَّهِ الْعَظِيمِ", target:33 },
  { text:"أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ وَأَتُوبُ إِلَيْهِ", target:100 },
  { text:"لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ", target:10 },
  { text:"اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", target:100 },
  { text:"لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللَّهِ", target:33 },
  { text:"سُبْحَانَ اللَّهِ، وَالْحَمْدُ لِلَّهِ، وَلَا إِلَهَ إِلَّا اللَّهُ، وَاللَّهُ أَكْبَرُ", target:33 },
  { text:"لَا إِلَهَ إِلَّا اللَّهُ", target:100 }
];

/* ----------- أدوات مساعدة ----------- */
const $ = (s, r=document) => r.querySelector(s);
const AR_DIGITS = ["٠","١","٢","٣","٤","٥","٦","٧","٨","٩"];
const toAr = n => String(n).replace(/[0-9]/g, d => AR_DIGITS[+d]);

function toast(msg){
  const t = $("#toast");
  t.textContent = msg; t.hidden = false;
  requestAnimationFrame(()=>t.classList.add("show"));
  clearTimeout(t._t);
  t._t = setTimeout(()=>{ t.classList.remove("show"); setTimeout(()=>t.hidden=true,300); }, 2200);
}

/* =========================================================
   إدارة العرض (Views)
   ========================================================= */
const views = {
  home:  $("#view-home"),
  duaa:  $("#view-duaa"),
  azkar: $("#view-azkar"),
  surah: $("#view-surah"),
};
const titles = { home:"صدقة جارية", duaa:"أدعية للمتوفّى", azkar:"الأذكار", surah:"القرآن الكريم" };
let current = "home";

function show(name, opts={}){
  Object.values(views).forEach(v => v.classList.remove("is-active"));
  views[name].classList.add("is-active");
  current = name;
  $("#backBtn").hidden = (name === "home");
  $("#brandTitle").textContent = titles[name] || "صدقة جارية";
  window.scrollTo({ top:0, behavior:"instant" in window ? "instant" : "auto" });

  if (name === "duaa")  initDuaa();
  if (name === "azkar") initAzkar();
  if (name === "surah") loadSurah(opts.surah);

  // تحديث الهاش لدعم زر الرجوع في المتصفح
  const hash = name === "surah" ? `#surah-${opts.surah}` : `#${name}`;
  if (location.hash !== hash) history.pushState({name,...opts}, "", name==="home" ? "#" : hash);
}

$("#backBtn").addEventListener("click", () => history.length > 1 ? history.back() : show("home"));
document.querySelectorAll("[data-go]").forEach(btn => {
  btn.addEventListener("click", () => {
    const go = btn.dataset.go;
    if (go === "surah") show("surah", { surah:+btn.dataset.surah });
    else show(go);
  });
});
window.addEventListener("popstate", (e) => {
  const st = e.state;
  if (!st || st.name === "home") { showSilent("home"); }
  else if (st.name === "surah")  { showSilent("surah", st); }
  else showSilent(st.name);
});
function showSilent(name, opts={}){
  Object.values(views).forEach(v => v.classList.remove("is-active"));
  views[name].classList.add("is-active");
  current = name;
  $("#backBtn").hidden = (name === "home");
  $("#brandTitle").textContent = titles[name] || "صدقة جارية";
  if (name === "duaa")  initDuaa();
  if (name === "azkar") initAzkar();
  if (name === "surah") loadSurah(opts.surah);
}

/* =========================================================
   الأدعية
   ========================================================= */
let dIndex = 0, dReady = false;
function initDuaa(){
  if (!dReady){
    const dots = $("#duaaDots");
    dots.innerHTML = DUAA.map(()=>'<span class="dot"></span>').join("");
    $("#duaaPrev").addEventListener("click", ()=>moveDuaa(-1));
    $("#duaaNext").addEventListener("click", ()=>{
      if (dIndex === DUAA.length-1){ dIndex = 0; renderDuaa(1); }  // العودة للبداية
      else moveDuaa(1);
    });
    document.addEventListener("keydown", (e)=>{
      if (current!=="duaa") return;
      if (e.key==="ArrowLeft") moveDuaa(1);
      if (e.key==="ArrowRight") moveDuaa(-1);
    });
    addSwipe($("#duaaCard"), dir => moveDuaa(dir==="left" ? 1 : -1));
    dReady = true;
  }
  renderDuaa();
}
function moveDuaa(step){
  const next = dIndex + step;
  if (next < 0 || next >= DUAA.length) return;
  dIndex = next; renderDuaa(step);
}
function renderDuaa(step=0){
  const card = $("#duaaCard"), txt = $("#duaaText");
  const paint = () => {
    txt.textContent = DUAA[dIndex];
    $("#duaaCount").textContent = `${toAr(dIndex+1)} ⁄ ${toAr(DUAA.length)}`;
    $("#duaaPrev").disabled = dIndex === 0;
    $("#duaaNext").textContent = dIndex === DUAA.length-1 ? "من البداية ↺" : "التالي ›";
    $$dots(dIndex);
    $("#duaaHint").textContent = dIndex === DUAA.length-1
      ? "تقبّل الله منك — كرّر الدعاء أو ابدأ من جديد."
      : "اقرأ الدعاء بقلبك ثم اضغط «التالي»";
  };
  if (step !== 0){
    card.style.opacity = 0;
    card.style.transform = `translateX(${step>0?-14:14}px)`;
    setTimeout(()=>{ paint(); card.style.opacity=1; card.style.transform="none"; }, 150);
  } else paint();
}
function $$dots(i){
  const dots = $("#duaaDots").children;
  for (let k=0;k<dots.length;k++) dots[k].classList.toggle("on", k===i);
}
$("#duaaCard") && ($("#duaaCard").style.transition = "opacity .15s ease, transform .15s ease");

/* =========================================================
   الأذكار (عدّاد دائري باللمس)
   ========================================================= */
let azkarReady = false;
function initAzkar(){
  if (azkarReady) return;
  const list = $("#azkarList");
  list.innerHTML = "";
  AZKAR.forEach((z, i) => {
    const R = 46, C = 2 * Math.PI * R;
    const el = document.createElement("div");
    el.className = "zikr";
    el.innerHTML = `
      <p class="zikr-text">${z.text}</p>
      <button class="counter" aria-label="اضغط للتسبيح">
        <svg viewBox="0 0 104 104">
          <circle class="ring-bg" cx="52" cy="52" r="${R}" fill="none" stroke-width="6"/>
          <circle class="ring-fg" cx="52" cy="52" r="${R}" fill="none" stroke-width="6"
                  stroke-linecap="round" stroke-dasharray="${C}" stroke-dashoffset="${C}"/>
        </svg>
        <span class="num">٠</span>
        <span class="target">/ ${toAr(z.target)}</span>
      </button>
      <div class="zikr-check">&nbsp;</div>`;
    const btn = el.querySelector(".counter");
    const ring = el.querySelector(".ring-fg");
    const num = el.querySelector(".num");
    const check = el.querySelector(".zikr-check");
    let count = 0;
    btn.addEventListener("click", () => {
      count++;
      num.textContent = toAr(count);
      ring.style.strokeDashoffset = C * (1 - Math.min(count / z.target, 1));
      if (navigator.vibrate) navigator.vibrate(12);
      if (count === z.target){ el.classList.add("done"); check.textContent = "تمّ — تقبّل الله 🤍"; }
      if (count > z.target && count % z.target === 0){ if (navigator.vibrate) navigator.vibrate([12,40,12]); }
    });
    list.appendChild(el);
  });
  azkarReady = true;
}

/* =========================================================
   السور (جلب + تخزين محلي)
   ========================================================= */
const API = num => `https://api.alquran.cloud/v1/surah/${num}/quran-uthmani`;
const surahMeta = {
  1:{ ar:"سورة الفاتحة", count:7,   bism:false },
  2:{ ar:"سورة البقرة",  count:286, bism:true  },
  36:{ ar:"سورة يس",     count:83,  bism:true  },
};
const surahCache = {}; // في الذاكرة أثناء الجلسة

// إزالة البسملة من أول آية (لأنها تُعرض كترويسة مستقلة)
function stripBismillah(text){
  const clean = s => s
    .replace(/[ً-ْٰۖ-ۭ࣓-ࣿٓ-ٟ]/g, "")
    .replace(/[ٱ-ٳٵ]/g, "ا")
    .replace(/\s+/g, " ").trim();
  const target = "بسم الله الرحمن الرحيم";
  for (let i = 1; i <= text.length; i++){
    if (clean(text.slice(0, i)) === target){
      // إزالة أي حركات أو مسافات شاردة بعد نقطة القطع
      return text.slice(i).replace(/^[ً-ٰٟۖ-ۭ࣓-ࣿ\s]+/, "").trim();
    }
  }
  return text;
}

async function fetchSurah(num){
  if (surahCache[num]) return surahCache[num];
  const ls = localStorage.getItem("surah_"+num);
  if (ls){ try { surahCache[num] = JSON.parse(ls); return surahCache[num]; } catch(e){} }
  const res = await fetch(API(num));
  if (!res.ok) throw new Error("network");
  const data = await res.json();
  const ayahs = data.data.ayahs.map(a => ({ n:a.numberInSurah, t:a.text.replace(/[﻿​-‏]/g,"").trim() }));
  surahCache[num] = ayahs;
  try { localStorage.setItem("surah_"+num, JSON.stringify(ayahs)); } catch(e){}
  return ayahs;
}

async function loadSurah(num){
  const meta = surahMeta[num] || { ar:"سورة", count:"", bism:true };
  $("#surahName").textContent = meta.ar;
  $("#surahMeta").textContent = `${toAr(meta.count)} آية`;
  $("#bismillah").style.display = meta.bism ? "block" : "none";
  const body = $("#surahBody");
  body.innerHTML = `<div class="loader"><div class="spinner"></div><p>يُحمّل النص الكريم…</p></div>`;

  try {
    const ayahs = await fetchSurah(num);
    let html = "";
    ayahs.forEach((a, idx) => {
      let t = a.t;
      if (meta.bism && idx === 0) t = stripBismillah(t);
      if (t) html += `<span class="ayah">${t} <span class="ayah-num">${toAr(a.n)}</span> </span>`;
    });
    body.innerHTML = html;
  } catch (err) {
    body.innerHTML = `
      <div class="error-box">
        <p>تعذّر تحميل السورة — تأكد من اتصال الإنترنت في أول مرة.</p>
        <button class="btn btn-primary" id="retry">إعادة المحاولة</button>
      </div>`;
    $("#retry").addEventListener("click", ()=>loadSurah(num));
  }
}

/* زر أعلى الصفحة داخل قسم السور */
const toTop = $("#toTop");
window.addEventListener("scroll", () => {
  if (current === "surah" && window.scrollY > 600) toTop.hidden = false;
  else toTop.hidden = true;
});
toTop.addEventListener("click", ()=>window.scrollTo({top:0,behavior:"smooth"}));

/* =========================================================
   السحب باللمس (Swipe)
   ========================================================= */
function addSwipe(el, cb){
  let x0=null, y0=null;
  el.addEventListener("touchstart", e => { x0=e.touches[0].clientX; y0=e.touches[0].clientY; }, {passive:true});
  el.addEventListener("touchend", e => {
    if (x0===null) return;
    const dx = e.changedTouches[0].clientX - x0;
    const dy = e.changedTouches[0].clientY - y0;
    if (Math.abs(dx) > 55 && Math.abs(dx) > Math.abs(dy)){
      // في RTL: السحب لليسار = التالي
      cb(dx < 0 ? "left" : "right");
    }
    x0=y0=null;
  }, {passive:true});
}

/* =========================================================
   الثيم (ليلي/نهاري)
   ========================================================= */
const themeBtn = $("#themeBtn");
function applyTheme(t){ document.documentElement.setAttribute("data-theme", t); localStorage.setItem("theme", t); }
(function initTheme(){
  const saved = localStorage.getItem("theme");
  if (saved) applyTheme(saved);
  else if (window.matchMedia && matchMedia("(prefers-color-scheme: dark)").matches) applyTheme("dark");
})();
themeBtn.addEventListener("click", () => {
  const now = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(now);
});

/* =========================================================
   المشاركة (نشر الصدقة)
   ========================================================= */
$("#shareBtn").addEventListener("click", async () => {
  const shareData = {
    title: "صدقة جارية لروح مصطفى أبو الدهب",
    text: "اقرأ دعاءً أو ذكرًا أو سورة، واجعل ثوابها صدقة جارية لروح المرحوم مصطفى أبو الدهب. رحمه الله 🤍",
    url: location.href.split("#")[0]
  };
  try {
    if (navigator.share) await navigator.share(shareData);
    else { await navigator.clipboard.writeText(shareData.url); toast("تم نسخ اللينك — انشره تكسب أجره"); }
  } catch(e){ /* أُلغيت المشاركة */ }
});

/* =========================================================
   البدء من الهاش (deep-link)
   ========================================================= */
(function boot(){
  const h = location.hash;
  const m = h.match(/^#surah-(\d+)/);
  if (m) show("surah", { surah:+m[1] });
  else if (h === "#duaa")  show("duaa");
  else if (h === "#azkar") show("azkar");
  // غير ذلك: الصفحة الرئيسية (الوضع الافتراضي)
})();
