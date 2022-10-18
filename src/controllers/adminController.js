const { Admin, restore } = require('../models');
const { adminView} = require('../dataviews/adminView');
const bcrypt = require('bcrypt');



const adminController = {

  getUser : async (req,res,next) => {
   try{
const email = req.body.email;
const password = req.body.password;

const adminSearch = await Admin.findOne({where : {admin_email: email}})
const goodPassword = await bcrypt.compare(password, adminSearch.admin_password);

  if(goodPassword){
  res.json(adminSearch)
}


else {
  res.status(404).send(`Cant find list with id ${adminId}`);
}
} catch (err) {
next(err);
}},



      
    createOrModify: async (req, res, next) => {
        try {

          const hashPassword = await bcrypt.hash(req.body.password, 10);
             
        await Admin.create({
            admin_firstname: req.body.firstname,
            admin_lastname: req.body.lastname,
            admin_email: req.body.email,
            admin_password: hashPassword,
          });
  
        res.json("okey");
      
   
      } catch (err) {
        next(err);
      }
    
              },

   
  
                            


                            };
                        
    
    

module.exports = adminController;