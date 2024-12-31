const utils = {};

utils.type = {
  isFunction: function (o) {
    // if (Object.prototype.toString.call(o).slice(8, -1) === "Function") return true;
    // return false;
    return typeof o === 'function';
  },
}

export default utils;