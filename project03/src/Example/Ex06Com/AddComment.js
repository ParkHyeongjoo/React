import React from 'react'

const AddComment = () => {
    
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

    // ** 실시간 시간 :
    // new Date().toLocaleTimeString()

    const re = []

    function ck(){
        let reMap = re.map(item => <b key={item}>{item}</b>)
    }
    
    return (
        <div>
            <input type="text"></input>
            <button onClick={ck}>+</button>
        </div>
    )
}

export default AddComment