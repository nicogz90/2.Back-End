const {
  applyFilter,
  compressImage,
  getImage,
  saveImage,
} = require("./lib/image-promised"); // importo las promesas!

const main = async () => {
  try {
    const image = await getImagePromised("pepe.png");
    console.log(image, "<< resultado getImage");

    const compressedImage = await compressImagePromised(image);
    console.log(compressedImage, "<< resultado compressImage");

    const filteredImage = await applyFilterPromised(compressedImage);
    console.log(filteredImage, "<< resultado filteredImage");

    const savedImage = await saveImagePromised(filteredImage);
    console.log(savedImage, "<< resultado savedImage");
  } catch (error) {
    console.log(error, "<<< original");
    throw new Error("Fallo al subir la foto de perfil");
  }
};

main();
