import React from "react";
import Comm from "./Comm";

const comm1 = [
    {
        name : "kim",
        comment : "it"
    },
    {
        name : "lee",
        comment : "this"
    },
    {
        name : "park",
        comment : "wow"
    },
];

function CommList(props) {
    
    return(
        <div>
            {
                comm1.map((k)=>{
                    return(
                        <Comm name={k.name} comment={k.comment} />
                    )
                })
            }
        </div>
    )
}

export default CommList;