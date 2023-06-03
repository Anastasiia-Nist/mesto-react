import React from "react";
import PopupWithForm from "./PopupWithForm";

export function AddPlacePopup({ isOpen, onClose, onAddPlace, onLoading }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");
  React.useEffect(() => {
    setName("");
    setLink("");
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    onAddPlace({
      name,
      link,
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
          value={name}
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
          value={link}
          onChange={handleChangeLink}
        />
        <span className="form__input-error" id="place__link-error"></span>
      </div>
    </PopupWithForm>
  );
}
