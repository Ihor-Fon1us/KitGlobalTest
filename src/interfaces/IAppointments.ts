export interface IAppointment {
    id: string;
    user: string;
    doctor: string;
    date: Date;
    active: boolean;
}

export interface IAppointmentMethods {
    deactivation(): IAppointment;
}