const URLs = [
  "assets/carousel-1.jpg",
  "assets/carousel-2.jpg",
  "assets/carousel-3.jpg",
  "assets/carousel-4.jpg",
  "assets/carousel-5.jpg",
  "assets/carousel-6.jpg",
  "assets/carousel-7.jpg",
];

export const LOADED_IMAGES = 'LOADED_IMAGES';

export const loadImages = () => {
  return dispatch => {
    const promises = URLs.map(url => {
      return new Promise((resolve, reject) => {
        const image = new Image;
        image.onload = () => resolve();
        image.src = url;
      });
    });
    return Promise.all(promises).then(() => dispatch(loadedImages()));
  };
};

export const loadedImages = () => {
  return {type: LOADED_IMAGES}
};

export default URLs;