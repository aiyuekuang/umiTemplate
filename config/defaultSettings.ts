/*
 * @Author: your name
 * @Date: 2021-09-29 10:37:05
 * @LastEditTime: 2021-09-29 14:50:02
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \csc-admin\config\defaultSettings.ts
 */
import { Settings as LayoutSettings } from '@ant-design/pro-layout';

const Settings: LayoutSettings & {
  pwa?: boolean;
  logo?: string;
} = {
  navTheme: 'light',
  // 主色调
  primaryColor: '#C59461',
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  colorWeak: false,
  title: 'ztao',
  pwa: false,
  logo: '/icons/logo@2x.png',
  iconfontUrl: '',
};

export default Settings;
