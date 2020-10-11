import {createElement} from '../utils';

const templatePicture = (info) => {
  const {url, like, comments} = info;
  return (
    `<a href="#" class="picture">
      <img class="picture__img" src="${url}" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments">${comments.length}</span>
        <span class="picture__likes">${like}</span>
      </p>
    </a>`
  );
};

export default class Picture {
  constructor(info) {
    this._info = info;
  }

  getTemplate() {
    return templatePicture(this._info);
  }

  /**
   * @description Возвращает ДОМ элемент
   * @return {null}
   */
  getElement() {
    if (!this._elem) {
      this._elem = createElement(this.getTemplate());
    }

    return this._elem;
  }

  setClickHandler(elem, handler) {
    this.getElement().querySelector(elem).addEventListener(`click`, handler);
  }
}
