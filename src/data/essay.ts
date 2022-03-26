export interface Essay {
    header: string;
    description: any;
    date: string;
    bibliography: string;
    id: string;
}

export const initialEssayState = {
    header: "",
    description: "",
    date: "",
    bibliography: "",
    id: "",
};
