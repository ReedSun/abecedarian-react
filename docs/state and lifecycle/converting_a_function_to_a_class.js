import React from 'react';
import ReactDOM from 'react-dom'

class Clock extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      date: new Date()
    }
  }

  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>现在时间是：{this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

const tick = () => {
  ReactDOM.render(
    <Clock />,
    document.getElementById('root')
  )
}

setInterval(tick, 1000)
