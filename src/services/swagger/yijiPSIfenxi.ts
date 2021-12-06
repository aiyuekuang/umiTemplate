/*
 * @Author: your name
 * @Date: 2021-11-24 14:08:58
 * @LastEditTime: 2021-11-24 18:26:16
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \csc-admin\src\services\swagger\yijiPSIfenxi.ts
 */
// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 一级PSI分析-一级PSI表明细报表 POST /api/psi/firstLevelAnalyse/getItemsByPaged */
export async function getItemsByPagedFirstLevelPsi1(
  body: API.FirstLevelBasePageArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOPagedListFirstLevelDetailView_>(
    '/api/psi/firstLevelAnalyse/getItemsByPaged',
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

/** 一级PSI分析-PSI整体分析 POST /api/psi/firstLevelAnalyse/getPsiGlobalAnalysis */
export async function getPsiGlobalAnalysisUsingPOST1(
  body: API.FirstLevelBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListPsiCardView_>(
    '/api/psi/firstLevelAnalyse/getPsiGlobalAnalysis',
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

/** 一级PSI分析-PSI销量趋势分析 POST /api/psi/firstLevelAnalyse/getTrendData */
export async function getTrendDataFirstLevelPsi1(
  body: API.FirstLevelBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOChartData1View_>('/api/psi/firstLevelAnalyse/getTrendData', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
