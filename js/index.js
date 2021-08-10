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
    hover.init();
})