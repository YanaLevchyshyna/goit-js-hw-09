!function(){var t=document.body,n=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),a=null;function o(){var n="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0));t.style.backgroundColor=n}n.addEventListener("click",(function(){n.disabled=!0,e.disabled=!1,a=setInterval((function(){o()}),1e3)})),e.addEventListener("click",(function(){n.disabled=!1,e.disabled=!0,clearInterval(a)}))}();
//# sourceMappingURL=01-color-switcher.54810a70.js.map
