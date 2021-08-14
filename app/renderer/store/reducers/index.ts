/*
 * @Description: 配置 reducers
 * @Autor: chenyilong369
 * @Date: 2021-08-15 00:06:55
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-08-15 00:30:44
 */

import { combineReducers, Reducer } from 'redux';
import { SET_GLOBAL_MODEL } from '../actions/actionsType';
import { GlobalModel, SetGlobalModel } from '../actions/types.d';

const globalModelReducer: Reducer<any, SetGlobalModel> = (
  state: GlobalModel = { AppName: '简历应用平台' },
  action: SetGlobalModel
): GlobalModel => {
  if (action.type === SET_GLOBAL_MODEL) {
    return { ...state, ...action.globalModel };
  }
  return state;
};

const appReducer = combineReducers({
  globalModel: globalModelReducer,
});

export default appReducer;
