import React, { useState } from "react";
import Light from "./LIght";

function SmartHome(props) {
    // 아래 함수를 사용하여 masterOn = 참 , setMasterOn = 거짓
    // Light에서 삼항연산자를 사용하여 구분해놨음
    const[masterOn, setMasterOn] = useState(false);
    const[kitchenOn, setKitchenOn] = useState(false);
    const[bathOn, setBathOn] = useState(false);

    // toggleMaster 는 masterOn이 아닐때 => off 상태일때를 말함, 아래 2개 포함하여 동일한 뜻
    const toggleMaster = () => setMasterOn(!masterOn);
    const toggleKitchen = () => setKitchenOn(!kitchenOn);
    const toggleBath = () => setBathOn(!bathOn);
    
    return(
        <>
            {/* 
                Light.jsx 페이지의 room이란 props(3개있는 버튼의 이름들)가 bed, kitchen, bath
                on은 props가 기본값인 false 상태라는 뜻 / 위의 const로 false 선언
                toggle props는 버튼을 클릭하면 toggleMaster 라는 함수를 실행한다는 뜻
            */}
            <Light room="bed" on={masterOn} toggle={toggleMaster} />
            <Light room="kitchen" on={kitchenOn} toggle={toggleKitchen} />
            <Light room="bath" on={bathOn} toggle={toggleBath} />
        </>
    )
}

export default SmartHome;
