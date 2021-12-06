/*
 * @Author: your name
 * @Date: 2021-11-24 14:08:57
 * @LastEditTime: 2021-11-24 18:25:04
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \csc-admin\src\services\csc-server\kucunfenxi.ts
 */
// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 库存分析-库存明细表 POST /api/psi/inventory/getItemsByPaged */
export async function getItemsByPagedInventory1(
  body: API.BaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOPagedListInventoryDetailView_>(
    '/api/psi/inventory/getItemsByPaged',
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

/** 库存分析-库存概览 POST /api/psi/inventory/getPsiGlobalAnalysis */
export async function getPsiGlobalAnalysisInventory1(
  body: API.BaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListInventoryCardView_>('/api/psi/inventory/getPsiGlobalAnalysis', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
