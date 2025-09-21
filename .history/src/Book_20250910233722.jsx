import Info from "./Info";

function Book(props) {
  return (
    <div>
      <div className="Book-cover">
        <img src={props.cover} alt={props.alt} />
      </div>

      <p>{props.author}</p>
      <Info info={props.info} />
    </div>
  );
}
export default Book;