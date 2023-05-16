import React from "react";

function ImagePopup(props) {
  return (
    <section
      className={`popup popup-image ${props.card.name ? "popup_opened" : ""}`}
    >
      <div className="popup-image__container">
        <figure className="popup-image__figure">
          <img
            className="popup-image__large-image"
            alt={props.card.name}
            src={props.card.link}
          />
          <figcaption className="popup-image__title-image">
            {props.card.name}
          </figcaption>
        </figure>
        <button
          className="popup__button-close"
          type="button"
          aria-label="Кнопка закрытия"
          onClick={props.onClose}
        ></button>
      </div>
    </section>
  );
}

export default ImagePopup;
