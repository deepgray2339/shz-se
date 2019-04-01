import Taro, { Component } from '@tarojs/taro'
import { View, Swiper, SwiperItem, Image } from '@tarojs/components'
import { API_HOME_BANNER, } from '../../../constants/api'
import './index.scss'

export default class SwiperBanner extends Component {

  constructor() {
    super(...arguments)
    this.setState({
      banner: []
    })
  }

  componentDidMount() {
    Taro.request({
      url: API_HOME_BANNER
    }).then(res => {
      this.setState({
        banner: res.data
      })
    })
  }

  render() {
    // const list = this.props.banner;
    return (
      <View className='home-banner'>
        <Swiper
          className='home-banner__swiper'
          circular
          autoplay
          indicatorDots
          indicatorActiveColor='rgb(178, 42, 49)'
        // TODO 目前 H5、RN 暂不支持 previousMargin、nextMargin
        // previousMargin
        // nextMargin
        >
          {this.state.banner.map(item => (
            <SwiperItem
              className='home-banner__swiper-item'
            >
              <Image
                className='home-banner__swiper-item-img'
                src={item.url}
              />
            </SwiperItem>
          ))}
        </Swiper>
      </View>
    )
  }
}
