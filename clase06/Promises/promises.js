const {
  getImage,
  compressImage,
  applyFilter,
  saveImage,
} = require("./lib/image-promised"); // importo las promesas!

getImage("pepe.png")
  .then((image) => {
    console.log(image, "<< resultado getImage");
    return compressImage(image);
  })
  .then((compressedImage) => {
    console.log(image, "<< resultado compressImage");
    return applyFilter(compressedImage);
  })
  .then((filteredImage) => {
    console.log(image, "<< resultado filterImage");
    return saveImage(filteredImage);
  })
  .then((savedImage) => {
    console.log(image, "<< resultado saveImage");
  })
  .catch((error) => {
    console.log(error, "<< error");
  });
