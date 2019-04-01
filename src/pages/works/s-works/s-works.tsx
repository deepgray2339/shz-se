import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components';
import { API_WORK_BY_STYLE } from '../../../constants/api'

import './index.scss'

export default class Index extends Component {

  componentDidMount() {
    const style = this.$router.params.style

    Taro.request({
      url: API_WORK_BY_STYLE + style
    }).then(res => {
      //console.log(res.data)
      this.setState({
        style: style,
        list: res.data
      })
    })
  }

  handleClick = (item) => {
    //console.log(item)
  }

  render() {
    const list = this.state.list
    return (
      <View className='grid'>
        {
          list.map(item => (
            <View className='cell' onClick={() => { this.handleClick(item) }}>
              <Image src={item.url}></Image>
              {/* <Text>{item.style}</Text> */}
            </View>
          ))
        }
      </View>
    )
  }
}