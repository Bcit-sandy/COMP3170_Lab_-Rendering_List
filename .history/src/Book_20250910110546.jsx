function Book(props) {
  return (
    <div>
      <div>
       <img src="https://via.placeholder.com/150" alt="Book Cover" />
      </div>

      <p>{props.author}</p>

      <button>Learn More</button>
    </div>
  );
}

export default Book;