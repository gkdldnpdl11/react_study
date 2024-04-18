import React from "react";

function Comm(props) {
    return(
        <div>
            <span>{props.name}</span>
            <span>{props.comment}</span>
        </div>
    )
}

export default Comm;