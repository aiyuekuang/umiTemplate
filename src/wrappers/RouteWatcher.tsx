/*
 * @Author: your name
 * @Date: 2021-10-09 17:29:54
 * @LastEditTime: 2021-10-12 10:34:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \csc-admin\src\wrappers\RouteWatcher.tsx
 */
import React from 'react';
import { useIntl } from 'umi';

import { RouteWatcher } from '@/components/PanelTabs/index';

export default function (props: any) {
  const intl = useIntl();
  const { route } = props;

  route.tabLocalName = intl.formatMessage({
    id: `menu${route.path.split('/').join('.')}`,
    defaultMessage: route.name,
  });

  return <RouteWatcher {...props} />;
}
