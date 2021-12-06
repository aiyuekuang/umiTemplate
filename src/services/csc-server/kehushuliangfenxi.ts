// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 获取 客户活跃组织对比 数据 POST /api/customer/quantity/getActiveHistogramData */
export async function getActiveHistogramDataUsingPOST1(
  body: API.CustomerQuantityArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartData1View_>('/api/customer/quantity/getActiveHistogramData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取 客户活跃趋势分析 数据 POST /api/customer/quantity/getActiveLineChartData */
export async function getActiveLineChartDataUsingPOST1(
  body: API.CustomerQuantityArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartData1View_>('/api/customer/quantity/getActiveLineChartData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取 客户活跃结构 数据 POST /api/customer/quantity/getActivePieChartData */
export async function getActivePieChartDataUsingPOST1(
  body: API.CustomerQuantityArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartData1View_>('/api/customer/quantity/getActivePieChartData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 客户数量分析-获取 指标卡 数据 POST /api/customer/quantity/getCardChartData */
export async function getCardChartDataUsingPOST1(
  body: API.CustomerQuantityArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListCardView_>('/api/customer/quantity/getCardChartData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取 客户等级组织对比 数据 POST /api/customer/quantity/getLevelHistogramData */
export async function getLevelHistogramDataUsingPOST1(
  body: API.CustomerQuantityArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartData1View_>('/api/customer/quantity/getLevelHistogramData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取 客户等级趋势分析 数据 POST /api/customer/quantity/getLevelLineChartData */
export async function getLevelLineChartDataUsingPOST1(
  body: API.CustomerQuantityArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartData1View_>('/api/customer/quantity/getLevelLineChartData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 获取 客户等级结构 数据 POST /api/customer/quantity/getLevelPieChartData */
export async function getLevelPieChartDataUsingPOST1(
  body: API.CustomerQuantityArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartData1View_>('/api/customer/quantity/getLevelPieChartData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
