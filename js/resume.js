// Resume manager

let resume = {
    "renderBlob": (username, callback) => { // all good
        fetch("https://registry.jsonresume.org/" + username + "?theme=kendall") // fetch tha html :sunglasses:
            .then(response => response.text() // make it play nicely
                .then(html => {
                    let inject = `
                    <style>
                    #photo {visibility:hidden !important;} /*works on chrome at least which is good enough...*/
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
                        <span><a href="#" onclick="hide()">(Close)</a>To save as PDF click <a href="#" onclick="window.print()">here</a> and choose destination 'Save to PDF'</span>
                        </span>
                    </div>` // What we put in here will let us communicate to this tab AND inject our print help
                    let blob = new Blob([inject + html], {type: 'text/html'}); // make a new blob object 
                    callback(blob);
                }));
    },
    "jsonRender": (content) => {
        panel.innerHTML += `        
        <!--jsonresume schema is neat-->
        <pre style="width:100%;border:none !important;">
        <div style="width:100%;border-bottom:1px solid #ddd">
        <a href="#" class="button" onclick="resume.export('cinnamondev')">Open in new tab</a>
        <a href="#" class="button" onclick="resume.povToggle()">Change view</a>  
        </div>
            <iframe id="render-view" class="render"></iframe>
            <code data-language="javascript" id="code-view" style="left:32px !important;">`
             + content + 
             `</code>
</pre>`

        Rainbow.color(); // trigger rainbow to look for things to highlight

    },
    // Use the json resume thingy to export to a pdf with the theming.
    // Fetches the github GIST.
    "fetch": (gist, callback) => {
        fetch(gist)
            .then(response => response.json()
                    .then(data => {
                        let json = JSON.stringify(data, null, 3);
                        callback(json);
                    }))
    },
    // Switch between iframe HTML view
    "povToggle": () => {
        let iframe = document.getElementById("render-view");
        let code = document.getElementById("code-view");

        iframe.classList.toggle("render");
        if(iframe.classList.contains("render")) {
            iframe.style=""
            code.style="display:none;"

        } else {
            iframe.style="display:none;"
            code.style=""
        }
    },
    // set everything up
    "generateIframe": (blob, callback) => {
        resume.renderBlob("cinnamondev", (blob) => {
            let iframe = document.createElement("iframe"); // our iframe
            iframe.src = URL.createObjectURL(blob);
            callback(iframe);
        })
    },
    "generateJson": (gist, callback) =>{
        resume.fetch(gist, (response) => {
            let pre = document.createElement("pre");
            let codeBlock = document.createElement("code");
            codeBlock.setAttribute("data-language", "javascript");
            codeBlock.id = "code-view";
            codeBlock.style = "left:32px !important;";
            codeBlock.innerText = response;
            pre.appendChild(codeBlock);
            callback(pre);
        })
    },
    "init": (gistUrl, callback) => {
        let v1 = document.createElement("div");
        let v2 = document.createElement("div"); // make the containers for the things

        resume.renderBlob("cinnamondev", (blob) => {
            resume.generateIframe(blob, (result) => {
                v1.appendChild(result);
            })
        })

//<small>Made using the <a href="https://jsonresume.org/">JSON Resume Schema</a>.</small>

        resume.generateJson(gistUrl, (result) => {
            v2.appendChild(result);
        });

        let final = document.getElementById("resume");
        final.appendChild(v1);
        final.appendChild(v2);
        
        callback();


    }
}
