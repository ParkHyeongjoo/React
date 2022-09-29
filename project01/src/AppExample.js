function AppExample(){

    // 1. 사용자에게 이름을 입력 받아준다
    // prompt ('이름을 말해주세요!')
    var name = prompt("이름을 말해주세요!")
    
    // 2. 현재 날짜를 가지고 올 것
    // 현재 몇 월? getMonth()
    let today = new Date()
    let date = today.toLocaleDateString()
    let month = today.getMonth()+1 // 0~11로 출력되서 +1 해주기!
    
    // 3. 조건) 3~5월 : 봄, 6~8월 : 여름, 9~11월 : 가을, 12~2월 : 겨울
    let season
    switch (month) {
        case 3:
        case 4:
        case 5:
        season = "봄"
        break;

        case 6:
        case 7:
        case 8:
        season = "여름"
        break;

        case 9:
        case 10:
        case 11:
        season = "가을"
        break;

        case 12:
        case 1:
        case 2:
        season = "겨울"
        break;
    }   

    // 결과창
    // : 2022.9.27
    // <hr></hr>
    // XXX님 지금은 가을입니다. 좋은 하루보내세요!  
    return(
        <>
        <h2>{date}</h2>
        <hr></hr>
        <b>{name}님 지금은 {season}입니다. 좋은 하루 보내세요!</b>
        </>
    )
}

export default AppExample;