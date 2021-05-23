"use strict";

let gist = "https://gist.githubusercontent.com/cinnamondev/a5a99818256d192c2d6ca41b5f7aec3b/raw/48e49f1b5df5c46c22d9e0db7c2781a8bf34bc5c/resume.json";

window.onload = () => {
    theme.addControls();
    resume.fetch(gist, (json) => {resume.display(json)});
}

