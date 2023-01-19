const formidable = require("formidable");

const extractFile = (req, options) => {
  const form = formidable(options);

  return new Promise((resolve, reject) => {
    form.parse(req, (err, fields, files) => {
      if (err) {
        reject(err);
      } else {
        resolve({ fields, files });
      }
    });
  });
};

module.exports = {
  extractFile,
};
