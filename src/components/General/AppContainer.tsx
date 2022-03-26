import { Container } from "@mui/material";
import React from "react";
import styles from "./AppContainer.module.scss";

interface AppContainerProps {
    children: React.ReactNode;
    className: string;
}

const AppContainer = (props: AppContainerProps) => (
    <Container className={`${styles.container} ${props.className}`}>
        {props.children}
    </Container>
);

export default AppContainer;
