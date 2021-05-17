// Javascript color manager.
"use strict";

let color = {
    // Adds the event listener.
    "start": () => {
        if (localStorage.getItem('theme') === null) {
            // set the initial theme, respecting the OS theme.
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                color.set('dark');
                return;
            }
            color.set('light');
        }


        if (localStorage.getItem('theme') === 'dark') {
            color.set('dark');
        } else {
            color.set('light');
        }
    },
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


        if (localStorage.getItem('theme') === 'dark') {
            color.set('light');
        } else { 
            color.set('dark');
        }
    },
    "set": (name) => {
        localStorage.setItem('theme', name);
        document.documentElement.className = name;
    } 
}

color.start();


