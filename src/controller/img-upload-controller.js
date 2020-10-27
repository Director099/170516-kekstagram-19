import {Const, keyCode, render, renderPosition} from '../utils';
import ImgUpload from '../components/img-upload';
import UploadPreview from '../components/upload-preview';
import PictureController from './picture-controller';
import {generatePhotos} from '../mock/picture';
import ImgFilters from '../components/img-filters';

const picturesContainer = document.querySelector(`.pictures`);
const mainContainer = document.querySelector(`main`);

const renderPhoto = (elem, photoInfo) => {
  photoInfo.forEach((item) => {
    return new PictureController(elem).render(item);
  });
};

export default class ImgUploadController {
  render(containerElem) {
    this._imgUpload = new ImgUpload();
    this._uploadPreview = new UploadPreview();
    this._imgFilter = new ImgFilters();

    this._imgUpload.setChangeHandler(`.img-upload__form`, () => {
      this._onChangeUpload();
    });

    this._imgUpload.setSubmitHandler(`.img-upload__form`, (evt) => {
      evt.preventDefault();
      this._sendForm(generatePhotos(Const.MAX_COUNT));
    });

    this._uploadPreview.setClickHandler(`.cancel`, () => {
      this._onCloseUploadPreview();
    });

    render(containerElem, this._imgUpload.getElement());
    render(mainContainer, this._imgFilter.getElement(), renderPosition.AFTERBEGIN);
  }

  _onChangeUpload() {
    const elementPreview = this._uploadPreview.getElement();
    document.body.classList.add(`modal-open`);
    elementPreview.classList.remove(`hidden`);
    document.querySelector(`.img-upload__form`).appendChild(elementPreview);

    document.addEventListener(`keydown`, (evt) => {
      this._onEscKeydown(evt);
    });

    document.addEventListener(`click`, (evt) => {
      if (evt.target.classList.contains(`img-upload__overlay`)) {
        this._onCloseUploadPreview();
      }
    });
  }

  _onCloseUploadPreview() {
    document.body.classList.remove(`modal-open`);
    this._uploadPreview.getElement().remove();
    this._resetForm();
  }

  _onEscKeydown(evt) {
    if (evt.keyCode === keyCode.ESC) {
      this._onCloseUploadPreview();
      document.removeEventListener(`keydown`, this._onEscKeydown);
    }
  }

  _sendForm(infoPicture) {
    this._onCloseUploadPreview();
    this._imgFilter.getElement().classList.remove(`img-filters--inactive`);

    renderPhoto(picturesContainer, infoPicture);
  }

  _resetForm() {
    this._imgUpload.getElement().querySelector(`.img-upload__form`).reset();
  }
}
