import {generatePhotos} from '../mock/picture';
import Picture from '../components/picture';
import BigPicture from '../components/big-picture';
import {render, keyCode, Const} from '../utils';

const photos = generatePhotos(Const.MAX_COUNT);

export default class PictureController {
  constructor(container) {
    this._container = container;
  }

  render(infoPicture) {
    this._picture = new Picture(infoPicture);
    this._bigPicture = new BigPicture(infoPicture);

    this._picture.setClickHandler(`.picture__img`, () => {
      this._onClickPicture();
    });

    this._bigPicture.setClickHandler(`.cancel`, () => {
      this._onCloseBigPicture();
    });

    render(this._container, this._picture.getElement());
  }

  _onClickPicture() {
    const parentElementModal = this._bigPicture.getElement();
    document.body.classList.add(`modal-open`);
    parentElementModal.classList.remove(`hidden`);
    document.querySelector(`main`).appendChild(parentElementModal);

    document.addEventListener(`keydown`, (evt) => {
      this._onEscKeydown(evt);
    });

    document.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`overlay`)) {
        this._onCloseBigPicture();
      }
    });
  }

  _onCloseBigPicture() {
    document.body.classList.remove(`modal-open`);
    this._bigPicture.getElement().remove();
  }

  _onEscKeydown(evt) {
    if (evt.keyCode === keyCode.ESC) {
      this._onCloseBigPicture();
      document.removeEventListener(`keydown`, this._onEscKeydown);
    }
  }
}
