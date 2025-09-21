import Info from "./Info";

function Book({ children }) {     
  return (
    <div className="books-wrapper">
      {children}
    </div>
  );
}
export default Book;