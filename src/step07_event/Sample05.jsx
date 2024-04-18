import React, { useState } from "react";

// 함수 이용 방식
function Sample05(props) {
    const [isConfirmed, setIsConfirmed] = useState(false);
    
    const handleConfirmed = () =>{
        setIsConfirmed(!isConfirmed);
    }

    return(
        <button onClick={handleConfirmed} disabled={isConfirmed}>
            {isConfirmed?'Checked':'Check'}
        </button>
    )
}

export default Sample05;
// 클래스 사용 방식
// class Sample04 extends React.Component{
//     constructor(props){
//         super(props)
//         this.state = {isConfirmed : false};
        
//         // 클래스 컴포넌트에서는 바인딩 함수는 필수적으로 해야한다
//         this.handleConfirmed = this.handleConfirmed.bind(this);
//     }

//     handleConfirmed(){
//         this.setState(prevState => ({
//             isConfirmed : !prevState.isConfirmed
//         }));
//     }

//     render(){
//         return(
//             <button 
//                 onClick={this.handleConfirmed}
//                 // 버튼을 한번 클릭하면 버튼 비활성화됨
//                 disabled={this.state.isConfirmed}
//                 >
//                     {this.state.isConfirmed?'Checked':'Check'}
//             </button>
//         )
//     }
// }
