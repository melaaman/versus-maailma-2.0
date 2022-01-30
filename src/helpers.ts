import { marked } from "marked";
import DOMPurify from "dompurify";

export const getParsedMarkdown = (text: string): { __html: string } => {
    const clean = DOMPurify.sanitize(text);
    return { __html: marked(clean) };
};
