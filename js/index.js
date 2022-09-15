const HAMBURGER_NAV = document.getElementById("mainNav");

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

// <little class="copyToast">Copied to clipboard!</little>
async function copyHome(service) {
    let elem = document.getElementById("ccardinner");
    let child = document.createElement("little");
    child.classList.add("copyToast");
    child.innerText = service + " has been copied to the clipboard.";
    elem.appendChild(child);
    await sleep(4000);
    elem.removeChild(child);


}

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

