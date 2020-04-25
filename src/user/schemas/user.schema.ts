import { Schema } from 'mongoose'
import { ObjectID } from 'mongodb'

export const UserSchema = new Schema(
    {
        uid: String,
        firstname: String,
        lastname: String,
        telephone: String,
        gender: String,
        photoURL: String,
        email: String,
    },
    { collection: 'User', id: false },
)
