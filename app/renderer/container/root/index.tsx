/*
 * @Author: your name
 * @Date: 2021-08-11 23:38:35
 * @LastEditTime: 2021-08-14 20:49:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \electron-app\app\renderer\container\root\index.tsx
 */
import React from 'react';
import './index.less';
import Logo from '@assets/logo.png';
import { useHistory } from 'react-router';
import { shell } from 'electron';
import { ROUTER_ENTRY, ROUTER_KEY } from '@common/contents/router';
import { isHttpofUrl } from '@common/utils/router';

const Root = () => {
  const history = useHistory();

  /**
   * @description: 跳转链接函数
   * @param {TSRouter} router
   * @return {*}
   */
  const handleClickRouter = (router: TSRouter.Item) => {
    if (isHttpofUrl(router.url)) {
      history.push(router.url);
    } else {
      shell.openExternal(router.url); // 跳转到github页面
    }
  };

  return (
    <div styleName="root">
      <div styleName="container">
        <img src={Logo} alt="" />
        <div styleName="title">VisResumeMook</div>
        <div styleName="tips">一个模板简历制作平台</div>
        <div styleName="action">
          {ROUTER_ENTRY.map((router: TSRouter.Item) => {
            return (
              <div key={router.key} styleName="item" onClick={() => handleClickRouter(router)}>
                {router.text}
              </div>
            );
          })}
        </div>
        <div styleName="copyright">
          <div styleName="footer">
            <p styleName="copyright">
              Copyright © 2021-{new Date().getFullYear()} All Rights Reserved. Copyright By pengdaokuan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Root;
