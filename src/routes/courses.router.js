import { Router } from 'express';
//import del service para Courses.
//import CourseService from '../services/filesystem/courses.service.js';
//import CourseServiceDao from '../services/db/dao/courses.dao.js';
import { getCourses, saveCourse } from '../controller/courses.controller.js';

const router = Router();


router.get('/', getCourses);
router.post('/', saveCourse);

export default router;