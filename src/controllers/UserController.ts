import { NextFunction, Request, Response} from 'express';
import { UserService } from '../services/UserService';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const user = await UserService.create(req.body);
        next();
    } catch (error) {
        next(new ValidationError(error.message))
    }
}

export const addUserAppointment = async (req: Request, res: Response, next: NextFunction) => {
     try {
        const appointment = await UserService.addAppointment(req.body.userId, req.body.appointment)
     } catch (error) {
        
     }
}
