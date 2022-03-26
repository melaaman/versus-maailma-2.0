import { Typography, Divider } from "@mui/material";
import React from "react";
import { CSSProperties } from "react";

interface AppHeaderProps {
    header: string;
    isSubheader?: boolean;
    style?: CSSProperties;
}

const AppHeader = (props: AppHeaderProps) => (
    <Typography
        variant="h4"
        sx={{
            ...props.style,
            fontSize: props.isSubheader ? "20px" : "30px",
            textTransform: props.isSubheader ? "uppercase" : "initial",
        }}
    >
        <Divider textAlign="left">{props.header}</Divider>
    </Typography>
);

export default AppHeader;
