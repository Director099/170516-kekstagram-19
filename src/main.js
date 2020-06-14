import {render} from './utils';
import {templatePicture} from './components/picture';
import {generatePhoto} from './mock/picture';

const picturesContainer = document.querySelector(`.pictures`);

for (let i = 0; i <= 25; i++) {
  render(picturesContainer, templatePicture(generatePhoto()));
}
