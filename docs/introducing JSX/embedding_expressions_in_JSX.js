import React from 'react';
import ReactDOM from 'react-dom'

const formatName = (user) => {
  return user.firstName + user.lastName
}

const user = {
  firstName: 'Reed',
  lastName: 'Sun'
}

const element = (
  <h1>
    Hello, {formatName(user)}
  </h1>
)

ReactDOM.render(element, document.getElementById('root'))
