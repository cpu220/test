import React from 'react';
import { Form, Select, Input, Upload, Button, Icon } from 'antd';



const FormItem = Form.Item;
const Option = Select.Option;

class App extends React.Component {
  constructor(props) {
    super(props); 
    this.typeChange = this.typeChange.bind(this); 
  }
   

  componentWillReceiveProps(nextProps) {

  }


  /**
   * 类型选择
   * 
   * @param {any} e 
   * @memberof App
   */
  typeChange(e) {

    this.props.typeChange(e);
    // this.props.form.setFieldsValue({'type':e});
  }
 
  render() {
    const { getFieldDecorator, setFieldsValue } = this.props.form;
    const { listConfig } = this.props.page;
    
    console.log(listConfig[0].defaultValue);
    return (
      <div  >
        {/* <Select
                  value={listConfig[0].defaultValue}
                  onSelect={this.props.typeChange}
                >

                  {
                    listConfig[0].option.map((item, index) => {
                      return (<Option value={item.code} key={index}>{item.name}</Option>)
                    })
                  }
                </Select> */}

        <Form onSubmit={this.handleSubmit}>
          <FormItem
          >
            {getFieldDecorator('type', {
              initialValue: listConfig[0].defaultValue,
            })(
              <Select 
                onSelect={this.typeChange}
              >

                {
                  listConfig[0].option.map((item, index) => {
                    return (<Option value={item.code} key={item.code}>{item.name}</Option>)
                  })
                }
              </Select>
              )}
          </FormItem>


        </Form>
      </div>
    )

  }
}

const reactApp = Form.create()(App);
export default reactApp;
