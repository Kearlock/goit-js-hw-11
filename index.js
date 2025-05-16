import{a as m,S as p,i as n}from"./assets/vendor-C9vNCoLC.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const h="50288981-a43d37d4d1623093b87615834",g="https://pixabay.com/api/";function y(o){const s={key:h,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return m.get(g,{params:s}).then(r=>r.data).catch(r=>{throw console.error("API Error:",r),r})}const c=document.querySelector(".gallery");function L(o){const s=o.map(({webformatURL:i,largeImageURL:e,tags:t,likes:a,views:u,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <div class="gallery-picture">
        <a class="gallery-link" href="${e}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${t}"
          />
        </a>
        </div>
        <ul class="info">
          <li class="info-item">
            <p class="info-text">Likes: ${a}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Views: ${u}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Comments: ${f}</p>
          </li>
          <li class="info-item">
            <p class="info-text">Downloads: ${d}</p>
          </li>
          </ul>
      </li>
    `).join("");c.insertAdjacentHTML("afterbegin",s),new p(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8}).refresh()}function b(){c.innerHTML=""}function x(){document.querySelector(".loader").classList.remove("hidden")}function v(){document.querySelector(".loader").classList.add("hidden")}const l=document.querySelector("form");n.settings({position:"topCenter",transitionIn:"flipInX",timeout:1e3});l.addEventListener("submit",o=>{o.preventDefault();const r=l.elements["search-text"].value.trim();if(!r){n.error({message:"Please enter a word to search."});return}b(),x(),y(r).then(i=>{i.hits.length===0?n.show({message:"Sorry, there are no images matching your search query. Please try again!"}):L(i.hits)}).catch(()=>{n.error({message:"Error fetching images."})}).finally(()=>{v()})});
//# sourceMappingURL=index.js.map
