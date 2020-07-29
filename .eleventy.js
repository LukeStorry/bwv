module.exports = function (eleventyConfig) {
  eleventyConfig.setDataDeepMerge(true);

  // watch and copy the postcss stuff for dev
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  return {
    dir: {
      input: "src",
    },
  };
};
