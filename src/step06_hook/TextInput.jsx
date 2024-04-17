import React, { useRef } from "react";

function TextInput(props) {
    const inputElem = useRef(null);
    
    const onButtonClick = () =>{
        // 버튼 클릭시 input태그에 focus 적용
        inputElem.current.focus();
    }

    return(
        <>
            <input ref={inputElem} type="text" />
            {/* 버튼 클릭시 onButtonClick 함수 실행 */}
            <button onClick={onButtonClick}>Focus the input</button>
        </>
    )
}

export default TextInput;
