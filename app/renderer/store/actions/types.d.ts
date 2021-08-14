/*
 * @Description: action 的类型
 * @Autor: chenyilong369
 * @Date: 2021-08-14 23:56:55
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-08-15 00:29:26
 */

export interface GlobalModel {
  AppName: string;
}

export interface SetGlobalModel {
  type: string;
  globalModel: GlobalModel;
}
