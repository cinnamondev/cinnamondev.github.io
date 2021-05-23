// Resume manager

let resume = {
    "display": (content) => {
        // Optional button
        let btn = document.getElementById("resumeBtn");
        if (btn != null) {
            button.style="display:none;";
        }

        let resume = document.getElementById("resume");
        resume.innerHTML = `           
        <!--jsonresume schema is neat-->
        <pre id="code" class="fade-in"><h2 style="margin-left: 32px; margin: 5px 0 0 10 px;">Resume</h2>
            <code data-language="javascript" style="margin-left:32px !important;">`
             + content + 
             `</code>

        <a href="#" class="button" onclick="exportResume()">Download as PDF</a></pre>`
        
        Rainbow.color(); // trigger rainbow to look for things to highlight
    },
    // Use the json resume thingy to export to a pdf with the theming.
    "export": (username, theme) => {

    },
    // Fetches the github GIST.
    "fetch": (gist, callback) => {
        fetch(gist)
            .then(response => response.json()
                    .then(data => {
                        let json = JSON.stringify(data, null, '\t');
                        console.log(json);
                        callback(json);
                    }))
    }
}