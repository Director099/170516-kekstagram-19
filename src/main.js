import {generatePhotos} from './mock/picture';
import PictureController from './controller/picture-controller';


const MAX_COUNT = 19;
const photos = generatePhotos(MAX_COUNT);
const pictureController = new PictureController();

pictureController.render(photos);
