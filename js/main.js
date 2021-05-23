"use strict";

let gist = "https://gist.github.com/cinnamondev/a5a99818256d192c2d6ca41b5f7aec3b/raw/80e2740ee6494f159f567ebb4793d1e6ea749d22/resume.json";


window.onload = () => {
    theme.addControls();
    resume.fetch(gist, (json) => {resume.display(json)});
}

