(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();const c=document.querySelector("form"),a=document.querySelectorAll('input[type="radio"]');a.forEach(r=>{r.addEventListener("click",o=>{const i=c.querySelectorAll("div"),s=r.parentElement.querySelector("label");i.forEach(e=>{e.classList.remove("bg-primary"),e.classList.add("hover:bg-mediumGrey/80","hover:text-white"),e.querySelector("label").classList.remove("text-white")}),r.parentElement.classList.add("bg-primary"),r.parentElement.classList.remove("hover:bg-mediumGrey/80","hover:text-white"),s.classList.remove("text-inherit"),s.classList.add("text-white")})});c.addEventListener("submit",r=>{r.preventDefault();const o=c.querySelector('input[type="radio"]:checked').value;l(o)});function l(r){const o=document.getElementById("feedback");o.innerHTML=`
    <h2 class="sr-only">Feedback</h2>
    <section
    class="px-6 py-9 md:py-11 rounded-2xl bg-gradient-to-b from-darkBlue/100 to-darkBlue/50 shadow-md flex flex-col items-center text-center"
  >
    <img src="./images/illustration-thank-you.svg" alt="" />
    <output
      class="bg-mediumGrey/10 py-2 px-4 mt-6 mb-9 rounded-3xl text-primary"
      id="rating-output"
      >You selected ${r} out of 5</output
    >
    <strong class="text-white text-2xl mb-4">Thank You!</strong>
    <p class="text-mediumGrey text-base">
      We appreciate you taking the time to give a rating. If you ever need
      more support, don't hesitate to get in touch!
    </p>
  </section>
  `}
