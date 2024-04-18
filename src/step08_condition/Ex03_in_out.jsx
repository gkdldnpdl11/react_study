// 엘리먼트 변수 => 컴포넌트(엘리먼트)를 변수처럼 다루고 싶을 때

import React from "react";

function LogInButton(props) {
    return(
        <button onClick={props.onClick}>LogIN</button>
    )
}

function LogOutButton(props) {
    return(
        <button onClick={props.onClick}>LogOUT</button>
    )
}

export {LogInButton, LogOutButton};
