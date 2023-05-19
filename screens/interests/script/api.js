const content = document.getElementById('quoteContent');
const author = document.getElementById('quoteAuthor');
const tag = document.getElementById('quoteTags');



// connect to an api and send a request, pull result then change the p tag's content.

axios.get('https://api.quotable.io/random')
    .then(response => {
        content.textContent = response.data.content;
        author.textContent = response.data.author;
        tag.textContent = response.data.tag;
    })
    .catch(error => {
        // Handle the error
        console.error(error);
    });