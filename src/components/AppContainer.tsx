import { Container } from "@mui/material";
import React from "react";

interface AppContainerProps {
    children: React.ReactNode;
    className: string;
}

const AppContainer = (props: AppContainerProps) => (
    <Container
        className={props.className}
        sx={{
            minHeight: "100vh",
            padding: "3em",
            fontFamily: "Anonymous Pro",
            textAlign: "justify",
        }}
    >
        {props.children}
    </Container>
);

export default AppContainer;
