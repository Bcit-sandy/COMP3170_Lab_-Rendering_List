function Book(props) {
  return (
    <div>
      <div>
        <h2> Book Title </h2>
      </div>

      <p>{props.author}</p>

      <button>Learn More</button>
    </div>
  );
}

export default Book;