/*
 * @Author: your name
 * @Date: 2021-11-24 14:08:57
 * @LastEditTime: 2021-11-24 18:25:11
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \csc-admin\src\services\csc-server\lingshoukehuPSIfenxi.ts
 */
// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 零售客户PSI分析-一级PSI表明细报表 POST /api/psi/customerQuantity/getItemsByPaged */
export async function getItemsByPagedRetailCustomer1(
  body: API.RetailCustomerPageBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOPagedListRetailCustomerDetailView_>(
    '/api/psi/customerQuantity/getItemsByPaged',
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

/** 零售客户PSI分析-PSI整体分析 POST /api/psi/customerQuantity/getPsiGlobalAnalysis */
export async function getPsiGlobalAnalysisRetailCustomer1(
  body: API.RetailCustomerBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListPsiCardView_>('/api/psi/customerQuantity/getPsiGlobalAnalysis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 零售客户PSI分析-PSI销量趋势分析 POST /api/psi/customerQuantity/getTrendData */
export async function getTrendDataRetailCustomer1(
  body: API.RetailCustomerBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartData1View_>('/api/psi/customerQuantity/getTrendData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
