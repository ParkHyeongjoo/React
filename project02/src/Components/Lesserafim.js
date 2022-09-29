import React from 'react'

// 매개변수로 object를 적을 때 주의!!
// 1) ({속성}) → 중괄호 생략 금지!
// 2) 다중 속성을 가져올 때!
//      ({속성}, {속성}) → XX 금지 !!!
//      ({속성, 속성}) → OO 하나의 객체 안에 다중 속성

const boxStyle = {
    backgroundColor:"ivory",
    border:"1px solid brown",
    textAlign:"center",
    margin:"auto",
    marginTop:"10px",
    width:"500px"
}

const Lesserafim = ({teamName, memberName}) => {
  return (
    <div style={boxStyle}>
        <h2>{teamName}</h2>
        <h4>{memberName}</h4>
    </div>
  )
}

export default Lesserafim