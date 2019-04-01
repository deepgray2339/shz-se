import Taro, { Component } from '@tarojs/taro'
import { View, Image, Text } from '@tarojs/components'
import './index.scss'

export default class GuidBar extends Component {
  handleClick = (key) => {
    switch (key) {
      case 0:
        console.log('0');
        break;
      case 1:
        console.log('1');
        break;
      case 2:
        console.log('2');
        Taro.navigateTo({
          url:`../designer/designer`
        })
        break;
      case 3:
        Taro.switchTab({
          url: `../contact/contact`
        })
        break;

      default:
        break;
    }
  }
  render() {
    const data = [
      {
        key: 0,
        image: '../../../assets/tab-bar/home-active.png',
        value: '公司介绍'
      }, {
        key: 1,
        image: '../../../assets/tab-bar/home-active.png',
        value: '公司案例'
      }, {
        key: 2,
        image: '../../../assets/tab-bar/home-active.png',
        value: '设计师'
      }, {
        key: 3,
        image: '../../../assets/tab-bar/home-active.png',
        value: '联系我们'
      }
    ]

    return (
      <View className='grid'>
        {
          data.map(item => (
            <View className='cell' onClick={() => { this.handleClick(item.key) }}>
              <Image src={item.image}></Image>
              <Text>{item.value}</Text>
            </View>
          ))
        }
      </View>
      // <AtGrid hasBorder={false} columnNum={4} data={data} onClick= ></AtGrid>
    )
  }
}
