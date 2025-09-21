import Info from "./Info";

function Book({data}) {
  return (
    <div className="book-container">
      <div className="book-cover">
        <img className="book-cover-image" src={data.image} alt={data.title} />
      </div>

      <p className="book-price">{data.price}</p>
      <Info info={data.url} />
    </div>
  );
}
export default Book;