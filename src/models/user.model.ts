import { Schema, model } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { IUser } from './interfaces/IUser';


const userSchema = new Schema<IUser>({
    id: { type: String, default: () => uuid() },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v: string) => {
                return /^\S+@\S+\.\S+$/.test(v);
            },
            message: props => `${props.value} is not a valid email`
        },
    },
    reg_token: { type: String, required: true },
    photo_avatar: { type: String, required: true },
    phone: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: (v: string) => {
                return /^(?:\+38)?(0\d{9})$/.test(v);
            },
            message: props => `${props.value} is not a valid phone number (+380...)`
        },
    },
    name: { type: String, required: true },
    type: { type: String, required: true },
    appointments: [{
        id: String,
        user: String,
        doctor: String,
        date: Date,
        active: Boolean,
    }],
});

export const UserModel = model<IUser>('User', userSchema);