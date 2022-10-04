import React from 'react'
import AddComment from './AddComment'

const CommentList = ({com}) => {
  console.log("현재 댓글 상태", com)

  const smallTxt = {
    color : 'gray',
    fontSize : '12px'
  }

  return (
    <div>
      {com.map((item, index) => (<p key={index+item.text}>{item.text}
      <span style={smallTxt}>{item.time}</span></p>))}
    </div>
  )
}

export default CommentList