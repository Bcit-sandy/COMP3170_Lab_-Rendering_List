import Info from "./Info";
import data from "../data.json";

function Book(data) {
  return (
    <div className="book-container">
      <div className="book-cover">
        <img className="book-cover-image" src={data.image} alt={data.alt} />
      </div>

      <p className="book-price">{data.price}</p>
      <Info info={data.info} />
    </div>
  );
}
export default Book;