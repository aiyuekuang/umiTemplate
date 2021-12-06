// @ts-ignore
/* eslint-disable */

declare namespace API {
  type BaseArg = {
    /** 代理编码(对应L4销售组织) */
    agencyCode?: string;
    /** 注册/核销 */
    articleSaleType?: number;
    /** 物品类型 */
    articleType?: string[];
    /** 客户活跃类型 */
    bizActiveType?: string[];
    /** 业务模式 */
    bizModes?: string[];
    /** 品牌 */
    brandCode?: string[];
    /** 品类 */
    categoryCode?: string;
    /** 客户地市 */
    city?: string;
    /** 客户合作结束日期 区间 */
    coopEndDateRange?: string[];
    /** 客户合作开始日期 区间 */
    coopStartDateRange?: string[];
    /** 客户国家 */
    country?: string;
    /** 币种 */
    currency?: string;
    /** 客户大类 */
    customerBigCategoryCode?: string[];
    /** 客户编码 */
    customerCode?: string[];
    /** 一代客户编码(对应客户子类为一代) */
    customerCodeL1?: string[];
    /** 二代客户编码(对应客户子类为二代) */
    customerCodeL2?: string[];
    /** 客户生命周期 */
    customerCoopStatus?: string[];
    /** 客户组编码 */
    customerGroupCode?: string[];
    /** 客户等级 */
    customerLevel?: string[];
    /** 客户小类 */
    customerSmallCategoryCode?: string[];
    /** 客户子类 */
    customerSubCategoryCode?: string[];
    /** 日YYYY-MM-DD,周YYYY-ww,月YYYY-MM,年YYYY,季度YYYY-QQ */
    dateSelection?: string;
    /** 日期区间: [dateSelection1,dateSelection2] */
    dateSelectionRange?: string[];
    /** 日期类型 */
    dateType?: number;
    /** 客户区县 */
    district?: string;
    /** 总部认证等级 */
    factoryAuttcLevelCode?: string[];
    /** 是否使用缓存(后端自用) */
    ifUseCache?: boolean;
    /** 库存周转天数 */
    inventoryTurnoverDays?: number;
    /** 是否总部认证 */
    isFactoryAuttc?: boolean;
    /** 商品 */
    itemCode?: string[];
    /** 二级管理区域(对应L6销售组织) */
    level2ManagementAreaCode?: string;
    /** 渠道: 线上/线下 */
    onlineType?: string;
    /** 运营组织编码 */
    operatingOrgCode?: string;
    /** 运营组织id */
    operatingOrgId?: string;
    /** 运营商属性 */
    operatorAttr?: string[];
    /** 指标类型 */
    pointerType?: number;
    /** 政策分类 */
    policyClassification?: string;
    /** 政策名称 */
    policyName?: string;
    /** 政策编号 */
    policyNumber?: string;
    /** 政策状态 */
    policyStatus?: string;
    /** 参考价格状态 */
    priceStatus?: string;
    /** 价格类型 */
    priceType?: string[];
    /** 一级管理区域(对应L5销售组织) */
    primaryManagementAreaCode?: string;
    /** 生命周期 */
    productLifeCycleType?: string;
    /** 产品类型 */
    productTypeCode?: string;
    /** 客户省份 */
    province?: string;
    /** 进货类型 */
    purchaseType?: number;
    /** 销售组织编码 */
    salesOrgCode?: string[];
    /** 一级销售组织编码 */
    salesOrgCodeL1?: string;
    /** 二级销售组织编码 */
    salesOrgCodeL2?: string;
    /** 三级销售组织编码 */
    salesOrgCodeL3?: string;
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 一级销售组织名称 */
    salesOrgNameL1?: string;
    /** 二级销售组织名称 */
    salesOrgNameL2?: string;
    /** 三级销售组织名称 */
    salesOrgNameL3?: string;
    /** 系列 */
    seriesCode?: string[];
    /** 上架客户数:100/上柜客户数101 */
    shelfListingType?: string;
    /** 上柜率口径 */
    shelfType?: string;
    /** SKU */
    skuCode?: string[];
    /** 商品版本 */
    skuvCode?: string[];
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type CardView = {
    chartData?: ChartData1View;
    quantity?: number;
    /** 所属栏 */
    title?: string;
    /** 同比数量 */
    yoyQuantity?: number;
    /** 同比值 */
    yoyValue?: number;
  };

  type ChartData1View = {
    axisData?: string[];
    codeList?: string[];
    name?: string;
    series?: ChartDataPair1View[];
  };

  type ChartDataPair1View = {
    code?: string;
    data?: number[];
    name?: string;
  };

  type ChartDataPairView = {
    code?: string;
    name?: string;
    value?: number;
  };

  type ChartDataPickUpView = {
    dataList?: ChartPickUpView[];
    title?: string;
  };

  type ChartDataView = {
    array?: ChartDataPairView[];
    type?: string;
  };

  type ChartPickUpView = {
    name?: string;
    value?: number;
  };

  type CustomerDetailView = {
    /** 客户编码 */
    bizCustCode?: string;
    /** 客户组名称 */
    bizCustGroupNameList?: string;
    /** 客户名称 */
    bizCustName?: string;
    /** 客户简称 */
    bizCustShortName?: string;
    /** 业务模式 */
    bizModesDesc?: string;
    /** 所属品牌 */
    brandDesc?: string;
    /** 客户退出期 */
    coopEndDate?: string;
    /** 客户创建日期 */
    coopStartDate?: string;
    /** 生命周期状态 */
    coopStatusDesc?: string;
    /** 客户活跃 */
    custActiveTypeDesc?: string;
    /** 客户大类 */
    custBigTypeDesc?: string;
    /** 客户等级 */
    custLevelDesc?: string;
    /** 客户小类 */
    custSmallTypeDesc?: string;
    /** 客户子类 */
    custSubTypeDesc?: string;
    /** 总部认证等级 */
    factoryAuttcLevelName?: string;
    /** 是否总部认证 */
    isFactoryAuttc?: string;
    /** 线上/线下 */
    onlineTypeDesc?: string;
    /** 运营商属性 */
    operatorAttrDesc?: string;
    /** 销售组织层级 */
    saleOrgLevel?: string;
    /** 销售组织名称 */
    saleOrgName?: string;
  };

  type CustomerPickUpRateArg = {
    /** 客户大类(名称传编码) */
    customerBigCategoryCode?: string[];
    /** 客户编码/客户名称(名称传编码) */
    customerCode?: string[];
    /** 客户等级 */
    customerLevel?: string[];
    /** 客户小类(名称传编码) */
    customerSmallCategoryCode?: string[];
    /** 客户子类(名称传编码) */
    customerSubCategoryCode?: string[];
    /** 日YYYY-MM-DD,周YYYY-ww,月YYYY-MM,年YYYY,季度YYYY-QQ */
    dateSelection?: string;
    /** 日期区间: [dateSelection1,dateSelection2] */
    dateSelectionRange?: string[];
    /** 日期类型 */
    dateType?: number;
    /** 总部认证等级(名称传编码) */
    factoryAuttcLevelCode?: string[];
    /** 销售组织编码(名称传编码) */
    salesOrgCode?: string[];
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type CustomerPickUpRatePageArg = {
    /** 客户大类(名称传编码) */
    customerBigCategoryCode?: string[];
    /** 客户编码/客户名称(名称传编码) */
    customerCode?: string[];
    /** 客户等级 */
    customerLevel?: string[];
    /** 客户小类(名称传编码) */
    customerSmallCategoryCode?: string[];
    /** 客户子类(名称传编码) */
    customerSubCategoryCode?: string[];
    /** 日期区间: [dateSelection1,dateSelection2] */
    dateSelectionRange?: string[];
    endDate?: string;
    /** 总部认证等级(名称传编码) */
    factoryAuttcLevelCode?: string[];
    /** 自定义字段 */
    filedNames?: string[];
    /** 页码 */
    pageIndex?: number;
    /** 每页展示数量 */
    pageSize?: number;
    /** 销售组织编码(名称传编码) */
    salesOrgCode?: string[];
    /** 销售组织层级 */
    salesOrgLevel?: string;
    sorter?: PagedSorter;
    startDate?: string;
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type CustomerPickUpRatePirArg = {
    /** 客户大类(名称传编码) */
    customerBigCategoryCode?: string[];
    /** 客户编码/客户名称(名称传编码) */
    customerCode?: string[];
    /** 客户等级 */
    customerLevel?: string[];
    /** 客户小类(名称传编码) */
    customerSmallCategoryCode?: string[];
    /** 客户子类(名称传编码) */
    customerSubCategoryCode?: string[];
    /** 日YYYY-MM-DD,周YYYY-ww,月YYYY-MM,年YYYY,季度YYYY-QQ */
    dateSelection?: string;
    /** 日期区间: [dateSelection1,dateSelection2] */
    dateSelectionRange?: string[];
    /** 日期类型 */
    dateType?: number;
    /** 总部认证等级(名称传编码) */
    factoryAuttcLevelCode?: string[];
    /** 销售组织编码(名称传编码) */
    salesOrgCode?: string[];
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 次数提货率为1  数量提货率为2 */
    switchParam?: string;
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type CustomerQuantityArg = {
    /** 客户活跃类型 */
    bizActiveType?: number[];
    /** 业务模式 */
    bizModesCode?: string[];
    /** 客户大类(名称传编码) */
    customerBigCategoryCode?: string[];
    /** 客户等级 */
    customerLevel?: string[];
    /** 客户小类(名称传编码) */
    customerSmallCategoryCode?: string[];
    /** 客户子类(名称传编码) */
    customerSubCategoryCode?: string[];
    /** 日期区间: [dateSelection1,dateSelection2] */
    dateSelectionRange?: string[];
    /** 日期类型 */
    dateType?: number;
    endDate?: string;
    /** 总部认证等级:0是总部等级；1是代理等级 */
    factoryAuttcLevelCode?: string[];
    /** 指定统计的指标(1~5分别是：有效客户数、活跃客户数、激活非活跃客户数、新增客户数、退出客户数) */
    fieldType?: number;
    /** 是否总部认证 */
    isFactoryAuttc?: boolean;
    /** 等级的值 */
    level?: string[];
    /** 等级类型（总部等级/代理等级） */
    levelType?: number;
    /** 销售组织编码(名称传编码) */
    salesOrgCode?: string[];
    /** 销售组织层级 */
    salesOrgLevel?: string;
    startDate?: string;
  };

  type DeleteBookmarkArg = {
    id: number;
  };

  type DropListBaseArg = {
    /** 名称（模糊匹配） */
    name?: string;
    /** 父级id(数组) */
    parentId?: string[];
  };

  type DropListView = {
    label?: string;
    orderNum?: number;
    value?: Record<string, any>;
  };

  type FirstLevelBaseArg = {
    /** 注册/核销 */
    articleSaleType?: string;
    /** 品牌 */
    brandCode?: string[];
    /** 品类 */
    categoryCode?: string;
    /** 渠道 */
    channel?: string;
    /** 一代客户编码 */
    customerCodeL1?: string[];
    /** 日期区间: [dateSelection1,dateSelection2] */
    dateSelectionRange?: string[];
    /** 日期类型 */
    dateType?: number;
    /** 是否使用缓存(后端自用) */
    ifUseCache?: boolean;
    /** 库存周转天数 */
    inventoryTurnoverDays?: number;
    /** 商品 */
    itemCode?: string[];
    /** 运营组织编码 */
    operatingOrgCode?: string;
    /** 生命周期(试销/归档) */
    productLifeCycleType?: string;
    /** 产品类型 */
    productTypeCode?: string;
    /** 客户省份 */
    province?: string;
    /** 进货类型 */
    purchaseType?: number;
    /** 一级销售组织编码 */
    salesOrgCodeL1?: string;
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 系列 */
    seriesCode?: string[];
    /** SKU */
    skuCode?: string[];
    /** 商品版本 */
    skuvCode?: string[];
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type FirstLevelBasePageArg = {
    /** 注册/核销 */
    articleSaleType?: string;
    /** 品牌 */
    brandCode?: string[];
    /** 品类 */
    categoryCode?: string;
    /** 渠道 */
    channel?: string;
    /** 一代客户编码 */
    customerCodeL1?: string[];
    /** 客户生命周期 */
    customerCoopStatus?: string[];
    /** 日期区间: [dateSelection1,dateSelection2] */
    dateSelectionRange?: string[];
    /** 日期类型 */
    dateType?: number;
    /** 自定义字段 */
    filedNames?: string[];
    /** 是否使用缓存(后端自用) */
    ifUseCache?: boolean;
    /** 库存周转天数 */
    inventoryTurnoverDays?: number;
    /** 商品 */
    itemCode?: string[];
    /** 运营组织编码 */
    operatingOrgCode?: string;
    /** 页码 */
    pageIndex?: number;
    /** 每页展示数量 */
    pageSize?: number;
    /** 指标类型 */
    pointerType?: number;
    /** 生命周期(试销/归档) */
    productLifeCycleType?: string;
    /** 产品类型 */
    productTypeCode?: string;
    /** 客户省份 */
    province?: string;
    /** 进货类型 */
    purchaseType?: number;
    /** 一级销售组织编码 */
    salesOrgCodeL1?: string;
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 系列 */
    seriesCode?: string[];
    /** SKU */
    skuCode?: string[];
    /** 商品版本 */
    skuvCode?: string[];
    sorter?: PagedSorter;
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type FirstLevelDetailView = {
    /** 代理 */
    agency?: string;
    /** 品牌 */
    brandName?: string;
    /** 品类 */
    categoryName?: string;
    /** 渠道 */
    channel?: string;
    /** 一代客户名称 */
    customerNameL1?: string;
    id?: string;
    /** 商品 */
    itemName?: string;
    /** 产品类型 */
    prodTypeName?: string;
    /** 一级销售组织名称 */
    salesOrgNameL1?: string;
    /** 系列 */
    seriesName?: string;
    /** SKU */
    skuName?: string;
    /** 商品版本 */
    skuvName?: string;
  };

  type GetBookmarkArg = {
    busId: string;
  };

  type GetItemsByPagedArg = {
    /** 客户活跃类型 */
    bizActiveType?: number[];
    /** 业务模式 */
    bizModes?: string[];
    coopEndDateBegin?: string;
    coopEndDateEnd?: string;
    /** 客户合作结束日期 区间 */
    coopEndDateRange?: string[];
    coopStartDateBegin?: string;
    coopStartDateEnd?: string;
    /** 客户合作开始日期 区间 */
    coopStartDateRange?: string[];
    /** 客户生命周期 */
    custCoopStatus?: string[];
    /** 客户大类(名称传编码) */
    customerBigCategoryCode?: string[];
    /** 客户所属品牌 */
    customerBrand?: string[];
    /** 客户编码/客户名称(名称传编码) */
    customerCode?: string[];
    /** 所属客户组(名称传编码) */
    customerGroupCode?: string[];
    /** 客户等级 */
    customerLevel?: string[];
    /** 客户小类(名称传编码) */
    customerSmallCategoryCode?: string[];
    /** 客户子类(名称传编码) */
    customerSubCategoryCode?: string[];
    /** 总部认证等级(名称传编码) */
    factoryAuttcLevelCode?: string[];
    /** 自定义字段 */
    filedNames?: string[];
    /** 是否总部认证 */
    isFactoryAuttc?: boolean;
    /** 运营商属性(名称传编码) */
    operatorAttr?: string[];
    /** 页码 */
    pageIndex?: number;
    /** 每页展示数量 */
    pageSize?: number;
    /** 销售组织编码(名称传编码) */
    salesOrgCode?: string[];
    /** 销售组织层级 */
    salesOrgLevel?: string;
    sorter?: PagedSorter;
  };

  type GetPriceDetailArg = {
    /** 注册/核销 */
    articleSaleType?: number;
    /** 物品类型 */
    articleType?: string[];
    /** 品牌 */
    brandCode?: string[];
    /** 品类 */
    categoryCode?: string[];
    /** 币种 */
    currency?: string;
    /** 日YYYY-MM-DD */
    dateSelection?: string;
    /** 日期类型 */
    dateType?: number;
    /** 自定义字段 */
    filedNames?: string[];
    /** 是否使用缓存(后端自用) */
    ifUseCache?: boolean;
    /** 商品 */
    itemCode?: string[];
    /** 运营组织名称 */
    operatingOrgCode?: string;
    /** 页码 */
    pageIndex?: number;
    /** 每页展示数量 */
    pageSize?: number;
    /** 参考价格状态 */
    priceStatus?: string;
    /** 价格类型 */
    priceType?: string[];
    /** 生命周期 */
    productLifeCycleType?: string[];
    /** 产品类型 */
    productTypeCode?: string[];
    /** 系列 */
    seriesCode?: string[];
    /** 商品版本 */
    skuvCode?: string[];
    sorter?: PagedSorter;
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type GetTrendDataArg = {
    /** 注册/核销 */
    articleSaleType?: number;
    /** 日YYYY-MM-DD */
    dateSelection?: string;
    /** 日期类型 */
    dateType?: number;
    /** 运营组织编码 */
    operatingOrgCode?: string;
    /** 重点商品版本SKU */
    skuCode?: string;
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type HotSkuVersionView = {
    maxPrice?: number;
    /** 重点商品版本名称 */
    name?: string;
    /** 重点商品版本销量 */
    qty?: number;
    /** 重点商品版本sku编码 */
    skuCode?: string;
    statPeriod?: string;
  };

  type HotSkuvItemsArg = {
    /** 注册/核销 */
    articleSaleType?: number;
    /** 日YYYY-MM-DD */
    dateSelection?: string;
    /** 日期类型 */
    dateType?: number;
    /** 运营组织编码 */
    operatingOrgCode?: string;
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type InventoryCardView = {
    /** 指标卡类型 */
    code?: string;
    /** 指标卡属性 */
    statisticList?: TitleListView[];
    /** 指标卡属性 */
    storeList?: TitleListView[];
    /** 指标卡名称 */
    title?: string;
    /** 具体指标数量值 */
    value?: number;
  };

  type InventoryDetailView = {
    /** 可用库存 */
    availableQty?: number;
    /** 客户编码 */
    bizCustCode?: string;
    /** 客户名称 */
    bizCustName?: string;
    /** 品牌 */
    brandName?: string;
    /** 品类 */
    categoryName?: string;
    /** 通路库存量 */
    channelInventoryQty?: number;
    /** 客户大类 */
    custBigTypeDesc?: string;
    /** 客户等级 */
    custLevelDesc?: string;
    /** 客户小类 */
    custSmallTypeDesc?: string;
    /** 客户子类 */
    custSubTypeDesc?: string;
    /** 仓库名称 */
    depotName?: string;
    /** 订单冻结量 */
    frozenOrderQty?: number;
    id?: string;
    /** 在库库存量（含可用+锁定） */
    invetQty?: number;
    /** 商品 */
    itemName?: string;
    /** 店铺名称 */
    mallName?: string;
    /** 产品类型 */
    prodTypeName?: string;
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 销售组织名称 */
    salesOrgName?: string;
    /** 系列 */
    seriesName?: string;
    /** SKU */
    skuName?: string;
    /** 商品版本 */
    skuvName?: string;
    /** 分补货占用量 */
    subReplenishmentQty?: number;
    /** 库存总量 */
    totalInvet?: number;
    /** 在途库存量 */
    transportInvet?: number;
  };

  type PageShelfChartDataArg = {
    /** 物品类型 */
    articleType?: string[];
    /** 品牌 */
    brandCode?: string[];
    /** 品类 */
    categoryCode?: string[];
    /** 客户大类 */
    customerBigCategoryCode?: string[];
    /** 客户等级 */
    customerLevel?: string[];
    /** 客户小类 */
    customerSmallCategoryCode?: string[];
    /** 客户子类 */
    customerSubCategoryCode?: string[];
    /** 选择日期YYYY-MM-DD */
    dateSelection?: string;
    /** 总部认证等级 */
    factoryAuttcLevelCode?: string[];
    /** 自定义字段 */
    filedNames?: string[];
    /** 是否使用缓存(后端自用) */
    ifUseCache?: boolean;
    /** 商品 */
    itemCode?: string[];
    /** 页码 */
    pageIndex?: number;
    /** 每页展示数量 */
    pageSize?: number;
    /** 生命周期 */
    productLifeCycleType?: string[];
    /** 产品类型 */
    productTypeCode?: string[];
    /** 销售组织编码 */
    salesOrgCode?: string[];
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 系列 */
    seriesCode?: string[];
    /** 上柜率口径【1: 上架上柜率，2:上柜率】 */
    shelfType?: number;
    /** SKU */
    skuCode?: string[];
    /** 商品版本 */
    skuvCode?: string[];
    sorter?: PagedSorter;
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type PagedSorter = {
    /** 排序字段 */
    fieldName?: string;
    /** 排序类型(asc,desc) */
    orderType?: string;
  };

  type PickUpRateDetailView = {
    /** 客户编码 */
    customerCode?: string;
    /** 客户大类 */
    customerFirstCategory?: string;
    /** 客户等级 */
    customerLevel?: string;
    /** 客户名称 */
    customerName?: string;
    /** 客户小类 */
    customerSecondCategory?: string;
    /** 客户子类 */
    customerThirdCategory?: string;
    /** 总部认证等级 */
    factoryAuttcLevelName?: string;
    /** 分补货提货数量 */
    gdpPickUpCount?: number;
    /** 分补货次数 */
    gdpTimes?: number;
    /** 提货数量 */
    pickUpCount?: number;
    /** 数量提货率 */
    pickUpRateForCount?: string;
    /** 次数提货率 */
    pickUpRateForTimes?: string;
    /** 提货次数 */
    pickUpTimes?: number;
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 销售组织名称 */
    salesOrgName?: string;
  };

  type PriceDetailView = {
    /** 全国平均价 */
    averagePrice?: number;
    /** 调价后7日均销 */
    averageSaleAft7Day?: number;
    /** 调价前7日均销 */
    averageSalePre7Day?: number;
    /** 品牌 */
    brandName?: string;
    /** 品类 */
    categoryName?: string;
    /** 环比上次 */
    chainValue?: string;
    /** 币种 */
    currency?: string;
    id?: string;
    /** 商品 */
    itemName?: string;
    /** 运营组织层级 */
    operatingOrgLevel?: string;
    /** 运营组织名称 */
    operatingOrgName?: string;
    /** 调价后3天上柜率 */
    overCounterAft3Day?: string;
    /** 调价前当天上柜率 */
    overCounterNow?: string;
    /** 调价后3天上架上柜率 */
    overShelfAndCounterAft3Day?: string;
    /** 调价前当天上架上柜率 */
    overShelfAndCounterNow?: string;
    /** 产品类型 */
    prodTypeName?: string;
    /** 系列 */
    seriesName?: string;
    /** SKU */
    skuName?: string;
    /** 参考价格 */
    skuPrice?: number;
    /** 参考价格名称 */
    skuPriceName?: string;
    /** 参考价格状态 */
    skuPriceStatusName?: string;
    /** 价格类型 */
    skuPriceTypeName?: string;
    /** 商品版本 */
    skuvName?: string;
  };

  type PsiCardView = {
    chartData?: ChartData1View;
    /** 指标卡类型 */
    code?: string;
    /** 指标卡名称:Sell In提货/到货、Sell Through出货、Sell Out销量/核销量、Inventory1仓库库存、DOS1仓库周转、inventory通路库存 、DOS通路周转 */
    title?: string;
    /** 具体指标数量值 */
    value?: number;
  };

  type RateAnalyView = {
    /** 数量提货率 */
    pickUpRateForCount?: string;
    /** 次数提货率 */
    pickUpRateForTimes?: string;
  };

  type RetailCustomerBaseArg = {
    /** 注册/核销 */
    articleSaleType?: number;
    /** 品牌 */
    brandCode?: string[];
    /** 品类 */
    categoryCode?: string;
    /** 渠道 */
    channel?: string;
    /** 客户大类 */
    customerBigCategoryCode?: string[];
    /** 一代客户编码 */
    customerCodeL1?: string[];
    /** 二代客户编码 */
    customerCodeL2?: string[];
    /** 客户等级 */
    customerLevel?: string[];
    /** 客户小类 */
    customerSmallCategoryCode?: string[];
    /** 客户子类 */
    customerSubCategoryCode?: string[];
    /** 日期区间: [dateSelection1,dateSelection2] */
    dateSelectionRange?: string[];
    /** 日期类型 */
    dateType?: number;
    /** 总部认证等级 */
    factoryAuttcLevelCode?: string[];
    /** 是否使用缓存(后端自用) */
    ifUseCache?: boolean;
    /** 库存周转天数 */
    inventoryTurnoverDays?: number;
    /** 商品 */
    itemCode?: string[];
    /** 运营组织编码 */
    operatingOrgCode?: string;
    /** 生命周期(试销/归档) */
    productLifeCycleType?: string;
    /** 产品类型 */
    productTypeCode?: string;
    /** 客户省份 */
    province?: string;
    /** 进货类型 */
    purchaseType?: number;
    /** 一级销售组织编码 */
    salesOrgCodeL1?: string;
    /** 二级销售组织编码 */
    salesOrgCodeL2?: string;
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 系列 */
    seriesCode?: string[];
    /** SKU */
    skuCode?: string[];
    /** 商品版本 */
    skuvCode?: string[];
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type RetailCustomerDetailView = {
    /** 代理 */
    agency?: string;
    /** 品牌 */
    brandName?: string;
    /** 品类 */
    categoryName?: string;
    /** 渠道 */
    channel?: string;
    /** 一代客户名称 */
    customerNameL1?: string;
    id?: string;
    /** 商品 */
    itemName?: string;
    /** 产品类型 */
    prodTypeName?: string;
    /** 一级销售组织名称 */
    salesOrgNameL1?: string;
    /** 系列 */
    seriesName?: string;
    /** SKU */
    skuName?: string;
    /** 商品版本 */
    skuvName?: string;
  };

  type RetailCustomerPageBaseArg = {
    /** 注册/核销 */
    articleSaleType?: string;
    /** 品牌 */
    brandCode?: string[];
    /** 品类 */
    categoryCode?: string;
    /** 渠道 */
    channel?: string;
    /** 一代客户编码 */
    customerCodeL1?: string[];
    /** 客户生命周期 */
    customerCoopStatus?: string[];
    /** 日期区间: [dateSelection1,dateSelection2] */
    dateSelectionRange?: string[];
    /** 日期类型 */
    dateType?: number;
    /** 自定义字段 */
    filedNames?: string[];
    /** 是否使用缓存(后端自用) */
    ifUseCache?: boolean;
    /** 库存周转天数 */
    inventoryTurnoverDays?: number;
    /** 商品 */
    itemCode?: string[];
    /** 运营组织编码 */
    operatingOrgCode?: string;
    /** 页码 */
    pageIndex?: number;
    /** 每页展示数量 */
    pageSize?: number;
    /** 指标类型 */
    pointerType?: number;
    /** 生命周期(试销/归档) */
    productLifeCycleType?: string;
    /** 产品类型 */
    productTypeCode?: string;
    /** 客户省份 */
    province?: string;
    /** 进货类型 */
    purchaseType?: number;
    /** 一级销售组织编码 */
    salesOrgCodeL1?: string;
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 系列 */
    seriesCode?: string[];
    /** SKU */
    skuCode?: string[];
    /** 商品版本 */
    skuvCode?: string[];
    sorter?: PagedSorter;
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type SaveBookmarkArg = {
    /** 页面标识 */
    busId?: string;
    /** 书签内容 */
    content?: string;
    /** 是否默认 */
    isDefault?: boolean;
    /** 书签名称 */
    name?: string;
  };

  type ShelfAnalyseDataView = {
    /** 商品上架分析系列上架率或者上柜率 */
    array?: ChartDataPairView[];
    name?: string;
    /** 上架率 */
    progress?: number;
  };

  type ShelfChartDataArg = {
    /** 物品类型 */
    articleType?: string[];
    /** 品牌 */
    brandCode?: string[];
    /** 品类 */
    categoryCode?: string[];
    /** 客户大类 */
    customerBigCategoryCode?: string[];
    /** 客户等级 */
    customerLevel?: string[];
    /** 客户小类 */
    customerSmallCategoryCode?: string[];
    /** 客户子类 */
    customerSubCategoryCode?: string[];
    /** 选择日期YYYY-MM-DD */
    dateSelection?: string;
    /** 日期类型 */
    dateType?: number;
    /** 总部认证等级 */
    factoryAuttcLevelCode?: string[];
    /** 是否使用缓存(后端自用) */
    ifUseCache?: boolean;
    /** 商品 */
    itemCode?: string[];
    /** 生命周期 */
    productLifeCycleType?: string[];
    /** 产品类型 */
    productTypeCode?: string[];
    /** 销售组织编码 */
    salesOrgCode?: string[];
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 系列 */
    seriesCode?: string[];
    /** 上架客户数:100/上柜客户数101 */
    shelfListingType?: number;
    /** 上柜率口径【1: 上架上柜率，2:上架率】 */
    shelfType?: number;
    /** SKU */
    skuCode?: string[];
    /** 商品版本 */
    skuvCode?: string[];
    /** tab 品类 */
    tabProductCategory?: number;
  };

  type ShelfDetailView = {
    /** 有效客户数 */
    activeCustomerCount?: number;
    /** 品牌编码 */
    brandCode?: string;
    /** 品牌 */
    brandName?: string;
    /** 品类编码 */
    categoryCode?: string;
    /** 品类 */
    categoryName?: string;
    /** 上柜客户数 */
    counterCustomerCount?: number;
    /** 商品编码 */
    itemCode?: string;
    /** 商品 */
    itemName?: string;
    /** 产品类型编码 */
    prodTypeCode?: string;
    /** 产品类型 */
    prodTypeName?: string;
    /** 销售组织编码 */
    salesOrgCode?: string;
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 销售组织名称 */
    salesOrgName?: string;
    /** 系列编码 */
    seriesCode?: string;
    /** 系列 */
    seriesName?: string;
    /** 上架上柜率 或者上柜率 */
    shelfAndCounterRate?: string;
    /** 上架客户数 */
    shelfCustomerCount?: number;
    /** 上架率 */
    shelfRate?: string;
    /** SKU编码 */
    skuCode?: string;
    /** SKU */
    skuName?: string;
    /** 商品版本编码 */
    skuvCode?: string;
    /** 商品版本 */
    skuvName?: string;
  };

  type ShelfItemDetailView = {
    /** 品牌 */
    brandName?: string;
    /** 品类 */
    categoryName?: string;
    /** 客户编码 */
    customerCode?: string;
    /** 客户名称 */
    customerName?: string;
    /** 是否上柜 */
    isCounter?: string;
    /** 是否上架 */
    isShelf?: string;
    /** 商品 */
    itemName?: string;
    /** 产品类型 */
    prodTypeName?: string;
    salesOrgCode?: string;
    /** 销售组织层级 */
    salesOrgLevel?: string;
    /** 销售组织名称 */
    salesOrgName?: string;
    /** 系列 */
    seriesName?: string;
    /** SKU */
    skuName?: string;
    /** 商品版本 */
    skuvName?: string;
  };

  type TitleListView = {
    code?: string;
    title?: string;
    trend?: string;
    value?: number;
  };

  type UpdateBookmarkArg = {
    content?: string;
    id: number;
    isDefault?: boolean;
    name?: string;
  };

  type UserBookmarkView = {
    busId?: string;
    content?: string;
    id?: number;
    isDefault?: boolean;
    name?: string;
    orderNumber?: number;
    remark?: string;
    statusCode?: number;
    userId?: number;
  };

  type PagedListCustomerDetailView_ = {
    pageIndex?: number;
    pageSize?: number;
    rows?: CustomerDetailView[];
    total?: number;
    totalPages?: number;
  };

  type PagedListFirstLevelDetailView_ = {
    pageIndex?: number;
    pageSize?: number;
    rows?: FirstLevelDetailView[];
    total?: number;
    totalPages?: number;
  };

  type PagedListInventoryDetailView_ = {
    pageIndex?: number;
    pageSize?: number;
    rows?: InventoryDetailView[];
    total?: number;
    totalPages?: number;
  };

  type PagedListPickUpRateDetailView_ = {
    pageIndex?: number;
    pageSize?: number;
    rows?: PickUpRateDetailView[];
    total?: number;
    totalPages?: number;
  };

  type PagedListPriceDetailView_ = {
    pageIndex?: number;
    pageSize?: number;
    rows?: PriceDetailView[];
    total?: number;
    totalPages?: number;
  };

  type PagedListRetailCustomerDetailView_ = {
    pageIndex?: number;
    pageSize?: number;
    rows?: RetailCustomerDetailView[];
    total?: number;
    totalPages?: number;
  };

  type PagedListShelfDetailView_ = {
    pageIndex?: number;
    pageSize?: number;
    rows?: ShelfDetailView[];
    total?: number;
    totalPages?: number;
  };

  type PagedListShelfItemDetailView_ = {
    pageIndex?: number;
    pageSize?: number;
    rows?: ShelfItemDetailView[];
    total?: number;
    totalPages?: number;
  };

  type ResponseVOChartData1View_ = {
    code?: number;
    data?: ChartData1View;
    message?: string;
  };

  type ResponseVOChartDataPickUpView_ = {
    code?: number;
    data?: ChartDataPickUpView;
    message?: string;
  };

  type ResponseVOChartDataView_ = {
    code?: number;
    data?: ChartDataView;
    message?: string;
  };

  type ResponseVOListCardView_ = {
    code?: number;
    data?: CardView[];
    message?: string;
  };

  type ResponseVOListDropListView_ = {
    code?: number;
    data?: DropListView[];
    message?: string;
  };

  type ResponseVOListHotSkuVersionView_ = {
    code?: number;
    data?: HotSkuVersionView[];
    message?: string;
  };

  type ResponseVOListInventoryCardView_ = {
    code?: number;
    data?: InventoryCardView[];
    message?: string;
  };

  type ResponseVOListPsiCardView_ = {
    code?: number;
    data?: PsiCardView[];
    message?: string;
  };

  type ResponseVOListShelfAnalyseDataView_ = {
    code?: number;
    data?: ShelfAnalyseDataView[];
    message?: string;
  };

  type ResponseVOListUserBookmarkView_ = {
    code?: number;
    data?: UserBookmarkView[];
    message?: string;
  };

  type ResponseVOPagedListCustomerDetailView_ = {
    code?: number;
    data?: PagedListCustomerDetailView_;
    message?: string;
  };

  type ResponseVOPagedListFirstLevelDetailView_ = {
    code?: number;
    data?: PagedListFirstLevelDetailView_;
    message?: string;
  };

  type ResponseVOPagedListInventoryDetailView_ = {
    code?: number;
    data?: PagedListInventoryDetailView_;
    message?: string;
  };

  type ResponseVOPagedListPickUpRateDetailView_ = {
    code?: number;
    data?: PagedListPickUpRateDetailView_;
    message?: string;
  };

  type ResponseVOPagedListPriceDetailView_ = {
    code?: number;
    data?: PagedListPriceDetailView_;
    message?: string;
  };

  type ResponseVOPagedListRetailCustomerDetailView_ = {
    code?: number;
    data?: PagedListRetailCustomerDetailView_;
    message?: string;
  };

  type ResponseVOPagedListShelfDetailView_ = {
    code?: number;
    data?: PagedListShelfDetailView_;
    message?: string;
  };

  type ResponseVOPagedListShelfItemDetailView_ = {
    code?: number;
    data?: PagedListShelfItemDetailView_;
    message?: string;
  };

  type ResponseVORateAnalyView_ = {
    code?: number;
    data?: RateAnalyView;
    message?: string;
  };

  type ResponseVOBoolean_ = {
    code?: number;
    data?: boolean;
    message?: string;
  };
}
