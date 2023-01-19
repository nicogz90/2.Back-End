const {
  getImage,
  compressImage,
  applyFilter,
  saveImage,
} = require("./lib/image"); // importo los callbacks

getImage("gatito.png", (result, error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(result, "<< resultado getImage");
    compressImage(result, (result, error) => {
      if (error) {
        console.log(error);
      } else {
        console.log(result, "<< resultado compressImage");
        applyFilter(result, (result, error) => {
          if (error) {
            console.log(error);
          } else {
            console.log(result, "<< resultado filterImage");
            saveImage(result, (result, error) => {
              if (error) {
                console.log(error);
              } else {
                console.log(result, "<< resultado saveImage");
              }
            });
          }
        });
      }
    });
  }
});
