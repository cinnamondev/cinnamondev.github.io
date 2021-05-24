"use strict";

let gist = "https://gist.githubusercontent.com/cinnamondev/a5a99818256d192c2d6ca41b5f7aec3b/raw/072114582402df9f16123c9456357df2dd2c98e6/resume.json";

window.onload = () => {
    theme.addControls();
    //resume.fetch(gist, (json) => {resume.display(json)});
    resume.init(gist, () => {
        Rainbow.color();
    });
}

function resizeIframe(iframe) {
    iframe.height = iframe.contentWindow.document.body.scrollHeight + "px";
  }