import React, { useEffect, useState } from "react";

function Counter3(props) {
    const [count, setCount] = useState(0);

    // 의존성 배열이 없으므로 갱신 될 때마다 호출됨
    // useEffect(()=>{
    //     document.title = `total ${count} clicked`;
    // });

    // 의존성 배열이 빈 배열로 있으므로 처음 한번만 호출되고, 이후로는 호출되지 않음
    useEffect(()=>{
        document.title = `total ${count} clicked`;
    },[]);

    return(
        <div>
            <p> 총 {count}번 클릭 했습니다</p>
            <button onClick={() => {
                setCount(count + 1);
                }
            }>
            클릭</button>
        </div>
    )
}

export default Counter3;

