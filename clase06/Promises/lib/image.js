/**
 * @callback Callback
 * @param {string} data
 * @param {string} error
 */

/**
 * @param {string} name
 * @param {Callback} callback
 */
function getImage(name, callback) {
  setTimeout(() => {
    const fail = (Math.random() + 0.5) >> 0;
    if (fail) {
      callback(null, "ERROR AL OBTENER");
    } else {
      callback(name);
    }
  }, 1000);
}

/**
 * @param {string} name
 * @param {Callback} callback
 */
function compressImage(name, callback) {
  setTimeout(() => {
    const fail = (Math.random() + 0.5) >> 0;
    if (fail) {
      callback(null, "ERROR AL COMPRIMIR");
    } else {
      callback(name);
    }
  }, 1000);
}

/**
 * @param {string} name
 * @param {Callback} callback
 */
function applyFilter(name, callback) {
  setTimeout(() => {
    const fail = (Math.random() + 0.5) >> 0;
    if (fail) {
      callback(null, "ERROR AL APLICAR FILTRO");
    } else {
      callback(name);
    }
  }, 1000);
}

/**
 * @param {string} name
 * @param {Callback} callback
 */
function saveImage(name, callback) {
  setTimeout(() => {
    const fail = (Math.random() + 0.5) >> 0;
    if (fail) {
      callback(null, "ERROR AL GUARDAR");
    } else {
      callback(name);
    }
  }, 1000);
}

module.exports = {
  saveImage,
  applyFilter,
  compressImage,
  getImage,
};
