import Picture from '../components/picture';



export default class PictureController {
  constructor(container) {
    this._container = container;
  }

  render() {
    // const renderPhoto = (photoInfo) => {
    //   return photoInfo.forEach((item) => {
    //     new Picture(item).getTemplate();
    //   });
    // };
    //
    // return renderPhoto(this._container);

    return new Picture(this._container).getTemplate();
  }
}
