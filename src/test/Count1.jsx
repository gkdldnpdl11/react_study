import { Box, Button } from "@mui/material";
import React, { useState } from "react";

function Count1(props) {
    const [cnt, setCnt] = useState(5);

    const increment = () =>{
        setCnt(cnt + 1);
    }

    const decrement = () =>{
        setCnt(cnt - 1);
    }

    return(
        <div>
            <Button variant="contained" color="primary" size="md" onClick={increment}> + </Button>
            <Box>{cnt}</Box>
            <Button variant="contained" color="primary" size="md" onClick={decrement}> - </Button>
        </div>
    )
}

export default Count1;