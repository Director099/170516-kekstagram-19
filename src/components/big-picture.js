import {createElement} from '../utils';

const templateModalPicture = (info) => {
  const {comments, description, like, url} = info;
  return (
    `<section class="big-picture  overlay  hidden">
      <h2 class="big-picture__title  visually-hidden">Просмотр фотографии</h2>
      <div class="big-picture__preview">

        <!-- Просмотр изображения -->
        <div class="big-picture__img">
          <img src="${url}" alt="Девушка в купальнике" width="600" height="600">
        </div>

        <!-- Информация об изображении. Подпись, комментарии, количество лайков -->
        <div class="big-picture__social  social">
          <div class="social__header">
            <img class="social__picture" src="img/avatar-${comments[0].avatar}" alt="Аватар автора фотографии" width="35" height="35">
            <p class="social__caption">${description}</p>
            <p class="social__likes">Нравится <span class="likes-count">${like}</span></p>
          </div>

          <!-- Комментарии к изображению -->
          <div class="social__comment-count">5 из <span class="comments-count">${comments.length}</span> комментариев</div>
          <ul class="social__comments">
            <li class="social__comment">
              <img class="social__picture" src="img/avatar-${comments[0].avatar}" alt="Аватар комментатора фотографии" width="35" height="35">
              <p class="social__text">${comments[0].message}</p>
            </li>
          </ul>

          <!-- Кнопка для загрузки новой порции комментариев -->
          <button type="button" class="social__comments-loader  comments-loader">Загрузить еще</button>

          <!-- Форма для отправки комментария -->
          <div class="social__footer">
            <img class="social__picture" src="img/avatar-${comments[0].avatar}" alt="Аватар комментатора фотографии" width="35" height="35">
            <input type="text" class="social__footer-text" placeholder="Ваш комментарий...">
            <button type="button" class="social__footer-btn" name="button">Отправить</button>
          </div>
        </div>

        <!-- Кнопка для выхода из полноэкранного просмотра изображения -->
        <button type="reset" class="big-picture__cancel  cancel" id="picture-cancel">Закрыть</button>
      </div>
    </section>`
  );
};

export default class BigPicture {
  constructor(info) {
    this._info = info;
  }

  getTemplate() {
    return templateModalPicture(this._info);
  }

  /**
   * @description Возвращает ДОМ элемент
   * @return {null}
   */
  getElement() {
    if (!this._elem) {
      this._elem = createElement(this.getTemplate());
    }

    return this._elem;
  }
}
