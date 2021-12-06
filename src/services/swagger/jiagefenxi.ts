/*
 * @Author: your name
 * @Date: 2021-10-28 18:06:13
 * @LastEditTime: 2021-11-24 18:25:37
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \csc-admin\src\services\swagger\jiagefenxi.ts
 */
// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 价格分析-获取重点商品版本列表 POST /api/item/price/getHotSkuvItems */
export async function getHotSkuvItemsUsingPOST1(
  body: API.HotSkuvItemsArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListHotSkuVersionView_>('/api/item/price/getHotSkuvItems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 价格分析-获取价格明细报表 POST /api/item/price/getItemsByPaged */
export async function getItemsByPagedPrice1(
  body: API.GetPriceDetailArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOPagedListPriceDetailView_>('/api/item/price/getItemsByPaged', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 价格分析-获取重点商品版本价格/销量趋势数据 POST /api/item/price/getTrendData */
export async function getTrendDataPrice1(
  body: API.GetTrendDataArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartData1View_>('/api/item/price/getTrendData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
