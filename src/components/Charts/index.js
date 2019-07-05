import React, { Component } from 'react'
import F2 from '@antv/f2'
//import { fetchCurrentUser } from '@/service/api'
import EnhancerWaterMark from 'watermark-enhancer'

// your async function return the content data.
/*const renderEffectContent = async () => {
  const { success, results: { data } } = await fetchCurrentUser();
  if (success) {
    const { uid } = data
    return uid
  }
}*/

class Charts extends Component {

  state = {
    currentUser: {}
  }

  /*renderUserData = async () => {
    const { success, results: { data } } = await fetchCurrentUser();
    if (success) {
      console.log(data)
      this.setState({ 
        currentUser: data,
      })
    }
  }*/

  componentDidMount() {
    /*this.renderUserData()*/
    const data = [
      { genre: 'Sports', sold: 275 },
      { genre: 'Strategy', sold: 115 },
      { genre: 'Action', sold: 120 },
      { genre: 'Shooter', sold: 350 },
      { genre: 'Other', sold: 150 },
    ];

    const chart = new F2.Chart({
      id: 'myChart',
      pixelRatio: window.devicePixelRatio // 指定分辨率
    });
    chart.source(data);
    chart.interval().position('genre*sold').color('genre');
    chart.render();

  }

  render() {
    return <canvas
        id="myChart"
        width={document.documentElement.clientWidth}
        height={document.documentElement.clientHeight}
      />
  }
}

export default EnhancerWaterMark({
  content: 'test',
  width: '100',
  height: '80',
  rotate: '17',
})(Charts)