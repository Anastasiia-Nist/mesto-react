import React from "react";
import PopupWithForm from "./PopupWithForm";

export function AddPlacePopup({ isOpen, onClose, onAddPlace, onLoading }) {
  const newCardNameRef = React.useRef();
  const newCardLinkRef = React.useRef();
  React.useEffect(() => {
    newCardNameRef.current.value = "";
    newCardLinkRef.current.value = "";
  }, [isOpen]);

  function handleChangeName(e) {
    newCardNameRef.current.value = e.target.value;
  }

  function handleChangeLink(e) {
    newCardLinkRef.current.value = e.target.value;
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name: newCardNameRef.current.value,
      link: newCardLinkRef.current.value,
    });
  }
  return (
    <PopupWithForm
      name="cards"
      title="Новое место"
      buttonText={onLoading? 'Создание...' : 'Создать'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="form__section">
        <input
          className="form__input form__input_card_name"
          id="place"
          type="text"
          name="name"
          required
          minLength="2"
          maxLength="30"
          placeholder="Название"
          ref={newCardNameRef || ""}
          onChange={handleChangeName}
        />
        <span className="form__input-error" id="place-error"></span>
      </div>
      <div className="form__section">
        <input
          className="form__input form__input_card_img"
          id="place__link"
          type="url"
          name="link"
          required
          placeholder="Ссылка на картинку"
          ref={newCardLinkRef}
          onChange={handleChangeLink}
        />
        <span className="form__input-error" id="place__link-error"></span>
      </div>
    </PopupWithForm>
  );
}
