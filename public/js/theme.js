// Theme Manager Cinnamondev REV3
/**

let theme = new ThemeService("myConstant");
...
**/
class ThemeService {
    /**
     * Creates a new ThemeService for tracking a particular key and parent.
     * @remarks Generally only one instance should exist. Multiple instances should be avoided. Will also trigger the default method.
     * @param localStorageItem The "key" that ThemeService uses to store persistently the theme state. Should be constant.
     * @param parent The element that the styling is applied to. This should be reflected in your stylesheets. Default is document.body.
     *
     */
    constructor(localStorageItem, parent = document.body) {
        this.parent = document.body;
        this.localStorageItem = localStorageItem;
        this.default();
        console.log("Theme Manager REV3. Defaulted to theme number", this.theme);
    }
    /**
     * Retrieve the current "state"
     * @returns The value of the current theme (0=light,1=dark)
     */
    retrieveState() {
        switch (window.localStorage.getItem(this.localStorageItem)) {
            case "0":
                return 0;
                break;
            case "1":
                return 1;
                break;
            default: throw new Error('Unknown state found...');
        }
    }
    /**
     * Updates the current state in localStorage and the classlists.
     * @param theme The theme number (0=light,1=dark)
     * @returns The new theme number (hopefully)
     */
    setState(theme) {
        this.theme = theme;
        switch (theme) {
            case 0:
                window.localStorage.setItem(this.localStorageItem, "0");
                this.parent.classList.add("light");
                this.parent.classList.remove("dark");
                break;
            case 1:
                window.localStorage.setItem(this.localStorageItem, "1");
                this.parent.classList.add("dark");
                this.parent.classList.remove("light");
                break;
        }
        return theme;
    }
    /**
     * Uses CSS media queries to try to determine the default color scheme.
     * @returns The theme that was set.
     */
    default() {
        let theme = parseInt(localStorage.getItem(this.localStorageItem));
        if (theme != 1 && theme != 0) theme = window.matchMedia("(prefers-color-scheme: light)").matches ? 0 : 1;
        return this.setState(theme);
    }
    /**
     * Inverts the theme (1 <--> 0).
     * @returns The new theme state
     */
    invert() {
        let theme = (this.theme ^ 1); // uhhhh.
        return this.setState(theme);
    }
}