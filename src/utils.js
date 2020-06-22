export const render = (elem, template) => {
  elem.insertAdjacentHTML(`beforeEnd`, template);
};

export const randomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};

/**
 * @description Создание элемента
 * @param template Принимает шаблонную строку
 * @return {ChildNode}
 */

export const createElement = (template) => {
  const newElement = document.createElement(`div`);
  newElement.innerHTML = template;

  return newElement.firstChild;
};
