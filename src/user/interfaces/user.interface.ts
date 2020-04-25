import { Document } from 'mongoose'
import { ObjectID } from 'mongodb'

export interface User extends Document {
    _id: ObjectID
    uid: string
    firstname: string
    lastname: string
    telephone: string
    gender: string
    photoURL: string
    email: string
}
