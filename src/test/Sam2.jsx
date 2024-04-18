import React, { useState } from "react";

function Sam2(props) {
    const [on, setOn] = useState(false);
    const handleChk = ()=>{
        setOn(!on);
    }

    return(
        <button onClick={handleChk} disabled={on}>
            {on?'checked':'check'}
        </button>
    )
}

export default Sam2;