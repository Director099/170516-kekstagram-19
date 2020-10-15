// https://javascript.pages.academy/keksobooking/data - сервер получения данных

import {generatePhotos} from './mock/picture';
import PictureController from './controller/picture-controller';


const MAX_COUNT = 25;
const photos = generatePhotos(MAX_COUNT);
const pictureController = new PictureController();

pictureController.render(photos);
