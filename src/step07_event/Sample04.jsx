import React from "react";

class Sample04 extends React.Component{
    constructor(props){
        super(props)
        this.state = {isConfirmed : false};
        
        // 클래스 컴포넌트에서는 바인딩 함수는 필수적으로 해야한다
        this.handleConfirmed = this.handleConfirmed.bind(this);
    }

    handleConfirmed(){
        this.setState(prevState => ({
            // 초기 상태 = false : false
            // prevState의 값이 변한 뒤 다시 버튼을 누르게 될 경우 isConfirmed의 값은 이미 true로 변경되어있는 상태
            // 2번째 버튼 클릭시 = true : true 가 된다
            isConfirmed : !prevState.isConfirmed
        }));
    }

    render(){
        return(
            <button onClick={this.handleConfirmed}
                // 버튼을 한번 클릭하면 버튼 비활성화됨
                disabled={this.state.isConfirmed}>
                {this.state.isConfirmed?'Checked':'Check'}
            </button>
        )
    }
}

export default Sample04;