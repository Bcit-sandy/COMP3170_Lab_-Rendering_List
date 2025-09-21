

function Book(props) {
  return (
    <div>
      <div>
        <img src={props.cover} alt={props.alt} />
      </div>

      <p>{props.author}</p>

      <div> 
            <a href={props.info} target="_blank"> Learn More </a> 
        </div>
    </div>
  );
}
export default Book;