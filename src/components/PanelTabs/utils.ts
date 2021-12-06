/*
 * @Author: your name
 * @Date: 2021-10-11 12:14:05
 * @LastEditTime: 2021-10-11 14:34:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \csc-admin\src\components\PanelTabs\utils.ts
 */
import isEqual from 'lodash/isEqual';

export function getTabKeyFromLocation(location: {
  pathname: any;
  search: any;
  hash: any;
  query: any;
}): string {
  const { pathname, hash, query } = location;
  const queryStr = Object.entries(query)
    .map((item) => item.join('='))
    .join('&');
  return `${pathname}${queryStr}${hash}`;
}

export function isTabActive(tabKey: string, location: any) {
  return tabKey === getTabKeyFromLocation(location);
}

export function isLocationChanged(prevLoca: any, currLoca: any) {
  const { key, search, ...otherPrevloca } = prevLoca;
  const { search: currSearch, ...otherCurrloca } = currLoca;

  if (otherPrevloca.query) {
    for (const e in otherPrevloca.query) {
      otherPrevloca.query[e] = String(otherPrevloca.query[e]);
    }
  }
  if (otherCurrloca.query) {
    for (const e in otherCurrloca.query) {
      otherCurrloca.query[e] = String(otherCurrloca.query[e]);
    }
  }

  return !isEqual(otherPrevloca, otherCurrloca);
}
