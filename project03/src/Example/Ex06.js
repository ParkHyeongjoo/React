import React, { useState } from 'react'
import AddComment from './Ex06Com/AddComment'
import CommentList from './Ex06Com/CommentList'


const Ex06 = () => {

    // 1. input 창에 댓글을 입력하고, + 버튼을 누르면, 댓글 목록에 댓글 추가!

    // 2. 이 때, 현재 시각과 같이 출력
    //      ex) 여러분 안녕하세요! - 오후 5:26:37
    // 'concat'이라는 기능
    // 배열A, 배열B
    // let 배열C = 배열A.concat(배열B)

    // 3. 엔터를 쳐도 똑같이 댓글이 등록되도록 할 것!

    // ** 이벤트 : 
    //      → onClick={} : 클릭했을 때!
    //      → conChange={} : 변화가 있을 때!
    //      → onKeyPress={} : 키보드 누를 때!

    // input 창에 변화 감지 → 댓글 등록 버튼 input 값 저장
    //      → map 함수로 목록에 뿌려줄 것!


    const [com, setCom] = useState([])

    // 하위 컴포넌트 → 상위 컴포넌트로 값을 바로 전달 X
    // (1) 상위컴포넌트 내에 함수 생성
    // (2) 그 함수를 props를 통해 하위 컴포넌트에 전달
    // (3) 하위 컴포넌트에서 함수 호출
    // (4) 값은 ? 매개변수 안에다가 
    const handleComment = (newCom) => {
      console.log('handleComment', newCom)

      
    // ** 실시간 시간 :
    // new Date().toLocaleTimeString()
      let curTime = new Date().toLocaleTimeString()

      // concat : 배열 + 배열
      setCom(com.concat({text : newCom, time : curTime}))
    }

  return (
    <div>
        <h1>Leave your comment!</h1>
        <AddComment handleComment={handleComment}></AddComment>
        <CommentList com={com}></CommentList>
    </div>
  )
}

export default Ex06