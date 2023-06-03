import React from "react";
import PopupWithForm from "./PopupWithForm";

export function AddPlacePopup({ isOpen, onClose, onAddPlace, onLoading }) {
  const [name, setName] = React.useState("");
  const [link, setLink] = React.useState("");

   // валидация
   const [nameInputErrorMessage, setNameInputErrorMessage] = React.useState("");
   const [linkInputErrorMessage, setLinkInputErrorMessage] = React.useState("");

   function hiddenError() {
    setNameInputErrorMessage("");
    setLinkInputErrorMessage("");
  }

  React.useEffect(() => {
    setName("");
    setLink("");
    hiddenError();
  }, [isOpen]);

  function handleChangeName(e) {
    setName(e.target.value);
    //валидация
    if (e.target.value.length < 2) {
      setNameInputErrorMessage(e.target.validationMessage);
    } else {
      setNameInputErrorMessage("");
    }
  }

  function handleChangeLink(e) {
    setLink(e.target.value);
    //валидация
    if (e.target.typeof !== "url") {
      setLinkInputErrorMessage(e.target.validationMessage);
    } else {
      setLinkInputErrorMessage("");
    }
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
          className={`form__input form__input_card_name ${nameInputErrorMessage && "form__input_invalid"}`}
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
        {nameInputErrorMessage && (
          <span className="form__input-error_active" id="place-error">
            {nameInputErrorMessage}
          </span>
        )}
      </div>
      <div className="form__section">
        <input
          className={`form__input form__input_card_img ${linkInputErrorMessage && "form__input_invalid"}`}
          id="place__link"
          type="url"
          name="link"
          required
          placeholder="Ссылка на картинку"
          value={link}
          onChange={handleChangeLink}
        />
        {linkInputErrorMessage && (
          <span className="form__input-error_active" id="place__link-error">
            {linkInputErrorMessage}
          </span>
        )}
      </div>
    </PopupWithForm>
  );
}
