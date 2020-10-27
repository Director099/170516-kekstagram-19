import AbstractComponent from './abstract-component';

const templateUpload = () => {
  return `<section class="img-upload">
    <div class="img-upload__wrapper">
      <h2 class="img-upload__title  visually-hidden">Загрузка фотографии</h2>
      <form class="img-upload__form" id="upload-select-image" method="post" enctype="multipart/form-data" autocomplete="off">

        <!-- Изначальное состояние поля для загрузки изображения -->
        <fieldset class="img-upload__start">
          <input type="file" id="upload-file" class="img-upload__input  visually-hidden" name="filename" required>
          <label for="upload-file" class="img-upload__label  img-upload__control">Загрузить</label>
        </fieldset>

      </form>
    </div>
  </section>`;
};

export default class ImgUpload extends AbstractComponent {
  getTemplate() {
    return templateUpload();
  }

  setChangeHandler(elem, handler) {
    this.getElement().querySelector(elem).addEventListener(`change`, handler);
  }

  setSubmitHandler(elem, handler) {
    this.getElement().querySelector(elem).addEventListener(`submit`, handler);
  }
}
