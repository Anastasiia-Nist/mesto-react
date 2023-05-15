import React from "react";
import avatarDefault from "../images/avatarCat.jpg";
import pencilImg from "../images/pencil.svg";
import api from "../utils/Api";
import Card from "../components/Card"


function Main(props) {
  const [userName, setUserName] = React.useState("Жак-Ив-Куско");
  const [userDescription, setUserDescription] = React.useState( "Исследователь океана");
  const [userAvatar, setUserAvatar] = React.useState(avatarDefault);
  const [cards, setCards] = React.useState([]);
  React.useEffect(() => {
    Promise.all([api.getUserInfo(), api.getInitialCards()])
      .then(([infoUser, infoCard]) => {
        setUserName(infoUser.name);
        setUserDescription(infoUser.about);
        setUserAvatar(infoUser.avatar);
        setCards(infoCard);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <main>
      <section className="profile">
        <div className="profile__img">
          <img
            src={userAvatar}
            alt="Аватарка"
            className="profile__avatar"
            onClick={props.onEditAvatar}
          />
          <img
            src={pencilImg}
            alt="Редактировать аватар"
            className="profile__img-hover"
          />
        </div>
        <div className="profile__info">
          <div className="profile__info-wrapper">
            <h1 className="profile__name">{userName}</h1>
            <button
              className="profile__button-edit"
              type="button"
              aria-label="Кнопка редактирования профиля"
              onClick={props.onEditProfile}
            ></button>
          </div>
          <p className="profile__career">{userDescription}</p>
        </div>
        <button
          className="profile__button-add"
          type="button"
          aria-label="Кнопка добавления фотографии"
          onClick={props.onAddPlace}
        ></button>
      </section>
      <section className="cards">
        {cards.map((card) => {
                      return (
                        <Card card={card} key={card._id} onCardClick={props.onCardClick}/>
                      );
                  })}
      </section>
    </main>
  );
}
export default Main;
