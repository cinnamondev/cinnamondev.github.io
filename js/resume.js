// Resume manager

let resume = {
    // Creates a blob object for the RENDERED json resume and injects our overlay
    "renderBlob": (username, theme, callback) => {
        fetch("https://registry.jsonresume.org/" + username + "?theme=" + theme) // fetch tha html :sunglasses:
            .then(response => response.text() // make it play nicely
                .then(html => {
                    let inject = `<style>#photo{visibility:hidden !important;}/*works on chrome at least which is good enough...*/ @media print{.no-print, .no-print *{display: none !important;}}</style> <script>let hide=()=>{document.getElementById("top").style="visibility:none;display:none;"}; document.title="Resume"; // here we can inject our broadcast channel stuff if we wanna talk to this via javascript </script> <div class="no-print" id="top" style="z-index:9999;position:fixed;top:0;left:0;padding-left:32px;border-bottom:1px solid black;font-size:14px;line-height:32px;width: 100%;background-color:#eee;"> <span> <span><a href="#" onclick="hide()">(Close)</a>To save as PDF click <a href="#" onclick="window.print()">here</a> and choose destination 'Save to PDF'</span> </span> </div>` 
                    // What we put in here will let us communicate to this tab AND inject our print help

                    let blob = new Blob([inject + html], {type: 'text/html'}); // make a new blob object 
                    callback(blob);
                }));
    },

        // Make the iFrame from the blob
    "generateIframe": (username, theme,callback) => {
            resume.renderBlob(username, theme, (blob) => {
                let iframe = document.createElement("iframe"); // our iframe
                iframe.src = URL.createObjectURL(blob);
                callback(iframe);
            })
        },

    // Switch between iFrame and JSON previews
    "povToggle": () => {
        let iframe = document.getElementById("iframe-panel");
        let code = document.getElementById("code-panel");

        iframe.classList.toggle("render");
        if(iframe.classList.contains("render")) {
            iframe.style=""
            code.style="display:none;"

        } else {
            iframe.style="display:none;"
            code.style=""
        }
    },

    // Make the thing small and make the thing big.
    "sizeToggle": () => {
        let panel = document.getElementById("resume");
        panel.classList.toggle("active");

        if (!panel.classList.contains("active")) {
          panel.style.maxHeight = "200px";
        } else {
          panel.style.maxHeight = panel.scrollHeight + "px";
        } 
    },

    // Make the json thingy itself
    "generateJson": (gist, callback) =>{
        resume.fetch(gist, (response) => {
            Rainbow.color(response, 'javascript', (code) => {
                let codeBlock = `<pre><code data-language="javascript" id="code-view" style="left:32px !important;">` + code + `</code></pre>`;
                callback(codeBlock);
            })
        })
    },

    // Fetches the github GIST (for JSON preview)
    "fetch": (gist, callback) => {
        fetch(gist)
            .then(response => response.json()
                    .then(data => {
                        let json = JSON.stringify(data, null, '\t');
                        callback(json);
                    }))
    },
    
    "init": (gistUser, gistUrl, theme, callback) => {
        let v1 = document.createElement("div");
        let v2 = document.createElement("div"); // make the containers for the things
        v1.id = "iframe-panel";
        v2.id = "code-panel";

        resume.generateIframe(gistUser, theme, (result) => {           
            v1.appendChild(result);
        })

//<small>Made using the <a href="https://jsonresume.org/">JSON Resume Schema</a>.</small>

        resume.generateJson(gistUrl, (result) => {
            v2.innerHTML = result;
        });

        let final = document.getElementById("resume");
        final.appendChild(v1);
        final.appendChild(v2);
        
        resume.povToggle();


    }
}

