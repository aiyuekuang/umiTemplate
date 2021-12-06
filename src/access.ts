/*
 * @Author: your name
 * @Date: 2021-09-29 10:37:05
 * @LastEditTime: 2021-10-12 12:01:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \csc-admin\src\access.ts
 */
/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState: { canAdmin: boolean; hasRoutes: any[] }) {
  const { canAdmin, hasRoutes } = initialState;

  return {
    canAdmin: () => canAdmin,
    test: () => false,
    normalRouteFilter: (route: { name: any }) => hasRoutes.includes(route.name), // initialState 中包含了的路由才有权限访问
  };
}
