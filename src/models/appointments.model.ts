import { model, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { IAppointment } from './interfaces/IAppointments';

const appointmentSchema = new Schema<IAppointment>({
    id: { type: String, default: () => uuid() },
    user: { type: String, required: true },
    doctor: { type: String, required: true },
    date: { type: Date, required: true },
    active: { type: Boolean, default: true},
});

export const AppointmentModel = model<IAppointment>('User', appointmentSchema);