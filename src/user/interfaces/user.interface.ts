import { Document } from 'mongoose'
import { ObjectID } from 'mongodb'

export interface User extends Document {
    _id: ObjectID
    firstname: string
    lastname: string
    telephone: string
    gender: string
    photoURL: string
    email: string
}
