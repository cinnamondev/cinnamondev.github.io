"use strict";

let resumetext = ""; // dynamically updated resume from gist 

let displayResume = () => {
    // We do not need to worry bout hiding - this will be a one time thing.
    let button = document.getElementById("resumeBtn");
    let resume = document.getElementById("resume");
    resumeBtn.style = "display: none;";
    resume.innerHTML = `           
    <!--jsonresume schema is neat-->
    <pre id="code" class="fade-in"><h2 style="margin-left: 32px; margin: 5px 0 0 10 px;">Resume</h2>
        <code data-language="javascript" style="margin: 0 0 0 0;">` + resume + `
        </code>
    <a href="#" class="button">Download as PDF</a></pre>`
    
    Rainbow.color(); // trigger rainbow to look for things to highlight



}

(function() {
    fetch("data.json") // temporary , move to the gist later. (this will help us work with json resume!)

    .then(data => {
        resumetext = data.json();
    }).catch(error => {
    // Handle error // do this later.
    });
})