let theme;
if((theme = localStorage.getItem("theme"))!=null) {
    switch (theme) {
        case 'd':
        case 'l':
            document.documentElement.setAttribute('data-theme', theme);
            break;
        default:
            localStorage.removeItem("theme"); // weird state?
    }
}