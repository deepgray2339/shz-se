import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Input, Form, Button, RadioGroup, Radio, CheckboxGroup, Checkbox } from '@tarojs/components'
import { API_ORDER_GENERATE } from '../../constants/api'
import './order.scss'

export default class Index extends Component {

  /**
   * 指定config的类型声明为: Taro.Config
   *
   * 由于 typescript 对于 object 类型推导只能推出 Key 的基本类型
   * 对于像 navigationBarTextStyle: 'black' 这样的推导出的类型是 string
   * 提示和声明 navigationBarTextStyle: 'black' | 'white' 类型冲突, 需要显示声明类型
   */
  config: Config = {
    navigationBarTitleText: '圣豪州高端设计'
  }

  componentDidMount() { }

  formSubmit = (event) => {
    // let data = JSON.stringify(event.detail)

    console.log(event.detail.value)

    Taro.request({
      url: API_ORDER_GENERATE,
      method: 'GET',
      data: event.detail.value,
      success: () => {
        Taro.showToast({
          title: '成功',
          icon: 'success',
          duration: 2000
        })
      }
      // header: {
      //   'content-type': 'application/json'
      // }
    })
  }

  render() {
    return (
      <View className='index'>
        <Form onSubmit={this.formSubmit}>
          <Text>*您的的姓名</Text>
          <Input name='customerName' type='text' placeholder='请输入您的姓名' focus />
          <Text>*您的手机号</Text>
          <Input name='phoneNumber' type='number' placeholder='请输入您的手机号'></Input>
          <Text>装修方式</Text>
          <RadioGroup name='type'>
            <Radio value='半包'>半包</Radio>
            <Radio value='全包'>全包</Radio>
          </RadioGroup>
          <Text>装修风格</Text>
          <CheckboxGroup name='style'>
            <Checkbox value='现代简约'>现代简约</Checkbox>
            <Checkbox value='欧式'>欧式</Checkbox>
            <Checkbox value='地中海'>地中海风格</Checkbox>
            <Checkbox value=''>其他</Checkbox>
          </CheckboxGroup>
          <Button formType='submit'>提交</Button>
        </Form>
      </View>
    )
  }
}

