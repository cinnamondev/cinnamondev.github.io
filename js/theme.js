// Simple JS Themes! (Supports 2 themes)
// Cinnamondev, licensed under Apache 2.0

// Simply make your color schemes under either a class called b for dark or class called a for light.
"use strict";
let theme = {
    "current": () => {return localStorage.getItem(theme.config.location);},
    "Set": (value) => {
        localStorage.setItem('cinnamondev_theme', value);
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

    "SetToPreferred": () => {
        if ( localStorage.getItem(theme.config.location) == null) {
            // Attempt to discover by system preference. if all else fails it will revert to Theme B.
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme:dark)').matches) {
                theme.Set(0);
            } else {theme.Set(1);}
        }
    },

    "Invert": () => {
        theme.Set(
            parseInt(localStorage.getItem('cinnamondev_theme')) ^ 1 // XOR to swap the values :)
            );
    },

    "RemovePreference": () => {
        localStorage.removeItem('cinnamondev_theme');
        theme.SetToPreferred();
    }
}