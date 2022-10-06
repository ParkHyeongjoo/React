import React, { useEffect, useState } from 'react'

const Ex08 = () => {

  // a. constructor 대체
  //    → 변수 초기화, state 관리
  console.log('a. 함수 초기화')

  const [num, setNum] = useState(0)

  const plus = () => {
    setNum(num + 1)
  }
  // c. 화면 mount
  // useEffect(()=>{}, [])
  //    → API Call
  useEffect(()=>{
    console.log('c. mount')
  }, [])

  // d. 값 update
  // useEffect(()=>{}, [변화를 감지할 대상])
  // 변화를 감지하는 대상은 복수가 될 수도 있다
  useEffect(()=>{
    console.log('d. update')
  }, [num])

  return (
    <div>
      {/* b. render */}
      {console.log('b. rendering')}
      <p>{num}</p>
      <button onClick={plus}>+1</button>
    </div>
  )
}

export default Ex08