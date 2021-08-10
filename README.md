# Website

Simple personal website. Font is IBM Plex Serif.

## Hover links
[Code](js/hover.js)

Allows for the previewing of linked site's metadata without any extra work.

### Usage

1. Make sure you have this line or similar in a javascript file somewhere
(Ensure that this script runs after the DOM has rendered)
`document.addEventListener("DOMContentLoaded", (e) => { hover.init(); })`

2. In your CSS somewhere make sure that you declare variables for the coloring of the popups.
ie:
```css
:root {
    --hoverjs-bg: #eee;
    --hoverjs-txt: #444;
}
```
Adjust to your preferences.
If you want to have a similar configuration to this site, use in conjunction with the variable areas for [themes](#Theming)

3. Wherever theres a `<a>`, and it's not a relative link (not foolproof!), there will be a metadata pop-up on hovers!

4. To exclude a `<a>` from this functionality, add the class "nohover" to the `<a>`.

P.S.: If you want to change the language or placeholder image used, you need to change:
```
hover.titleNotFound
hover.descriptionNotFound
hover.placeholderImage
```
to whichever wording you please.

## Theming
[Code](js/theme.js)

Allows for the switching between two color themes (typically a light/dark theme) with system preference detection.

### Usage

1. In your CSS, make two selectors for ID's
```css
#a {
    /*...*/
}

#b {
    /*...*/
}
```

2. Use CSS variables (`--foo: bar;`) to fill in info (ie: colors, fonts, whatever)

3. Run `theme.default();` on page load

4. To change the theme, you need to make something that triggers `theme.invert();`. If you ever need it, you can also get the current theme number from `theme.current();`.

// Simple JS Themes! (Supports 2 themes)
// Cinnamondev, licensed under Apache 2.0

// Simply make your color schemes under either a class called b for dark or class called a for light.
"use strict";