// Handles theme change

// Targets theme button
const themeBtn = document.querySelector('.themeSwitcher');

// Switches theme icon and color scheme 
themeBtn.addEventListener('click', function(event) {
    event.preventDefault();

    
    if (document.querySelector('.navBarDark')) {
        
        themeBtn.innerHTML = "&#9728";

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

});