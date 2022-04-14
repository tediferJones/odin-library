
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return `${title} by ${author}, ${pages} pages, read: ${read}`
    }
}

function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read))
}

function displayEachBook001(library) {
    for (let i in library) {
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = library[i].info()
        myDoc.appendChild(card)
    }
}

const myDoc = document.querySelector('#container')
const myForm = document.querySelector('form')
const addBook = document.createElement('button')
addBook.innerHTML = 'NEW BOOK'
addBook.addEventListener("click", () => {
    myForm.classList.remove("hidden")
})
myDoc.appendChild(addBook)

let library = []

addBookToLibrary("yeet", "richard", 69, true)
addBookToLibrary("poop", "McPooperson", 999, false)
 
displayEachBook001(library)
