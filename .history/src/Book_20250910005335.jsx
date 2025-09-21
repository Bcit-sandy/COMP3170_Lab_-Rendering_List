function Book(props) {
  return (
    <div>
      <img>(props.cover)</img>
      <p>{props.author}</p>
      <button>Learn More</button>
    </div>
  );
}

export default Book;