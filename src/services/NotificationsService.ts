import { INotifications } from "../interfaces/INotifications";
import { NotificationModel } from "../models/notifications.model";
export class NotificationService {

    static getById(id: string) {
        return NotificationModel.findOne({ 'id': id }).exec();
    }

    static getByTime(time: Date) {
        return NotificationModel.findOne({ 'date': time }).exec();
    }

    static create(data: INotifications) {
        const appointment = new NotificationModel(data);
        return appointment.save();
    }

    static getAll() {
        return NotificationModel.find({}).exec();
    }

    static deleteByTime(time: Date) {
        return NotificationModel.deleteMany({'date': time}).exec();
    }

    static deleteById(id: string) {
        return NotificationModel.findOneAndDelete({ 'id': id }).exec();
    }
}