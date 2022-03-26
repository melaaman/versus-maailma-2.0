import { Box } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";

export const FormattedText = ({ description }: { description: string }) => (
    <ReactMarkdown>{description}</ReactMarkdown>
);

const TextBox = ({ children }: { children: React.ReactNode }) => (
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            padding: "4%",
        }}
    >
        {children}
    </Box>
);
export default TextBox;
