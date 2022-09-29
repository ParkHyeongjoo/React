import React from 'react'
import { useState } from 'react'

const Ex03 = () => {

    const [ranNum, setRanNum] = useState(0)
    const [inputNum, setInputNum] = useState(0)

    // 1. 랜덤한 수를 뽑아준다. 범위는 1~3
    // 2. 누른 버튼의 숫자를 랜덤한 수와 비교
    //      → 함수를 따로 만드는 것을 추천!!
    // 3. 만약, 랜덤한 수와 누른 버튼의 수가 같다면 → 정답입니다!
    //      다르다면 → 땡! 을 출력할 것
    const btnCk = (event) => {
        setInputNum(parseInt(event.target.innerText))
        setRanNum(parseInt(Math.random()*3+1))
    }

  return (
    <div>
        <div>
            <button onClick={btnCk}>1</button>
            <button onClick={btnCk}>2</button>
            <button onClick={btnCk}>3</button>
        </div>
        <div>
            랜덤 : {ranNum}<br></br>
            입력수 : {inputNum}<br></br><br></br>
            {ranNum==inputNum ? <b>"정답입니다!"</b> : <b>"땡!"</b>}
        </div>
    </div>
  )
}

export default Ex03