import React from "react";

function Ex01(props) {
    // const list = props.list;
    const {list} = props;

    const listItems = list.map((k) =>{
        return(
            // 화면단에서는 오류가 없지만 개발툴에서 오류 발생, key값이 없기 때문에 발생하는 오류임
            // <li>{k}</li>

            // key에 들어가는 값은 중복되는 값이 들어가면 안됨, 중복 불가되는 값이 들어가야함
            <li key={k}>{k}</li>
        )
    });
    
    const listItems2 = list.map((k, index) =>{
        return(
            // value값에 index라는 변수 이름을 지정한 후에 key값으로 삽입
            <li key={index}>{k}</li>
        )
    });

    return(
        <ul>{listItems}<br />{listItems2}</ul>
    )
}

export default Ex01;
