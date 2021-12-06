import type { Settings as LayoutSettings } from '@ant-design/pro-layout';
import type { RequestConfig, RunTimeLayoutConfig } from 'umi';
import { Link } from 'umi';
import RightContent from '@/components/RightContent';
import Footer from '@/components/Footer';
import './style/lib.less';
import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import { notification } from 'antd';
import { getUrlParam } from 'esn';
import { useState } from 'react';

const isDev = process.env.NODE_ENV === 'development';

const token = getUrlParam('token');

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState(): Promise<{
  settings?: Partial<LayoutSettings>;
  canAdmin?: boolean;
  hasRoutes?: any[];
}> {
  return {
    settings: {},
    canAdmin: false,
    hasRoutes: [
      'priceAnalysis',
      'commodityShelfAnalysis',
      'customerPickUpRate',
      'primaryPsiAnalysis',
      'secondaryPsiAnalysis',
      'customerPsiAnalysis',
      'inventoryAnalysis',
      'customerQuantityAnalysis',
      'customerDetails',
      'policyAchievementAnalysis',
    ],
  };
}

export const request: RequestConfig = {
  timeout: 20000,
  errorConfig: {
    errorPage: '/404',
  },
  headers: {
    Authorization: token,
  },
  errorHandler: () => {},
  middlewares: [],
  requestInterceptors: [],
  responseInterceptors: [
    async (response) => {
      const data = await response.clone().json();
      if (data.code !== 200) {
        notification.warning({
          message: '提示',
          description: data.message,
        });
        throw new Error(data.message);
      }
      return response;
    },
  ],
};

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({ initialState }) => {
  return {
    rightContentRender: () => <RightContent />,
    disableContentMargin: false,
    waterMarkProps: {
      content: '水印',
    },
    // menuHeaderRender: (data) => {
    //   console.log(3333, data);
    // },
    onCollapse: (bool) => {
      if (bool) {
        // @ts-ignore
        document.querySelector('#logo > a > img').src = '/icons/logo_small.svg';
      } else {
        // @ts-ignore
        document.querySelector('#logo > a > img').src = '/icons/logo@2x.png';
      }
    },
    contentStyle: { margin: 0 },
    footerRender: () => <Footer />,
    onPageChange: () => {},
    menuHeaderRender: undefined,
    layout: 'side',
    navTheme: 'dark',
    getMenuData: {
      menu: { size: 'small' },
    },
    links: isDev
      ? [
          <Link to="/umi/plugin/openapi" target="_blank">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link to="/~docs" target="_blank">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    ...initialState?.settings,
  };
};
