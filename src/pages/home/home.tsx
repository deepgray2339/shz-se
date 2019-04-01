import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'

import Banner from './banner'
import GuidBar from './guid';

import './home.scss'
import Case from './case';
import Designer from './designer';

export default class Index extends Component {

  config: Config = {
    navigationBarTitleText: '圣豪州高端设计'
  }

  componentWillMount() { }

  componentDidMount() {
    // Taro.request({
    //   url: API_HOME_BANNER
    // }).then(res => {
    //   this.setState({
    //     banner: res.data
    //   })
    // })
  }

  render() {
    return (
      <View className='index'>
    
        <Banner />
        <GuidBar />
        <Case />
        <Designer />
      </View>
    )
  }
}

