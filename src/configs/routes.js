import {
  Error,
  UnitForm,
  UnitList
} from '../pages';

const routes = [
  {
    path: '/units/form',
    component: <UnitForm />,
    exact: true
  },
  {
    path: '/units/:id/form',
    component: <UnitForm />,
    exact: true
  },
  {
    path: '/units',
    component: <UnitList />,
    exact: true
  },
  {
    path: '*',
    component: <Error />
  }
];

export default routes;
