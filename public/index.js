"use strict";

let gist = "https://gist.githubusercontent.com/cinnamondev/61aa08f25fe20a4943b8c613076946bb/raw/dd56aa052d9f1a7fd41386e08f306252b579867a/data.json"
// let gist = "./data.json"

let rt;
fetch(gist)
.then(response => response.json().then(data => {
    rt = JSON.stringify(data, null, '\t');
    displayResume(rt);
}))
.catch(error => {
// Handle error // do this later.
console.log(error);
});

let exportResume = () => {
    // the function that exports the json resume to a pdf via the json schema project.

}

let displayResume = (content) => {
    // We do not need to worry bout hiding - this will be a one time thing.
    let btn = document.getElementById("resumeBtn");
    if (btn != null) {
        button.style="display:none;";
    }

    let resume = document.getElementById("resume");
    resume.innerHTML = `           
    <!--jsonresume schema is neat-->
    <pre id="code" class="fade-in"><h2 style="margin-left: 32px; margin: 5px 0 0 10 px;">Resume</h2>
        <code data-language="javascript" style="margin: 0 0 0 0;">`
         + content + 
         `</code>

    <a href="#" class="button" onclick="exportResume()">Download as PDF</a></pre>`
    
    Rainbow.color(); // trigger rainbow to look for things to highlight



}
