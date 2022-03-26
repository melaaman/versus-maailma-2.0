import DOMPurify from "dompurify";
import { marked } from "marked";

export const getParsedMarkdown = (text: string): { __html: string } => {
    const clean = DOMPurify.sanitize(text);
    return { __html: marked(clean) };
};
