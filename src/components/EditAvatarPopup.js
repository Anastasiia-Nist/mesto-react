import React from "react";
import PopupWithForm from "./PopupWithForm";
export function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar, onLoading }) {
  const avatarRef = React.useRef();

  React.useEffect(() => {
    avatarRef.current.value = "";
  }, [isOpen]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateAvatar({
      avatar: avatarRef.current.value,
    });
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
          ref={avatarRef}
        />
        <span className="form__input-error" id="avatar-error"></span>
      </div>
    </PopupWithForm>
  );
}
