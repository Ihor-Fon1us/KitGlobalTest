import { Schema, model, connect } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { IAppointment } from '../interfaces/IAppointments';
import { IDoc } from '../interfaces/IDoc';


const docSchema = new Schema<IDoc>({
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
    spec: { type: String, required: true },
    free: { type: Boolean, required: true },
    appointments_accepted: {
        type: [{
            id: String,
            user: String,
            doctor: String,
            date: Date,
            active: Boolean,
        }],
    },
});

export const DocModel = model<IDoc>('Doc', docSchema);