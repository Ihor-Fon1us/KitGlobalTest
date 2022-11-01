import { IAppointment } from './IAppointments';

export interface IUser {
    id: string;
    email: string;
    reg_token: string;
    photo_avatar: string;
    phone: string;
    name: string;
    type: string;
    appointments: Array<IAppointment>;
}

export interface IUserMethods {
    addAppointment(data: IAppointment): IUser;
}