const myLibrary = [];

function book(tittle, author, pages,seen) {
  // the constructor...
  this.tittle = tittle;
  this.author = author;
  this.pages = pages;
  this.seen = seen;
}


function addBookToLibrary(tittle, author, pages,seen) {
  // take params, create a book then store it in the array
  const Book = new book (tittle, author, pages, seen)
  myLibrary.push(Book)
  
}


//manually added books to library
addBookToLibrary("name" ,'james',"page","read")
addBookToLibrary("name" ,'james',"page","read")
addBookToLibrary("name" ,'james',"page","read")
addBookToLibrary("name" ,'james',"page","read")
addBookToLibrary("name" ,'james',"page","read")

// console.table(myLibrary)

const loopArray = () => {
    myLibrary.forEach((item) => {
        console.table(item)
    })
}


loopArray()

