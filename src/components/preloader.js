import AbstractComponent from './abstract-component';

const templatePreloader = () => {
  return `<div class="img-upload__message  img-upload__message--loading">Загружаем...</div>`;
};

export default class Preloader extends AbstractComponent {
  getTemplate() {
    return templatePreloader();
  }
}
