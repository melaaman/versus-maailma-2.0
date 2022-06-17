import { Typography, Divider } from "@mui/material";
import { CSSProperties } from "react";
import "./AppHeader.scss";

interface AppHeaderProps {
    header: string;
    isSubheader?: boolean;
    style?: CSSProperties;
}

const AppHeader = (props: AppHeaderProps) => (
    <Typography
        variant="h4"
        className="Appheader"
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
