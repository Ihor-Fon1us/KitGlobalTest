import { model, Schema } from 'mongoose';
import { INotifications } from '../interfaces/INotifications';


const notificationSchema = new Schema<INotifications>({
    id: { type: String, required: true, },
    message: { type: String, required: true, },
    date: { type: Date, required: true, },
});

export const NotificationModel = model<INotifications>('Notification', notificationSchema);