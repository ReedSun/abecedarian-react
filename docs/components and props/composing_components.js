import React from 'react';
import ReactDOM from 'react-dom'

const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>
}

const App = (props) => {
  return (
    <div>
      <Welcome name="ReedSun" />
      <Welcome name="ZhangThree" />
      <Welcome name="LiFour" />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
