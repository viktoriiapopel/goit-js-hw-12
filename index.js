import{a as P,S as q,i as a}from"./assets/vendor-BHdvj17y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const R="51801450-0916bf82cabb3a5bfe1ad6ca6",_="https://pixabay.com/api/";async function f(t,o=1){try{const i=await P.get(_,{params:{key:R,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});return!i.data||!i.data.hits?{hits:[],totalHits:0}:i.data}catch(i){throw console.error("Помилка при отриманні зображень:",i),i}}const p=document.querySelector(".gallery"),h=document.querySelector(".loader"),m=document.querySelector(".load-more"),B=new q(".gallery a",{captionsData:"alt",captionDelay:250});function $(){p.innerHTML=""}function g(t){const o=t.map(({largeImageURL:i,webformatURL:c,tags:e,likes:r,views:n,comments:b,downloads:E})=>`
        <a class="gallery__link" href="${i}">
          <img class="gallery__image" src="${c}" alt="${e}" loading="lazy" />
          <div class="info">
            <div class="info-item">
              <span>Likes</span>
              <p>${r}</p>
            </div>
            <div class="info-item">
              <span>Views</span>
              <p>${n}</p>
            </div>
            <div class="info-item">
              <span>Comments</span>
              <p>${b}</p>
            </div>
            <div class="info-item">
              <span>Downloads</span>
              <p>${E}</p>
            </div>
          </div>
        </a>
      `).join("");p.insertAdjacentHTML("beforeend",o),B.refresh()}function y(){h.classList.remove("hidden")}function v(){h.classList.add("hidden")}function L(){m.classList.remove("hidden")}function l(){m.classList.add("hidden")}const w=document.querySelector(".form"),M=w.querySelector('input[name="search-text"]'),u=document.querySelector(".load-more");let s=1,S="";const d=15;async function O(t){$(),l(),y(),s=1,S=t;try{const o=await f(t,s,d);if(o.hits.length===0){a.warning({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits),o.totalHits>s*d?L():(l(),a.info({title:"Info",message:"You've reached the end of search results!",position:"topRight"}))}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),l()}finally{v()}}w.addEventListener("submit",t=>{t.preventDefault();const o=M.value.trim();if(!o){a.warning({title:"Oops",message:"Please enter a search term!",position:"topRight"});return}O(o)});u.addEventListener("click",async()=>{s+=1,y(),u.disabled=!0;try{const t=await f(S,s,d);g(t.hits),H(),s*d>=t.totalHits?(l(),a.info({title:"Info",message:"You've reached the end of search results!",position:"topRight"})):L()}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),l()}finally{v(),u.disabled=!1}});function H(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
