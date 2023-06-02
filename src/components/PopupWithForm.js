function PopupWithForm({
  isOpen,
  onClose,
  name,
  title,
  buttonText,
  children,
  onSubmit,
}) {
  return (
    <section
      className={`popup popup-${name} 
      ${isOpen ? "popup_opened" : ""}`}
    >
      <div className="popup__container">
        <button
          className="popup__button-close"
          type="button"
          onClick={onClose}
        />
        <h2 className="popup__title">{title} </h2>
        <form className="form" name={`${name}Form`} onSubmit={onSubmit}>
          {children}
          <button className="button-save" type="submit">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}
export default PopupWithForm;
