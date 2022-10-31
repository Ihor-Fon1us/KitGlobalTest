import { IAppointment } from "../models/interfaces/IAppointments";
import { IUser } from "../models/interfaces/IUser";
import { UserModel } from "../models/user.model";

export class UserService {

    static getById(id: string) {
        return UserModel.findOne({ 'id': id }).exec();
    }

    static create(data: IUser) {
        const user = new UserModel(data);
        return user.save();
    }

    static async addAppointment(id: string, data: IAppointment) {

        const user = await UserService.getById(id);
        if(!user) return
        if (data) {
            user.appointments.push(data);
        }
        return user.save();
    }

}