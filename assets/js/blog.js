// This file handles retrieving Local Storage and posting blog post

// Retrieves local Storage
let commentsPost = localStorage.getItem('comments');

// Converts comments back to usable code
commentsPost = JSON.parse(commentsPost);

// creates post for each object saved to local Storage
commentsPost.forEach(comment => {
    
    //Targets html class to insert html
    const blogPost = document.querySelector(".posts");
    
    // Inserts HTML template
    blogPost.insertAdjacentHTML("beforeend", `
        <div class="postBox postBoxLight">
            <h2 class="postTitle postTitleLight">
                ${comment.title}
            </h2>
            <p class="postContent postContentLight">
                ${comment.content}
            </p>
            <div class="postUser postUserLight">
                <p>
                    Posted by: ${comment.name}
                </p>
            </div>
    
        </div>`
    );
});