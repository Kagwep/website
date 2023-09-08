export interface Article {
    title: string;
    subtitle: string;
    date: string;
    author: string;
    tags: string[];
    contentHtml: string;
    id: string;
    category: string;
    cover: string;
}

export enum Categories {
    gaming = 'gaming',

}