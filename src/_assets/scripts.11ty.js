const fs = require("fs");
const path = require("path");
const webpack = require("webpack");
const {fs: mfs} = require('memfs');

const isProd = process.env.ELEVENTY_ENV === "production";
const ENTRY_FILE_NAME = "main.js";

module.exports = class {
  async data() {
    const entryPath = path.join(__dirname, `./js/${ENTRY_FILE_NAME}`);
    const outputPath = path.resolve(__dirname, "../../memory-fs/");

    const rules = [
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ];

    // pass environment down to scripts
    const envPlugin = new webpack.EnvironmentPlugin({
      ELEVENTY_ENV: process.env.ELEVENTY_ENV,
    });

    // Main Config
    const webpackConfig = {
      mode: isProd ? "production" : "development",
      entry: entryPath,
      output: { path: outputPath },
      module: { rules },
      plugins: [envPlugin],
    };

    return {
      permalink: `/_assets/${ENTRY_FILE_NAME}`,
      eleventyExcludeFromCollections: true,
      webpackConfig,
    };
  }

  // Compile JS with Webpack, write the result to Memory Filesystem.
  // this brilliant idea is taken from Mike Riethmuller / Supermaya
  // @see https://github.com/MadeByMike/supermaya/blob/master/site/utils/compile-webpack.js
  async compile(webpackConfig) {
    const compiler = webpack(webpackConfig);
    compiler.outputFileSystem = mfs;
    compiler.inputFileSystem = fs;
    compiler.intermediateFileSystem = mfs;
    return new Promise((resolve, reject) => {
      compiler.run((err, stats) => {
        if (err || stats.hasErrors()) {
          const errors = err || (stats.compilation ? stats.compilation.errors : null);
          reject(errors);
          return;
        }
        mfs.readFile(
          path.join(webpackConfig.output.path, ENTRY_FILE_NAME),
          'utf8',
          (err, data) => {
            if (err) reject(err)
            else resolve(data)
          }
        );
      });
    });
  }

  // render the JS file
  async render({ webpackConfig }) {
    try {
      return await this.compile(webpackConfig);
    } catch (err) {
      console.log(err);
      return null;
    }
  }
};
