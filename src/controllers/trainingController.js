const { Training } = require('../models');
const {trainingsView,  trainingView} = require('../dataviews/trainingView');

const trainingController = {



    getAllTraining: async (req, res, next) => {
        try {
            const trainingId = req.params.id;
            const trainings = await Training.findAll(
              {
                where: {training_user_id: trainingId},
              },
            );
      
            if (!trainings) {
              res.status(404).json(`Cant find cards with listId ${trainingId}`);
            } else {
              res.json(trainingsView(trainings));
            }
          } catch (error) {
            next(error);
          }
        },
              

    createOrModify: async (req, res, next) => {
        try {
            const {	adminid,

              repDev1, repDev2,repDev3, repDev4,repDev5, repDev6, repDev7, repDev8, repDev9, repDev10, repDev11, repDev12, repDev13, repDev14, repDev15, repDev16,
                repDev17, repDev18, repDev19, repDev20, repDev21, repDev22, repDev23, repDev24,
            
              serDev1, serDev2, serDev3, serDev4, serDev5, serDev6, serDev7, serDev8, serDev9, serDev10, serDev11, serDev12, serDev13, serDev14, serDev15, serDev16,
              serDev17, serDev18, serDev19, serDev20, serDev21, serDev22, serDev23, serDev24,
            
              repGuide1, repGuide2,repGuide3, repGuide4,repGuide5, repGuide6, repGuide7, repGuide8, repGuide9, repGuide10, repGuide11, repGuide12, repGuide13, repGuide14,
              repGuide15, repGuide16, repGuide17, repGuide18, repGuide20, repGuide21,
            
              serGuide1, serGuide2, serGuide3, serGuide4, serGuide5, serGuide6, serGuide7, serGuide8, serGuide9, 
              serGuide10, serGuide11, serGuide12, serGuide13, serGuide14, serGuide15, serGuide16, serGuide17, serGuide18, serGuide20, serGuide21,
            
              repHaltere1, repHaltere2,repHaltere3, repHaltere4,repHaltere5, repHaltere6, repHaltere7, repHaltere8, repHaltere9, repHaltere10, repHaltere11, repHaltere12,
              repHaltere13, repHaltere14,
            
              serHaltere1, serHaltere2, serHaltere3, serHaltere4, serHaltere5, serHaltere6, serHaltere7, serHaltere8, serHaltere9, serHaltere10, serHaltere11, serHaltere12, serHaltere13, serHaltere14,
            
              repSquat1, repSquat2, repSquat3, repSquat4, repSquat5, repSquat6, repSquat7, repSquat8, repSquat9, repSquat10,
            
              serSquat1, serSquat2, serSquat3, serSquat4, serSquat5, serSquat6, serSquat7, serSquat8, serSquat9, serSquat10 } = req.body;

            if(repDev1, serDev1 > 0){

           Training.create({
                training_img: "dev1",
                training_repetition: repDev1,
                training_serie: serDev1,
                training_user_id: adminid,
                });

               
            }

            if(repDev2, serDev2 > 0){

             Training.create({
                training_img: "dev2",
                training_repetition: repDev2,
                training_serie: serDev2,
                training_user_id: adminid,
                });

               
            }

            if(repDev3, serDev3 > 0){

              Training.create({
                training_img: "dev3",
                training_repetition: repDev3,
                training_serie: serDev3,
                training_user_id: adminid,
                });

               
            }

            if(repDev4, serDev4 > 0){

             Training.create({
                training_img: "dev4",
                training_repetition: repDev4,
                training_serie: serDev4,
                training_user_id: adminid,
                });

               
            }

            if(repDev5, serDev5 > 0){

              Training.create({
                training_img: "dev5",
                training_repetition: repDev5,
                training_serie: serDev5,
                training_user_id: adminid,
                });

               
            }

            if(repDev6, serDev6 > 0){

              Training.create({
                training_img: "dev6",
                training_repetition: repDev6,
                training_serie: serDev6,
                training_user_id: adminid,
                });

               
            }

            if(repDev7, serDev7 > 0){

              Training.create({
                training_img: "dev7",
                training_repetition: repDev7,
                training_serie: serDev7,
                training_user_id: adminid,
                });

               
            }

            if(repDev8, serDev8 > 0){

              Training.create({
                training_img: "dev8",
                training_repetition: repDev8,
                training_serie: serDev8,
                training_user_id: adminid,
                });

               
            }

            if(repDev9, serDev9 > 0){

              Training.create({
                training_img: "dev9",
                training_repetition: repDev9,
                training_serie: serDev9,
                training_user_id: adminid,
                });

               
            }

            if(repDev10, serDev10 > 0){

              Training.create({
                training_img: "dev10",
                training_repetition: repDev10,
                training_serie: serDev10,
                training_user_id: adminid,
                });

               
            }

            if(repDev11, serDev11 > 0){

              Training.create({
                training_img: "dev11",
                training_repetition: repDev11,
                training_serie: serDev11,
                training_user_id: adminid,
                });

               
            }

            if(repDev12, serDev12 > 0){

              Training.create({
                training_img: "dev12",
                training_repetition: repDev12,
                training_serie: serDev12,
                training_user_id: adminid,
                });

               
            }

            if(repDev13, serDev13 > 0){

              Training.create({
                training_img: "dev13",
                training_repetition: repDev13,
                training_serie: serDev13,
                training_user_id: adminid,
                });

               
            }  
            
            if(repDev14, serDev14 > 0){

             Training.create({
              training_img: "dev14",
                training_repetition: repDev14,
                training_serie: serDev14,
                training_user_id: adminid,
                });

               
            }

            if(repDev15, serDev15 > 0){

             Training.create({
                training_img: "dev15",
                training_repetition: repDev15,
                training_serie: serDev15,
                training_user_id: adminid,
                });

               
            }

            if(repDev16, serDev16 > 0){

             Training.create({
                training_img: "dev16",
                training_repetition: repDev16,
                training_serie: serDev16,
                training_user_id: adminid,
                });
            }

            if(repDev17, serDev17 > 0){

              Training.create({
                training_img: "dev17",
                training_repetition: repDev17,
                training_serie: serDev17,
                training_user_id: adminid,
                });

               
            }

            if(repDev18, serDev18 > 0){

              Training.create({
                training_img: "dev18",
                training_repetition: repDev18,
                training_serie: serDev18,
                training_user_id: adminid,
                });

               
            }

            if(repDev19, serDev19 > 0){

              Training.create({
                training_img: "dev19",
                training_repetition: repDev19,
                training_serie: serDev19,
                training_user_id: adminid,
                });

               
            }

            if(repDev20, serDev20 > 0){

              Training.create({
                training_img: "dev20",
                training_repetition: repDev20,
                training_serie: serDev20,
                training_user_id: adminid,
                });

               
            }

            if(repDev21, serDev21 > 0){

              Training.create({
                training_img: "dev21",
                training_repetition: repDev21,
                training_serie: serDev21,
                training_user_id: adminid,
                });

               
            }

            if(repDev22, serDev22 > 0){

              Training.create({
                training_img: "dev22",
                training_repetition: repDev22,
                training_serie: serDev22,
                training_user_id: adminid,
                });

               
            }

            if(repDev23, serDev23 > 0){

              Training.create({
                training_img: "dev23",
                training_repetition: repDev23,
                training_serie: serDev23,
                training_user_id: adminid,
                });

               
            }

            if(repDev24, serDev24 > 0){

              Training.create({
                training_img: "dev24",
                training_repetition: repDev24,
                training_serie: serDev24,
                training_user_id: adminid,
                });

               
            }

            if(repGuide1, serGuide1 > 0){

              Training.create({
                training_img: "guide1",
                training_repetition: repGuide1,
                training_serie: serGuide1,
                training_user_id: adminid,
                });

               
            }

            if(repGuide2, serGuide2 > 0){

              Training.create({
                training_img: "guide2",
                training_repetition: repGuide2,
                training_serie: serGuide2,
                training_user_id: adminid,
                });

               
            }

            if(repGuide3, serGuide3 > 0){

              cTraining.create({
                training_img: "guide3",
                training_repetition: repGuide3,
                training_serie: serGuide3,
                training_user_id: adminid,
                });

               
            }

            if(repGuide4, serGuide4 > 0){

              Training.create({
                training_img: "guide4",
                training_repetition: repGuide4,
                training_serie: serGuide4,
                training_user_id: adminid,
                });

               
            }

            if(repGuide5, serGuide5 > 0){

             Training.create({
              training_img: "guide5",
                training_repetition: repGuide5,
                training_serie: serGuide5,
                training_user_id: adminid,
                });

               
            }

            if(repGuide6, serGuide6 > 0){

              Training.create({
                training_img: "guide6",
                training_repetition: repGuide6,
                training_serie: serGuide6,
                training_user_id: adminid,
                });

               
            }

            if(repGuide7, serGuide7 > 0){

                Training.create({
                  training_img: "guide7",
                training_repetition: repGuide7,
                training_serie: serGuide7,
                training_user_id: adminid,
                });

               
            }

            if(repGuide8, serGuide8 > 0){

              Training.create({
                training_img: "guide8",
                training_repetition: repGuide8,
                training_serie: serGuide8,
                training_user_id: adminid,
                });

               
            }

            if(repGuide9, serGuide9 > 0){

              Training.create({
                training_img: "guide9",
                training_repetition: repGuide9,
                training_serie: serGuide9,
                training_user_id: adminid,
                });

               
            }

            if(repGuide10, serGuide10 > 0){

              Training.create({
                training_img: "guide10",
                training_repetition: repGuide10,
                training_serie: serGuide10,
                training_user_id: adminid,
                });

               
            }

            if(repGuide11, serGuide11 > 0){

               Training.create({
                training_img: "guide11",
                training_repetition: repGuide11,
                training_serie: serGuide11,
                training_user_id: adminid,
                });

               
            }

            if(repGuide12, serGuide12 > 0){

              Training.create({
                training_img: "guide12",
                training_repetition: repGuide12,
                training_serie: serGuide12,
                training_user_id: adminid,
                });

               
            }

            if(repGuide13, serGuide13 > 0){

              Training.create({
                training_img: "guide13",
                training_repetition: repGuide13,
                training_serie: serGuide13,
                training_user_id: adminid,
                });

               
            }

            if(repGuide14, serGuide14 > 0){

              Training.create({
                training_img: "guide14",
                training_repetition: repGuide14,
                training_serie: serGuide14,
                training_user_id: adminid,
                });

               
            }

            if(repGuide15, serGuide15 > 0){

              Training.create({
                training_img: "guide15",
                training_repetition: repGuide15,
                training_serie: serGuide15,
                training_user_id: adminid,
                });

               
            }

            if(repGuide16, serGuide16 > 0){

             Training.create({
              training_img: "guide16",
                training_repetition: repGuide16,
                training_serie: serGuide16,
                training_user_id: adminid,
                });

               
            }

            if(repGuide17, serGuide17 > 0){

              Training.create({
                training_img: "guide17",
                training_repetition: repGuide17,
                training_serie: serGuide17,
                training_user_id: adminid,
                });

               
            }

            if(repGuide18, serGuide18 > 0){

              Training.create({
                training_img: "guide18",
                training_repetition: repGuide18,
                training_serie: serGuide18,
                training_user_id: adminid,
                });

               
            }

            if(repGuide20, serGuide20 > 0){

              Training.create({
                training_img: "guide20",
                training_repetition: repGuide20,
                training_serie: serGuide20,
                training_user_id: adminid,
                });

               
            }

            if(repGuide21, serGuide21 > 0){

                Training.create({
                  training_img: "guide21",
                training_repetition: repGuide21,
                training_serie: serGuide21,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere1, serHaltere1 > 0){

              Training.create({
                training_img: "haltere1",
                training_repetition: repHaltere1,
                training_serie: serHaltere1,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere2, serHaltere2 > 0){

              Training.create({
                training_img: "haltere2",
                training_repetition: repHaltere2,
                training_serie: serHaltere2,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere3, serHaltere3 > 0){

              Training.create({
                training_img: "haltere3",
                training_repetition: repHaltere3,
                training_serie: serHaltere3,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere4, serHaltere4 > 0){

              Training.create({
                training_img: "haltere4",
                training_repetition: repHaltere4,
                training_serie: serHaltere4,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere5, serHaltere5 > 0){

              Training.create({
                training_img: "haltere5",
                training_repetition: repHaltere5,
                training_serie: serHaltere5,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere6, serHaltere6 > 0){

              Training.create({
                training_img: "haltere6",
                training_repetition: repHaltere6,
                training_serie: serHaltere6,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere7, serHaltere7 > 0){

              Training.create({
                training_img: "haltere7",
                training_repetition: repHaltere7,
                training_serie: serHaltere7,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere8, serHaltere8 > 0){

              Training.create({
                training_img: "haltere8",
                training_repetition: repHaltere8,
                training_serie: serHaltere8,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere9, serHaltere9 > 0){

              Training.create({
                training_img: "haltere9",
                training_repetition: repHaltere9,
                training_serie: serHaltere9,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere10, serHaltere10 > 0){

              Training.create({
                training_img: "haltere10",
                training_repetition: repHaltere10,
                training_serie: serHaltere10,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere11, serHaltere11 > 0){

              Training.create({
                training_img: "haltere11",
                training_repetition: repHaltere11,
                training_serie: serHaltere11,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere12, serHaltere12 > 0){

              Training.create({
                training_img: "haltere12",
                training_repetition: repHaltere12,
                training_serie: serHaltere12,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere13, serHaltere13 > 0){

              Training.create({
                training_img: "haltere13",
                training_repetition: repHaltere13,
                training_serie: serHaltere13,
                training_user_id: adminid,
                });

               
            }

            if(repHaltere14, serHaltere14 > 0){

              Training.create({
                training_img: "haltere14",
                training_repetition: repHaltere14,
                training_serie: serHaltere14,
                training_user_id: adminid,
                });

               
            }

            if(repSquat1, serSquat1 > 0){

              Training.create({
                training_img: "squat1",
                training_repetition: repSquat1,
                training_serie: serSquat1,
                training_user_id: adminid,
                });

               
            }


            if(repSquat2, serSquat2 > 0){

              Training.create({
                training_img: "squat2",
                training_repetition: repSquat2,
                training_serie: serSquat2,
                training_user_id: adminid,
                });

               
            }

            if(repSquat3, serSquat3 > 0){

              Training.create({
                training_img: "squat3",
                training_repetition: repSquat3,
                training_serie: serSquat3,
                training_user_id: adminid,
                });

               


            }

            if(repSquat4, serSquat4 > 0){

              Training.create({
                training_img: "squat4",
                training_repetition: repSquat4,
                training_serie: serSquat4,
                training_user_id: adminid,
                });

               
            }

            if(repSquat5, serSquat5 > 0){

             Training.create({
              training_img: "squat5",
                training_repetition: repSquat5,
                training_serie: serSquat5,
                training_user_id: adminid,
                });

               
            }

            if(repSquat6, serSquat6 > 0){

              Training.create({
                training_img: "squat6",
                training_repetition: repSquat6,
                training_serie: serSquat6,
                training_user_id: adminid,
                });

               
            }

            if(repSquat7, serSquat7 > 0){

             Training.create({
              training_img: "squat7",
                training_repetition: repSquat7,
                training_serie: serSquat7,
                training_user_id: adminid,
                });

               
            }

            if(repSquat8, serSquat8 > 0){

              Training.create({
                training_img: "squat8",
                training_repetition: repSquat8,
                training_serie: serSquat8,
                training_user_id: adminid,
                });

               
            }

            if(repSquat9, serSquat9 > 0){

                Training.create({
                  training_img: "squat9",
                training_repetition: repSquat9,
                training_serie: serSquat9,
                training_user_id: adminid,
                });

               
            }

            if(repSquat10, serSquat10 > 0){

              Training.create({
                training_img: "squat10",
                training_repetition: repSquat10,
                training_serie: serSquat10,
                training_user_id: adminid,
                });

                              
               
            }

            res.json("training créer ");


          } catch (err) {
            next(err);
          }
        },
         

    updateTraining: async (req, res, next) => {
     
        try {
            const {image, repetition, serie } = req.body;
            const bodyErrors = checkTrainingBodyError(req.body);
            if (bodyErrors.length) {
              res.status(400).json(bodyErrors);
              return;
            }
            if (image) {
              training.training_image = image;
            }
            if (repetition) {
                training.training_repetition = repetition;
            }
            if (serie) {
                training.training_serie = serie;
            }

      
                
            const cleanedtraining = trainingView(training);
            res.json(cleanedtraining);
          } catch (err) {
            next(err);
          }
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