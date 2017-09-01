import React from 'react';
import ReactDOM from 'react-dom'

const tick = () => {
  const element = (
    <div>
      <h1>Hello World</h1>
      <h2>现在时间是：{new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(element, document.getElementById('root'))
}

setInterval(tick, 1000)
