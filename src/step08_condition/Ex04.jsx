import React from 'react'

// 단축 평가 : 조건1 && 조건2 일 때, 조건1이 false이면 조건2는 실행하지 않는다
function Ex04(props) {
    const msg = props.msg;

    return (
        <div>
            <h1>Hello !</h1>
            {msg.length > 0 && 
                // msg.length의 길이가 0과 같거나 작으면 && 뒤의 조건을 실행하지 않기 때문에 화면단에 노출 안됨
                <h2> Check message : {msg.length}</h2>           
            }
        </div>
    )
}

export default Ex04;