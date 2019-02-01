# Kungbib Vue.js template

Template for getting started with Vue.js projects at the National Library of Sweden.

The viewer is the front-end to the ebooks-prototype. It is driven by Webpack 4 through [Vue CLI 3](https://cli.vuejs.org/).

**TOC:**
* [Project Setup](#project-setup)
  * [Prerequisites](#prerequisites)
  * [Install dependencies](#install-dependencies)
  * [Configurations](#configurations)
* [yarn scripts](#yarn-scripts)
  * [Compile (with hot-reload) for development](#compile-with-hot-reload-for-development)
  * [Compile and minify for production](#compile-and-minify-for-production)
  * [Lint and fix files](#lint-and-fix-files)
  * [Running your unit tests](#running-your-unit-tests)
  * [Running your end-to-end tests](#running-your-end-to-end-tests)
* [Development](#development)

## Project setup

### Prerequisites

You need to have the following installed:
* [yarn](https://yarnpkg.com/en/docs/install)
* [Vue CLI](https://cli.vuejs.org/guide/installation.html)

### Install dependencies
```
yarn install
```

### Configurations

If you want watched updates with hot reload instead of building the front-end every time you make a change, you should serve your backend separately.

If you serve your backend on `localhost:8082` you should add this as an override in the file `.env.development` in the same folder as this readme.

Likewise, if you are doing a similar thing in production (serving the backend on another origin than the frontend), you can add a similar override to the `.env.production` file. This is normally not the case.

The `VUE_APP_API_PATH` variable simply prefixes the value to all `/`-paths which interact with the backend (like getting images for the dynamic content and getting json from the search-api). Other references are left alone (like static assets).

E.g. a link to
```
"/example"
```
becomes
```
"your.specified.override:1234/example"
```

In this example you should add the following to that file:

```
VUE_APP_API_PATH=http://localhost:8082
```

When you have done that you can go ahead and serve the app (next part below).

## yarn scripts

### Compile (with hot-reload) for development
```
yarn run serve
```

### Compile and minify for production
```
yarn run build
```
This will build the front-end to the `dist` folder, and copy the result into the static folder of the backend application.
As stated in the previous part, don't do this while developing the front-end.

### Lint and fix files
```
yarn run lint
```

### Running your unit tests
```
yarn run test:unit
```

### Running your end-to-end tests
```
yarn run test:e2e
```

## Development

The front-end has a `main.js` entry file, which takes care of initiating the Vue structure.

The base vue component is `App.vue`, which takes care of the main layout structure.

Every view (or "page") has its own file under `views`, and all components can be found in `components`.