function Card(props) {
  function handleClick() {
    props.onCardClick(props.card);
  }
  return (
    <article className="card">
      <img
        className="card__img"
        src={props.card.link}
        alt={props.card.name}
        onClick={handleClick}
      />
      <div className="card__info">
        <h2 className="card__name">{props.card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__button-like"
            aria-label="Кнопка лайка карточки"
          ></button>
          <p className="card__button-like-counter">{props.card.likes.length}</p>
        </div>
      </div>
      <button
        className="card__button-trash"
        aria-label="Кнопка удаления карточки"
      ></button>
    </article>
  );
}
export default Card;
