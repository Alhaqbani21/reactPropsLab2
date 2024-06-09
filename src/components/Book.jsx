function Book(props) {
  return (
    <>
      <div class="card" style={{ width: '20rem' }}>
        <img src={props.imgSrc} class="card-img-top" alt="image" />
        <div class="card-body">
          <h5 class="card-title">{props.title}</h5>
          <p class="card-text">{props.textContent}</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{props.item1}</li>
          <li class="list-group-item">{props.item2}</li>
          <li class="list-group-item">{props.item3}</li>
        </ul>
        <div class="card-body">
          <a href={props.link} class="card-link">
            See the book
          </a>
        </div>
      </div>
    </>
  );
}

export default Book;
