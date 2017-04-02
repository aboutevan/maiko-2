#React Universal

>### !!! This is a living project and will often change !!!

Single Page React App with Server Side Rendering, with a bunch of added features. [View example app](http://react-app.aboutevan.com).

##Quick Start


Yarn(recommended):

`yarn && yarn start`

NPM:

`npm install && npm start`


##Features

***Hot Reloading***

Webpack build with HMR propagates changes to JS and CSS/Sass instantly without refreshing the page.

***Sass/Foundation***

Write styles with Sass, with [Foundation](http://foundation.zurb.com/sites/docs/) styles integrated by default, but easily excluded in the build.  Post-CSS Autoprefixer included.
 

***Modern, modular JavaScript***

Use the power of next generation JavaScript.  Write JS or JSX with ES6/2015, making modular architecture a breeze.

***Routing***

Easily manage routes with [React Router](https://github.com/ReactTraining/react-router).

***SEO***


Server side rendering makes helps search engines index each page.  [React Helmet](https://github.com/nfl/react-helmet) allows for clear, simple meta tag management.

***Testing***

Test React components with [Enzyme](https://github.com/airbnb/enzyme), [Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/1.0/index.html).

## Documentation


* ###Tasks
  

  * `yarn start`

    Will run an Express dev server with webpack-dev-middleware and webpack-hot-middleware to enable hot reloading.  The server is accessible via BrowserSync on `localhost:3000`, which proxies from port 9000.

  * `yarn run build`

    Copies the `src` directory to a `dist` directory with production settings.
  
  * `yarn run production`

    Same as `build` but also launches server on port 9000.
  
  * `yarn run deploy`

    This will build and push a production version of the app to a configured Heroku domain.


  * `yarn run test`

    Run all tests in the `test` directory.  Via Chrome and PhantomJS.
