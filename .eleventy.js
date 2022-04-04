const UserConfig = require("@11ty/eleventy/src/UserConfig");

/** @param {UserConfig} config */
module.exports = function (config) {
  config.addWatchTarget("./src/sass/");
  config.addPassthroughCopy("./src/_public/**/*");

  config.addNunjucksFilter("limit", (arr, limit) => arr.slice(0, limit));

  return {
    htmlTemplateEngine: "njk",
    dir: {
      input: "src",
      output: "public",
    },
  };
};
