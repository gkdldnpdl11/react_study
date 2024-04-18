import React from "react";

function Ex07_sub(props) {
    if (! props.warning) {
        // 랜더링 하고싶지 않을 때
        return null;        
    }
    
    return(
        <div>Warning</div>
    )
}

export default Ex07_sub;
