// https://javascript.pages.academy/keksobooking/data - сервер получения данных

import {generatePhotos} from './mock/picture';
import PageController from './controller/page-controller';


const MAX_COUNT = 25;
const photos = generatePhotos(MAX_COUNT);
const pageController = new PageController();

pageController.render(photos);
