import { JSONFilePreset } from 'lowdb/node';

export interface Database {
    users: User[];
}

export interface User {
    id: number;
    name: string;
}

export const db = await JSONFilePreset<Database>(
    'db.json',
    {
        users: []
    }
);