export const render = (elem, template) => {
  elem.insertAdjacentHTML(`beforeEnd`, template);
};

export const randomNumber = (min, max) => {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
};
