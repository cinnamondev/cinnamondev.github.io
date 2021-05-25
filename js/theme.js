// Javascript color manager.
"use strict";

let theme = {
    // Sets the theme on load.
    "start": () => {
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
        localStorage.setItem('theme', name);
        document.documentElement.className = name;
    } 
}



