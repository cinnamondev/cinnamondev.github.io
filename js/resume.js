// Resume manager
// Cinnamondev, licensed under Apache 2.0

// Usage:
// On document load, have an iframe ready and set the src to the generated blob object
// Your username is your github username, you need a gist called resume.json.
// Theme can be any from jsonresume's set.

// Not using for now
let resume= {
    "blob": (username, theme, callback) => {
        fetch("https://registry.jsonresume.org/" + username + "?theme=" + theme)
            .then(response => response.text()
                .then(html => {
                    let inject = `<style>#photo{visibility:hidden !important;}/*works on chrome at least which is good enough...*/ @media print{.no-print, .no-print *{display: none !important;}}</style> <script>let hide=()=>{document.getElementById("top").style="visibility:none;display:none;"}; document.title="Resume"; // here we can inject our broadcast channel stuff if we wanna talk to this via javascript </script> <div class="no-print" id="top" style="z-index:9999;position:fixed;top:0;left:0;padding-left:32px;border-bottom:1px solid black;font-size:14px;line-height:32px;width: 100%;background-color:#eee;"> <span> <span><a href="#" onclick="hide()">(Close)</a>To save as PDF click <a href="#" onclick="window.print()">here</a> and choose destination 'Save to PDF'</span> </span> </div>`
                    // help ^
                    callback(new Blob([inject + html], {type: 'text/html'})); // bring it back
                }));
    }
}
