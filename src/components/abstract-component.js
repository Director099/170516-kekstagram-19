import {createElement} from '../utils';

export default class AbstractComponent {
  constructor() {
    // Проверка в конструкторе очень важна. Она позволит использовать абстрактный класс только в качестве родительского класса и выбросит ошибку при попытке выполнить `const c = new AbstractComponent()`.
    if (new.target === AbstractComponent) {
      throw new Error(`Can't instantiate AbstractComponent, only concrete one.`);
    }
  }

  getTemplate() {
    throw new Error(`Abstract method not implemented: getTemplate`);
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
