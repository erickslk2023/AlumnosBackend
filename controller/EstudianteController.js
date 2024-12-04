const Estudiantes = require('../Modelos/Estudiante');


//request, response
exports.getEstudiantes = async (req,resp) =>{

    try {

        //select *from estudiante
        const estudiantes = await Estudiantes.findAll();

        resp.status(200).send(estudiantes)
        
    } catch (error) {
        resp.status(500).send(error)
        console.log(error)
    }

}

//agregar
exports.postEstudiantes = async (req,resp) =>{

    try {
    
        const result =await Estudiantes.create(req.body);
        resp.json(result)
    
      } catch (error) {
        resp.status(500).json({error: 'Ocurrio un error' + error})
      }

}

exports.putEstudiantes = async (req,resp) =>{
    try {
    
        const result =await Estudiantes.findByPk(req.params.idestudiante);
    
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