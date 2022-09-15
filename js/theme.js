// Simple JS Themes! (Supports 2 themes)
// Cinnamondev, licensed under Apache 2.0

// Simply make your color schemes under either a class called b for dark or class called a for light.
"use strict";

let theme = {
    "current": () => {return localStorage.getItem('cinnamondev_theme')}, // if you so desire
    "default": () => {
        document.getElementsByTagName("html")[0].classList.add("notransition");
        document.getElementById("headerUnder").classList.add("notransition");
        let state = localStorage.getItem('cinnamondev_theme');
        if (state != "1" && state != "0" ) { // why tf is it a string????
            // attempt to discover value by system preference
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
                theme.set(1);
            } else {theme.set(0);}
        } else {
            theme.set(state);
        }
        document.getElementsByTagName("html")[0].classList.remove("notransition");
        document.getElementById("headerUnder").classList.remove("notransition");
    },
    "invert": () => {
        theme.set(
            parseInt(localStorage.getItem('cinnamondev_theme')) ^ 1 // XOR to swap the values :)
            );
    },
    "set": (value) => {
        localStorage.setItem('cinnamondev_theme', value);
        value = parseInt(value);
        // dumb css
        let state = "a";
        switch(parseInt(value)) {
            case 0:
                state = "a";
                break;
            case 1:
                state = "b";
                break;
            default:
                state = "a";
                console.warn("Theme Manager - invalid theme was set! Defualted to light...");
                break;
        }
        console.log("Theme set to " + value)
        document.documentElement.id = state;
    },
    "removePreference": () => {
        localStorage.removeItem('cinnamondev_theme');
        theme.default();
    }
}