import { NextFunction, Request, Response} from 'express';
import { ValidationError } from '../errors/API_Errors';
import { DocService } from '../services/DocService';
import { UserService } from '../services/UserService';

export const createUser = async (req: Request, res: Response, next: NextFunction) => {
    try {
        if(req.body.type === 'user'){
            req.body.json = await UserService.create(req.body);
            return next();
        }
        if(req.body.type === 'doc'){
            req.body.json = await DocService.create(req.body);
            return next();
        }
        next(new ValidationError("Invalid user type."));
    } catch (error) {
        next(new ValidationError(error.message));
    }
}