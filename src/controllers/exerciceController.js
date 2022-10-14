const { Machine_and_exo } = require('../models');
const {machine_and_exo_view,  machine_and_exos_view} = require('../dataviews/machineandexoView');



const exerciceController = {

    getAllExercice: async (req, res, next) => {
        try {
            const exercices = await Machine_and_exo.findAll()              
            const cleanedExercices =  machine_and_exos_view(exercices);
            res.json(cleanedExercices);
          } catch (err) {
            next(err);
          }
        },
      


    getOneExercice: async (req, res, next) => {
        try {
            const exerciceId = req.params.id;
            const exercice = await Machine_and_exo.findByPk(exerciceId)          
            if (exercice) {
              const cleanedExercice = machine_and_exo_view(exercice);
              res.json(cleanedExercice);
            } else {
              res.status(404).send(`Cant find list with id ${exerciceId}`);
            }
          } catch (err) {
            next(err);
          }
        },


                            }  

    
    

module.exports = exerciceController;