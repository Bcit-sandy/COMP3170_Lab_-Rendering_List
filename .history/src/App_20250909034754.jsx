import Book from "./Book";

function App() {
  return (
    <div>
      <header>
       <h1>Book Catalog App</h1>
      </header>

      <main>
        <p>Welcome to the Book Catalog App! </p>
        <p>Please free to click at the "learn more" button to view detailed information of each book! </p>
        <Book cover="/" />
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



