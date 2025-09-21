function Book(props) {
  return (
    <div>
      <div>(props.cover)</div>
      <p>{props.author}</p>
      <button>Learn More</button>
    </div>
  );
}

export default Book;