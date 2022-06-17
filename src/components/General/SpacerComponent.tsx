import { useMediaQuery } from "@mui/material";

const SpacerComponent = () => {
    const matches = useMediaQuery("(max-width:480px)");
    return (
        <div style={{ marginTop: matches ? "1rem" : "3rem", width: "100%" }} />
    );
};

export default SpacerComponent;
