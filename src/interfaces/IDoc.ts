import { IAppointment } from './IAppointments';

export interface IDoc {
    id: string;
    email: string;
    reg_token: string;
    photo_avatar?: string;
    phone: string;
    name: string;
    type: string;
    spec: string;
    free: boolean;
    appointments_accepted: Array<IAppointment>;
}