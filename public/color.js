// Javascript color manager.
"use strict";

let color = {
    // Adds the event listener.
    "listen": () => {},
    // Introduce button in top right (theming button)
    "addControls": () => {
        let button = document.createElement('button');
        button.id = "theming";                               
        button.innerText = "THEME";                             // Text
        button.style = "top: 0; right: 0; position: fixed;";    // change this later.
        document.body.appendChild(button);                      // Add button to document
        
        button.addEventListener("click", () => {color.invert()}); // invert on button click
    }, 
    // Triggered manually or by the button. Switches color scheme.
    "invert": () => {
        console.log("Invert is triggered!"); // invert trigger
        document.body.classList.toggle("scheme-dark"); // dark color scheme toggle
        return;
    } 
}
