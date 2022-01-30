import { createClient } from "contentful";
import { Essay } from "./components/Essay";
import { ShortText } from "./components/ShortText";

const client = createClient({
    space: "",
    accessToken: "",
});

export const getContent = (contentType: string) =>
    client.getEntries({
        content_type: contentType,
    });

export const getItems = (entries: any) => {
    const newItems: any = [];
    entries.items.forEach((item: { fields: Essay | ShortText }) => {
        newItems.push({ ...item.fields });
    });
    return newItems;
};

export default client;
