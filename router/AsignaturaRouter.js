const express = require('express')
const AsignaturaController= require('../controller/AsignaturaController')


const router = express.Router();

router.get('/', AsignaturaController.getAsignaturas)
router.post('/', AsignaturaController.postAsignaturas)
// router.put('/:idasignatura',asignaturaController.putAsignatura)
// router.delete('/:idasignatura',asignaturaController.deleteAsignatura)


module.exports=router;