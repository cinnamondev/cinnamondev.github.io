// Link hover javascript ooh aah
// Cinnamondev, licensed under Apache 2.0

// USAGE
// Simply make a <a> link to a full url!
// Assign a CSS variable somewhere it can be accessed for the colors:
// --hoverjs-bg: #eee;
// --hoverjs-txt: #444;
// adjust to liking.
// To exclude a <a>, give it the class "nohover" or use a relative url (not foolproof)
// Include this line in your code:
// 
// document.addEventListener("DOMContentLoaded", (e) => {
// })

let hover = {
    "init": () => {
        console.log("Hover looking for links...")
        hover.insertCSS();
       // look for all <a> tags and remove the relative's
        let links = document.getElementsByTagName('a');

        let relTest = new RegExp('^(?:[a-z]+:)?//', 'i');
        for (var i =0; i < links.length; i++) {
            // iterate the list of links
            let a = links[i];
            if (relTest.test(a.href)) {
                // is absolute, check it isnt explicitly ignored
                if(a.classList.contains("nohover")) {continue;}

                // ok now we know we have covered all our ground, now call linkinfo and we go from there.
                hover.linkInfo(a.href, (info) => {
                    console.log(info);

                    a.classList.add("hoverlink");
                    let href = a.href
        
        
                    // now we can make the info box!
        
                    let infoBox = document.createElement("div");
                    infoBox.classList.add("hoverbox");
        
                    let title = document.createElement("a");
                    title.classList.add("nohover"); // precautionary measure
                    title.target = "_blank";
                    title.href = href;
                    title.innerText = info.title.nodeValue;
                    infoBox.appendChild(title);
        
                    let content = document.createElement("div");
                    content.classList.add("hover_content");
                    
                    let description = document.createElement("p");
                    description.innerText = info.description.nodeValue;
                    let image = document.createElement("img");
                    image.src = info.image.nodeValue;
                    content.appendChild(description);
                    content.appendChild(image);

                    infoBox.appendChild(content);


                    a.appendChild(infoBox);
                    
                })

            } else {
                // is relative
                continue;
            }
        }
    
    },
    "addToLink": () => {

    },
    "linkInfo": (link, callback) => {
            link = "https://cors.bridged.cc/" + link 
            fetch(link, {redirect:'follow',referrerPolicy:'no-referrer'})
            .then(response => {
                if (!response.ok) {
                    console.log(response)
                    throw Error(response.statusText);
                }
                return response;
            })
            .then(response => response.text()
                .then(html => {
                    // figure it out bucko
                    let parser = new DOMParser();
                    let doc = parser.parseFromString(html, 'text/html');
                    
                    let meta = doc.getElementsByTagName('meta');
                    let output = {
                        title: "Not found",
                        description: "Not found",
                        image: "",
                        url: link,
                        show: true
                    };
                    for ( var i = 0; i < meta.length; i++) { // iterate the htmlcollection thingy
                        let a = meta[i];
                        let property = a.attributes.property;
                        let content = a.attributes.content;
                        if (property) {
                            switch (property.nodeValue) {
                                case "og:title":
                                    output.title = content;
                                    break;
                                case "og:description":
                                    output.description = content;
                                    break;
                                case "og:image":
                                    output.image = content;
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    if (output.title == "Not found") {
                        // find alt title
                        output.title = doc.getElementsByTagName("title")[0].innerHTML;
                        
                    }
                    callback(output);

                })
            ).catch(error => { // errors will usually be caused by cors issues at best
                console.warn("Hover - could not retrieve a url")
                console.warn(error);
                let output = {
                    title: "Not found",
                    description: "Not found",
                    image: "",
                    url: link,
                    show: false
                };
                callback(output);
            })
        },
    "insertCSS": () => {
        let style = document.createElement('style');
        style.innerHTML = `
        .hoverlink {
            position: relative;
            display: inline-block;
        }
        .hoverlink .hoverbox {
            bottom:100%;
            left:50%;
            margin-left:-150px;
            width: 300px;
            max-height: 135px;
            visibility: hidden;
            position: absolute;
            z-index: 1;
            overflow:hidden;
            text-align:center;
            background-color: var(--hoverjs-bg);
            color: var(--hoverjs-txt);
        }
        
        .hoverlink:hover .hoverbox {
            visibility: visible;
        }
        
        .hoverbox {
            padding-top: 5px;
            width: 300px;
            border: 1px solid black;
            border-radius: 10px;
            text-decoration: none;
        }
        
        .hoverbox a, .hoverbox a:hover,.hoverbox a:active,.hoverbox a:visited,.hoverbox a:link {
            font-size: 20px;
            color: var(--text-black);
        }
        .hoverbox a {
            padding-left: 10px;
            overflow:hidden;
            text-overflow: ellipsis;
            font-size: 20px;
        }
        .hoverbox a[target="_blank"]::after {
            content: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAQElEQVR42qXKwQkAIAxDUUdxtO6/RBQkQZvSi8I/pL4BoGw/XPkh4XigPmsUgh0626AjRsgxHTkUThsG2T/sIlzdTsp52kSS1wAAAABJRU5ErkJggg==);
            margin: 0 3px 0 5px;
          }
        
        .hover_content {
            margin-top: 10px;
            max-height: 100px;
        
        }
        
        .hover_content img {
            max-height: 100px;
            max-width: 100px;
            display:inline;
            float:right;
            border-radius: 0 0 10px 0;
        }
        .hover_content p {
            height: 100px;
            width: calc(100% - 110px);
            margin-left: 5px;
            float:left;
            overflow: hidden;
            text-overflow: ellipsis;
        }
        
        `
        document.head.appendChild(style);



    }
}