(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))r(n);new MutationObserver(n=>{for(const c of n)if(c.type==="childList")for(const a of c.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(n){const c={};return n.integrity&&(c.integrity=n.integrity),n.referrerPolicy&&(c.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?c.credentials="include":n.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function r(n){if(n.ep)return;n.ep=!0;const c=s(n);fetch(n.href,c)}})();function V(t){return t*t}function A(t,e){return V(t.x-e.x)+V(t.y-e.y)}function Q(t,e,s){var r=A(e,s);if(r==0)return A(t,e);var n=((t.x-e.x)*(s.x-e.x)+(t.y-e.y)*(s.y-e.y))/r;return n=Math.max(0,Math.min(1,n)),A(t,{x:e.x+n*(s.x-e.x),y:e.y+n*(s.y-e.y)})}function U(t,e,s){return Math.sqrt(Q(t,e,s))}let k=[],M=!1;const C=document.getElementById("fill"),T=document.getElementById("stroke"),Y=document.getElementById("points"),X=document.getElementById("cursor"),p=document.getElementById("uicanvas"),E=C.getContext("2d"),b=T.getContext("2d"),f=Y.getContext("2d"),m=X.getContext("2d"),l=p.getContext("2d");let g,v,D=!1,y={x:0,y:0},o,x,d,u,i=1;function Z(t){var e;o=t,x=_(),d=-x.minX+document.documentElement.clientWidth/2-(x.maxX-x.minX)/2,u=-x.minY+document.documentElement.clientHeight/2-(x.maxY-x.minY)/2,(e=window.visualViewport)==null||e.addEventListener("resize",te),window.addEventListener("contextmenu",s=>s.preventDefault()),window.addEventListener("keyup",ne),window.addEventListener("wheel",oe),p.addEventListener("mousedown",ie),p.addEventListener("mouseup",se),p.addEventListener("mousemove",ce),G(),S()}function G(){C.height=document.documentElement.clientHeight,C.width=document.documentElement.clientWidth,T.height=document.documentElement.clientHeight,T.width=document.documentElement.clientWidth,Y.height=document.documentElement.clientHeight,Y.width=document.documentElement.clientWidth,X.height=document.documentElement.clientHeight,X.width=document.documentElement.clientWidth,p.height=document.documentElement.clientHeight,p.width=document.documentElement.clientWidth}function _(){const t=Math.min(...Object.keys(o.vertices).map(n=>o.vertices[n].coordinates[0])),e=Math.min(...Object.keys(o.vertices).map(n=>o.vertices[n].coordinates[1])),s=Math.max(...Object.keys(o.vertices).map(n=>o.vertices[n].coordinates[0])),r=Math.max(...Object.keys(o.vertices).map(n=>o.vertices[n].coordinates[1]));return{minX:t,minY:e,maxX:s,maxY:r}}function W(t){typeof t=="string"&&(t=o.vertices[t]);const e=[];for(let s of t.shapes)for(let r of o.shapes[parseInt(s)].vertices){if(o.vertices[r]===t)continue;const n=[t,o.vertices[r]];e.find(c=>c[0]===n[0]&&c[1]===n[1]||c[0]===n[1]&&c[1]===n[0])||e.push(n)}return e}function B(t){return typeof t=="string"&&(t=o.vertices[t]),k.filter(s=>s[0]===t||s[1]===t)}function I(t){return k.find(e=>e[0]===t[0]&&e[1]===t[1]||e[0]===t[1]&&e[1]===t[0])}function H(t){const e=W(t).length-B(t).length;return e<4?14:e<7?18:22}function j(){if(b.clearRect(0,0,T.width,T.height),!M)for(const t of k)b.strokeStyle="black",b.lineWidth=1,b.beginPath(),b.moveTo(i*t[0].coordinates[0]+d,i*t[0].coordinates[1]+u),b.lineTo(i*t[1].coordinates[0]+d,i*t[1].coordinates[1]+u),b.closePath(),b.stroke()}function $(){E.clearRect(0,0,C.width,C.height);let t=!0;for(const e of o.shapes)I([o.vertices[e.vertices[0]],o.vertices[e.vertices[1]]])&&I([o.vertices[e.vertices[1]],o.vertices[e.vertices[2]]])&&I([o.vertices[e.vertices[2]],o.vertices[e.vertices[0]]])||M?e.completed=!0:(t=!1,e.completed=!1),e.isPreDrawn&&(k.push([o.vertices[e.vertices[0]],o.vertices[e.vertices[1]]]),k.push([o.vertices[e.vertices[1]],o.vertices[e.vertices[2]]]),k.push([o.vertices[e.vertices[2]],o.vertices[e.vertices[0]]]),e.completed=!0,e.isPreDrawn=!1,j(),P()),e.completed&&(E.fillStyle=o.palette[parseInt(e.color)],E.beginPath(),E.moveTo(i*o.vertices[e.vertices[0]].coordinates[0]+d,i*o.vertices[e.vertices[0]].coordinates[1]+u),E.lineTo(i*o.vertices[e.vertices[1]].coordinates[0]+d,i*o.vertices[e.vertices[1]].coordinates[1]+u),E.lineTo(i*o.vertices[e.vertices[2]].coordinates[0]+d,i*o.vertices[e.vertices[2]].coordinates[1]+u),E.closePath(),E.fill());t&&(M=!0,j(),P(),L(),J())}function P(){if(f.clearRect(0,0,Y.width,Y.height),!M)for(const t in o.vertices){const e=o.vertices[t],s=W(t).length-B(t).length;if(s===0&&!e.shapes.find(n=>!o.shapes[parseInt(n)].completed))continue;const r=H(t);f.strokeStyle=e.selected===2?"#e7ad34":"black",f.lineWidth=1,f.setLineDash([1,1]),f.beginPath(),f.arc(i*e.coordinates[0]+d,i*e.coordinates[1]+u,1.5*r,0,2*Math.PI),f.closePath(),e.selected&&(f.fillStyle=e.selected===2?"#e7ad3433":"rgba(0, 0, 0, 0.2)",f.fill()),f.stroke(),f.fillStyle=e.selected===2?"#e7ad34":e.selected===1?"black":"white",f.lineWidth=1,f.setLineDash([]),f.beginPath(),f.arc(i*e.coordinates[0]+d,i*e.coordinates[1]+u,r,0,2*Math.PI),f.closePath(),f.fill(),f.stroke(),f.font="15px Arial",f.textAlign="center",f.textBaseline="middle",f.fillStyle=e.selected===1?"white":"black",f.fillText(s.toString(),i*e.coordinates[0]+d,i*e.coordinates[1]+u)}}function L(){m.clearRect(0,0,X.width,X.height),!M&&g&&D&&(g.selected===2?(m.strokeStyle="#e7ad34",m.fillStyle="#e7ad34"):(m.strokeStyle="black",m.fillStyle="black"),m.lineWidth=4,m.setLineDash([4,8]),m.beginPath(),m.moveTo(i*g.coordinates[0]+d,i*g.coordinates[1]+u),m.lineTo(y.x,y.y),m.closePath(),m.stroke(),m.moveTo(y.x,y.y),m.arc(y.x,y.y,4,0,2*Math.PI),m.fill(),m.lineWidth=1,m.setLineDash([1,1]),m.beginPath(),m.arc(y.x,y.y,28,0,2*Math.PI),m.closePath(),m.stroke())}function J(){l.clearRect(0,0,p.width,p.height),l.fillStyle="white",l.strokeStyle="black",l.lineWidth=2,l.beginPath(),l.moveTo(0,p.height-40),l.lineTo(p.width,p.height-40),l.closePath(),l.stroke(),l.beginPath(),l.moveTo(p.width/2,p.height-60),l.lineTo(p.width/2-20,p.height-20),l.lineTo(p.width/2+20,p.height-20),l.closePath(),l.fill(),l.stroke(),l.textAlign="left",l.textBaseline="middle",l.fillStyle="black",l.font="24px Arial",l.fillText(o.theme,50,100),l.font="16px Arial",l.fillText(new Date(o.date).toLocaleDateString(void 0,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),50,200),l.fillText(o.puzzleConstructor,50,250),l.font="14px Arial",l.textAlign="center",l.fillText(o.shapes.filter(t=>!t.isPreDrawn&&!t.completed).length.toString(),p.width/2,p.height-33)}function ee(t,e){console.log("stroke completed");const s=t.coordinates[0],r=t.coordinates[1],n=e.coordinates[0],c=e.coordinates[1];for(let h of k){const w=h[0].coordinates[0],z=h[0].coordinates[1],R=h[1].coordinates[0],N=h[1].coordinates[1],O=(N-z)*(n-s)-(R-w)*(c-r);if(O===0)continue;const q=((R-w)*(r-z)-(N-z)*(s-w))/O,K=((n-s)*(r-z)-(c-r)*(s-w))/O;if(q>0&&q<1&&K>0&&K<1)return console.log("crossing",t,e,h),!1}if(W(t).length-B(t).length<1||W(e).length-B(e).length<1)return console.log("not enough strokes"),!1;const a=[t,e];return I([t,e])?(console.log("stroke already exists"),!1):(k.push(a),S(),!0)}function te(){G(),S()}function ne(t){t.key==="Backspace"&&k.length>0&&(k.pop(),S())}function oe(t){if(t.deltaY<0&&i<6){const e=(y.x-d)/i,s=(i+.2)*e+d,r=i*x.maxX+d,n=i*x.minX+d;d-=Math.max(Math.min(s,r),n)-y.x;const c=(y.y-u)/i,a=(i+.2)*c+u,h=i*x.maxY+u,w=i*x.minY+u;u-=Math.max(Math.min(a,h),w)-y.y,i+=.2}if(t.deltaY>0&&i>.4){const e=(y.x-d)/i,s=(i-.2)*e+d,r=i*x.maxX+d,n=i*x.minX+d;d-=Math.max(Math.min(s,r),n)-y.x;const c=(y.y-u)/i,a=(i-.2)*c+u,h=i*x.maxY+u,w=i*x.minY+u;u-=Math.max(Math.min(a,h),w)-y.y,i-=.2}S()}function ie(t){if(t.button===2){let c=1/0,a;for(const h of k){let w=U({x:(t.clientX-d)/i,y:(t.clientY-u)/i},{x:h[0].coordinates[0],y:h[0].coordinates[1]},{x:h[1].coordinates[0],y:h[1].coordinates[1]});w<c&&(c=w,a=h)}if(a&&c<5){let h=k.indexOf(I(a));k.splice(h,1),S()}return}D=!0;const e=(t.clientX-d)/i,s=(t.clientY-u)/i;let r=1/0,n="";for(const c in o.vertices){const a=o.vertices[c];(a.coordinates[0]-e)**2+(a.coordinates[1]-s)**2<r&&(r=(a.coordinates[0]-e)**2+(a.coordinates[1]-s)**2,n=c)}n&&r<(2*H(n)/i)**2&&(g=o.vertices[n],g.selected=1,P()),L()}function se(t){D=!1,g&&g.selected&&v&&v.selected&&ee(g,v),g&&(g.selected=0),g=null,v&&(v.selected=0),v=null,L(),P()}function ce(t){if(y.x=t.clientX,y.y=t.clientY,g){const e=(y.x-d)/i,s=(y.y-u)/i;let r=1/0,n="";for(const c in o.vertices){const a=o.vertices[c];a!==g&&(a.coordinates[0]-e)**2+(a.coordinates[1]-s)**2<r&&(r=(a.coordinates[0]-e)**2+(a.coordinates[1]-s)**2,n=c)}n&&r<((1.5*H(n)+28)/i)**2?(v&&v!==o.vertices[n]&&(v.selected=0),v=o.vertices[n],v.selected=2,g.selected=2,P()):(g.selected!==1||v)&&(g.selected=1,v&&(v.selected=0),P())}else D&&(d+=t.movementX,u+=t.movementY,S());L()}function S(){j(),P(),$(),L(),J()}async function re(){const t=document.getElementById("select");(await(await fetch("https://api.github.com/repos/Q726kbXuN/vertex/git/trees/master?recursive=1")).json()).tree.filter(n=>n.path.startsWith("data/")).reverse().forEach(n=>{const c=n.path.split("/")[3];if(c){const a=parseInt(c.split("-")[0]),h=document.createElement("option");h.value=n.url,h.innerText=c.split(".")[0],t.children[2*(2024-a)+2].append(h)}})}var F;(F=document.getElementById("selectpuzzle"))==null||F.addEventListener("click",async()=>{const t=document.getElementById("select").value;if(t){document.getElementById("overlay").style.display="none";let s=await(await fetch(t)).json();Z(JSON.parse(atob(s.content)))}});re();
