(function(window){var svgSprite='<svg><symbol id="icon-yonghu" viewBox="0 0 1024 1024"><path d="M514.214 10C236.946 10 12.218 234.73 12.218 511.996 12.218 789.262 236.946 1014 514.214 1014s501.996-224.74 501.996-502.004C1016.21 234.73 791.48 10 514.214 10zM514.214 51.834c253.736 0 460.164 206.428 460.164 460.164 0 111.63-39.994 214.086-106.38 293.852-45.878-19.16-154.178-56.744-221.218-76.538-5.718-1.796-6.618-2.084-6.618-25.88 0-19.652 8.088-39.442 15.974-56.192 8.538-18.2 18.668-48.798 22.306-76.252 10.172-11.808 24.02-35.094 32.926-79.478 7.802-39.118 4.166-53.354-1.02-66.714-0.532-1.41-1.104-2.798-1.512-4.188-1.962-9.172 0.734-56.826 7.436-93.798 4.616-25.37-1.186-79.316-36.114-123.944-22.06-28.21-64.262-62.832-141.35-67.652l-42.282 0.04c-75.782 4.782-118.024 39.402-140.084 67.612-34.928 44.63-40.728 98.576-36.112 123.926 6.74 36.99 9.396 84.644 7.476 93.632-0.408 1.572-0.98 2.962-1.552 4.372-5.148 13.36-8.824 27.596-0.98 66.714 8.864 44.384 22.714 67.672 32.926 79.478 3.596 27.452 13.728 58.052 22.306 76.252 6.25 13.318 9.192 31.436 9.192 57.05 0 23.796-0.9 24.084-6.252 25.778-69.326 20.468-179.668 60.34-220.808 78.356-67.692-80.132-108.586-183.57-108.586-296.424C54.05 258.26 260.478 51.834 514.214 51.834zM192.948 841.032c47.104-19.23 141.024-52.73 202.71-70.95 35.87-11.316 35.87-41.526 35.87-65.792 0-20.12-1.388-49.78-13.154-74.862-8.09-17.178-17.324-46.634-19.364-69.694-0.45-5.392-2.982-10.376-7.068-13.93-5.924-5.19-17.976-24.186-25.656-62.504-6.086-30.334-3.512-36.972-1.02-43.386 1.062-2.738 2.084-5.434 2.902-8.478 5.024-18.362-0.574-78.682-6.66-112.14-2.654-14.544 0.694-55.866 27.902-90.674 24.388-31.19 61.318-48.574 108.422-51.576l39.668-0.042c48.37 3.044 85.3 20.428 109.73 51.618 27.208 34.808 30.518 76.13 27.86 90.692-6.046 33.44-11.684 93.758-6.66 112.1 0.86 3.064 1.838 5.76 2.902 8.498 2.494 6.412 5.066 13.052-0.98 43.386-7.678 38.32-19.772 57.316-25.696 62.504-4.044 3.554-6.576 8.538-7.068 13.93-2.002 23.06-11.234 52.516-19.322 69.694-9.274 19.712-19.936 45.96-19.936 74.004 0 24.268 0 54.478 36.236 65.896 59.032 17.444 153.402 49.86 203.242 69.46-83.216 82.398-197.562 133.382-323.594 133.382C389.328 972.168 275.962 922.084 192.948 841.032z"  ></path></symbol></svg>';var script=function(){var scripts=document.getElementsByTagName("script");return scripts[scripts.length-1]}();var shouldInjectCss=script.getAttribute("data-injectcss");var ready=function(fn){if(document.addEventListener){if(~["complete","loaded","interactive"].indexOf(document.readyState)){setTimeout(fn,0)}else{var loadFn=function(){document.removeEventListener("DOMContentLoaded",loadFn,false);fn()};document.addEventListener("DOMContentLoaded",loadFn,false)}}else if(document.attachEvent){IEContentLoaded(window,fn)}function IEContentLoaded(w,fn){var d=w.document,done=false,init=function(){if(!done){done=true;fn()}};var polling=function(){try{d.documentElement.doScroll("left")}catch(e){setTimeout(polling,50);return}init()};polling();d.onreadystatechange=function(){if(d.readyState=="complete"){d.onreadystatechange=null;init()}}}};var before=function(el,target){target.parentNode.insertBefore(el,target)};var prepend=function(el,target){if(target.firstChild){before(el,target.firstChild)}else{target.appendChild(el)}};function appendSvg(){var div,svg;div=document.createElement("div");div.innerHTML=svgSprite;svgSprite=null;svg=div.getElementsByTagName("svg")[0];if(svg){svg.setAttribute("aria-hidden","true");svg.style.position="absolute";svg.style.width=0;svg.style.height=0;svg.style.overflow="hidden";prepend(svg,document.body)}}if(shouldInjectCss&&!window.__iconfont__svg__cssinject__){window.__iconfont__svg__cssinject__=true;try{document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")}catch(e){console&&console.log(e)}}ready(appendSvg)})(window)