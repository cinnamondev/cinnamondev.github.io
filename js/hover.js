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

// If for whatever reason you steal this code and want to translate it or change the text, you can easily do it by changing the 3 whotsits below
let hover = {
    "titleNotFound": "Title not found!",
    "descriptionNotFound": "Description not found!",
    "placeholderImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/240px-No_image_available.svg.png",
    "init": () => {
        // https://stackoverflow.com/questions/11381673/detecting-a-mobile-browser
        // good lord
        let check = false;
        (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
        if(check) {
            console.warn("Hover - mobile/tablet detected, not continuing");
            return;
        }


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
                    title.innerText = info.title;
                    infoBox.appendChild(title);
        
                    let content = document.createElement("div");
                    content.classList.add("hover_content");
                    
                    let description = document.createElement("p");
                    description.innerText = info.description;
                    let image = document.createElement("img");
                    image.src = info.image;
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
                        title: hover.titleNotFound,
                        description: hover.descriptionNotFound,
                        image: hover.placeholderImage,
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
                                    output.title = content.nodeValue;
                                    break;
                                case "og:description":
                                    output.description = content.nodeValue;
                                    break;
                                case "og:image":
                                    output.image = content.nodeValue;
                                    break;
                                default:
                                    break;
                            }
                        }
                    }
                    if (output.title == hover.titleNotFound) {
                        // find alt title
                        output.title = doc.getElementsByTagName("title")[0].innerHTML ? doc.getElementsByTagName("title")[0].innerHTML : hover.titleNotFound;
                    }
                    callback(output);

                })
            ).catch(error => { // errors will usually be caused by cors issues at best
                console.warn("Hover - could not retrieve a url")
                console.error(error);
                let output = {
                    title: "Title not found!",
                    description: "Description not found!",
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
            font-size: 17px;
            color: var(--text-black);
            white-space:nowrap;
            overflow:hidden;
            max-height:20px;
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
            min-height: 100px;
        
        }
        
        .hover_content img {
            padding: 0 0 0 0;
            margin: 0 0 0 0;
            position:absolute;
            bottom: 0;
            right:0;
            max-width: 100px;
            border-radius: 0 0 10px 0;
        }
        .hover_content p {
            padding: 0;
            margin: 0;
            font-size: 14px;
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