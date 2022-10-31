import { AppointmentModel } from "../models/appointments.model";
import { IAppointment } from "../models/interfaces/IAppointments";


export class UserService {

    static getById(id: string) {
        return AppointmentModel.findOne({ 'id': id }).exec();
    }

    static create(data: IAppointment) {
        const user = new AppointmentModel(data);
        return user.save();
    }

    static deleteById(id: string) {
        return AppointmentModel.findOneAndDelete({ 'id': id }).exec();
    }
}