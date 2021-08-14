/*
 * @Description: action 主文件
 * @Autor: chenyilong369
 * @Date: 2021-08-14 23:59:51
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-08-15 00:06:25
 */

import { AnyAction } from 'redux';
import { SET_GLOBAL_MODEL } from './actionsType';
import { GlobalModel } from './types';

export const setGlobalModel = (globalModel: GlobalModel): AnyAction => ({
  type: SET_GLOBAL_MODEL,
  globalModel,
});
