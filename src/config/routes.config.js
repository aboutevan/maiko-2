export default [
  {
    name: 'home',
    path: '/',
    visibleInMenu: true,
    menuTitle: 'Home',
    component: 'App',
    childRoutes: {},
  },
  {
    name: 'about',
    path: '/about',
    visibleInMenu: true,
    menuTitle: 'About',
    component: 'AboutPage',
    childRoutes: {},
  },
  {
    name: 'studioShots',
    path: '/studio-shots',
    visibleInMenu: true,
    menuTitle: 'Studio Shots',
    component: 'PageStudioShots',
    childRoutes: {},
  },
];
