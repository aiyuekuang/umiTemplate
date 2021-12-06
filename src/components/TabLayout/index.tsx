/*
 * @Author: your name
 * @Date: 2021-10-09 17:29:28
 * @LastEditTime: 2021-10-11 12:16:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \csc-admin\src\components\TabLayout\index.tsx
 */
import React from 'react';
import { TabLayout } from '@/components/PanelTabs/index';

const contextMenuLabels = {
  closeTab: '关闭标签',
  closeRightTabs: '关闭右侧标签',
  closeAllTabs: '关闭所有标签',
};

export default (props: any) => {
  return <TabLayout {...props} contextMenuLabels={contextMenuLabels} />;
};
