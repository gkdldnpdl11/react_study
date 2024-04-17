import React, { useMemo } from "react";

const getNumber = (number) => {
    console.log("changed number");
    return number;
};

const getText = (text) => {
    console.log("changed text");
    return text;
};

const ShowState = ({number, text}) => {
    // 값이 변동되는 것만 반응
    // 값이 변동되지 않으면 기존 값을 가지고 그대로 랜더링한다
    const showNumber = useMemo(()=> getNumber(number), [number]);
    const showText = useMemo(()=> getText(text), [text]);

    return(
        <div>
            {showNumber} <br />
            {showText}
        </div>
    )
};


export default ShowState;