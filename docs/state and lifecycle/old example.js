import React from 'react';
import ReactDOM from 'react-dom'

const Clock = (props) => {
  return (
    <div>
      <h1>Hello World!</h1>
      <h2>现在时间是：{props.date.toLocaleTimeString()}</h2>
    </div>
  )
}

const tick = () => {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  )
}

setInterval(tick, 1000)
