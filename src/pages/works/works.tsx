import Taro, { Component, Config } from '@tarojs/taro'
import { View, Text, Image } from '@tarojs/components'
import { API_WORK_SAMPLES, } from '../../constants/api'
import './works.scss'

export default class Index extends Component {

  config: Config = {
    navigationBarTitleText: '圣豪州高端设计'
  }

  componentDidMount() {
    Taro.request({
      url: API_WORK_SAMPLES
    }).then(res => {
      this.setState({
        sample: res.data
      })
    })
  }

  handleClick = (item) => {
    Taro.navigateTo({
      url: '../../pages/works/s-works/s-works?style=' + item.style
    })
  }

  render() {
    const list = this.state.samples
    return (

      <View>
        <View>
          <Text>公司案例</Text>
        </View>
        <View className='grid'>
          {
            list.map(item => (
              <View className='cell' onClick={() => { this.handleClick(item) }}>
                <Image src={item.url}></Image>
                <Text>{item.style}</Text>
              </View>
            ))
          }
        </View>
      </View>
    )
  }
}

