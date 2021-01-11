import AbstractView from "./abstract.js";

const createCatalogPopUpDeleteElement = (card) => {
  const {image, name, identiferNumber, stringAmount, price} = card;
  return `<section class="modal modal--delete-from-basket-hidden ">
  <div class="modal__popup">
    <h2 class="modal__title">Удалить этот товар?</h2>

    <div class="modal__content">
      <div class="modal__image-container">
        <img src="${image}" width="80" height="202" alt="Изображение товара">
      </div>
      <div class="modal__content-container">
        <ul class="modal__deckription-list">
          <li class="modal__name">Гитара ${name}</li>
          <li class="modal__identifer-number">Артикул: ${identiferNumber}</li>
          <li class="modal__type">Электрогитара, ${stringAmount} струнная </li>
        </ul>
        <div class="modal__price">Цена: ${price} ₽</div>
      </div>
      <div class="modal__buttons-wrapper modal__buttons-wrapper--basket">
        <button class="modal__button">Удалить товар</button>
        <button class="modal__button modal__button--to-shoping">Продолжить покупки</button>
      </div>
      <button class="modal__close" type="button">
        <span class="visually-hidden">Закрыть</span>
      </button>
    </div>
  </div>
</section>`;
};

export default class CatalogPopUpDelete extends AbstractView {
  constructor(card) {
    super();
    this._data = card;

    this._deleteClickHandler = this._deleteClickHandler.bind(this);
    this._closeClickHandler = this._closeClickHandler.bind(this);
    this._toShoppingClickHandler = this._toShoppingClickHandler.bind(this);
  }

  getTemplate() {
    return createCatalogPopUpDeleteElement(this._data);
  }

  _deleteClickHandler(evt) {
    evt.preventDefault();
    this._callback.deleteClick();
  }

  _closeClickHandler(evt) {
    evt.preventDefault();
    this._callback.closeClick();
  }

  _toShoppingClickHandler(evt) {
    evt.preventDefault();
    this._callback.toShoppingClick();
  }

  setAddClickHandler(callback) {
    this._callback.deleteClick = callback;
    this.getElement().querySelector(`.modal__button`).addEventListener(`click`, this._deleteClickHandler);
  }

  setCloseClickHandler(callback) {
    this._callback.closeClick = callback;
    this.getElement().querySelector(`.modal__close`).addEventListener(`click`, this._closeClickHandler);
  }

  setToShoppingClickHandler(callback) {
    this._callback.toShoppingClick = callback;
    this.getElement().querySelector(`.modal__button--to-shoping`).addEventListener(`click`, this._toShoppingClickHandler);
  }
}
