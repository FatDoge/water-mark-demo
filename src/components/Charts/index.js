import React, { Component } from 'react'
import watermark from '@/components/WaterMark'
import F2 from '@antv/f2'
import { fetchCurrentUser } from '@/service/api'

class Charts extends Component {

  state = {
    currentUser: {}
  }

  renderUserData = async () => {
    const { success, results: { data } } = await fetchCurrentUser();
    if (success) {
      console.log(data)
      this.setState({
        currentUser: data,
      }, () => watermark({
        content: data.uid,
        width: '100%',
        height: '50',
        rotate: '17',
        textBaseline: 'bottom', // 必须
        textAlign: 'start', // 必须
      }))
    }
  }

  componentDidMount() {
    this.renderUserData()
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

export default Charts