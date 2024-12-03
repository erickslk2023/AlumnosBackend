const express = require('express')
const  EstudianteController= require('../controller/EstudianteController')

const router = express.Router();

router.get('/', EstudianteController.getEstudiantes)
router.post('/', EstudianteController.postEstudiantes)
router.put('/:idestudiante', EstudianteController.postEstudiantes)



module.exports=router;