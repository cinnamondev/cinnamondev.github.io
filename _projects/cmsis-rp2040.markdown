---
layout: redirect
title:  "cmsis-rp2040"
priority: 1
type: "Personal"
images:
    rp2040:
        url: /assets/images/RP2040.jpg
        alt: "RP2040 Chip"
repositoryURL: "https://github.com/cinnamondev/cmsis-rp2040"
redirect_from: 
    - /projects/cmsis-rp2040
    - /cmsis-rp2040
non_gem_redirect_url: /about#cmsis-rp2040
---
Custom scripts and template project structure for a project using the Pico SDK
in tandem with CMSIS csolutions - allowing us to use CMSIS/KEIL Packs, for
improved interoperability & convenience.

Additional branch provides a custom C driver for the ILI9341 and XPT2046,
which can be used with LVGL.

Can be used as a starting template for other RP2040 projects-
more info can be found in the project's README.

2 templates are provided:

- [Base (master)](https://github.com/cinnamondev/cmsis-rp2040)\
Template with a blinking LED demo.
- [LVGL (demo-lvgl)](https://github.com/cinnamondev/cmsis-rp2040/tree/demo-lvgl)\
LVGL Demo using custom ILI9341 + XPT2046 driver (XPT2046 driver still has some bugs to work out.)
