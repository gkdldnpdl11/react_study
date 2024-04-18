import React, { useState } from "react";

function Sam(props) {
    const [on, setOn] = useState(true);
    const handleClick =()=>{
        setOn(!on);
    }

    return(
        <button onClick={handleClick}>{on?'on':'off'}</button>
    )
}

export default Sam;