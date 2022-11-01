import { IAppointment } from "../interfaces/IAppointments";
import { IDoc } from "../interfaces/IDoc";
import { IUser } from "../interfaces/IUser";

export class Mapper {

    static Notification24ToAPI(appointment: IAppointment, user: IUser, doc: IDoc) {
        return {
            id: appointment.id,
            message: `${new Date()} | Привет ${user.name}. Напоминаем что вы записаны к ${doc.spec} завтра в ${appointment.date.toTimeString()}`,
            date: new Date((appointment.date.setDate(appointment.date.getDate() - 1))),
        }
    }

    static Notification2ToAPI(appointment: IAppointment, user: IUser, doc: IDoc) {
        return {
            id: appointment.id,
            message: `${new Date()} | Привет ${user.name}. Вам через 2 часа к ${doc.spec} в ${appointment.date.toTimeString()}`,
            date: new Date((appointment.date.setHours(appointment.date.getHours() - 2))),
        }
    }
}