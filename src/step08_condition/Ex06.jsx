import React, { useState } from "react";
import Ex06_Toolbar from "./Ex06_Toolbar";

function Ex06(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const onClickLogin = ()=>{
        setIsLoggedIn(true);
    }

    const onClickLogout = ()=>{
        setIsLoggedIn(false);
    }
    return(
        <div>
            <Ex06_Toolbar 
                isLoggedIn ={isLoggedIn}
                onClickLogin ={onClickLogin}
                onClickLogout ={onClickLogout}
            />
            <div>Learn React</div>
        </div>
    )
}

export default Ex06;