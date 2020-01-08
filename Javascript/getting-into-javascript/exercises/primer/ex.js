// TODO: define addFavoriteBook(..) function
function addFavoriteBook(bookName) {
  if (!bookName.toLowerCase().includes("great")) {
    favoriteBooks.push(bookName);
  }
}
// TODO: define printFavoriteBooks() function
function printFavoriteBooks() {
  console.log(`Favourite books: ${favoriteBooks.length}`);
  for (let book in favoriteBooks) {
    console.log(`${book}`);
  }
}
var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// TODO: print out favorite books
printFavoriteBooks();
