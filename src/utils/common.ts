/**
 * 数值转千分位
 * @param num
 * @returns
 */
export const dealNum = (num: number | string): string => {
  if (!num || isNaN(Number(num))) return '-';
  const val = num.toString();
  return val.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => s + ',');
};
