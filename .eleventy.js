const UserConfig = require("@11ty/eleventy/src/UserConfig");
const { DateTime } = require("luxon");

/** @param {UserConfig} config */
module.exports = function (config) {
  config.addWatchTarget("./src/sass/");
  config.addWatchTarget("./src/_styles/");
  config.addWatchTarget("./tailwind.config.js");

  config.ignores.add("./src/_styles/");

  config.addPassthroughCopy({ "./src/_public": "/" });
  config.addPassthroughCopy({ "./src/_includes/assets/css/style.css": "/css/style.css" });

  config.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

  config.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
      layouts: "_layouts",
    },
  };
};
