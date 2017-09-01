import React from 'react';
import ReactDOM from 'react-dom'

const Welcome = (props) => {
  return <h1>Hello, {props.name}</h1>
}

const element = <Welcome name="ReedSun" />

ReactDOM.render(element, document.getElementById('root'))