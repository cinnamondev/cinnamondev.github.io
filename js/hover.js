// Link hover javascript ooh aah
// Cinnamondev, licensed under Apache 2.0

let hover = {
    "init": () => {
       // look for all <a> tags and remove the relative's
        let links = document.getElementsByTagName('a');

        let relTest = new RegExp('^(?:[a-z]+:)?//', 'i');
        links.forEach((a,i,obj) => {
            if (relTest.test(a.href)) {
                // is absolute, check it isnt explicitly ignored
                if(a.classList.contains("nohover")) {obj.splice(i,1);return;}

                // ok now we know we have covered all our ground, now call linkinfo and we go from there.
                fetch(a.href, {
                    method: 'POST',
                    mode: 'cors',
                    redirect: 'follow',
                    referrerPolicy: 'no-referrer'
                })
                .then(response => response.text()
                    .then(html => {
                        // figure it out bucko
                        let parser = new DOMParser();
                        let doc = parser.parseFromString(html, 'text/html');

                        let meta = doc.getElementsByTagName('meta');

                        // TODO: get all meta tags with names for 'description' or 'og:title', 'og:image' 'og:description', 'og_sitename'
                    })
                );

            } else {
                // is relative
                obj.splice(i, 1);
                return;
            }
        });
    
    },

    "linkInfo": (link, callback) => {

    }
}