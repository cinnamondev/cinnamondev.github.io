// Javascript color manager.
"use strict";

let theme = {
    // Sets the theme on load.
    "start": (callback) => {
        // Set to respect the OS/browser scheme preference (if unset)
        if (localStorage.getItem('theme') === null) {
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                theme.set('dark');
            } else theme.set('light');
        } else if (localStorage.getItem('theme') === 'dark') {
            theme.set('dark');
        } else {
            theme.set('light');
        }
    },

    // Introduce the button element. Multiple buttons should use the 
    "addControls": (parentElement = document.body, style="top: 0; right: 0; position: fixed;font-size:12px;") => {
        let button = document.createElement('a');
        button.classList.add('themer');
        button.href="#"
        button.innerText = "THEME";                             // Text
        button.style = style;    // change this later.
        parentElement.appendChild(button);                      // Add button to document
        
        button.addEventListener("click", () => {theme.invert()}); // invert on button click
    }, 
    // Triggered manually or by the button. Switches color scheme.
    "invert": () => {
        console.log("Invert is triggered!"); // invert trigger


        if (localStorage.getItem('theme') === 'dark') {
            theme.set('light');
        } else { 
            theme.set('dark');
        }
    },
    "set": (name) => {
        let codeTheme = document.getElementById("rainbow-theme");
        let codes = {
            "dark": "https://cdn.jsdelivr.net/npm/rainbow-code@2.1.7/themes/css/obsidian.css",
            "light": "https://cdn.jsdelivr.net/npm/rainbow-code@2.1.7/themes/css/github.css"
        }
        localStorage.setItem('theme', name);
        codeTheme.href = codes[name]
        document.documentElement.className = name;
    } 
}



