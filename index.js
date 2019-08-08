function fetchBooks() {
  return fetch("https://anapioficeandfire.com/api/books")
    .then(resp => resp.json())
    .then(json => renderBooks(json))
}

function renderBooks(json) {
  const main = document.querySelector('main')
  json.forEach(book => {
    const h2 = document.createElement('h2')
    h2.innerHTML = `<h2>${book.name}</h2>`
    main.appendChild(h2)
  })
}

// function find_5th_Book(, {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//   },
//   body: JSON.stringify({
//     title: 'The Fifth Season',
//     author: 'N.K. Jemisin',
//     img: 'https://images-na.ssl-images-amazon.com/images/I/61XfS2XCw3L._SL160_SX135_.jpg'
//   })
// });

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks()
})