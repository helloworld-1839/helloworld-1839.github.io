// ==UserScript==
// @name         Schoology Client
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://schoology.sydgram.nsw.edu.au/*
// @grant        none
// ==/UserScript==

(function () {
  const loadTheme = () => {
    var style = document.createElement('link');
    style.id = "customThemeSheet"
    style.rel = 'stylesheet';
    style.href = 'https://www.helloworldmods.tk/schoology/style.css';
    document.head.appendChild(style);
    document.getElementById("main").style = "background: #36393F !important";
  }
  const addScript = () => {
    window.themeToggle = true;
    let oldRightNav = document.getElementsByClassName("_2trRU _2K08O fSqCh _1tpub")[1].innerHTML;
    document.getElementsByClassName("_2trRU _2K08O fSqCh _1tpub")[1].innerHTML = `<li class="_24avl _3Rh90 _349XD"><button class="_1SIMq _2kpZl _3OAXJ _13cCs _3_bfp _2M5aC _24avl _3v0y7 _2s0LQ _3ghFm _3LeCL _31GLY _9GDcm _1D8fw util-height-six-3PHnk util-line-height-six-3lFgd util-text-decoration-none-1n0lI Header-header-button-active-state-3AvBm Header-header-button-1EE8Y sExtlink-processed splus-track-clicks" id="themeToggle" title="Toggle Theme" data-popup="false"><svg fill="white" viewBox="-12 -20 500 500" class="_3ESp2 dlCBz _1I3mg fjQuT uQOmx" id="cThemeSVG"><path d="m242 197v90c0 8.284 6.716 15 15 15h180c8.284 0 15-6.716 15-15v-90c0-8.284-6.716-15-15-15h-180c-8.284 0-15 6.716-15 15z"></path><path d="m377 422h-60c-8.284 0-15 6.716-15 15v60c0 8.284 6.716 15 15 15h60c8.284 0 15-6.716 15-15v-60c0-8.284-6.716-15-15-15z"></path><path d="m307.667 15c0-8.284-6.716-15-15-15h-45v60h60z"></path><path d="m217.667 0h-202.667c-8.284 0-15 6.716-15 15v45h217.667z"></path><path d="m307.667 347v-15h-50.667c-24.813 0-45-20.186-45-45v-90c0-24.814 20.187-45 45-45h50.667v-62h-307.667v257c0 8.284 6.716 15 15 15h277.667c8.284 0 15-6.716 15-15zm-155.698-46h-91.969c-8.284 0-15-6.716-15-15s6.716-15 15-15h91.969c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60h-91.969c-8.284 0-15-6.716-15-15s6.716-15 15-15h91.969c8.284 0 15 6.716 15 15s-6.716 15-15 15zm0-60h-91.969c-8.284 0-15-6.716-15-15s6.716-15 15-15h91.969c8.284 0 15 6.716 15 15s-6.716 15-15 15z"></path><path d="m482 229.58v87.42c0 8.272-6.728 15-15 15h-90c-24.814 0-45 20.186-45 45v15h30v-15c0-8.272 6.728-15 15-15h90c24.814 0 45-20.186 45-45v-45c0-19.555-12.541-36.227-30-42.42z"></path></svg></button></li>` + oldRightNav
    loadTheme();
    document.getElementById("themeToggle").onclick = () => {
      if (window.themeToggle) {
        document.getElementById("customThemeSheet").remove();
        document.getElementById("main").style = "";
        document.getElementById("cThemeSVG").style.fill = "black";
      }
      else {
        loadTheme()
        document.getElementById("cThemeSVG").style.fill = "white";
      }
      window.themeToggle = !window.themeToggle
    }
  }
  document.body ? addScript() : document.addEventListener('DOMContentLoaded', e => addScript())
})();

