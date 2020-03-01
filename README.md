### Hugot Line Web App Creator

Add next.config.js file variables:

```js
const withCSS = require("@zeit/next-css");

module.exports = withCSS({
  publicRuntimeConfig: {
    APP_NAME: "",
    API_DEVELOPMENT: "",
    API_PRODUCTION: "",
    PRODUCTION: false,
    DOMAIN_DEVELOPMENT: "",
    DOMAIN_PRODUCTION: "",
    FB_APP_ID: "",
    DISQUS_SHORTNAME: "",
    GOOGLE_CLIENT_ID: ""
  }
});
```

To run on terminal

```js
yarn run dev
```
