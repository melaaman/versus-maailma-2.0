import { createClient } from "contentful";
import { AboutEntity } from "./data/about";
import { Essay } from "./data/essay";
import { Link } from "./data/link";
import { ShortText } from "./data/shortText";

const client = createClient({
    space: process.env.REACT_APP_CONTENTFUL_SPACE || "",
    accessToken: process.env.REACT_APP_CONTENTFUL_SPACE_ACCESS_TOKEN || "",
});

export const getContent = (contentType: string) =>
    client.getEntries({
        content_type: contentType,
    });

export const getItems = (entries: any) => {
    const newItems: any = [];
    entries.items.forEach(
        (item: { fields: Essay | ShortText | AboutEntity | Link }) => {
            newItems.push({ ...item.fields });
        }
    );
    return newItems;
};

export default client;
