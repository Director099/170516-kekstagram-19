// https://javascript.pages.academy/keksobooking/data - сервер получения данных

import ImgUploadController from './controller/img-upload-controller';
const imgUploadController = new ImgUploadController();
const picturesContainer = document.querySelector(`.pictures`);

imgUploadController.render(picturesContainer);
