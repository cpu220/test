import React from 'react';
import { connect } from 'dva';
import { Upload, Icon, message, Form, Button } from 'antd';
import List from '../components/test/list';

const App = ({ dispatch, page, saveData }) => {

  const typeChange = (e) => {
    dispatch({
      type: 'page/test',
      payload: e,

    });
  }

  const test = () => {
    dispatch({
      type: 'page/test',
      payload: parseInt(1 + Math.random() * 10).toString(),

    })
  }
  return (

    <div >
      <Button onClick={test} >测试</Button>
      <List
        page={page}
        typeChange={typeChange}
      />
    </div >
  );

};

App.propTypes = {

};

// export default Products;
export default connect(({ page, saveData }) => ({
  page, saveData,
}))(App);



