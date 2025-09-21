function Book(props) {
  return (
    <div>
      <div>(props.cover)</div>
      <p>{props.author}</p>
      <button>Learn More</button>

      <p>This is where detailed information about each book will be displayed.</p>
    </div>
  );
}

export default Book;