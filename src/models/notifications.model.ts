import { Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { INotifications } from './interfaces/INotifications';


const userSchema = new Schema<INotifications>({
    id: { type: String, default: () => uuid() },
    appointments: { type: String, required: true },
    message: { type: String, required: true },
    date: { type: Date, required: true },
});