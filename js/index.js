/*
theme.default();

// Open the hamburger on button click
function openHamburger() {
    let list = document.getElementById("links");
    if (list.style.display === "flex") {
        list.style.display = "none";
    } else { list.style.display = "flex";}

}

// Ensure the menu is always visible in all cases (this is to handle typically orientation changes that might make it go fucky)
window.addEventListener('resize', () => {
    // function body
    let list = document.getElementById("links");
    if(window.innerWidth >= 540) {
        list.style.display = "flex";
    } else { list.style.display = "none"; }
});

document.addEventListener("DOMContentLoaded", (e) => {
    //hover.init();
    console.warn("HoverJS disabled until bug fix - see https://github.com/cinnamondev/cinnamondev.github.io/issues/1")
})


*/
setTimeout(function(){
    document.body.className="";
},500);


document.addEventListener('scroll', (function() {
    let scrollTop = window.scrollY;
    if (scrollTop > 500){
        if (window.matchMedia('(max-width: 700px)').matches) { document.getElementById("introJump").style = "display: none;"; }
        document.getElementById("toTopButton").classList.add("show");
    }
    else{
        if (window.matchMedia('(max-width: 700px)').matches) { document.getElementById("introJump").style = "display: fixed;";  } else { document.getElementById("introJump").style = "display: initial;"; }
        document.getElementById("toTopButton").classList.remove("show");
    }
}));
