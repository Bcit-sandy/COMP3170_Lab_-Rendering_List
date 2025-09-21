function Book(props) {
  return (
    <div>
      <div><a>{props.cover}</a></div>
      <p>{props.author}</p>
      <button>Learn More</button>
    </div>
  );
}

export default Book;