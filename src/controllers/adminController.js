const { Admin, restore } = require('../models');
const { adminView} = require('../dataviews/adminView');
const bcrypt = require('bcrypt');



const adminController = {

  getUser : async (req,res) => {
  
email = req.body.email;
password = req.body.password;

adminSearch = await Admin.findOne({where : {admin_email: email}})

if (adminSearch){
  goodPassword = await bcrypt.compare(password, adminSearch.admin_password);
  if(goodPassword){
  res.json(adminSearch)}
}


else {
  res.status(404).send(`Cant find list with id ${adminId}`);
}
},



      
    createOrModify: async (req, res, next) => {
        
        const hashPassword = await bcrypt.hash(req.body.password, 10);
             
        Admin.create({
            admin_firstname: req.body.firstname,
            admin_lastname: req.body.lastname,
            admin_email: req.body.email,
            admin_password: hashPassword,
          });
  


        res.json("okey");
      
  
      }
    
              };

   
                            


                          
                        
    
    

module.exports = adminController;