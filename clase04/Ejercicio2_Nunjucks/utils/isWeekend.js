function isWeekend() {
  const today = new Date();
  const currentDay = today.getDay();
  return currentDay === 6 || currentDay === 0;
}

module.exports = isWeekend;
