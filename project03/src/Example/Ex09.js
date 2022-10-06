import React, { useEffect, useState } from 'react'
import axios from 'axios'

// Q1. 영화 데이터를 테이블 형태로 렌더링
// 랭킹(rank) - 영화제목(movieNm) - 개봉일자(openDt)
// React JSX 특징 <table>를 <thead><tbody>없이 사용 불가
// <table>
//  <tbody>
//      <tr><td></td></tr>
//  </tbody>
// <table>

const Ex09 = () => {

    const [data, setData] = useState([])
    
    // month 배열로 버튼을 01월 ~ 10월 까지 제작
    let month = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']
    
    const getData = (selectMonth) => {
        console.log('원하는 달 ', selectMonth)
        let url = `http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=2022${selectMonth}01`

        axios.get(url).then((res) => { setData(res.data.boxOfficeResult.dailyBoxOfficeList) }).catch(() => { alert('Error!!!') })
    }

    useEffect(()=>{
        // 현재 날짜 → 몇월!
        console.log(new Date().getMonth()+1)
        getData(new Date().getMonth()+1)
    }, [])

    const btnMonth = (e) => {
        console.log(e.target.value)
        getData(e.target.value)
    }

    return (
        <div>
            <h1>2022년 올해의 영화</h1>
            <p>매월 1일 순위를 보여드립니다</p>

            {/* 버튼을 눌렀을 때, 이벤트 처리된 값을 getData 매개변수 안에 넣어서 호출 */}
            {/* 힌트! value = {내가 원하는 값} → e.target.value */}
            {month.map((item) => <button key={item} value={item} onClick={btnMonth}>{item}월</button>)}
            {/* 아무것도 안누른 첫 화면 렌더링 : 오늘 날짜의 데이터 */}
            {/* 버튼을 누르면 해당 월의 1일 데이터로 변경 */}

            <table>
                <tbody>
                    {/* 여기서부터 반복 시작 */}
                    {data.map((item) => <tr key={item.rank}><td>{item.rank}</td><td>{item.movieNm}</td><td>{item.openDt}</td></tr>)}
                </tbody>                    
            </table>
        </div>
    )
}

export default Ex09