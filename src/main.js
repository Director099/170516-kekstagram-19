import {generatePhotos} from './mock/picture';
import {render} from './utils';
import PictureController from './controller/picture-controller';


const picturesContainer = document.querySelector(`.pictures`);
const MAX_COUNT = 15;
const photos = generatePhotos(MAX_COUNT);

render(picturesContainer, new PictureController(photos[0]).render());


// Задача создать  из new PictureController список фото и модальные окна
