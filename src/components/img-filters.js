import AbstractComponent from './abstract-component';

const templateImgFilters = () => {
  return `<section class="img-filters  img-filters--inactive  container">
      <h2 class="img-filters__title  visually-hidden">Фильтр фотографий</h2>
      <form class="img-filters__form" action="index.html" method="get" autocomplete="off">
        <button type=button class="img-filters__button  img-filters__button--active" id="filter-default">По умолчанию</button>
        <button type=button class="img-filters__button" id="filter-random">Случайные</button>
        <button type=button class="img-filters__button" id="filter-discussed">Обсуждаемые</button>
      </form>
    </section>`;
};

export default class ImgFilters extends AbstractComponent {
  getTemplate() {
    return templateImgFilters();
  }
}
