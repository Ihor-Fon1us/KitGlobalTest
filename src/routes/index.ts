import express, { Express, Request, Response, Router } from 'express';
import { createAppointment } from '../controllers/AppointmentsController';
import { createDoctor } from '../controllers/DocController';
import { createUser } from '../controllers/UserController';

const router: Router = express.Router();

router.post('/regUser', createUser);

router.post('/regDoc', createDoctor);

router.post('/regAppointments', createAppointment);

module.exports = router;