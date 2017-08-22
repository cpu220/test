import {
  notification,
  Modal
} from 'antd';
 
export default {

  namespace: 'page',
  state: {

    listConfig: [{
      name: 'type',
      cname: '类别',
      type: 'Select',
      defaultValue: '4',
      option: [{code:"1",name:"test1",},{code:"2",name:"test2",},{code:"3",name:"test3",},{code:"4",name:"test4",},{code:"5",name:"test5",},{code:"6",name:"test6",},{code:"7",name:"test7",},{code:"8",name:"test8",},{code:"9",name:"test9",},{code:"10",name:"test10",},{code:"11",name:"test11",}]
    }]

  },
  reducers: {
    'update' (state, action) {
      // return { ...state,
      //   ...action.payload
      // };
      return Object.assign({}, state, action.payload);
    },
    'test' (state, {
      payload: obj
    }) {
      state.listConfig[0].defaultValue = obj;
      return Object.assign({},state);
    }
  },
  effects: {

  },
  subscriptions: {
    setup({
      history,
      dispatch
    }) {
      return history.listen(({
        pathname
      }) => {
        if (pathname === '/') {

        }
      });
    }
  },

};
