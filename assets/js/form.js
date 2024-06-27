// Handles saving form to local storage

// Targets theme button
const subBtn = document.querySelector('.subContent');

// Allows user input from form to store locally
subBtn.addEventListener('click', function(event) {
    event.preventDefault();

    const titleInput = document.querySelector('#title').value;
    const contentInput = document.querySelector('#content').value;
    const nameInput = document.querySelector('#username').value;

    const newComment = {
        title: titleInput,
        content: contentInput,
        name: nameInput
    };

    let comments = localStorage.getItem('comments')

    if (comments) {
        comments = JSON.parse(comments);
    } else {
        comments = [];
    }

    comments.push(newComment);

    comments = JSON.stringify(comments);

    localStorage.setItem('comments', comments);

    window.location.href = "blog.html";
});    

