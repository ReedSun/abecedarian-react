import React from 'react';
import ReactDOM from 'react-dom'

const formateDate = (timeStamp) => {
  console.log(timeStamp)
  return new Date(timeStamp).toLocaleDateString()
}

const Comment = (props) => {
  return (
    <div className="comment">
      <div className="user-info">
        <img className="avatar"
          src={props.author.avatarUrl} 
          alt={props.author.name}
        />
        <div className="user-info-name">{props.author.name}</div>
      </div>
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{formateDate(props.date)}</div>
    </div>
  )
}

const commentInfo = {
  author: {
    name: 'ReedSun',
    avatarUrl: 'https://avatars1.githubusercontent.com/u/22371089?v=4&s=64'
  },
  text: 'To be or not to be, this is a question.',
  date: new Date().getTime()
}

ReactDOM.render(<Comment author={commentInfo.author} text={commentInfo.text} date={commentInfo.date} />, document.getElementById('root'))
