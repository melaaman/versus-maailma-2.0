export interface Entry {
    date: string;
    description: string;
    image?: { fields: { file: { url: string } } };
}
export const initialEntryState: Entry = {
    description: "",
    date: "",
    image: undefined,
};
