// Simple JS Themes! (Supports 2 themes)
// Cinnamondev, licensed under Apache 2.0

// Simply make your color schemes under either a class called 0 for dark or class called 1 for light.
"use strict";

let theme = {
    "current": () => {return localStorage.getItem('theme')}, // if you so desire
    "default": () => {
        let state = localStorage.getItem('theme');
        if (state === null ) {
            // attempt to discover value by system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
                theme.set(0);
            } else {theme.set(1);}
        }
        theme.set(state);
    },
    "invert": () => {
        theme.set(
            parseInt(localStorage.getItem('theme')) ^ 1 // XOR to swap the values :)
            );
    },
    "set": (value) => {
        localStorage.setItem('theme', value);
        document.documentElement.className = value;
    }
}