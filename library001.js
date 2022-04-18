
function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read

    this.info = function() {
        return `${this.title} by ${this.author}, ${this.pages} pages, read: ${this.read}`
    }
}

function addBookToLibrary(title, author, pages, read) {
    library.push(new Book(title, author, pages, read))
    displayEachBook001()
}

function displayEachBook001() {
    document.querySelector('.content').innerHTML = ''    
    for (let i in library) {
        let card = document.createElement('div')
        card.classList.add('card')

        let cardInfo = document.createElement('div')
        cardInfo.classList.add('cardInfo')
        cardInfo.innerHTML = library[i].info()

        let cardOptions = document.createElement('div')
        cardOptions.classList.add('cardOptions')

        let del = document.createElement('button')
        del.classList.add('deleteBtn')
        del.innerHTML = 'Remove Book'
        del.addEventListener('click', () => {
            removeBook(library[i])
        })

        let toggleRead = document.createElement('button')
        toggleRead.classList.add('toggleReadBtn')
        toggleRead.innerHTML = 'Toggle Read Status'
        toggleRead.addEventListener('click', () => {
            toggleReadStatus(library[i])
        })

        cardOptions.appendChild(toggleRead)
        cardOptions.appendChild(del)

        card.appendChild(cardInfo)
        card.appendChild(cardOptions)

        document.querySelector('.content').appendChild(card)
    }
}

function submitter() {
    title = document.querySelector("#title").value
    author = document.querySelector("#author").value
    pages = document.querySelector('#pages').value
    read = document.querySelector("form").read.value

    addBookToLibrary(title, author, pages, read)
    myContainer.classList.add('hidden')
    document.querySelector("form").reset()
}

function removeBook(book) {
    library.splice(library.indexOf(book), 1)
    displayEachBook001()
}

function toggleReadStatus(book) {
    if (book.read == "false") {
        book.read = "true"
    } else if (book.read == "true") {
        book.read = "false"
    }
    displayEachBook001()
}

const myContainer = document.querySelector('#container')

const addBook = document.createElement('button')
addBook.classList.add('addBook')
addBook.innerHTML = 'NEW BOOK'
addBook.addEventListener("click", () => {
    console.log(myContainer.classList)
    myContainer.classList.toggle("hidden")
})
document.querySelector('.header').append(addBook)

const submitBtn = document.createElement('button')
submitBtn.classList.add('submitBtn')
submitBtn.innerHTML = 'Add to Library'
submitBtn.addEventListener("click", () => {
    submitter()
})
myContainer.appendChild(submitBtn)

let library = []

addBookToLibrary("The Deluge", "Henryk Sienkiewicz", 895, "false")
addBookToLibrary("The Godfather", "Mario Puzzo", 448, "true")
addBookToLibrary("The Dogs of War", "Frederick Forsyth", 408, "true")
addBookToLibrary("Fahrenheit 451", "Ray Bradbury", 256, "false")
