// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 上架分析-获取 组织对比分析 数据 POST /api/item/shelf/getOrgChartData */
export async function getOrgChartDataUsingPOST1(
  body: API.ShelfChartDataArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartData1View_>('/api/item/shelf/getOrgChartData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 上架分析-获取 商品上架分析 数据 POST /api/item/shelf/getRateChartData */
export async function getRateChartDataUsingPOST1(
  body: API.ShelfChartDataArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListShelfAnalyseDataView_>('/api/item/shelf/getRateChartData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 上架分析-获取 商品上架/上柜率维度筛选分页数据 POST /api/item/shelf/getShelfByPaged */
export async function getShelfByPagedUsingPOST1(
  body: API.PageShelfChartDataArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOPagedListShelfDetailView_>('/api/item/shelf/getShelfByPaged', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 上架分析-获取 商品上架/上柜率明细分页数据 POST /api/item/shelf/getShelfItemsByPaged */
export async function getShelfItemsByPagedUsingPOST1(
  body: API.PageShelfChartDataArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOPagedListShelfItemDetailView_>(
    '/api/item/shelf/getShelfItemsByPaged',
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

/** 上架分析-获取商品结构分析数据 POST /api/item/shelf/getStructureChartData */
export async function getStructureChartDataUsingPOST1(
  body: API.ShelfChartDataArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartDataView_>('/api/item/shelf/getStructureChartData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 上架分析-获取 商品趋势分析 数据 POST /api/item/shelf/getTrendChartData */
export async function getTrendChartDataUsingPOST1(
  body: API.ShelfChartDataArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartData1View_>('/api/item/shelf/getTrendChartData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
