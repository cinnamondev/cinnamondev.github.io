"use strict";

let gist = "https://gist.githubusercontent.com/cinnamondev/a5a99818256d192c2d6ca41b5f7aec3b/raw/9364b14795d20226b28e50b6dd46db943c45872d/resume.json";

window.onload = () => {
    theme.addControls();
    resume.fetch(gist, (json) => {resume.display(json)});
}

