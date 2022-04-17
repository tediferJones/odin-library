
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
    tempBook = new Book(title, author, pages, read)
    library.push(tempBook)
    //displayBook(tempBook)
    displayEachBook001()
}

function displayEachBook001() {
    //removeOldCards()
    document.querySelector('.content').innerHTML = ''    
    for (let i in library) {
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = library[i].info()

        let del = document.createElement('button')
        del.classList.add('deleteBtn')
        del.innerHTML = 'Remove Book'
        del.addEventListener('click', () => {
            /* this button should activate a function that takes the book 
            object as an argument, and removes that object from the library array */
            /* check if objects can be compared in an example script*/
            console.log(library[i])
        })
        card.appendChild(del)

        myContent.appendChild(card)
    }
}

// function displayBook(book) {
//     let card = document.createElement('div')
//     card.classList.add('card')
//     card.innerHTML = book.info()
//     myContent.appendChild(card)
// }

function submitter() {
    title = document.querySelector("#title").value
    author = document.querySelector("#author").value
    pages = document.querySelector('#pages').value
    read = document.querySelector('#read').value

    //checkInputs()
    addBookToLibrary(title, author, pages, read)
    myContainer.classList.add('hidden')
    console.log(library)
    
    clearInputs()
}

function clearInputs() {
    const options = ['title', 'author', 'pages', 'read']
    for (let i in options) {
        document.querySelector(`#${options[i]}`).value = ''
    }
}

let library = []

const myDoc = document.querySelector('body')
//const myForm = document.querySelector('form')
const myHeader = document.querySelector('.header')
const myContainer = document.querySelector('#container')
const myContent = document.querySelector('.content')

const addBook = document.createElement('button')
addBook.classList.add('addBook')
addBook.innerHTML = 'NEW BOOK'
addBook.addEventListener("click", () => {
    myContainer.classList.remove("hidden")
})
myHeader.append(addBook)

const submitBtn = document.createElement('button')
submitBtn.classList.add('submitBtn')
submitBtn.innerHTML = 'SUBMIT BTN'
submitBtn.addEventListener("click", () => {
    submitter()
})
myContainer.appendChild(submitBtn)


const deleteBtn = document.createElement('button')


addBookToLibrary("Richard", "richard", 69, false)
addBookToLibrary("someBook", 'someAuthor', 7, true)
addBookToLibrary("Book", "Author", 7, "nope")
// addBookToLibrary("Richard", "richard", 69, false)
// addBookToLibrary("someBook", 'someAuthor', 7, true)
// addBookToLibrary("Book", "Author", 7, "nope")
// addBookToLibrary("Richard", "richard", 69, false)
// addBookToLibrary("someBook", 'someAuthor', 7, true)
// addBookToLibrary("Book", "Author", 7, "nope")
// addBookToLibrary("Richard", "richard", 69, false)
// addBookToLibrary("someBook", 'someAuthor', 7, true)
// addBookToLibrary("Book", "Author", 7, "nope")

// addBookToLibrary("Richard", "richard", 69, false)
// addBookToLibrary("someBook", 'someAuthor', 7, true)
// addBookToLibrary("Book", "Author", 7, "nope")
// addBookToLibrary("Richard", "richard", 69, false)
// addBookToLibrary("someBook", 'someAuthor', 7, true)
// addBookToLibrary("Book", "Author", 7, "nope")
// addBookToLibrary("Richard", "richard", 69, false)
// addBookToLibrary("someBook", 'someAuthor', 7, true)
// addBookToLibrary("Book", "Author", 7, "nope")
// addBookToLibrary("Richard", "richard", 69, false)
// addBookToLibrary("someBook", 'someAuthor', 7, true)
// addBookToLibrary("Book", "Author", 7, "nope")

// addBookToLibrary("Richard", "richard", 69, false)
// addBookToLibrary("someBook", 'someAuthor', 7, true)
// addBookToLibrary("Book", "Author", 7, "nope")
// addBookToLibrary("Richard", "richard", 69, false)
// addBookToLibrary("someBook", 'someAuthor', 7, true)
// addBookToLibrary("Book", "Author", 7, "nope")
// addBookToLibrary("Richard", "richard", 69, false)
// addBookToLibrary("someBook", 'someAuthor', 7, true)
// addBookToLibrary("Book", "Author", 7, "nope")
// addBookToLibrary("Richard", "richard", 69, false)
// addBookToLibrary("someBook", 'someAuthor', 7, true)
// addBookToLibrary("Book", "Author", 7, "nope")

//console.log('################# END OF PROGRAM ##############')

// const test = document.createElement('button')
// test.innerHTML = 'TEST'
// test.addEventListener('click', () => {
//     removeOldCards()
// })
// myDoc.appendChild(test)