const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');

const btn = document.querySelector('.btn');

const bookList = document.querySelector('#book-list');

btn.addEventListener('click', function (event) {
    // to prevent work of form input
    event.preventDefault();

    const titleName = title.value;
    const authorName = author.value;
    const yearName = year.value;

    // Basic validation

    if (titleName == '' || authorName == '' || yearName == '') {
        alert('Please type book title, author and edition.');
    }
    else {
        // creating new row
        const newRow = document.createElement('tr');

        // Creating new book
        const bookTitle = document.createElement('td');
        bookTitle.innerText = titleName;
        newRow.appendChild(bookTitle);

        // Creating new author
        const authorTitle = document.createElement('td');
        authorTitle.innerText = authorName;
        newRow.appendChild(authorTitle);

        // Creating new Edition
        const yearTitle = document.createElement('td');
        yearTitle.innerText = yearName;
        newRow.appendChild(yearTitle);

        bookList.appendChild(newRow);

        // clear the input box 
        title.value = '';
        author.value = '';
        year.value = '';

    }
})
