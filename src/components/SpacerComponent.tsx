import { useMediaQuery } from "@mui/material";
import React from "react";

const SpacerComponent = () => {
    const matches = useMediaQuery("(max-width:480px)");
    return (
        <div style={{ marginTop: matches ? "2em" : "4em", width: "100%" }} />
    );
};

export default SpacerComponent;
