// handles saving form to local storage

const subBtn = document.querySelector('.subContent');

// Allows user input from form to store locally
subBtn.addEventListener('click', function(event) {
    event.preventDefault();
    
    const titleInput = document.querySelector('#title').value;
    const contentInput = document.querySelector('#content').value;
    const nameInput = document.querySelector('#username').value;
    
    localStorage.setItem('title', titleInput);
    localStorage.setItem('content', contentInput);
    localStorage.setItem('name', nameInput);

    window.location.href = "blog.html";
});