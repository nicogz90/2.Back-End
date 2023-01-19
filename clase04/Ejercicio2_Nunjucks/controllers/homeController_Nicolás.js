const moment = require("moment");

module.exports = {
  getIsWeekend: () => {
    const weekday = moment().format("dddd"); // Monday ... Sunday
    return weekday === "Sunday" || weekday === "Saturday";
  },
};
