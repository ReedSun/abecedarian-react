import React from 'react';
import ReactDOM from 'react-dom'

class Clock extends React.Component {
  render () {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>现在时间是：{this.props.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

const tick = () => {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  )
}

setInterval(tick, 1000)
