import React from "react";
import Book from "./Book";


function Lib(props) {
    return(
        <div>
            <Book name="this" numPage="300" />
            <Book name="it" numPage="200" />
            <Book name="that" numPage="100" />
        </div>
    )
}

export default Lib;