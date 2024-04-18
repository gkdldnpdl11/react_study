import React from "react";

// 함수에 전달할 데이터 = Arguments(매개변수), 웹에서는 parameter라고 함
// 본인의 데이터가 아닌 외부에서 데이터를 받아서 사용
// 이벤트 핸들러에 매개변수 전달하는 방법
function Sample03(props) {
    const handleDelete = (id, event) =>{
        console.log("id : ", id);
        // 이벤트가 발생하는 태그
        console.log("event target : ", event.target);
        // 이벤트가 발생하는 태그의 글자 뽑아오기
        console.log("event target : ", event.target.textContent);
    }

    return(
        <button onClick={(event) => handleDelete(1, event)}>Click here!</button>
    )
}

export default Sample03;