const path = require("path");

// Set eleventy default folders
// https://www.11ty.dev/docs/config/#input-directory
const dir = {
  input: "src",
  output: "dist",
  includes: "_includes",
  layouts: "_layouts",
  data: "_data",
  assets: "assets",
};

const imagePaths = {
  source: path.join(dir.input, dir.assets, "images"),
  output: path.join(dir.output, dir.assets, "images"),
};

const scriptDirs = {
  source: path.join(dir.input, dir.assets, "scripts"),
  output: path.join(dir.output, dir.assets, "scripts"),
};

const styleDirs = {
  source: path.join(dir.input, dir.assets, "styles"),
  output: path.join(dir.output, dir.assets, "styles"),
};

module.exports = {
  dir,
  imagePaths,
  scriptDirs,
  styleDirs,
};