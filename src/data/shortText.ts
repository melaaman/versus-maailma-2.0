export interface ShortText {
    id: number;
    header: string;
    description: string;
    date: string;
    work: string;
    author: string;
    translator?: string;
    publisher?: string;
    yearOfPublishing: string;
    genre: string;
    image?: { fields: { file: { url: string } } };
}

export const initialShortTextState: ShortText = {
    id: -1,
    header: "",
    description: "",
    date: "",
    work: "",
    author: "",
    translator: undefined,
    publisher: undefined,
    yearOfPublishing: "",
    genre: "",
    image: undefined,
};
