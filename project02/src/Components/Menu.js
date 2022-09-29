    // rafce(React Arrow Function Component Export) : 컴포넌트의 구조를 만드는 단축키
    
    // 컴포넌트 : 리액트로 만들어진 앱을 이루는 최소 단위
    // → 반복되는 코드를 하나로 묶어 컴포넌트로 만든다
    // → 내가 원하는 코드를 묶어 '태그화' 시킨다
    // ** 반드시, 대문자로 시작! → 기존의 HTML 태그와 구분!

    // Case 1) 매개변수 props → props.name
    // Case 2) 객체 안의 속성 → {name}
    const Menu = ({name, price})=>{

    return(
        <div>
            <div>
                <h1>{name}</h1>

              {/* 값이 들어있지 않는 경우 ? 
                값 O → True
                값 X → False
                → 삼항연산자 이용
                */}

                {price ? <p>{price}</p> : <p>3500원</p>}
            </div>
        </div>
    )

}

export default Menu