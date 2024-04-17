import React, { useState } from "react";
import Light from "./LIght";

function SmartHome(props) {
    const[masterOn, setMasterOn] = useState(false);
    const[kitchenOn, setKitchenOn] = useState(false);
    const[bathOn, setBathOn] = useState(false);

    const toggleMaster = () => setMasterOn(!masterOn);
    const toggleKitchen = () => setKitchenOn(!kitchenOn);
    const toggleBath = () => setBathOn(!bathOn);
    
    return(
        <>
            <Light room="bed" on={masterOn} toggle={toggleMaster} />
            <Light room="kitchen" on={kitchenOn} toggle={toggleKitchen} />
            <Light room="bath" on={bathOn} toggle={toggleBath} />
        </>
    )
}

export default SmartHome;
