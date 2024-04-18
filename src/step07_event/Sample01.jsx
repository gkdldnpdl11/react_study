import React from "react";

class Sample01 extends React.Component{
    constructor(props){
        super(props)
        this.state = {isToggleOn : true};
        
        // 클래스 컴포넌트에서는 바인딩 함수는 필수적으로 해야한다
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(){
        this.setState(prevState => ({
            // isToggleOn의 이전값인 true를 false로 바꿔서 넘김
            isToggleOn : !prevState.isToggleOn
        }));
    }

    render(){
        return(
            // <button onClick={리액트식 함수}>Click here!</button>
            // <button onClick={}> {리액트식 함수에서 자바스크립트 사용하는 방식} </button>
            <button onClick={this.handleClick}>{this.state.isToggleOn?'on':'off'}</button>
        )
    }
}

export default Sample01;