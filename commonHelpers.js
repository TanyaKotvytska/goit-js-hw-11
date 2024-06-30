import{S as f,i as c}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))a(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const i of t.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const u="44714741-6fe0dcbbee03096a14c34d671",m="https://pixabay.com/api/";async function p(s){const o=`${m}?key=${u}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(o);if(!e.ok)throw new Error("Network response was not ok");return(await e.json()).hits}catch(e){throw console.error("Error fetching images:",e),e}}const l=document.querySelector(".gallery"),d=new f(".gallery a");function y(){l.innerHTML="",d.refresh()}function h(s){const o=s.map(e=>`
        <div class="card">
        <a href="${e.largeImageURL}" alt="${e.tags}">
            <img src="${e.webformatURL}" alt="${e.tags}" loading="lazy">
        </a>
        <div class="card-details">
        <p>Likes: ${e.likes}</p>
                <p>Views: ${e.views}</p>
                <p>Comments: ${e.comments}</p>
                <p>Downloads: ${e.downloads}</p>
            </div>
        </div>
    `).join("");l.innerHTML=o,d.refresh()}const g=document.querySelector(".search-form"),w=document.querySelector(".search-input"),n=document.querySelector(".loader");g.addEventListener("submit",async function(s){s.preventDefault();const o=w.value.trim();if(o===""){c.error({title:"Error",message:"Please enter a search term."});return}n.textContent="Loading images, please wait...",n.style.display="block",y();try{const e=await p(o);n.style.display="none",e.length===0?c.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!"}):h(e)}catch(e){n.style.display="none",c.error({title:"Error",message:"Failed to fetch images. Please try again later."}),console.error("Error fetching images:",e)}});
//# sourceMappingURL=commonHelpers.js.map
