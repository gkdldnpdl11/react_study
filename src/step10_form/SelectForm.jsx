import React, { useState } from "react";

function SelectForm(props) {
    const [fruit_name, setFruit_name] = useState('grape');
    // const [fruit_arr, setFruit_arr] = useState(['']);
    
    const handleChange = (e) =>{
        setFruit_name(e.target.value);
    }

    // const handleChange2 = (e) =>{
    //     console.log(e.target.textContent);
    //     setFruit_arr(e.target.value);
    // }

    const handleSubmit = (e)=>{
        alert('insert fruit_name : ' + fruit_name);
        e.preventDefault();
    }

    return(
        <form onSubmit={handleSubmit}>
            <label>
                Choose your fruit : &nbsp;
                <select value={fruit_name} onChange={handleChange}>
                    <option value="apple">apple</option>
                    <option value="grape">grape</option>
                    <option value="banana">banana</option>
                    <option value="mango">mango</option>
                </select>
            </label>
            <br /><br />
            
            {/* <label>
                Choose your fruit : &nbsp;
                <select onChange={handleChange2} multiple={true} defaultValue={[fruit_arr]}>
                    <option value="apple">apple</option>
                    <option value="grape">grape</option>
                    <option value="banana">banana</option>
                    <option value="mango">mango</option>
                </select>
            </label>
            <br /><br /> */}
            <button type="submit">send</button>
        </form>
    )
}

export default SelectForm;
