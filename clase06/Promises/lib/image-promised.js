const callbacks = require("./image");

const getImage = (name) => {
  return new Promise((resolve, reject) => {
    callbacks.getImage(name, (image, error) => {
      if (error) {
        reject(error);
      }
      resolve(image);
    });
  });
};

const compressImage = (image) => {
  return new Promise((resolve, reject) => {
    callbacks.compressImage(image, (compressedImage, error) => {
      if (error) {
        reject(error);
      }
      resolve(image);
    });
  });
};

const applyFilter = (image) => {
  return new Promise((resolve, reject) => {
    callbacks.applyFilter(image, (image, error) => {
      if (error) {
        reject(error);
      }
      resolve(image);
    });
  });
};

const saveImage = (image) => {
  return new Promise((resolve, reject) => {
    callbacks.saveImage(image, (image, error) => {
      if (error) {
        reject(error);
      }
      resolve(image);
    });
  });
};

module.exports = {
  saveImage,
  applyFilter,
  compressImage,
  getImage,
};
