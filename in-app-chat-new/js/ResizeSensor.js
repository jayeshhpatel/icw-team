!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ResizeSensor=t()}("undefined"!=typeof window?window:this,function(){if("undefined"==typeof window)return null;var e=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||function(e){return window.setTimeout(e,20)};function t(e,t){var i=Object.prototype.toString.call(e),n="[object Array]"===i||"[object NodeList]"===i||"[object HTMLCollection]"===i||"[object Object]"===i||"undefined"!=typeof jQuery&&e instanceof jQuery||"undefined"!=typeof Elements&&e instanceof Elements,o=0,s=e.length;if(n)for(;o<s;o++)t(e[o]);else t(e)}var i=function(n,o){function s(){var e,t,i=[];this.add=function(e){i.push(e)},this.call=function(){for(e=0,t=i.length;e<t;e++)i[e].call()},this.remove=function(n){var o=[];for(e=0,t=i.length;e<t;e++)i[e]!==n&&o.push(i[e]);i=o},this.length=function(){return i.length}}t(n,function(t){!function(t,i){if(t)if(t.resizedAttached)t.resizedAttached.add(i);else{t.resizedAttached=new s,t.resizedAttached.add(i),t.resizeSensor=document.createElement("div"),t.resizeSensor.className="resize-sensor";var n="position: absolute; left: 0; top: 0; right: 0; bottom: 0; overflow: hidden; z-index: -1; visibility: hidden;",o="position: absolute; left: 0; top: 0; transition: 0s;";t.resizeSensor.style.cssText=n,t.resizeSensor.innerHTML='<div class="resize-sensor-expand" style="'+n+'"><div style="'+o+'"></div></div><div class="resize-sensor-shrink" style="'+n+'"><div style="'+o+' width: 200%; height: 200%"></div></div>',t.appendChild(t.resizeSensor),t.resizeSensor.offsetParent!==t&&(t.style.position="relative");var r,d,c,l,f=t.resizeSensor.childNodes[0],a=f.childNodes[0],h=t.resizeSensor.childNodes[1],u=t.offsetWidth,z=t.offsetHeight,v=function(){a.style.width="100000px",a.style.height="100000px",f.scrollLeft=1e5,f.scrollTop=1e5,h.scrollLeft=1e5,h.scrollTop=1e5};v();var p=function(){d=0,r&&(u=c,z=l,t.resizedAttached&&t.resizedAttached.call())},y=function(){c=t.offsetWidth,l=t.offsetHeight,(r=c!=u||l!=z)&&!d&&(d=e(p)),v()},m=function(e,t,i){e.attachEvent?e.attachEvent("on"+t,i):e.addEventListener(t,i)};m(f,"scroll",y),m(h,"scroll",y)}}(t,o)}),this.detach=function(e){i.detach(n,e)}};return i.detach=function(e,i){t(e,function(e){e&&(e.resizedAttached&&"function"==typeof i&&(e.resizedAttached.remove(i),e.resizedAttached.length())||e.resizeSensor&&(e.contains(e.resizeSensor)&&e.removeChild(e.resizeSensor),delete e.resizeSensor,delete e.resizedAttached))})},i});