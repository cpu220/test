import React from 'react';
import { Router, Route } from 'dva/router';
 
const cached = {};

function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      name: '/',
      getComponent(nextState, cb) {
        require.ensure([], (require) => {
          registerModel(app, require('./models/page'));
          
          cb(null, require('./routes/test'));
        });
      },
    },
  ];

  return <Router history={history} routes={routes} />;
}
export default RouterConfig;



// function RouterConfig({ history }) {
//   return (
//     <Router history={history}>
//       <Route path="/" component={IndexPage} />
//     </Router>
//   );
// }

// export default RouterConfig;
