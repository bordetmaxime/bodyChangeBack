function machine_and_exo_view(machine_and_exo) {
    
    return {
      id: machine_and_exo.machine_and_exo_id,
      name: machine_and_exo.machine_name,
      image: machine_and_exo.exo_img,
      createdAt: machine_and_exo.machine_and_exo_created_at,
      updatedAt: machine_and_exo.machine_and_exo_updated_at,
  
    };
  }

  function machine_and_exos_view(exercices) {
    return exercices.map((exercice) => (exercice));
  }
  
    
    module.exports = { 
        machine_and_exo_view,
        machine_and_exos_view,
    };