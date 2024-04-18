import React, { useState } from 'react'
import Ex02 from './Ex02';
import { LogInButton, LogOutButton } from './Ex03_in_out';

function Ex03(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    
    const handleLoginClick = () =>{
        setIsLoggedIn(true);
    }

    const handleLogoutClick = () =>{
        setIsLoggedIn(false);
    }

    let button;
    if (isLoggedIn) {   
        // if(isLoggedIn = false) = useState의 초기값 false
        // Ex02의 if문의 값이 false로 떨어짐 = 로그인 필요하다는 창 반환
        button= <LogOutButton onClick={handleLogoutClick} />
    } else {
        button= <LogInButton onClick={handleLoginClick} />
    }
    
    return(
        <div>
            {/* isLoggedIn에 따라서 button 변수의 컴포넌트가 달라진다 */}
            <Ex02 isLoggedIn={isLoggedIn} />{button}
        </div>
    )
}

export default Ex03;
