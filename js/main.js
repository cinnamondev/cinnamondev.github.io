"use strict";

let gist = "https://gist.githubusercontent.com/cinnamondev/61aa08f25fe20a4943b8c613076946bb/raw/dd56aa052d9f1a7fd41386e08f306252b579867a/data.json";


window.onload = () => {
    theme.addControls();
    resume.fetch(gist, (json) => {resume.display(json)});
}

