import { NextFunction, Request, Response } from 'express';
import { appendFile, write, writeFile } from 'fs';
import { ValidationError } from '../errors/API_Errors';
import { NotificationService } from '../services/NotificationsService';

export const sendNotification = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const timeNow = req.body.time;
        const notification = await NotificationService.getByTime(timeNow);
        if(!notification) return next();
        appendFile( '../public/notifications.log', notification.message, (err) => {
            if (err) throw err;
            console.log('The "data to append" was appended to file!');
          });
        await NotificationService.deleteByTime(timeNow);
        next();
    } catch (error) {
        next(new ValidationError(error.message));
    }
}