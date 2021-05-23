"use strict";

let gist = "https://gist.githubusercontent.com/cinnamondev/a5a99818256d192c2d6ca41b5f7aec3b/raw/8705a4a422a998597c9f2ce448f999ee16b6d752/resume.json";

window.onload = () => {
    theme.addControls();
    resume.fetch(gist, (json) => {resume.display(json)});
}

