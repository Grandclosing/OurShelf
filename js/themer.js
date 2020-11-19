
const THEME_LIGHT = 1;
const THEME_DARK = 2;

let theme = THEME_LIGHT; 

window.onload = function() {
    let storedTheme = localStorage.getItem('theme');

    // if localStorage doesn't have the item, getItem returns null;
    if(storedTheme) theme = storedTheme;

    loadTheme(); 

    // todo - add an event listener for the theme toggle button, add a toggle function
}

function loadTheme() {
    let rootStyle = document.documentElement.style;

    switch(theme) {
        case THEME_LIGHT:
            rootStyle.setProperty("--current-background", "#f2f2f2");
            rootStyle.setProperty("--current-foreground", "#464159");
            break;
        case THEME_DARK: 
            rootStyle.setProperty("--current-background", "#464159");
            rootStyle.setProperty("--current-foreground", "#f2f2f2");
            break;
    }
}