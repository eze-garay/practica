import Students from "../db/dao/students.dao.js";

import StudentRepository from "../repository/students.repository.js";



const studenta = new Students()

const studentDao = new StudentRepository(studenta);


export const getStudents = async (req, res) => {
    try {
      let students = await studentDao.getAll();
      res.send(students);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error, message: "No se pudieron obtener los estudiantes." });
    }
  };

  export const createStudent = async (req, res) => {
    try {
      let result = await studentDao.createStudent();
      res.status(201).send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error, message: "No se pudo guardar el estudiante." });
    }
  };

export const studentService = new StudentRepository(studentDao);





