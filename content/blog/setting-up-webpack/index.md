---
title: Setting Up Webpack
subtitle: Setting up Webpack and Babel
date: "2020-02-06T22:40:32.169Z"
description: This a two part post, describing how to set up and configure Webpack and Babel.
slug: 'setting-up-webpack'
---

  I've long struggled to understand and correctly configure webpack. I didn't even understand what Babel was meant to do never mind how to configure it and set it up. One the many things I've been grateful to Jonas Schmedtmann's <a href="https://www.udemy.com/course/the-complete-javascript-course/">Complete Javascript Course</a>, has been Jonas' lucid and thorough explanation of setting up webpack and babel. Though this doesn't get around the constant pitfalls of errors and updates that can make modern tooling so frustrating, I now at least understand how to set up webpack from scratch. 

## Step One

 1) To set up a basic `package.json`, run `npm init` in project root. Answer as desired to the prompts. This will deliver a very basic `package.json` as follows: 
 ```
 {
  "name": "general",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "",
  "license": "ISC"
}
``` 

2) Now we have to install webpack
    - run `npm install webpack --save-dev` (or `npm install --save-dev webpack`). The `save-dev` tag installs webpack as a development dependency in `package.json`. This is because we have two types of packages in the node.js world: 
    - dev tools
    - libraries

As a pure dependency (or library), we use 

`npm install --save react` (can also be `npm install react --save`). 

Conversely, to uninstall a dependency: 

`npm uninstall --save react`

All these dependencies are *locally* installed, meaning they are confined to the project in which they are installed. However, we can also install our dependencies globally: 

`npm install live-server --global` 

(may have to prefix with `sudo` because of permissions) 

or simply: `npm install live-server -g`

## 3) Configuring Webpack

- webpack can bundle everything from js to sass, images. It bundles them all into one file for each (js, css, images). *For the full range of options, visit the Webpack website: https://webpack.js.org/*

We'll be using webpack 5, which is the latest version. According to the <a href="https://webpack.js.org/concepts/">documentation</a>, there are six key concepts to understand in Webpack: 
1) 

this is the basic webpack configuration: 
```
const path = require('path'); 

module.exports = {
    entry: './src/js/index.js',
    output: {
        path: path.resolve(__dirname,'dist.js'), 
        filename: 'bundle.js'
    }, 
    mode: 'development'
}; 
```

Then in `package.json`: 
```
`  "scripts": {
    "dev": "webpack"
  },
```

  Which will call webpack. But first we have to install webpack for the command line: 
  `npm install --save-dev webpack-cli`

  We can actually move the `mode: 'development'` into the scripts section of `package.json` thus (this includes a 'build' option which will make our scripts even smaller): 

```
  "scripts": {
    "dev": "webpack --mode development",
    "build": "webpack -- mode production"
  },
```

## Here are some changes with configuration: 

for webpack: 
npm install --save-dev @babel/core @babel/preset
-env babel-loader 
npm install --save core-js@3 regenerator-runtime
 
Then `entry` in `webpack.config.js`: 
    `entry: ['./src/js/index.js']`

and `.babelrc`: 
```
{
    "presets": [
        ["@babel/env", {
            "useBuiltIns": "usage",
            "corejs": "3", 
            "targets": {
                "browsers": [
                    "last 5 versions",
                    "ie >= 8"
                ]
            }
        }]
    ]
}
```

- one of the absurdities about the tooling world is - a development dependency like webpack has hundreds, even thousands of dependencies itself. 

## 135 - The Webpack Dev Server 

- the webpack dev server automatically reloads the page when we make changes. To add we run: 
    `npm install --save-dev webpack-dev-server`
And add the following to our `webpack.config.js` file: 

```
 devServer: {
        contentBase: './dist'
    }
```
Then add this script to `package.json`: `"start": "webpack-dev-server --mode development --open",`

So it runs `webpack-dev-server` in development mode, and opens the page as soon as we start the script. 
- **Important** When webpack is running in development mode, it bundles automatically into html, thus there will be no physical `bundle.js` file (or whatever). 

- In **webpack**, plugins allow us to do complex processing of our input files. 
- In this case, we want to import our `index.html` form src to dist. To do this, another installation: 
`npm install html-webpack-plugin --save-dev`

And require in webpack.config.js file: 
`const HtmlWebpackPlugin = require('html-webpack-plugin'); `

And configure below 'devServer': 
```
plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html', 
            template: './src/index.html'
        })
    ]
```
And hey presto, all the index.html code is transferred from `src` to `dist`. It even injects `bundle.js` into the bottom of the live `index.html` file. 

## 136 Adding Babel 

- see https://babeljs.io
- See revised script(s): 
```
npm install --save-dev @babel/core @babel/preset-env babel-loader 
npm install --save core-js@3 regenerator-runtime
```

*Loaders* in webpack allow us to *import* or *load* all kinds of different files and process them. Like ES6 js to ES5 JS, or SASS to CSS. 

So another set of rules in webpack (at the bottom, below plugins): 
```
    module: {
        rules: [
            {
                test: /\.js$/, 
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    }
```

Now we have to add `.babelrc` file and add the following: 
```
{
    "presets": [
        ["@babel/env", {
            "useBuiltIns": "usage",
            "corejs": "3", 
            "targets": {
                "browsers": [
                    "last 5 versions",
                    "ie >= 8"
                ]
            }
        }]
    ]
}
```
The `preset` is a collection of code transofrm plugins. This is the code that performs the actual transformation. `targets` which browser we want to target. Then babel knows which of the ES6 features it needs to translate to work with the appropriate browsers. 

Things like `Promises` or methods like `array.from` do not exist in ES5. So we have to polyfill them, and have to install another package: 
`npm install babel-polyfill --save`
This will convert code that goes into our final code, so it's a dependency, not a dev dependency. 

in webpack.config, we have to account for multiple entry points, by creating an array: 
`entry: ['./src/js/index.js'],`

I think I finally understand webpack, babbel and how to use them. May have to review. 