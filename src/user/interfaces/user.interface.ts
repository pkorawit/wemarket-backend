import { Document } from 'mongoose';

export interface User extends Document {
    id?: string
    firstname: string,
    lastname: string,
    telephone: string,
    gender: string,
    photoURL: string,
    email: string,
}
