import { AppointmentModel } from "../models/appointments.model";
import { IAppointment } from "../interfaces/IAppointments";


export class AppointmentService {

    static getById(id: string) {
        return AppointmentModel.findOne({ 'id': id }).exec();
    }

    static create(data: IAppointment) {
        const appointment = new AppointmentModel(data);
        return appointment.save();
    }

    static async deactivation(id: string) {
        const appointment =  await AppointmentService.getById(id);
        if(!appointment) return 
        return appointment.deactivation();
    }

    static deleteById(id: string) {
        return AppointmentModel.findOneAndDelete({ 'id': id }).exec();
    }
}