// js file for ../pages/resume.html
"use strict";

let gist = "https://gist.githubusercontent.com/cinnamondev/a5a99818256d192c2d6ca41b5f7aec3b/raw/072114582402df9f16123c9456357df2dd2c98e6/resume.json";
let user = "cinnamondev";
let rth = "kendall";

window.onload = () => {
    theme.start();
    //resume.fetch(gist, (json) => {resume.display(json)});
    resume.init(user, gist, rth);

    codeTheme();


}

function codeTheme() {
    let codeTheme = document.getElementById("rainbow-theme");
    let codes = {
        "dark": "https://cdn.jsdelivr.net/npm/rainbow-code@2.1.7/themes/css/obsidian.css",
        "light": "https://cdn.jsdelivr.net/npm/rainbow-code@2.1.7/themes/css/github.css"
    }

    let name = localStorage.getItem("theme");
    codeTheme.href = codes[name];
}

function betterInvert() {
    theme.invert();
    codeTheme();
}

function resizeIframe(iframe) {
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
  }

let test = localStorage.getItem("theme");