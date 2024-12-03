const express = require('express')
const estudianteController= require('../controller/EstudianteController')


const router = express.Router();

router.get('/',estudianteController.getEstudiante)
router.post('/',estudianteController.postEstudiante)
router.put('/:idestudiantes',estudianteController.putEstudiante)
router.delete('/:idestudiantes',estudianteController.deleteEstudiante)


module.exports=router;