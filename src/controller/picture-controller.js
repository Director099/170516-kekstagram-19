import Picture from '../components/picture';
import {render} from '../utils';

const picturesContainer = document.querySelector(`.pictures`);

const renderPhoto = (photoInfo) => {
  photoInfo.forEach((item) => {
    render(picturesContainer, new Picture(item).getTemplate());
  });
};

export default class PictureController {
  constructor(container) {
    this._container = container;
  }

  render(infoPicture) {
    return renderPhoto(infoPicture);
  }
}
