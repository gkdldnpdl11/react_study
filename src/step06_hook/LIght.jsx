import React from "react";

function Light({room, on, toggle}) {
    console.log({room, on});
    return(
        <button onClick={toggle}>
            {room} {on ? "💡" : "⬛"}
        </button>
    )
}

// props 값이 변경되지 않는 한 다시 호출 되지 않는다
// smarthome은 랜더링이 다시 되는것이기 때문에 메모를 사용해도 모든 데이터가 재호출됨
// 그러나 smarthome2는 콜백함수를 사용하여 함수가 넘어가기 때문에 선택한 데이터만 넘어간다
export default React.memo(Light);