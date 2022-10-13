

const { Training } = require('../models/training');

const trainingController = {

    getAllTraining: (req, res, next) => {
        res.send("recup de l'entrainement")
              },

    createOrModify: (req, res, next) => {
        res.send("modif de l'entrainement")
                      },

    updateTraining: (req, res, next) => {
        res.send("Mise à jour de l'entrainement")
                              },

    deleteTraining: async (req, res, next) => {
        try {
            const trainingId = req.params.id;
            const training = await Training.findByPk(trainingId);
            if (training) {
              await training.destroy();
              res.json('OK');
            } else {
              res.status(404).send(`Cant delete list with id ${trainingId}`);
            }
          } catch (err) {
            next(err);
          }
        },
      
                                      };
        
            
      
module.exports = trainingController;