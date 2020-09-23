const htmlmin = require("html-minifier");
const md = require("markdown-it")();

module.exports = function (eleventyConfig) {
  eleventyConfig.addTransform("htmlmin", (content, outputPath) =>
    process.env.ELEVENTY_PRODUCTION &&
    outputPath &&
    outputPath.endsWith(".html")
      ? htmlmin.minify(content, {
          useShortDoctype: true,
          removeComments: true,
          collapseWhitespace: true,
        })
      : content
  );

  eleventyConfig.addShortcode("markdown", (s) => md.render(s));

  // watch and copy the postcss stuff for dev
  eleventyConfig.addWatchTarget("./_tmp/style.css");
  eleventyConfig.addPassthroughCopy({ "./_tmp/style.css": "./style.css" });

  eleventyConfig.setDataDeepMerge(true);
  eleventyConfig.addPassthroughCopy({ "./assets/favicon.ico": "favicon.ico" });

  return {
    dir: {
      input: "src",
    },
  };
};
