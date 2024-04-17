import React, { useCallback, useState } from "react";
import Light from "./LIght";

function SmartHome2(props) {
    const[masterOn, setMasterOn] = useState(false);
    const[kitchenOn, setKitchenOn] = useState(false);
    const[bathOn, setBathOn] = useState(false);

    const toggleMaster = useCallback(()=>setMasterOn(!masterOn), [masterOn]);
    const toggleKitchen = useCallback(()=>setKitchenOn(!kitchenOn), [kitchenOn]);
    const toggleBath = useCallback(()=>setBathOn(!bathOn), [bathOn]);
    
    return(
        <>
            <Light room="bed" on={masterOn} toggle={toggleMaster} />
            <Light room="kitchen" on={kitchenOn} toggle={toggleKitchen} />
            <Light room="bath" on={bathOn} toggle={toggleBath} />
        </>
    )
}

export default SmartHome2;