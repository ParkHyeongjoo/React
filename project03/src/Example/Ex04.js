import React from 'react'
import MenuBox from './Ex04Com/MenuBox'

const Ex04 = () => {

    // map 함수 : 배열의 내장 함수

    // 기존 배열에 있는 요소들의 값을 변경해서
    // 새로운 배열을 만들 때 사용

    let arr = ['선영표', '강예진', '채수민']
    console.log('초기 arr: ', arr)

    let arrTr = arr.map(item => (item + ' 연구원'))
    console.log('map 이후 arr', arrTr)

    // 만약 map 함수로 숫자 데이터에 접근하려면 ?
    let numArr = [158, 174, 162]
    console.log('키 모음', numArr)

    let numArr2 = numArr.map((item, idx) => (idx+'번째 : '+(item-100)*0.9))
    console.log('몸무게', numArr2)

    // 만약 map 함수로 데이터에 태그를 입혀주면 어떨까 ?
    let group = ["강윤찬", "박진형", "유혜원", "박형주"]
    let newGroup = group.map(item => <h2 key={item}>{item}</h2>)

    // 오늘의 점심메뉴를 버튼 형식으로 추출
    // 결과창 ==
    // 오늘 뭐먹지?
    // 버튼모양 [김치찌개] [비빔밥] [계란찜]
    // 단, 직접 적는 것 금지! map 함수 이용할 것!
    let lunch = ['김치찌개', '비빔밥', '계란찜','파스타','연어']
    const ck = (e) => {
        console.log(e.target.innerText)
    }
    let btnLunch = lunch.map(item => <button onClick={ck} key={item}>{item}</button>)

    // 만약, 태그 대신 내가 만든 컴포넌트를 반복한다면???
    let coffeeMenu = [{
        menu: '아메리카노',
        price: '1500원'
    },{
        menu: '카페라떼',
        price: '2500원'
    },{
        menu: '블루레몬에이드',
        price: '3500원'
    }]

    let renderMenu = coffeeMenu.map(item => (<MenuBox key={item.menu} item={item}></MenuBox>))

  return (
    <div>
        {group}
        {newGroup}
        <h4>오늘 뭐먹지?</h4>
        {btnLunch}
        <hr></hr>
        {renderMenu}
    </div>
  )
}

export default Ex04