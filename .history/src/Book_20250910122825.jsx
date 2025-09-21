

function Book(props) {
  return (
    <div>
      <div>
        <img src={props.cover} alt={props.alt} />
      </div>

      <p>{props.author}</p>

      <div> 
        <p>
            <a href={props.info} target="_blank"> Learn More </a>
            </p> 
        </div>
    </div>
  );
}
export default Book;