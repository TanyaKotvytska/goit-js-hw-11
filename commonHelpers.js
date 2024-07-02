import{S as m,i as a}from"./assets/vendor-0fc460d7.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const t of r)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function e(r){const t={};return r.integrity&&(t.integrity=r.integrity),r.referrerPolicy&&(t.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?t.credentials="include":r.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(r){if(r.ep)return;r.ep=!0;const t=e(r);fetch(r.href,t)}})();const d="44714741-6fe0dcbbee03096a14c34d671",f="https://pixabay.com/api/";async function g(s){const o=`${f}?key=${d}&q=${encodeURIComponent(s)}&image_type=photo&orientation=horizontal&safesearch=true`;try{const e=await fetch(o);if(!e.ok)throw new Error("Network response was not ok");return(await e.json()).hits}catch(e){throw console.error("Error fetching images:",e),e}}const u=document.querySelector(".gallery"),p=new m(".gallery a");function y(){u.innerHTML="",p.refresh()}function h(s){const o=s.map(e=>`
        <li class="gallery-item">
            <a class="gallery-link" href="${e.largeImageURL}">
                <div class="large-img">
                    <img class="gallery-image" src="${e.webformatURL}" alt="${e.tags}">
                    <ul class="img-details">
                        <li><p>Likes</p><p>${e.likes}</p></li>
                        <li><p>Views</p><p>${e.views}</p></li>
                        <li><p>Comments</p><p>${e.comments}</p></li>
                        <li><p>Downloads</p><p>${e.downloads}</p></li>
                    </ul>
                </div>
            </a>
        </li>
    `).join("");u.innerHTML=o,p.refresh()}const F=document.querySelector(".search-form"),c=document.querySelector(".search-input"),i=document.querySelector(".loader");F.addEventListener("submit",async function(s){s.preventDefault();const o=c.value.trim();if(o===""){a.error({title:"Error",message:"Please enter a search term.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFF",titleColor:"#FFF",iconColor:"#FFF",timeout:5e3});return}c.value="",i.textContent="Loading images, please wait...",i.style.display="block",y();try{const e=await g(o);i.style.display="none",e.length===0?a.info({title:"Info",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFF",titleColor:"#FFF",iconColor:"#FFF",timeout:5e3}):h(e)}catch(e){i.style.display="none",a.error({title:"Error",message:"Failed to fetch images. Please try again later.",position:"topRight",backgroundColor:"#EF4040",messageColor:"#FFF",titleColor:"#FFF",iconColor:"#FFF",timeout:5e3}),console.error("Error fetching images:",e)}});
//# sourceMappingURL=commonHelpers.js.map
