import mongoose from 'mongoose'

const Schema = mongoose.Schema;

export interface IUser extends mongoose.Document {
    _id: String;
    name: String;
    email: String;
    role: String;
    password: String;
};

export const UserSchema = new Schema({
    _id: {
        type: String
    },
    name: {
        type: String,
        required: 'Enter a name'
    },
    email: {
        type: String            
    },
    role: {
        type: String            
    },
    password: {
        type: String            
    }
});