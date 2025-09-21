function Book(props) {
  return (
    <div>
      <div>
        <img src={props.cover} alt={props.alt} />
      </div>

      <p>{props.author}</p>

      <button> <a href={props.link} target="_blank">Learn More </a> </button>
    </div>
  );
}

export default Book;