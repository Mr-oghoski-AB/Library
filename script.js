const myLibrary = [];
const showBtn = document.querySelector('#header > button')
const dialog = document.querySelector('dialog')
const closebtn = document.querySelector('form button')


function book(tittle, author, pages,seen) {
  // the constructor...
  this.tittle = 'Tittle: ' + tittle;
  this.author = 'Author: ' + author;
  this.pages = 'Pages: ' + pages;
  this.seen = seen;
}

book.prototype.toggle = function(){
  if (this.seen =='Read'){
    this.seen = 'Not-Read'
  }
  else {
    this.seen = 'Read'
  }
  // console.log(this.seen);
  
}


function addBookToLibrary(tittle, author, pages,seen) {
  // take params, create a book then store it in the array
  const Book = new book (tittle, author, pages, seen)
  myLibrary.push(Book)
  
}

showBtn.addEventListener('click', () => {
  dialog.showModal()

  //refreashes the form
  document.querySelectorAll("form input[type=text], input[type=number]").forEach(input => input.value = '');
})

closebtn.addEventListener('click', (e) => {
  //prevents validation when inputs is null
  if (document.querySelector('input[type=text]').value != '' 
      && document.querySelector('input[type=number]').value != '' ) {
    dialog.close();
    console.log('close');
    
  }
  // elseif () {
  //   dialog.close()
  // }
})

dialog.addEventListener('submit', (e) => {
e.preventDefault()
let author = document.querySelector('#Author').value;
let tittle = document.querySelector('#Tittle').value;
let pages = document.querySelector('#pages').value;
let seen =  document.querySelector('input[name="read"]:checked').value;



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

      //creates the text element and appends
      for (let key in item) {
        if (item.hasOwnProperty(key)){
          //
          if (key.toString() === "seen"){
            let toggleContainer = document.createElement('div');
            let text = document.createElement('span');
            let button = document.createElement('button');

            button.textContent = 'Toggle'
            toggleContainer.appendChild(text);
            toggleContainer.appendChild(button);
            text.textContent = item[key]
            card.appendChild(toggleContainer);
            
            //toggle read
            button.addEventListener('click', () => {
              item.toggle();
              container.replaceChildren();
              loopArray();
              
            })
          }
          else{
            let text = document.createElement('p');
            text.textContent = item[key]
            card.appendChild(text);
          }
          
          
        }
      }

        //delete card 
        let remove = document.createElement('button');
        remove.setAttribute('class', 'delete');
        remove.textContent = 'Delete';
        remove.dataset.id = index;
        card.appendChild(remove)


        remove.addEventListener('click', () => {
          deleteCard(remove.dataset.id)
          console.log(remove.dataset.id);
          
        })


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



