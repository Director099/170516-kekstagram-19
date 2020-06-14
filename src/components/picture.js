export const templatePicture = (photo) => {
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
