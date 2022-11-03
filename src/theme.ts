// Theme Manager Cinnamondev REV3 - Typescript boogaloo
/**

aft doc load:
let theme = new ThemeService("myConstant");

/
**/

type Theme = 0 | 1;
class ThemeService {
    theme: Theme = 1;               // 0 or 1. (Light or dark theming)
    parent: Element;            // Parent element to apply classes to (likely body)
    localStorageItem: string;   // where local storage goes.

    /**
     * Creates a new ThemeService for tracking a particular key and parent. 
     * @remarks Generally only one instance should exist. Multiple instances should be avoided. Will also trigger the default method.
     * @param localStorageItem The "key" that ThemeService uses to store persistently the theme state. Should be constant.
     * @param parent The element that the styling is applied to. This should be reflected in your stylesheets. Default is document.body.
     *
     */
    public constructor(localStorageItem: string, parent: Element = document.body) {
        this.parent = parent;
        this.localStorageItem = localStorageItem;
        this.default();
        console.log("Theme Manager REV3. Defaulted to theme number", this.theme)
    }

    /**
     * Retrieve the current "state"
     * @returns The value of the current theme (0=light,1=dark)
     */
    public retrieveState(): Theme {
        switch (window.localStorage.getItem(this.localStorageItem)) {
            case "0": return 0;break;
            case "1": return 1;break;
            default: throw new Error('Unknown state found...');
        }
    }

    /**
     * Updates the current state in localStorage and the classlists.
     * @param theme The theme number (0=light,1=dark)
     * @returns The new theme number (hopefully)
     */
    public setState(theme: Theme): Theme {
        this.theme = theme;
        switch (theme) {
            case 0:
                window.localStorage.setItem(this.localStorageItem, "0");
                this.parent.classList.add("light");this.parent.classList.remove("dark");
                break;
            case 1:
                window.localStorage.setItem(this.localStorageItem, "1");
                this.parent.classList.add("dark");this.parent.classList.remove("light");
                break;
        }
        return theme;
    }

    /**
     * Uses CSS media queries to try to determine the default color scheme.
     * @returns The theme that was set.
     */
    public default(): Theme {
        let theme: Theme = window.matchMedia("(prefers-color-scheme: light)").matches ? 0:1;
        return this.setState(theme);
    }

    /**
     * Inverts the theme (1 <--> 0).
     * @returns The new theme state
     */
    public invert() : Theme {
        let theme: Theme = (this.theme ^ 1) as Theme; // uhhhh.
        return this.setState(theme);
    }
}