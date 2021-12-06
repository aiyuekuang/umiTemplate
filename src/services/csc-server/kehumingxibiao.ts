/*
 * @Author: your name
 * @Date: 2021-10-28 17:32:32
 * @LastEditTime: 2021-11-24 18:24:59
 * @LastEditors: your name
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \csc-admin\src\services\csc-server\kehumingxibiao.ts
 */
// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 客户明细表-获取 明细分页 数据 POST /api/customer/info/getItemsByPaged */
export async function getItemsByPagedInfo1(
  body: API.GetItemsByPagedArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOPagedListCustomerDetailView_>('/api/customer/info/getItemsByPaged', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
