"use strict";

let gist = "https://gist.githubusercontent.com/cinnamondev/a5a99818256d192c2d6ca41b5f7aec3b/raw/9ac2717478ff2f4d5f6e529d989e107e14bf88de/resume.json";

window.onload = () => {
    theme.addControls();
    resume.fetch(gist, (json) => {resume.display(json)});
}

