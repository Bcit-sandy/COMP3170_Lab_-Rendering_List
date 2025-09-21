import Info from "./Info";
import data from "../data.json";

function Book(props) {
  return (
    <div className="book-container">
      <div className="book-cover">
        <img className="book-cover-image" src={props.cover} alt={props.alt} />
      </div>

      <p className="book-author">{props.author}</p>
      <Info info={props.info} />
    </div>
  );
}
export default Book;