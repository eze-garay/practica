import { Router } from 'express';



import { getStudents, createStudent } from '../controller/students.controller.js';

const router = Router();



router.get('/', getStudents);


router.post('/', createStudent);

export default router;