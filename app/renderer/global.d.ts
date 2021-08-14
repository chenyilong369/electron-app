/*
 * @Description: ""
 * @Autor: chenyilong369
 * @Date: 2021-08-10 23:36:55
 * @LastEditors: chenyilong369
 * @LastEditTime: 2021-08-15 00:37:04
 */

import type { compose } from 'redux';

declare module '*.png' {
  const jpg: string;
  export default jpg;
}

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}
