import React, { useState } from "react";

function Counter(props) {
    // let count = 0;

    // useState 사용 방식
    // const [변수명, set변수명(첫글자 대문자)] = useState(초기값);
    // set변수명 = 기존 변수명에 저장된 데이터를 변경된 데이터를 저장할 변수 생성임
    const [count, setCount] = useState(0);
    return(
        <div>
            <p> 총 {count}번 클릭 했습니다</p>
            <button onClick={() => {
                // count++;
                // UI는 변경안됨, 화면을 바꾸려면 useState()를 사용해야 UI도 변경가능
                // console.log("count : " , count);
                setCount(count + 1);
                }
            }>
            클릭</button>
        </div>
    )
}

export default Counter;

