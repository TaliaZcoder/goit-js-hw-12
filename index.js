import{a as b,S as w,i as a}from"./assets/vendor-DvfmeZXB.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))u(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&u(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function u(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const v="https://pixabay.com/api/",S="54228664-7655a034885e7c8d5f8543052";async function f(t,r){return(await b.get(v,{params:{key:S,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}const m=document.querySelector(".gallery"),h=document.querySelector(".loader"),y=document.querySelector(".load-more"),q=new w(".gallery a");function p(t){const r=t.map(s=>`
    <li class="gallery-item">
      <a href="${s.largeImageURL}">
        <img src="${s.webformatURL}" alt="${s.tags}" />
      </a>
      <div class="info">
        <p><b>Likes</b>${s.likes}</p>
        <p><b>Views</b>${s.views}</p>
        <p><b>Comments</b>${s.comments}</p>
        <p><b>Downloads</b>${s.downloads}</p>
      </div>
    </li>
  `).join("");m.insertAdjacentHTML("beforeend",r),q.refresh()}function B(){m.innerHTML=""}function g(){h.classList.remove("is-hidden")}function L(){h.classList.add("is-hidden")}function M(){y.classList.remove("is-hidden")}function l(){y.classList.add("is-hidden")}const $=document.querySelector(".form"),E=document.querySelector(".load-more");let i="",n=1,d=0;$.addEventListener("submit",O);E.addEventListener("click",x);async function O(t){if(t.preventDefault(),i=t.target.elements["search-text"].value.trim(),!!i){n=1,B(),l(),g();try{const r=await f(i,n);if(d=r.totalHits,r.hits.length===0){a.error({message:"Sorry, there are no images matching your search query."});return}p(r.hits),M(),n*15>=d&&(l(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Something went wrong"})}finally{L()}}}async function x(){n+=1,g();try{const t=await f(i,n);p(t.hits),H(),n*15>=d&&(l(),a.info({message:"We're sorry, but you've reached the end of search results."}))}catch{a.error({message:"Error loading images"})}finally{L()}}function H(){const t=document.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
