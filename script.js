const myLibrary = [];
const showBtn = document.querySelector('#header > button')
const dialog = document.querySelector('dialog')
const closebtn = document.querySelector('form button')


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

showBtn.addEventListener('click', () => {
  dialog.showModal()
})

closebtn.addEventListener('click', (e) => {
dialog.close();

})

dialog.addEventListener('submit', (e) => {
e.preventDefault()
const author = document.querySelector('#Author').value;
const tittle = document.querySelector('#Tittle').value;
const pages = document.querySelector('#pages').value;
const seen =  document.querySelector('#seen').value;


//removes children first
container.replaceChildren();

addBookToLibrary(tittle, author, pages,seen);
loopArray();


})


// console.table(myLibrary)
const container = document.getElementById('card-container');

const loopArray = () => {
    myLibrary.forEach((item,index) => {

      //display cards
      card = document.createElement('div');
      container.appendChild(card);
      card.dataset.id = index;

      for (const key in item) {
        let text = document.createElement('p');

        text.textContent = item[key]
        card.appendChild(text)
      }
        // console.table(item)

        //
        let remove = document.createElement('button');
        remove.setAttribute('class', 'delete');
        remove.textContent = 'Delete';
        remove.dataset.id = index;
        card.appendChild(remove)


        remove.addEventListener('click', () => {
          deleteCard(remove.dataset.id)
          console.log(remove.dataset.id);
          
        })

        // return card, remove
    })
}

//
function deleteCard (id){
  const element = document.querySelector(`[data-id="${id}"]`);
  if (element) {
      element.remove();
      myLibrary.splice(id,1);
}
}

