
let library = []
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
    // displayEachBook001(library)
    //console.log(library)
    //shitDisplay(library)
}

// Garbage
function displayEachBook001(library) {
    //removeOldCards()
    for (let i in library) {
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = library[i].info()
        myDoc.appendChild(card)
    }
}

function shitDisplay(library) {
    let card = document.createElement('div')
    card.classList.add('card')
    card.innerHTML = library[library.length - 1].info()
    myDoc.appendChild(card)
}

function submitter() {
    title = document.querySelector("#title").value
    author = document.querySelector("#author").value
    pages = document.querySelector('#pages').value
    read = document.querySelector('#read').value
    console.log(`Title: ${title}, Author: ${author}, Pages: ${pages}, Read: ${read}`)
    console.log(`TYPES: ${typeof(title)} ${typeof(author)} ${typeof(pages)} ${typeof(read)}`)
    addBookToLibrary("penis", "penis", "penis", "penis")
    //addBookToLibrary(title, author, pages, read)
    //console.log(addBookToLibrary(title, author, pages, read))
    console.log(library)
    //displayEachBook001(library)  
}

function penisbook() {
    a = 'penis'
    b = a
    c = a
    d = a
    addBookToLibrary(a,b,c,d)
    addBookToLibrary('richard', 'dick')
}

const myDoc = document.querySelector('#container')
const myForm = document.querySelector('form')

const addBook = document.createElement('button')
addBook.innerHTML = 'NEW BOOK'
addBook.addEventListener("click", () => {
    myForm.classList.remove("hidden")
})
myDoc.appendChild(addBook)

// delete this, revert to html button (not input), make new JS file and rewrite everything
const stupidfuckingbtn = document.createElement('button')
stupidfuckingbtn.innerHTML = 'Im a stupid fucking button'
stupidfuckingbtn.addEventListener("click", submitter())
myForm.appendChild(stupidfuckingbtn)

//penisbook()
//addBookToLibrary("yeet", "richard", 69, true)
//addBookToLibrary("poop", "McPooperson", 999, false)
//addBookToLibrary("Deluge", "idk", 911, "nope")

displayEachBook001(library)

console.log('######## END ########')