import{a as b,S as P,i as a}from"./assets/vendor-BHdvj17y.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&l(c)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function l(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();const q="51801450-0916bf82cabb3a5bfe1ad6ca6",R="https://pixabay.com/api/";async function u(t,o=1){try{const i=await b.get(R,{params:{key:q,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});return!i.data||!i.data.hits?{hits:[],totalHits:0}:i.data}catch(i){throw console.error("Помилка при отриманні зображень:",i),i}}const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".load-more"),_=new P(".gallery a",{captionsData:"alt",captionDelay:250});function B(){p.innerHTML=""}function m(t){const o=t.map(({largeImageURL:i,webformatURL:l,tags:e,likes:r,views:c,comments:S,downloads:E})=>`
        <a class="gallery__link" href="${i}">
          <img class="gallery__image" src="${l}" alt="${e}" loading="lazy" />
          <div class="info">
            <div class="info-item">
              <span>Likes</span>
              <p>${r}</p>
            </div>
            <div class="info-item">
              <span>Views</span>
              <p>${c}</p>
            </div>
            <div class="info-item">
              <span>Comments</span>
              <p>${S}</p>
            </div>
            <div class="info-item">
              <span>Downloads</span>
              <p>${E}</p>
            </div>
          </div>
        </a>
      `).join("");p.insertAdjacentHTML("beforeend",o),_.refresh()}function g(){f.classList.remove("hidden")}function y(){f.classList.add("hidden")}function v(){h.classList.remove("hidden")}function n(){h.classList.add("hidden")}const L=document.querySelector(".form"),$=L.querySelector('input[name="search-text"]'),M=document.querySelector(".load-more");let s=1,w="";const d=15;async function O(t){B(),n(),g(),s=1,w=t;try{const o=await u(t,s,d);if(o.hits.length===0){a.warning({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(o.hits),o.totalHits>s*d?v():(n(),a.info({title:"Info",message:"You've reached the end of search results!",position:"topRight"}))}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),n()}finally{y()}}L.addEventListener("submit",t=>{t.preventDefault();const o=$.value.trim();if(!o){a.warning({title:"Oops",message:"Please enter a search term!",position:"topRight"});return}O(o)});M.addEventListener("click",async()=>{s+=1,n(),g();try{const t=await u(w,s,d);m(t.hits),H(),s*d>=t.totalHits?(n(),a.info({title:"Info",message:"You've reached the end of search results!",position:"topRight"})):v()}catch{a.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),n()}finally{y()}});function H(){const{height:t}=document.querySelector(".gallery").firstElementChild.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
