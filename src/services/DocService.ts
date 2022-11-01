import { DocModel } from "../models/doc.model";
import { IAppointment } from "../interfaces/IAppointments";
import { IDoc } from "../interfaces/IDoc";

export class DocService {

    static async getById(id: string) {
        return DocModel.findOne({ 'id': id }).exec();
    }

    static async create(data: IDoc) {
        const user = new DocModel(data);
        return user.save();
    }

    static async addAppointment(id: string, data: IAppointment) {
        const user = await DocService.getById(id);
        if(!user) return
        if (data) {
            user.appointments_accepted.push(data);
        }
        return user.save();
    }

}