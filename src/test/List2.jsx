import React from "react";

function List2(props) {
    const msg2 = [
        {
            idx : 1,
            name : "kim",
            age : 10
        },
        {
            idx : 2,
            name : "kim",
            age : 20
        },
        {
            idx : 3,
            name : "kim",
            age : 30
        },
    ]
    return(
        <ul>
            {msg2.map((k)=>{
                return(
                    <li key={k.idx}>name : {k.name}({k.age})</li>
                )
            })}
        </ul>
    )
}