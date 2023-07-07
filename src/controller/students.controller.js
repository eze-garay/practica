
import {studentService} from '../services/repository/services.js';

import MailingService from '../services/email/mailing.js';




export const getStudents = async (req, res) => {
    try {
      let students = await studentService.getAll();
      res.send(students);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error, message: "No se pudieron obtener los estudiantes." });
    }
  };

export const createStudent = async (req, res) => {
    try {
        
      let result = await studentService.createStudent(req.body);
      if (result) {
        const mailOptions = {
            from: config.email,
            to: [config.email, req.user.email],
            subject: 'Detalles del ticket',
            html: `
              <h2>Bienvenido:</h2>
            `,
            attachments: []
          };
      }
      try {
        const result = await MailingService(mailOptions);
        config.logger.info('Correo electrónico enviado:', result);
      } catch (error) {
        config.logger.error('Error al enviar el correo electrónico:', error);
      }
      res.status(201).send(result);
    } catch (error) {
      console.error(error);
      res.status(500).send({ error: error, message: "No se pudo guardar el estudiante." });
    }
  };