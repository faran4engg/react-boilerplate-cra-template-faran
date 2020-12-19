import { HomePage } from 'app/pages/HomePage/async';
import { NotFoundPage } from 'app/pages/NotFoundPage/async';

const routes = [
  {
    component: HomePage, // view rendered
    path: '/home', // the url
  },
  {
    component: NotFoundPage,
    path: '/404',
  },
];

export default routes;
