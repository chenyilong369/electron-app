/*
 * @Author: your name
 * @Date: 2021-08-14 20:04:53
 * @LastEditTime: 2021-08-14 20:48:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \electron-app\app\renderer\common\utils\router.ts
 */

/**
 * @description: 判断是否是外部链接
 * @param {string} url - 链接
 * @return {*}
 */
export function isHttpofUrl(url: string): boolean {
  const regRule = /(http|https):\/\/([\w.]+\/?)\S*/;
  return regRule.test(url.toLowerCase());
}
