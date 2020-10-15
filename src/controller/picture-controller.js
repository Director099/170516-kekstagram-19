import Picture from '../components/picture';
import {render} from '../utils';
import BigPicture from '../components/big-picture';

const picturesContainer = document.querySelector(`.pictures`);

const renderPhoto = (photoInfo) => {
  let elementPicture = null;

  photoInfo.forEach((item) => {
    elementPicture = new Picture(item);
    render(picturesContainer, elementPicture.getTemplate());
  });


  elementPicture.setClickHandler(`.picture__img`, function () {
    console.log(0);
  });
};

export default class PictureController {
  constructor(container) {
    this._container = container;
  }

  render(infoPicture) {
    renderPhoto(infoPicture);
  }
}
