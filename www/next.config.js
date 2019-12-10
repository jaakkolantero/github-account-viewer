require("dotenv").config();
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  target: "serverless",
  env: {
    CLIENT_ID: process.env.CLIENT_ID,
    CLIENT_SECRET: process.env.CLIENT_SECRET,
  },
});
