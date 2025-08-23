import{a as S,S as b,i as s}from"./assets/vendor-BHdvj17y.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const n of o.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&c(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=a(e);fetch(e.href,o)}})();const E="51801450-0916bf82cabb3a5bfe1ad6ca6",P="https://pixabay.com/api/";async function d(r,t=1){try{const a=await S.get(P,{params:{key:E,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return!a.data||!a.data.hits?{hits:[],totalHits:0}:a.data}catch(a){throw console.error("Помилка при отриманні зображень:",a),a}}const u=document.querySelector(".gallery"),p=document.querySelector(".loader"),f=document.querySelector(".load-more"),q=new b(".gallery a",{captionsData:"alt",captionDelay:250});function _(){u.innerHTML=""}function m(r){const t=r.map(({largeImageURL:a,webformatURL:c,tags:e,likes:o,views:n,comments:v,downloads:w})=>`
        <a class="gallery__link" href="${a}">
          <img class="gallery__image" src="${c}" alt="${e}" loading="lazy" />
          <div class="info">
            <div class="info-item">
              <span>Likes</span>
              <p>${o}</p>
            </div>
            <div class="info-item">
              <span>Views</span>
              <p>${n}</p>
            </div>
            <div class="info-item">
              <span>Comments</span>
              <p>${v}</p>
            </div>
            <div class="info-item">
              <span>Downloads</span>
              <p>${w}</p>
            </div>
          </div>
        </a>
      `).join("");u.insertAdjacentHTML("beforeend",t),q.refresh()}function h(){p.classList.remove("hidden")}function g(){p.classList.add("hidden")}function $(){f.classList.remove("hidden")}function l(){f.classList.add("hidden")}const y=document.querySelector(".form"),M=y.querySelector('input[name="search-text"]'),O=document.querySelector(".load-more");let i=1,L="";async function B(r){_(),l(),h(),i=1,L=r;try{const t=await d(r,i);if(t.hits.length===0){s.warning({title:"Sorry",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(t.hits),t.totalHits>i*15?$():l()}catch{s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g()}}y.addEventListener("submit",r=>{r.preventDefault();const t=M.value.trim();if(!t){s.warning({title:"Oops",message:"Please enter a search term!",position:"topRight"});return}B(t)});O.addEventListener("click",async()=>{i+=1,h();try{const r=await d(L,i);m(r.hits),i*15>=r.totalHits&&(l(),s.info({title:"Info",message:"You've reached the end of search results!",position:"topRight"}))}catch{s.error({title:"Error",message:"Something went wrong. Please try again later.",position:"topRight"})}finally{g()}});
//# sourceMappingURL=index.js.map
