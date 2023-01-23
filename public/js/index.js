const STORAGEKEY = "cinnamondev_website_1916";
let theme;

document.addEventListener("DOMContentLoaded", () => {
    theme = new ThemeService(STORAGEKEY);
});
