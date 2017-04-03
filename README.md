# React Redux SPA

Opinionated React-Redux SPA starter, with a bunch of added features. [View production build](http://react-redux.aboutevan.com).

* [Webpack 2](https://webpack.github.io/)
* [React](https://facebook.github.io/react/)
* [React Router (v4)](https://reacttraining.com/react-router/)
* [Redux](http://redux.js.org/)
* ES6/7
* [ESLint (airbnb-config)](eslint.org)
* Sass
* [Stylelint(BEM & Concentric)](https://github.com/stylelint/stylelint)
* [Enzyme](https://github.com/airbnb/enzyme)
* [Karma] (https://karma-runner.github.io/1.0/index.html)
* [Jasmine](https://jasmine.github.io/2.0/introduction.html)
* [Netlify](https://www.netlify.com/)

## Quick Start


Yarn(recommended):

`yarn && yarn start`

NPM:

`npm install && npm start`


## Features

***Hot Reloading***

Change JS and CSS/Sass instantly without refreshing the page.

***Modern, modular JavaScript***

Use the power of next generation JavaScript.  Write JS or JSX with ES6/7, making modular architecture a breeze.

***Sass/Foundation***

Write Sass, with [Foundation](http://foundation.zurb.com/sites/docs/) styles integrated by default, but easily excluded in the build.  Post-CSS Autoprefixer included.

***Enforced Best Practices***

Messy, anything-goes, code can be a nightmare.  The airbnb/ESLint config encourages best practices when writing JavaScript.  Stylelint config encourages the BEM and concentric patterns for all `.sass` files.

***Routing***

Easily manage routes with [React Router](https://reacttraining.com/react-router/).

***Testing***

Test React components with [Enzyme](https://github.com/airbnb/enzyme), [Jasmine](https://jasmine.github.io/) and [Karma](https://karma-runner.github.io/1.0/index.html).

## Documentation


### Tasks
  

  #### `yarn start`

    Will run webpack-dev-werver with hot reloading at `localhost:3000`.

  #### `yarn build`

    Static production build ready for deployment.
  
  #### `yarn deploy`

    Build and push to Netlify.


  #### `yarn test`

    Run all tests in the `test` directory.  Via Chrome and PhantomJS
    
```
node_modules/

src/
  assets/         // fonts, images
  components/
    container/    // redux components (presentation wrappers)
    layout/     // layouts or templates
    page/     // layout wrappers
    presentation/   // ui components
    components.sass // all component styles
    Root.jsx    // Provider and ConnectedRouter
    Routes.jsx    // All routes
  
  config/
    routes.config.js // global routes
  
  core /
    sass/     // global sass
    vendor/     // sass or js (foundation sass)
  
  reducers/
  store/
  
  index.jsx     // render the app
  index.sass      // all sass
  index.tpl.html    // HTML template for rendered app


test/         // all tests

tools/
  webpack/      // webpack tasks, dev vs prod settings
  webpack.config.js // config that consolidates above
  webpack.test.js   // referenced in ./karma.config.js


_redirects        // netlify redirect file needed for spa
```

This boilerplate bases its architecture on the idea of **grouping by feature**, as discussed in [this article](https://www.smashingmagazine.com/2016/09/how-to-scale-react-applications/).

Instead of grouping all actions or reducers inside an `actions` or `reducers` directory, each container component directory contains all relevant files:

```
components/
  container/
    ExampleContainer/
      actions.js
      constants.js
      reducers.js
      ExampleContainer.jsx

```

Each sub-directory under `components` contains it's own `index.js` file which simply serves as a consolidated place to export all components within that directory.  This allows for easier `imports` when used in conjuction with Webpack aliases.

```
// components/presentation/index.js

export SampleComponent from './SampleComponent/SampleComponent'

```

This can then be referenced in any other file like so:

```
// components/presentation/SomeOtherComponent/SomeOtherComponent.jsx

import { SampleComponent } from 'presentation';

```

A complete list of all aliases from `webpack.config.js`:

`presentation`


`container`

`layout`

`page`

`config`

`modernizr$`
    
