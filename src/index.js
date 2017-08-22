import dva from 'dva';
import {
  browserHistory
} from 'dva/router';
import './index.less';

// 1. Initialize


 

const app = dva({
  history: browserHistory,
  onError(e) {
    
  },
  onStateChange: function () {
    
  },
  initialState: {

  }
});


// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example'));

// app.model(require('./models/page'));
// app.model(require('./models/saveData'));

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
