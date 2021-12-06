// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 客户提货率-获取 客户提货率分析(柱状图) 数据 POST /api/gdp/customerPickUpRate/getChartData */
export async function getChartDataUsingPOST1(
  body: API.CustomerPickUpRatePirArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartDataPickUpView_>('/api/gdp/customerPickUpRate/getChartData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 客户提货率-获取 客户提货率分析(次数/数量) 数据 POST /api/gdp/customerPickUpRate/getData */
export async function getDataUsingPOST1(
  body: API.CustomerPickUpRateArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVORateAnalyView_>('/api/gdp/customerPickUpRate/getData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 客户提货率-获取 明细分页 数据 POST /api/gdp/customerPickUpRate/getItemsByPaged */
export async function getItemsByPagedCustomerPickUpRate1(
  body: API.CustomerPickUpRatePageArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOPagedListPickUpRateDetailView_>(
    '/api/gdp/customerPickUpRate/getItemsByPaged',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      data: body,
      ...(options || {}),
    },
  );
}
