import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Resume from './container/resume';
import Root from './container/root';
import ROUTER from '@common/contents/router';

function Router() {
  return (
    <HashRouter>
      <Switch>
        <Route path={ROUTER.root} exact>
          <Root />
        </Route>
        <Route path={ROUTER.resume} exact>
          <Resume />
        </Route>
      </Switch>
      {/* 重定向到首页 */}
      <Redirect to={ROUTER.root} />
    </HashRouter>
  );
}
export default Router;
