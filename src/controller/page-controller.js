import PictureController from './picture-controller';
const picturesContainer = document.querySelector(`.pictures`);

const renderPhoto = (elem, photoInfo) => {
  photoInfo.forEach((item) => {
    return new PictureController(elem).render(item);
  });
};


export default class PageController {
  constructor(container) {
    this._container = container;
  }

  render(infoPicture) {
    renderPhoto(picturesContainer, infoPicture);
  }
};
