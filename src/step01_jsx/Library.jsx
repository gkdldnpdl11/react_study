import React from "react";
import Book from "./Book";

function Library(props) {
    return(
        <div>
            <Book name="react" numOfPage="300" />
            <Book name="spring-boot" numOfPage="200" />
            <Book name="vscode" numOfPage="100" />
        </div>
    )
}

export default Library;