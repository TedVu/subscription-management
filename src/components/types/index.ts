export type Card = {
    id: string;
    title: string;
    date: string;
    imageUrl: string | void;
};

export type UpdatedCard = {
    name?: string;
    date?: Date;
    imageExtension?: string;
};
