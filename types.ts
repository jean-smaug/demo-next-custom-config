export interface User {
    id: number;
    name: string;
};

export type Users = User[];

export interface Post {
    id: number;
    title: string;
    body: string;
    userId: number;
};

export type Posts = Post[];

export interface Comment {
    id: number;
    title: string;
    body: string;
};

export type Comments = Comment[];
