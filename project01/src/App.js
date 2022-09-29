import logo from './logo.svg';
import './App.css';

function App() {

  // JSX : 하나의 파일 안에 HTML과 JS를 동시에 작성할 수 있다
  // → 가독성이 좋고 작성이 쉽다
  // → 기능에 따라 분류하기 쉽다

  // (1) 여러 요소가 있다면 반드시 하나에 부모요소로 감싸줄 것!
  // → 꼭 div태그가 아니어도 가능(<></> → 가능)

  // (2) 표현식이 사용 가능
  // 만약, return() 안에서 JS 문법을 사용하려면 {} 안에 작성
  // (단, if문은 사용 불가)
  // 만약, 조건이 하나라면 &&연산자 (2)-2 참고
  // 조건이 true / false 두개라면 삼항연산자 (2)-1 참고
  // 조건이 3개 이상 다중이라면 return() 위에서 if문 사용

  let name="박형주"
  let state = "open"

  // (3) 기존 문법과 다른 점들!
  //    class 대신 className 사용
  //    태그를 사용할 때, 소문자만 사용할 것
  //    ** 대문자는 컴포넌트 이름으로 사용해야함
  //    끝태그 생략 불가! (content가 없더라도)

  // (4) 스타일링 적용이 가능
  // (4)-1 객체 형태로 삽입
  const welStyle = {
    fontSize:"50px",
    color:"red",
    backgroundColor:"yellow"
  }

  // (4)-2 CSS 형태로 삽입
  // import 되어있는 css에 작성!

  return (
    <>
      <div className="App" style={welStyle}>

        {/* (2)-1 삼항연산자 이용 */}
        {name === "박형주"?
        <p>{name}의 리액트 홈페이지에 오신 것을 환영합니다!</p>
        :<p>{name}님 다음 기회에 뵙겠습니다...</p>
        }

        {/* (2)-2 &&연산자 이용 */}
        {state === "open" && <p>열려있어요! 반갑습니다!</p>}
      </div>
      <div style={welStyle}>환영합니다</div>
    </>
  );
}

export default App;
