import AbstractComponent from './abstract-component';

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

export default class Picture extends AbstractComponent {
  constructor(info) {
    super();
    this._info = info;
  }

  getTemplate() {
    return templatePicture(this._info);
  }
}
