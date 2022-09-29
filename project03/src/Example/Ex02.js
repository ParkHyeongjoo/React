import React from 'react'
import { useState } from 'react'
import karina from './img/pic.jpg'

const Ex02 = () => {
    // const [likeTxt, setLikeTxt] = useState("좋아요")
    // const like = () => {
    //     likeTxt == "좋아요" ? setLikeTxt("좋아요 취소") : setLikeTxt("좋아요")
    //     heart == "♡" ? setHeart("♥") : setHeart("♡")
    // }
   
    const [heart, setHeart] = useState("♡")   
    // 1. "좋아요" 버튼 클릭 시, 버튼의 내용이 "좋아요 취소"로 변경
    // 1-1. "좋아요 취소" 버튼 클릭 시, 버튼의 내용이 "좋아요"로 변경
    const like = (event) => {
        if(event.target.innerText==="좋아요"){
            event.target.innerText="좋아요 취소"
            setHeart("♥")           
    // 2. "좋아요" 버튼 클릭 시, 비어있는 하트는 꽉 찬 하트로 변경
    // 2-1. "좋아요 취소" 버튼 클릭 시, 꽉 찬 하트는 비어있는 하트로 변경
        }else{
            event.target.innerText="좋아요"
            setHeart("♡")
        }
    }
    // 3. "+1" 버튼 클릭 시, 숫자가 1씩 증가
    // 4. "-1" 버튼 클릭 시, 숫자가 1씩 감소. 단, 0 밑으로는 감소 X
    const [num, setNum] = useState(0)

    const increase = () => {
        setNum(num + 1)
    }
    const decrease = () => {
        // num>0 && setNum(num-1)
        if(num>0){
            setNum(num - 1)
        }
    }
    // 완료 시, 꽉 찬 하트로 좋아요 5개 만들어서 캡쳐 => slack
    
  return (
    <div>
        {/* 이미지, 좋아요 버튼, +1 버튼, -1 버튼 */}
        <p><img src={karina} width="400px"></img></p>
        <p><img src="https://i.ytimg.com/vi/2X6aVtJoOOc/maxresdefault.jpg" width="400px"></img></p>
        <p class='heart'>{heart} {num}</p>
        <button onClick={like}>좋아요</button>
        {/* <button onClick={like}>{likeTxt}</button> */}
        <button onClick={increase}>+1</button>
        <button onClick={decrease}>-1</button>
    </div>
  )
}

export default Ex02