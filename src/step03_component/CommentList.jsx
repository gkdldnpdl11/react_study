import React from "react";
import Comment from "./Comment";

// 나중에는 DB처리
// 현재는 배열로 생성
const comments =[
    {
        name : "Kim",
        comment : "Hello 1"
    },
    {
        name : "Lee",
        comment : "Hello 2"
    },
    {
        name : "Park",
        comment : "Hello 3"
    },
    {
        name : "kim1",
        comment : "Hello 4"
    }
];

function CommentList(props) {
    return(
        <div>
            {
                comments.map((k)=>{
                    return(
                        <Comment name={k.name} comment={k.comment} />
                    );
                })
            }
        </div>
    ) 
}

export default CommentList;
