# Module Bundling with Webpack

Webpack can bundle multiple JS files into one or more minified js files taking in consideration dependencies and code repetition. (CommonJS style)

Webpack focus on client side JavaScript.

## Webpack configuration

Initialize a new node project:

```
$ npm init
```

Create a simple folder structure and some basic files:

```
$ mkdir client
$ mkdir client/js
$ mkdir build
$ touch client/js/app.js
```

The big difference for webpack is that its configuration file is written in JavaScript code, not JSON object, making it more flexible and powerful.

Let's install some packages:

```
$ npm i webpack babel-polyfill --save
```

And let's create a webpack.config.js file:

```
$ touch .gitignore
$ touch webpack.config.js
```

In your package.json file, include the script to run webpack:

```
"webpack": "webpack --watch --progress --colors"
```
