import React from "react";
import PopupWithForm from "./PopupWithForm";
export function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, onLoading }) {
  //const avatarRef = React.useRef();
  const [link, setLink] = React.useState("");
  const [linkInputErrorMessage, setLinkInputErrorMessage] = React.useState("");

  React.useEffect(() => {
    setLink("");
    setLinkInputErrorMessage("");
  }, [isOpen]);
  
  //валидация
  
  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: link,
    });
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

  return (
    <PopupWithForm
      name="avatar"
      title="Обновить аватар"
      buttonText={onLoading? 'Сохранение...' : 'Сохранить'}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={handleSubmit}
    >
      <div className="form__section">
        <input
          className="form__input form__input_avatar_link"
          id="avatar"
          type="url"
          name="link"
          required
          placeholder="Ссылка на картинку"
          value={link}
          onChange={handleChangeLink}
        />
        {linkInputErrorMessage && (
          <span className="form__input-error_active" id="avatar-error">
            {linkInputErrorMessage}
          </span>
        )}
      </div>
    </PopupWithForm>
  );
}
