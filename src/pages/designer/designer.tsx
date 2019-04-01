import Taro, { Component } from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { API_DESIGNERS_ALL } from "../../constants/api"

import './designer.scss'

export default class Designer extends Component {

  componentDidMount() {
    Taro.request({
      url: API_DESIGNERS_ALL
    }).then(res => {
      this.setState({
        designers: res.data
      })
    })
  }

  handleClick = (item) => {
    Taro.navigateTo({
      url: '../works/d-works/d-works?authorId=' + item.id
    })
  }

  render() {
    const list = this.state.designers
    return (
      <View>
        <View>设计师</View>
        {
          list.map(item => (
            <View onClick={() => { this.handleClick(item) }}>
              <Image className='profileImg' src={item.profileImg}></Image>
              <Text className='introduce'>{item.introduce}</Text>
            </View>
          ))
        }
      </View>
    )
  }
}