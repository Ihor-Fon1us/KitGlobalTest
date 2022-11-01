import express, { Express, Request, Response, Router } from 'express';
import { createAppointment, acceptAppointment } from '../controllers/AppointmentsController';
import { sendNotification } from '../controllers/NotificationsController';
import { createUser } from '../controllers/RegController';
import { writer } from '../middleware/writer';

const router: Router = express.Router();

router.post('/reg', createUser, writer);

router.post('/regAppointment', createAppointment, writer);

router.get('/acceptAppointment', acceptAppointment, writer);

router.get('/notifications', sendNotification, writer)

module.exports = router;