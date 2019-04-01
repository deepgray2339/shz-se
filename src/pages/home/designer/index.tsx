import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { API_DESIGNERS_REPRESENTATIVE } from "../../../constants/api"

import './index.scss'


export default class Designer extends Taro.Component {

  componentDidMount() {
    Taro.request({
      url: API_DESIGNERS_REPRESENTATIVE
    }).then(res => {
      this.setState({
        designers: res.data
      })
      //console.log(res.data)

    })
  }

  handleClick = (item) => {
    Taro.navigateTo({
      url: '../../pages/works/d-works/d-works?authorId=' + item.id
    })
  }

  render() {
    const list = this.state.designers
    return (
      <View className='gruid'>
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