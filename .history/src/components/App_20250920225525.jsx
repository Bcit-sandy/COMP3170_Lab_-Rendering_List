import Book from "./Book";
import BookItem from "./BookItem";
import Add from "./Add";
import data from "../data/books.json";

function App() {
  function getBooks(data) {
    return <BookItem key={data.isbn13} data={data} />
  }

  return (
    <div>
      <header className="app-header">
       <h1 className="app-name">Book Catalog</h1>
      </header>

      <main className="app-main">
        <div className="app-main-content">
          <p className="app-main-content-text">Welcome to the Book Catalog! 📘  </p>
          <p className="app-main-content-text">Feel free to click at <span className="learn-more">Learn More</span> to view detailed information of each book! 📖 </p>
        </div>

        <div className="app-content-container">
            <Add />
            <Book>
              {data.map(getBooks)}
            </Book>

          </div>
      </main>

      <footer className="app-footer">
        <p>&copy; Sandy Chow, Set G, 2025</p>
      </footer> 
    </div>

  )
}

export default App;



