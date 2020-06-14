'use strict';

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const names = [
  'Артем',
  'Ярик',
  'Костя',
  'Галина',
  'Василиса'
];

const descriptions = [
  'Отдыхаем... #chill #relax #group #photo',
  'Will you still love me when I\'m no longer young and beautiful? (c) Ленин',
  'Если ты чего то знаешь или нет, то ты в любом случае будешь прав',
  'Быть или не быть, вот в чем вопрос',
  'Я не знаю как закончится вторая мировая война, но знаю как начнется третяя, камнями и палками'
];

const randomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

const generatePhoto = () => {
  return {
    url: `photos/${randomNumber(1, 25)}.jpg`,
    like: randomNumber(0, 999),
    description: descriptions[randomNumber(0, descriptions.length - 1)],
    comments: [{
      avatar: `img/avatar-${randomNumber(1, 6)}.svg`,
      message: messages[randomNumber(0, messages.length - 1)],
      name: names[randomNumber(0, names.length - 1)]
    }],
  }
};

const templatePicture = (photo) => {
  return (
    `<a href="#" class="picture">
      <img class="picture__img" src="${photo.url}" width="182" height="182" alt="Случайная фотография">
      <p class="picture__info">
        <span class="picture__comments">${photo.comments.length}</span>
        <span class="picture__likes">${photo.like}</span>
      </p>
    </a>`
  );
};

const picturesContainer = document.querySelector(`.pictures`);

const render = (elem, template) => {
  elem.insertAdjacentHTML('beforeEnd', template);
};

for (let i = 0; i <= 25; i++) {
  render(picturesContainer, templatePicture(generatePhoto()));
}
