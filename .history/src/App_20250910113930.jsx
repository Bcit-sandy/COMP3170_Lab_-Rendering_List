import Book from "./Book";
import New from "./New";

function App() {
  return (
    <div>
      <header>
       <h1>Book Catalog App</h1>
      </header>

      <main>
        <p>Welcome to the Book Catalog App! </p>
        <p>Please free to click at the "Learn More" button to view detailed information of each book! </p>
          <div>
          <New />
          <Book cover="https://itbook.store/img/books/9781098116828.png" author="By Justin Domingus, John Arundel"/>
          <Book cover="https://itbook.store/img/books/9781098126247.png" author="By Derek DeJonghe"/>
          </div>
      </main>

      <div>

      </div>

      <footer>
        <p>&copy; Sandy Chow, Set G, 2025</p>
      </footer> 
    </div>

  )
}

export default App;



