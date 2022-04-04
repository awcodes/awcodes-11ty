const UserConfig = require("@11ty/eleventy/src/UserConfig");
const { DateTime } = require("luxon");

/** @param {UserConfig} config */
module.exports = function (config) {
  config.addWatchTarget("./src/sass/");

  config.addPassthroughCopy({ "./src/_public": "/" });

  config.addFilter("limit", (arr, limit) => arr.slice(0, limit));

  config.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
  });

  config.addFilter("sortByOrder", (values) => {
    let vals = [...values]; // this *seems* to prevent collection mutation...
    return vals.sort((a, b) => Math.sign(a.data.order - b.data.order));
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
