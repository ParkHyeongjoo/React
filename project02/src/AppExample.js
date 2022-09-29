import React from 'react'
import Member from './Components/Member'
import Lesserafim from './Components/Lesserafim'

const AppExample = () => {

    // 팀원을 소개하는 페이지를 만들어보자
    // 단, component 와 props를 이용해서 만들 것

    // 조건
    // 1) Member.js 라는 컴포넌트를 이용할 것
    // 2) 스타일은 객체 형태로 삽입할 것
    //      참고) project01 → src → App.js

    let team = '르세라핌'
    // return(
    //     <div>
    //         <Lesserafim teamName={team} memberName="사쿠라"/>
    //         <Lesserafim teamName={team} memberName="김채원"/>
    //         <Lesserafim teamName={team} memberName="카즈하"/>
    //         <Lesserafim teamName={team} memberName="허윤진"/>
    //         <Lesserafim teamName={team} memberName="홍은채"/>
    //     </div>
    // )

  return (
    <div>
        <Member team="노라조" name="강윤찬"></Member>
        <Member team="노라조" name="박형주"></Member>
        <Member team="노라조" name="박진형"></Member>
        <Member team="노라조" name="유혜원"></Member>
    </div>
  )
}

export default AppExample