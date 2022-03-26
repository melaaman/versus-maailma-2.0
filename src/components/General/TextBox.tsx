import { Box } from "@mui/material";
import React from "react";
import ReactMarkdown from "react-markdown";
import "./TextBox.scss";

export const FormattedText = ({ description }: { description: string }) => (
    <ReactMarkdown>{description}</ReactMarkdown>
);

const TextBox = ({ children }: { children: React.ReactNode }) => (
    <Box className="TextBox">{children}</Box>
);
export default TextBox;
