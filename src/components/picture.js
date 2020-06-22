const templatePicture = (info) => {
  // const {url} = info;
  return (
    `<a href="#" class="picture">
      <img class="picture__img" src="" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments"></span>
        <span class="picture__likes"></span>
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
}
