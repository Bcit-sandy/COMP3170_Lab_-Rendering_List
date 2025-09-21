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
          <Book cover="123" alt="testing" author="By ABC"/>
          <Book cover="456" alt="testing" author="By EFG"/>
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



