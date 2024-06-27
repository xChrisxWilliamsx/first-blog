// Handles theme change

// target theme button 
const themeBtn = document.querySelector('.themeSwitcher');

// get local Storage for theme
let themeVal = localStorage.getItem('theme');

// create function to save theme button to local storage as light or Dark
function themeCheck() {
    if (localStorage.getItem('theme') == "light") {
        localStorage.setItem('theme', 'dark');
    } else {
        localStorage.setItem('theme', 'light');
    }
}

// create function to check value of local theme key and change class based on selection
function themeSwitcher() {
    if (localStorage.getItem('theme') == "light") {
        themeBtn.innerHTML = "&#9728"
        let elements = document.querySelectorAll('[class*="Dark"]');
        elements.forEach(element => {
            let themeClass = element.className.split(" ");
            for(let i = 0; i < themeClass.length; i++) {
            if (themeClass[i].endsWith('Dark')) {
                themeClass[i] = themeClass[i].replace('Dark', 'Light');
            }
            }
            element.className = themeClass.join(" "); 
        });
    } else {
        themeBtn.innerHTML = "&#9789;";
        let elements = document.querySelectorAll('[class*="Light"]');
        elements.forEach(element => {
            let themeClass = element.className.split(" ");
            for(let i = 0; i < themeClass.length; i++) {
            if (themeClass[i].endsWith('Light')) {
                themeClass[i] = themeClass[i].replace('Light', 'Dark');
            }
            }
            element.className = themeClass.join(" ");
        });
    }
}

// add event listener for click and call both functions
themeBtn.addEventListener('click', function(event) {
    event.preventDefault();
    themeVal = localStorage.getItem('theme');
    themeCheck();        
    themeSwitcher();
});

// Saves theme preference on load/page reload
window.onload = (event) => {
    event.preventDefault();
    if (!localStorage.getItem('theme')) {
        localStorage.setItem('theme', 'light');
    }    
    themeSwitcher();
};