import Book from "./Book";
import New from "./New";

function App() {
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
            <New />
            <Book 
            cover="book1.png"
            alt="Cloud Native DevOps with Kubernetes" 
            author="by Justin Domingus, John Arundel"
            info="https://itbook.store/books/9781098116828"/>

            <Book 
            cover="book2.png"
            alt="NGINX Cookbook" 
            author="by Derek DeJonghe" 
            info="https://itbook.store/books/9781098126247"/>
          </div>
      </main>

      <footer className="app-footer">
        <p>&copy; Sandy Chow, Set G, 2025</p>
      </footer> 
    </div>

  )
}

export default App;



