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

        <a href="#" class="button" onclick="resume.export('cinnamondev')">Open formatted</a></pre>`
        
        Rainbow.color(); // trigger rainbow to look for things to highlight
    },
    // Use the json resume thingy to export to a pdf with the theming.
    "export": (username) => {
        fetch("https://registry.jsonresume.org/" + username) // fetch tha html :sunglasses:
            .then(response => response.text() // make it play nicely
                .then(html => {
                    let inject = `
                    <script>
                        let hide = () => {document.getElementById("top").style="visibility:none;display:none;"};
                        document.title = "Resume";
                        // here we can inject our broadcast channel stuff if we wanna talk to this via javascript
                    </script>
                    <style>
                    @media print
                    {    
                        .no-print, .no-print *
                        {
                            display: none !important;
                        }
                    }
                    </style>
                    <div class="no-print" id="top" style="position:fixed;top:0;left:0;padding-left:32px;border-bottom:1px solid black;height:32px;font-size:14px;line-height:32px;width: 100%;background-color:#eee;">
                        <span>
                        <span><a href="#" onclick="hide()">(Close)</a>              To save as PDF click <a href="#" onclick="window.print()">here</a> and choose destination 'Save to PDF'</span>
                        </span>
                    </div>` // What we put in here will let us communicate to this tab AND inject our print help
                    let blob = new Blob([inject + html], {type: 'text/html'}); // make a new blob object 
                    let url = URL.createObjectURL(blob); // make it a thing
                    window.open(url); // open it :)
                    })
            )
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