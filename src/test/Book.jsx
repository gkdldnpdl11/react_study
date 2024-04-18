import React from "react";

function Book(props) {
    return(
        <div>
            {props.name}
            {props.numPage}
        </div>
    )
}

export default Book;