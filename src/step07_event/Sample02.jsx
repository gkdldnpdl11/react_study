import React, { useState } from "react";

function Sample02(props) {
    const [isToggleOn, setIsToggleOn] = useState(true);
    
    const handleClick = () => {
        setIsToggleOn(!isToggleOn);
    }

    return(
        <button onClick={handleClick}>{isToggleOn?'on':'off'}</button>
    )
}

export default Sample02;