import logo from ".././images/logo.svg";
import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
//

function App() {
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(!isEditAvatarPopupOpen);
  }
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(!isEditProfilePopupOpen);
  }
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(!isAddPlacePopupOpen);
  }
  //
  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({});
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  return (
    <div className="page">
      <Header src={logo} />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
      />
      <Footer />
      <PopupWithForm
        name="avatar"
        title="Обновить аватар"
        buttonText="Сохранить"
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
      >
        <div className="form__section">
          <input
            className="form__input form__input_avatar_link"
            id="avatar"
            type="url"
            name="link"
            required
            placeholder="Ссылка на картинку"
          />
          <span className="form__input-error" id="avatar-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="profile"
        title="Редактировать профиль"
        buttonText="Сохранить"
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
      >
        <div className="form__section">
          <input
            className="form__input form__input_type_name"
            id="name"
            type="text"
            name="name"
            required
            minLength="2"
            maxLength="40"
            placeholder="Имя"
          />
          <span className="form__input-error" id="name-error"></span>
        </div>
        <div className="form__section">
          <input
            className="form__input form__input_type_career"
            id="about"
            type="text"
            name="about"
            required
            minLength="2"
            maxLength="200"
            placeholder="О себе"
          />
          <span className="form__input-error" id="about-error"></span>
        </div>
      </PopupWithForm>
      <PopupWithForm
        name="cards"
        title="Новое место"
        buttonText="Создать"
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
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
          />
          <span className="form__input-error" id="place__link-error"></span>
        </div>
      </PopupWithForm>
      <ImagePopup card={selectedCard} onClose={closeAllPopups} />
    </div>
  );
}

export default App;
