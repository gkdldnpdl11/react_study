import React, { useState } from "react";

function NameForm(props) {
    const [m_name, setM_name] = useState('');
    
    const handleChange = (e) =>{
        // toUpperCase = 모든 글자를 대문자로 변경
        //setM_name(e.target.value.toUpperCase());
        setM_name(e.target.value.toUpperCase());
        
        // toLowerCase = 모든 글자를 소문자로 변경
        // setM_name(e.target.value.toLowerCase());
    }

    const handleSubmit = (e)=>{
        alert('insert name : ' + m_name);
        // 어떠한 이벤트를 명시적으로 처리하지 않은 경우에 해당 이벤트에 대한 기본 동작을 실행하지 않도록 지정
        // a태그, submit 을 통한 이동이나 브라우저 창의 새로고침을 막아준다
            // 처리작업이 완료되지 않으면 브라우저에서의 이동을 막아줌
            // 이 NameForm에서는 submit을 하지만, 결론적으로는 보내는 데이터를 받는 곳이 없기 때문에 해당 작업이 끝나지 않는다
            // 그러므로 처리작업이 완료되지 않은 상태이기 때문에 브라우저의 이동을 하지 못하게 막아주는 처리가 preventDefault(); 이다
        e.preventDefault();
    }

    return(
        // form은 state에서 관리해야함
        <form onSubmit={handleSubmit}>
            <label> name : <input type="text" value={m_name} onChange={handleChange} /></label>
            <button type="submit">send</button>
        </form>
    )
}

export default NameForm;