const express = require('express')
const AsignaturaEstudianteController= require('../controller/AsignaturaEstudianteController')


const router = express.Router();

router.get('/', AsignaturaEstudianteController.getAsignaturaEstudiante)
router.post('/', AsignaturaEstudianteController.postAsignaturaEstudiante)
router.put('/:id', AsignaturaEstudianteController.putAsignaturaEstudiante)
router.delete('/:id', AsignaturaEstudianteController.deleteAsignaturaEstudiante)


module.exports=router;