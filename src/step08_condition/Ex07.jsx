import React, { useState } from "react";
import Ex07_sub from "./Ex07_sub";

function Ex07(props) {
    const [showWarning, setShowWarning] = useState(false);
    
    const handleToggleClick = ()=>{
        setShowWarning(!showWarning);
    }

    return(
        <div>
            <Ex07_sub warning={showWarning} />
            <button onClick={handleToggleClick}>{showWarning?'hide' : 'show'}</button>
        </div>
    )
}

export default Ex07;
