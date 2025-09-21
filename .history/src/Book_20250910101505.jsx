function Book(props) {
  return (
    <div>
      <div>
        <img src={props.cover} alt="Book Cover" />
      </div>

      <p>{props.author}</p>
      
      <button>Learn More</button>
    </div>
  );
}

export default Book;