// @ts-ignore
/* eslint-disable */
import { request } from 'umi';

/** 下拉选项-获取 代理 下拉列表 POST /api/common/dropList/getAgency */
export async function getAgencyUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getAgency', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 物品销量类型(注册/核销) 下拉列表 POST /api/common/dropList/getArticleSaleType */
export async function getArticleSaleTypeUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getArticleSaleType', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 下拉选项-获取 客户所属品牌 下拉列表 POST /api/common/dropList/getBrandOfCustomer */
export async function getBrandOfCustomerUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getBrandOfCustomer', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 渠道 下拉列表 POST /api/common/dropList/getChannel */
export async function getChannelUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getChannel', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 下拉选项-获取 客户生命周期（合作状态） 下拉列表 POST /api/common/dropList/getCooperationStatus */
export async function getCooperationStatusUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCooperationStatus', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 币种 下拉列表 POST /api/common/dropList/getCurrencyType */
export async function getCurrencyTypeUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCurrencyType', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 下拉选项-获取 客户活跃类型 下拉列表 POST /api/common/dropList/getCustomerActiveType */
export async function getCustomerActiveTypeUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCustomerActiveType', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 客户大类 下拉列表 POST /api/common/dropList/getCustomerBigCategory */
export async function getCustomerBigCategoryUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCustomerBigCategory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 业务模式 下拉列表 POST /api/common/dropList/getCustomerBusMode */
export async function getCustomerBusModeUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCustomerBusMode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 运营商属性 下拉列表 POST /api/common/dropList/getCustomerCarrier */
export async function getCustomerCarrierUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCustomerCarrier', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 客户编码 下拉列表 POST /api/common/dropList/getCustomerCode */
export async function getCustomerCodeUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCustomerCode', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 客户组 下拉列表 POST /api/common/dropList/getCustomerGroup */
export async function getCustomerGroupUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCustomerGroup', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 客户等级 下拉列表 POST /api/common/dropList/getCustomerLevel */
export async function getCustomerLevelUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCustomerLevel', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 下拉选项-获取 客户名称 下拉列表 POST /api/common/dropList/getCustomerName */
export async function getCustomerNameUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCustomerName', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 客户简称 下拉列表 POST /api/common/dropList/getCustomerShortName */
export async function getCustomerShortNameUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCustomerShortName', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 客户小类 下拉列表 POST /api/common/dropList/getCustomerSmallCategory */
export async function getCustomerSmallCategoryUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCustomerSmallCategory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 客户子类 下拉列表 POST /api/common/dropList/getCustomerSubCategory */
export async function getCustomerSubCategoryUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getCustomerSubCategory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 总部认证等级 下拉列表 POST /api/common/dropList/getFactoryAuttcLevel */
export async function getFactoryAuttcLevelUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getFactoryAuttcLevel', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 一代客户 下拉列表 POST /api/common/dropList/getGenerationCustomer */
export async function getGenerationCustomerUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getGenerationCustomer', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 下拉选项-获取 库存周转天数 下拉列表 POST /api/common/dropList/getInventoryTurnoverDays */
export async function getInventoryTurnoverDaysUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getInventoryTurnoverDays', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 下拉选项-获取 二级管理区域名称 下拉列表 POST /api/common/dropList/getLevel2ManagementArea */
export async function getLevel2ManagementAreaUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getLevel2ManagementArea', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 运营组织名称 下拉列表 POST /api/common/dropList/getOperatingOrgName */
export async function getOperatingOrgNameUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getOperatingOrgName', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 参考价格状态 下拉列表 POST /api/common/dropList/getPriceStatus */
export async function getPriceStatusUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getPriceStatus', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 下拉选项-获取 价格类型 下拉列表 POST /api/common/dropList/getPriceType */
export async function getPriceTypeUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getPriceType', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 下拉选项-获取 一级管理区域名称 下拉列表 POST /api/common/dropList/getPrimaryManagementArea */
export async function getPrimaryManagementAreaUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getPrimaryManagementArea', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 品牌 下拉列表 POST /api/common/dropList/getProductBrand */
export async function getProductBrandUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getProductBrand', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 品类 下拉列表 POST /api/common/dropList/getProductCategory */
export async function getProductCategoryUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getProductCategory', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 商品 下拉列表 POST /api/common/dropList/getProductItem */
export async function getProductItemUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getProductItem', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 生命周期(试销/归档) 下拉列表 POST /api/common/dropList/getProductLifeCycleType */
export async function getProductLifeCycleTypeUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getProductLifeCycleType', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 下拉选项-获取 系列 下拉列表 POST /api/common/dropList/getProductSeries */
export async function getProductSeriesUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getProductSeries', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 产品类型 下拉列表 POST /api/common/dropList/getProductType */
export async function getProductTypeUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getProductType', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 销售组织层级 下拉列表 POST /api/common/dropList/getSalesOrgLevel */
export async function getSalesOrgLevelUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getSalesOrgLevel', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 下拉选项-获取 销售组织名称 下拉列表 POST /api/common/dropList/getSalesOrgName */
export async function getSalesOrgNameUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getSalesOrgName', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 二代客户 下拉列表 POST /api/common/dropList/getSecondGenerationCustomer */
export async function getSecondGenerationCustomerUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>(
    '/api/common/dropList/getSecondGenerationCustomer',
    {
      method: 'POST',
      ...(options || {}),
    },
  );
}

/** 下拉选项-获取 上柜率口径 下拉列表 POST /api/common/dropList/getShelfType */
export async function getShelfTypeUsingPOST1(options?: { [key: string]: any }) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getShelfType', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 下拉选项-获取 sku 下拉列表 POST /api/common/dropList/getSku */
export async function getSkuUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getSku', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** 下拉选项-获取 商品版本 下拉列表 POST /api/common/dropList/getSkuv */
export async function getSkuvUsingPOST1(
  body: API.DropListBaseArg,
  options?: { [key: string]: any },
) {
  return request<API.ResponseVOListDropListView_>('/api/common/dropList/getSkuv', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
