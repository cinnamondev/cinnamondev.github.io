// Resume manager

let resume = {
    "display": (content) => {
        // Optional button
        let resume = document.getElementById("resume");
        
        let btn = document.createElement("button");
        let panel = document.createElement("div");
        btn.id = "resume-btn";
        btn.innerText="Resume";
        panel.id = "code-panel";
        panel.classList.add("fadeIn");

        btn.addEventListener("click", () => {
            btn.classList.toggle("active");
            var panel = document.getElementById("code-panel");
            if (!btn.classList.contains("active")) {
              panel.style.maxHeight = "200px";
            } else {
              panel.style.maxHeight = panel.scrollHeight + "px";
            } 
        })

        resume.appendChild(btn);
        panel.innerHTML += `        
        <!--jsonresume schema is neat-->
        <pre style="width:100%;">
        <div style="width:100%;border-bottom:1px solid #ddd">
        <a href="#" class="button" onclick="resume.export('cinnamondev')">Open formatted cv</a>   
        </div>
            <code data-language="javascript" style="left:32px !important;">`
             + content + 
             `</code>
        </pre>
        <small>Made using the <a href="https://jsonresume.org/">JSON Resume Schema</a>.</small>`
        resume.appendChild(panel);

        Rainbow.color(); // trigger rainbow to look for things to highlight

    },
    // Use the json resume thingy to export to a pdf with the theming.
    "export": (username) => {
        fetch("https://registry.jsonresume.org/" + username + "?theme=kendall") // fetch tha html :sunglasses:
            .then(response => response.text() // make it play nicely
                .then(html => {
                    let inject = `
                    <style>
                    #photo {visibility:hidden !important;}
                    @media print
                    {    
                        .no-print, .no-print *
                        {
                            display: none !important;
                        }
                    }
                    </style>
                    <script>
                        let hide = () => {document.getElementById("top").style="visibility:none;display:none;"};
                        document.title = "Resume";
                        // here we can inject our broadcast channel stuff if we wanna talk to this via javascript
                    </script>
                    <div class="no-print" id="top" style="z-index:9999;position:fixed;top:0;left:0;padding-left:32px;border-bottom:1px solid black;height:32px;font-size:14px;line-height:32px;width: 100%;background-color:#eee;">
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