import Book from "./Book";
import New from "./New";

function App() {
  return (
    <div>
      <header className="App-header">
       <h1 className="App-name">Book Catalog App</h1>
      </header>

      <main className="App-main">
        <div className="App-main-content">
          <p className="App-main-content-text">Welcome to the Book Catalog App! </p>
          <p className="App-main-content-text">Please free to click at the "Learn More"to view detailed information of each book! </p>
        </div>

        <div className="">
            <New />
            <Book 
            cover="book1.png"
            alt="Cloud Native DevOps with Kubernetes" 
            author="By Justin Domingus, John Arundel"
            info="https://itbook.store/books/9781098116828"/>

            <Book 
            cover="book2.png"
            alt="NGINX Cookbook" 
            author="By Derek DeJonghe" 
            info="https://itbook.store/books/9781098126247"/>
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



