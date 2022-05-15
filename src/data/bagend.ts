export interface BagendEntity {
    order: number;
    alt: string;
    description: string;
    image?: { fields: { file: { url: string } } };
}
export const initialBagendState: BagendEntity = {
    order: -1,
    alt: "",
    description: "",
    image: undefined,
};
