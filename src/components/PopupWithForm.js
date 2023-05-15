function PopupWithForm(props) {
    return (
        <section className={`popup popup-${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__button-close" type="button" onClick={props.onClose} />
                <h2 className="popup__title">{props.title} </h2>
                <form className="form" name={`${props.name}Form`} >
                    {props.children}
                    <button className="button-save" type="submit">{props.textButton}</button>
                </form>
            </div>
        </section>
    )
} 
export default PopupWithForm;   