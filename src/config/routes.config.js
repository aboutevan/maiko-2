import { PageHome, PageAbout, PageStudioShots } from 'page';
export default [
  {
    name: 'home',
    path: '/',
    visibleInMenu: true,
    menuTitle: 'Home',
    component: PageHome,
    childRoutes: {},
  },
  {
    name: 'about',
    path: '/about',
    visibleInMenu: true,
    menuTitle: 'About',
    component: PageAbout,
    childRoutes: {},
  },
  {
    name: 'studioShots',
    path: '/studio-shots',
    visibleInMenu: true,
    menuTitle: 'Studio Shots',
    component: PageStudioShots,
    childRoutes: {},
  },
];
