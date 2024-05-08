module.exports = function (eleventyConfig) {
  // make sure 11ty passes asset files into output folder
  const assetsFolder = "assets";
  eleventyConfig.addPassthroughCopy(assetsFolder);
};
