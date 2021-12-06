// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 用户书签-删除 POST /api/common/bookmark/delete */
export async function deleteUsingPOST1(
  body: API.DeleteBookmarkArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOBoolean_>('/api/common/bookmark/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户书签-获取 POST /api/common/bookmark/get */
export async function getUsingPOST1(body: API.GetBookmarkArg, options?: { [key: string]: any }) {
  return request<API.ResponseVOListUserBookmarkView_>('/api/common/bookmark/get', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户书签-保存 POST /api/common/bookmark/save */
export async function saveUsingPOST1(body: API.SaveBookmarkArg, options?: { [key: string]: any }) {
  return request<API.ResponseVOBoolean_>('/api/common/bookmark/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 用户书签-更新 POST /api/common/bookmark/update */
export async function updateUsingPOST1(
  body: API.UpdateBookmarkArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOBoolean_>('/api/common/bookmark/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
