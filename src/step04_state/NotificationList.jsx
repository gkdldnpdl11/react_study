import React from "react";
import Notification from "./Notification";

const reservedNoti = [
    {
        id : 1,
        message : "Hello! Nice meet you"
    },
    {
        id : 2,
        message : "This is React!"
    },
    {
        id : 3,
        message : "Have a nice day"
    }
]

var timer;

class NotificationList extends React.Component{
    constructor(props){
        super(props);
        // state 초기화
        this.state = {
            notifications : [],
        };
    }

    // 생명주기 생성
    componentDidMount(){
        const {notifications} = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNoti.length) {
                const index = notifications.length;
                notifications.push(reservedNoti[index]);
                // state 변경
                this.setState({
                    notifications: notifications,
                });
            } else {
                // state 초기화
                this.setState({
                    notifications: [],
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    // 생명주기 종료
    componentWillUnmount(){
        if (timer) {
            clearInterval(timer);
        }
    }

    render(){
        return(
            <div>
                {this.state.notifications.map((k)=>{
                    return(
                        <Notification 
                            key = {k.id}
                            id = {k.id}
                            message = {k.message}
                        />
                    )
                })}
            </div>
        )
    }
}

export default NotificationList;
