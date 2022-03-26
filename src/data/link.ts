export interface Link {
    link: string;
    description: string;
    orderId: number;
}

export const initialLinksState: Link = {
    link: "",
    description: "",
    orderId: -1,
};
