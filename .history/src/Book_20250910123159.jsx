import Info from "./Info";

function Book(props) {
  return (
    <div>
      <div>
        <img src={props.cover} alt={props.alt} />
      </div>

      <p>{props.author}</p>
        <Info info={props.info} />
    </div>
  );
}
export default Book;