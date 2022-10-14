function trainingView(training) {
    
    return {
      id: training.training_id,
      image: training.training_img,
      repetition: training.training_repetition,
      serie: training.training_serie,
      user_id: training.training_user_id,
      createdAt: training.training_created_at,
      updatedAt: training.training_updated_at,
  
    };
  }

  function trainingsView(trainings) {
    return trainings.map((training) => (training));
  }
  
    
    module.exports = { 
      trainingView,
      trainingsView
    };