import { Model, model, Schema } from 'mongoose';
import { v4 as uuid } from 'uuid';
import { IAppointment, IAppointmentMethods } from '../interfaces/IAppointments';

type AppointmentModel = Model<IAppointment, {}, IAppointmentMethods>;

const appointmentSchema = new Schema<IAppointment, AppointmentModel, IAppointmentMethods>({
    id: { type: String, default: () => uuid() },
    user: { type: String, required: true },
    doctor: { type: String, required: true },
    date: { 
        type: Date,
        required: true,
        validate: {
            validator: (v: Date) => {
                return v > new Date();
            },
            message: props => `${props.value} is not a valid date`,
        },
     },
    active: { type: Boolean, default: true},
});

appointmentSchema.method('deactivation', function() {
    this.active = false;
    return this.save();
})

export const AppointmentModel = model<IAppointment, AppointmentModel>('Appointment', appointmentSchema);