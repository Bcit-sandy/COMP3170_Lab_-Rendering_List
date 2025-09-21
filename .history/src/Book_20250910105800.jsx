function Book(props) {
  return (
    <div>
      <div>
        <img/>
      </div>

      <p>{props.author}</p>

      <button>Learn More</button>
    </div>
  );
}

export default Book;