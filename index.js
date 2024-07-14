document.addEventListener('DOMContentLoaded', () => {
  fetchBooks();
});

function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then((json) => renderBooks(json))
    .catch((error) => console.error("Error fetching data: ", error));
}

function renderBooks(books) {
  const booksList = document.getElementById('books-list');
  books.forEach((book) => {
    const listItem = document.createElement('li');
    listItem.textContent = book.name;
    booksList.appendChild(listItem);
  });
}

fetchBooks().then((books) => {
  // The 5th book in the series
  console.log("5th book:", books[4]);

  fetch("https://anapioficeandfire.com/api/characters/1031")
    .then((resp) => resp.json())
    .then((character) => console.log("1031st character:", character))
    .catch((error) => console.error("Error fetching character: ", error));

  // Calculate the total number of pages of all the books
  const totalPages = books.reduce((sum, book) => sum + book.numberOfPages, 0);
  console.log("Total number of pages:", totalPages);
});
