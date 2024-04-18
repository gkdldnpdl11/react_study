import React from "react";

function List(props) {
    const {list} = props;
    const listitem3 = list.map((k)=>{
        return(
            <li key={k}>{k}</li>
        )
    });
    
    return(
        <ul>{listitem3}</ul>
    )
}
export default List;