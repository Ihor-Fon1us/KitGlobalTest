import { NextFunction, Request, Response } from 'express';
import { ValidationError } from '../errors/API_Errors';
import { AppointmentService } from '../services/AppointmentsService';
import { DocService } from '../services/DocService';
import { NotificationService } from '../services/NotificationsService';
import { UserService } from '../services/UserService';
import { Mapper } from './mapper';

export const createAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserService.getById(req.body.user);
        if (!user) return next(new ValidationError("Wrong user id."));

        const doc = await DocService.getById(req.body.doctor);
        if (!doc) return next(new ValidationError("Wrong doc id."));

        req.body.json = await AppointmentService.create(req.body);
        next();
    } catch (error) {
        next(new ValidationError(error.message));
    }
}

export const acceptAppointment = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if (!req.query.id) return next(new ValidationError("Enter appointment id"));
        if (!req.query.accept) {
            await AppointmentService.deleteById(req.query.id.toString());
            req.body.json = { status: "Appointment removed" };
        } else {
            const appointment = await AppointmentService.getById(req.query.id.toString());

            if (!appointment) return next(new ValidationError("Wrong appointment id."));

            const user = await UserService.addAppointment(appointment.user, appointment);

            if (!user) return next(new ValidationError("Wrong user id."));

            const doc = await DocService.addAppointment(appointment.doctor, appointment);

            if (!doc) return next(new ValidationError("Wrong doc id."));
            
            // req.body.json = { status: "Appointment accepted" };

        
            const notification24 = await NotificationService.create(Mapper.Notification24ToAPI(appointment, user, doc));
            const notification2 = await NotificationService.create(Mapper.Notification2ToAPI(appointment, user, doc));

            req.body.json = { status: "Appointment accepted" , a: notification2, b: notification24};
        }
        next();
    } catch (error) {
        next(new ValidationError(error.message));
    }
}