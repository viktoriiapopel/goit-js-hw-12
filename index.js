import{a as f,S as m,i as n}from"./assets/vendor-5YrzWRhu.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))i(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function s(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(t){if(t.ep)return;t.ep=!0;const r=s(t);fetch(t.href,r)}})();const y="51801450-0916bf82cabb3a5bfe1ad6ca6",g="https://pixabay.com/api/";async function h(a){try{const e=await f.get(g,{params:{key:y,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}});return!e.data||!e.data.hits?{hits:[]}:e.data}catch(e){throw console.error("Помилка при отриманні зображень:",e),e}}const c=document.querySelector(".gallery"),l=document.querySelector(".loader"),v=new m(".gallery a",{captionsData:"alt",captionDelay:250});function L(){c.innerHTML=""}function b(a){const e=a.map(({largeImageURL:s,webformatURL:i,tags:t,likes:r,views:o,comments:p,downloads:u})=>`
        <a class="gallery__link" href="${s}">
          <img class="gallery__image" src="${i}" alt="${t}" loading="lazy" />
          <div class="info">
            <div class="info-item">
              <span>Likes</span>
              <p>${r}</p>
            </div>
            <div class="info-item">
              <span>Views</span>
              <p>${o}</p>
            </div>
            <div class="info-item">
              <span>Comments</span>
              <p>${p}</p>
            </div>
            <div class="info-item">
              <span>Downloads</span>
              <p>${u}</p>
            </div>
          </div>
        </a>
      `).join("");c.insertAdjacentHTML("beforeend",e),v.refresh()}function w(){l.classList.remove("hidden")}function S(){l.classList.add("hidden")}const d=document.querySelector(".form"),E=d.querySelector('input[name="search-text"]');async function q(a){L(),w();try{const e=await h(a);if(e.hits.length===0){n.warning({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}b(e.hits)}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{S()}}d.addEventListener("submit",a=>{a.preventDefault();const e=E.value.trim();if(!e){n.warning({title:"Oops",message:"Please enter a search term!",position:"topRight"});return}q(e)});
//# sourceMappingURL=index.js.map
