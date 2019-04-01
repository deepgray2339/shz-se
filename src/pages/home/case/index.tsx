import Taro from "@tarojs/taro";
import { View, Image, Text } from "@tarojs/components";
import { API_HOME_CASES, } from '../../../constants/api'
import './index.scss'

export default class Case extends Taro.Component {

  constructor() {
    super(...arguments)
  }

  componentDidMount() {
    Taro.request({
      url: API_HOME_CASES
    }).then(res => {
      this.setState({
        cases: res.data
      })
      // console.log(res)
    })
  }

  handleClick = (item) => {
    Taro.navigateTo({
      url: '../../pages/works/s-works/s-works?style=' + item.style
    })
  }

  render() {
    const list = this.state.cases
    return (
      <View className='grid'>
        {
          list.map((item) => (
            <View className='cell' onClick={() => { this.handleClick(item) }}>
              <Image src={item.url}></Image>
              <Text>{item.style}</Text>
            </View>
          ))
        }
      </View>
    )
  }
}