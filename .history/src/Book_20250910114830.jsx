import Link from "./Info";

function Book(props) {
  return (
    <div>
      <div>
        <img src={props.cover} alt={props.alt} />
      </div>

      <p>{props.author}</p>

      <Link/>
    </div>
  );
}
export default Book;