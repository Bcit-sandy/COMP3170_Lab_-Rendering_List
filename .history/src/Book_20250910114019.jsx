function Book(props) {
  return (
    <div>
      <div>
        <img src={props.cover} alt={props.alt} />
      </div>

      <p>{props.author}</p>

      <button href={props.link}>Learn More</button>
    </div>
  );
}

export default Book;