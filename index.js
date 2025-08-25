import{a as b,S as P,i as n}from"./assets/vendor-BHdvj17y.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function a(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=a(t);fetch(t.href,r)}})();const q="51801450-0916bf82cabb3a5bfe1ad6ca6",R="https://pixabay.com/api/";async function u(o,e=1){try{const a=await b.get(R,{params:{key:q,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:15}});return!a.data||!a.data.hits?{hits:[],totalHits:0}:a.data}catch(a){throw console.error("Помилка при отриманні зображень:",a),a}}const p=document.querySelector(".gallery"),f=document.querySelector(".loader"),h=document.querySelector(".load-more"),_=new P(".gallery a",{captionsData:"alt",captionDelay:250});function B(){p.innerHTML=""}function m(o){const e=o.map(({largeImageURL:a,webformatURL:c,tags:t,likes:r,views:l,comments:S,downloads:E})=>`
        <a class="gallery__link" href="${a}">
          <img class="gallery__image" src="${c}" alt="${t}" loading="lazy" />
          <div class="info">
            <div class="info-item">
              <span>Likes</span>
              <p>${r}</p>
            </div>
            <div class="info-item">
              <span>Views</span>
              <p>${l}</p>
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
      `).join("");p.insertAdjacentHTML("beforeend",e),_.refresh()}function g(){f.classList.remove("hidden")}function y(){f.classList.add("hidden")}function v(){h.classList.remove("hidden")}function i(){h.classList.add("hidden")}const L=document.querySelector(".form"),$=L.querySelector('input[name="search-text"]'),M=document.querySelector(".load-more");i();let s=1,w="";const d=15;async function O(o){B(),i(),g(),s=1,w=o;try{const e=await u(o,s,d);if(e.hits.length===0){n.warning({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(e.hits),e.totalHits>s*d?v():(i(),n.info({title:"Info",message:"You've reached the end of search results!",position:"topRight"}))}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),i()}finally{y()}}L.addEventListener("submit",o=>{o.preventDefault();const e=$.value.trim();if(!e){n.warning({title:"Oops",message:"Please enter a search term!",position:"topRight"});return}O(e)});M.addEventListener("click",async()=>{s+=1,i(),g();try{const o=await u(w,s,d);m(o.hits),H(),s*d>=o.totalHits?(i(),n.info({title:"Info",message:"You've reached the end of search results!",position:"topRight"})):v()}catch{n.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"}),i()}finally{y()}});function H(){const e=document.querySelector(".gallery").lastElementChild;if(e){const{height:a}=e.getBoundingClientRect();window.scrollBy({top:a*2,behavior:"smooth"})}}
//# sourceMappingURL=index.js.map
