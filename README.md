# Demo
[View online demo this example](https://nguyenkhois.github.io/react-pretence-router-demo/dist/) -or- [Download this package on npm](https://www.npmjs.com/package/react-pretence-router)

## Using
* Create your own build environment or using [code-template-generator](https://www.npmjs.com/package/code-template-generator).
* Installation for these needed dependencies:
    * Installation React: `$ npm i --save react react-dom`
    * Installation Redux: `$ npm i --save redux react-redux`
    * Installation react-pretence-router: `$ npm i -D react-pretence-router`
* Using `include` property in Webpack config for Babel Loader (view file `/webpack.common.js` in this example) and do not use exclude property.
````
include: [
    path.resolve(__dirname, "src"),
    path.resolve(__dirname, "node_modules/react-pretence-router")
]
````
* View these files to know how you can using this router:
    * `/src/app.js`: for using `Route`, `router` components and combination with Redux state in your app.
    * `/src/menu.js`: for using `Link` component

Happy coding! (^_^)

Tested on:
* Windows 10 (version 1803)
* MacOS High Sierra (version 10.13)
* Debian 9

## Cloning this repository
* Local web server started at: `htpp://localhost:9000`
* Commands:
    * `npm run start`: start Webpack Dev Server
    * `npm run build`: compile your app with production mode in Webpack into folder `./dist`
