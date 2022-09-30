import React from 'react'
import PhotoCard from './Ex05Com/PhotoCard'

const Ex05 = () => {

    // 조건 1) Ex05Com 폴더 → PhotoCard.js 컴포넌트 사용!
    // 조건 2) member라는 배열안에 name과 url 주소가 포함된 객체들을 생성할 것
    // 조건 3) 만약 배열에 값을 추가하면 바로 새로운 카드들이 생기게 할 것
    // *** 다하면 디자인을 진행 ~

    let member = [{
        name:"카리나",
        url:"http://img2.sbs.co.kr/img/seditor/VD/2022/01/12/gkM1641962221022-640-0.jpg"
    },{
        name:"윈터",
        url:"https://i.ytimg.com/vi/qe0gepQh8N0/maxresdefault.jpg"
    },{
        name:"카즈하",
        url:"https://file.mk.co.kr/meet/neds/2022/04/image_readtop_2022_316088_16493769485003003.jpeg"
    },{
        name:"츠키",
        url:"https://mblogthumb-phinf.pstatic.net/MjAxOTEyMTdfODIg/MDAxNTc2NTc3Nzg2MTE0.oD1XqHJps3Os7LxIRAxBgtBaiyWw-8vn_3rQl3DlYsYg.12aXYRVbdl1BiIvrrPukJnf8c5E9QfZppbVbfm2mtewg.JPEG.nadiatear0/%ED%9B%84%EC%BF%A0%ED%86%A0%EB%AF%B8_%EC%B8%A0%ED%82%A41.jpg?type=w2"
    },{
        name:"나나",
        url:"http://image.newsis.com/2022/07/21/NISI20220721_0001046796_web.jpg"
    }]

    let renderMember = member.map(item => <PhotoCard key={item.name} item={item} ></PhotoCard>)

    let container = {
        display: 'flex'
    }
    return (
        <div style={container}>
            {renderMember}
        </div>
    )
}

export default Ex05