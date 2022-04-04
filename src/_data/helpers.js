const site = require("./site.json");

module.exports = {
  currentYear() {
    const today = new Date();
    return today.getFullYear() !== site.startYear ? `${site.startYear} - ${today.getFullYear()}` : site.startYear;
  },
};
