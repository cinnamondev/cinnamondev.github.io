const HAMBURGER_NAV = document.getElementById("mainNav");

function toggleHamburger() {
    console.log("HI")
    HAMBURGER_NAV.classList.toggle("burgerOpen");
    HAMBURGER_NAV.classList.toggle("nav");
}
function closeHamburger() {
    HAMBURGER_NAV.classList.remove("burgerOpen");
    HAMBURGER_NAV.classList.add("nav");   
}

document.addEventListener('click', (e) => {
    if (e.target == HAMBURGER_NAV | HAMBURGER_NAV.contains(e.target)) {
        closeHamburger();
    }
})