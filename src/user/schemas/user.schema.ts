import { Schema } from 'mongoose'

export const UserSchema = new Schema({
    firstname: String,
    lastname: String,
    telephone: String,
    gender: String,
    photoURL: String,
    email: String,
}, { collection: 'User' })
