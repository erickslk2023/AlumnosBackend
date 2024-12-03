const Asignaturas = require('../Modelos/Asignatura');


//request, response
exports.getAsignaturas = async (req,resp) =>{

    try {

        //select *from estudiante
        const asignaturas = await Asignaturas.findAll();

        resp.status(200).send(asignaturas)
        
    } catch (error) {
        resp.status(500).send(error)
        console.log(error)
    }

}

//agregar
exports.postAsignaturas = async (req,resp) =>{

    try {
    
        const result =await Asignaturas.create(req.body);
        resp.json(result)
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}

exports.putAsignaturas = async (req,resp) =>{
    try {
    
        const result =await Asignaturas.findByPk(req.params.idasignatura);
    
        if(result){
          await result.update(req.body);
          resp.status(200).send("actualizado correctamente")
        }
        else{
          resp.status(402).send("No se encontraron registro")
        }
       
       
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }
}


// exports.deleteCalzado = async (req,resp) =>{

//     try {
    
//         const result =await Calzado.findByPk(req.params.id_calzado);
    
//         if(result){
//           await result.destroy();
//           resp.status(200).send("Elimado correctamente")
//         }
//         else{
//           resp.status(402).send("No se encontraron registro")
//         }
       
    
//       } catch (error) {
//         resp.status(500).json({error: 'Ocurrio un error' + error})
//       }

// }