import React from "react";

function Ex02(props) {
    const msg = [
        {
            idx : 1,
            name : 'kim',
            age : 14
        },

        {
            idx : 2,
            name : 'lee',
            age : 24
        },

        {
            idx : 3,
            name : 'lee',
            age : 34
        }
    ]

    // 함수에 저장하고 저장한 함수를 불러오는 방식
    // const userInfo = msg.map((k) =>{
    //     return(
    //         <li key={k.idx}> name : {k.name}
    //             <br /> age : {k.age}</li>
    //     )
    // });
    // 
    // return(
    //     <ul>{userInfo}</ul>
    // )

    // 함수에 저장하지 않고 선언한 배열에서 바로 map을 사용하여 데이터 가져오는 방법
    return(
        <ul>{msg.map((k)=>{
            return(
                <li key={k.idx}> name : {k.name}
                <br /> age : {k.age}</li>
            )
        })}</ul>
    )
}

export default Ex02;