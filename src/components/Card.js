function Card({card, onCardClick}) {
  function handleClick() {
    onCardClick(card);
  }
  return (
    <article className="card">
      <img
        className="card__img"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="card__info">
        <h2 className="card__name">{card.name}</h2>
        <div className="card__like-container">
          <button
            className="card__button-like"
            aria-label="Кнопка лайка карточки"
          ></button>
          <p className="card__button-like-counter">{card.likes.length}</p>
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
