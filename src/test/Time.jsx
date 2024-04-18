import React from "react";

function Time(props) {
    return(
        <div>
            That is {new Date().toLocaleDateString()}
        </div>
    )
}

export default Time;