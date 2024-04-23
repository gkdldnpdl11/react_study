import React, { useState } from "react";

function SignUpForm(props) {
    const [formData, setFormData] = useState({
        username : '',
        email : '',
        password : '',
        confirmPassword : '' 
    });

    const handleChange = (e) => {
        const {name, value} = e.target ;
        // 기존 formData를 직접 수정하지 않고, 복사 
        setFormData({
            ...formData,
            [name] : value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // 비밀번호와 비밀번호 확인이 일치하지 않으면 알림 표시 하고 전송 안함
        if(formData.password !== formData.confirmPassword){
            alert('일치하지 않습니다.');
            return null;
        }
        console.log(formData);
    }
    return(
        <form onSubmit={handleSubmit} autoComplete="off">
            <p>
                <label>
                    UserName : 
                    <input type="text" name="username" value={formData.username} onChange={handleChange} required />
                </label>
            </p>
            <p>
                <label>
                    Email : 
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </label>
            </p>
            <p>
                <label>
                    Password : 
                    <input type="password" name="password" value={formData.password} onChange={handleChange} required />
                </label>
            </p>
            <p>
                <label>
                    Confirm Password : 
                    <input type="password" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange} required />
                </label>
            </p>
            <button type="submit">Sign Up</button>
        </form>
    )
}
export default SignUpForm;
