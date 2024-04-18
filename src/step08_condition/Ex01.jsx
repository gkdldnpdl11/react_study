import React from "react";
import Ex01_T from "./Ex01_T";
import Ex01_F from "./Ex01_F";

function Ex01(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return(
            // if문을 사용하여 함수가 맞을때는 Ex01_T 호출 아닐때는 F를 호출
            // index에서 isLoggedIn의 값을 TF로 지정해주면 됨
            <Ex01_T />
        )
    }
    return(
        <Ex01_F />
    )
}

export default Ex01;