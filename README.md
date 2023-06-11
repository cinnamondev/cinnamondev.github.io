# Website

Personal website

Partially inspired by a 'material you' look (largely nav and card.)

## Fonts
Headers/Logos - Quicksand
Text - Roboto

## Image crediting

### Lush 'Lord of Misrule'

[Image](https://unsplash.com/photos/ZLtZfjJfjj0) taken by [Gerda](https://unsplash.com/@gerdadesign) and provided by [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license)

### Lush 'Intergalactic'

[Image](https://unsplash.com/photos/hwmw123QZqI) taken by [Gerda](https://unsplash.com/@gerdadesign) and provided by [Unsplash](https://unsplash.com) under the [Unsplash License](https://unsplash.com/license)

### 'Guru Meditation'

[Image](https://commons.wikimedia.org/wiki/File:Guru_meditation.gif) pulled from WikiMedia commosn under PUBLIC DOMAIN. Uploaded by MooseBlaster. From Commodore Amiga.


### RP2040
[Image](https://commons.wikimedia.org/wiki/File:RP2040.jpg) pulled from WikiMedia commons under [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0). Author/Uploader is Phiarc.
Logo belongs to the Pi Foundation ("Raspberry Pi Logo").

### Usage

In your CSS, make two selectors for ID's
```css
#a {
    /*...*/
}

#b {
    /*...*/
}
```

Use these methods (requires page ready)

`theme.current()`: Meh. It's there.

`theme.default()`: Uses window.matchMedia to determine a system preferred theme.

`theme.invert()`: Swaps the currently slotted theme with the other. Only works for the current configuration currently, which has 2 themes. Potentially could be improved

`theme.set()`: Sets the theme according to an input. Should not usually be used, but its there

`theme.removePreference()`: When theme.set() is given it will save to the localstorage. This calls to remove the item from local storage completely and calls `theme.default()`