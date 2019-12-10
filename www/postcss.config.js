const tailwindcss = require("tailwindcss");
const postcssPresetEnv = require("postcss-preset-env");

module.exports = {
  plugins: [
    tailwindcss("./tailwind.config.js"),
    require("postcss-easy-import"),
    // ...(process.env.NODE_ENV !== "development"
    //   ? [
    //       require("@fullhuman/postcss-purgecss")({
    //         content: [
    //           "./pages/**/*.tsx",
    //           "./pages/**/*.ts",
    //           "./pages/**/*.jsx",
    //           "./pages/**/*.js",
    //           "./components/**/*.tsx",
    //           "./components/**/*.ts",
    //           "./components/**/*.jsx",
    //           "./components/**/*.js",
    //         ],
    //         defaultExtractor: content =>
    //           content.match(/[A-Za-z0-9-_:/]+/g) || [],
    //       }),
    //       require("autoprefixer"),
    //       require("cssnano"),
    //       postcssPresetEnv({
    //         stage: 2,
    //       }),
    //     ]
    //   : []),
  ],
};
