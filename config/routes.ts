/*
 * @Author: your name
 * @Date: 2021-09-29 10:37:05
 * @LastEditTime: 2021-11-11 10:54:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \csc-admin\config\.ts
 */
const RouteWatcher = '@/wrappers/RouteWatcher';

export default [
  {
    path: '/',
    component: '@/components/TabLayout',
    flatMenu: true, // lift sub-routes up to top
    routes: [
      {
        path: '/index',
        name: 'index',
        icon: '/icons/index.svg',
        component: './Welcome',
        wrappers: [RouteWatcher],
      },
      {
        path: '/component',
        name: 'component',
        icon: '/icons/empty.svg',
        // access: 'test',
        component: './Admin',
        wrappers: [RouteWatcher],
      },
    ],
  },
  {
    component: './404',
    wrappers: [],
  },
];
