import {render} from './utils';
import Picture from './components/picture';
import {generatePhoto} from './mock/picture';


const picturesContainer = document.querySelector(`.pictures`);

new Picture().getTemplate();
// for (let i = 0; i <= 25; i++) {
//   render(picturesContainer, templatePicture(generatePhoto()));
// }


