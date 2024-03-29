---
layout: redirect
title:  "Reaction Timer Coursework"
priority: 2
type: "School"
repositoryURL: "https://github.com/cinnamondev/ReactionTimer"
redirect_from: 
    - /projects/reactiontimer
    - /projects/electronicgame
    - /projects/picassembly
    - /electronicgame
    - /reactiontimer
    - /picassembly
non_gem_redirect_url: /about#ReactionTimerCoursework
---
For my Electronics A-Level, we were tasked to design 2 electronic systems of our own choice and design.

For our first electronic system, I designed a guessing game using a PIC16F88. The task of the game is to
guess a randomly selected number. Once a number is guessed, the game will indicate using LEDs if you won or lost, and if so, by more or less.

RNG is only pseudo-random, as there is a limitation on available sources of 'randomness'. So, instead, we constantly increment a value while waiting for a button press.
Whatever this value is when the button is pressed becomes that particular digit.

Input to the system is done by a 4x3 keypad matrix, which is scanned repeatedly while waiting for an input.
All code was written in MPASM assembly. This lets us take advantage of the hardware, as we are particularly strained for resources on such a microcontroller.
