const { Admin, restore } = require('../models');
const { adminView} = require('../dataviews/adminView');
const bcrypt = require('bcrypt');



const adminController = {

  getUser : async (req,res,next) => {
   try{
const email = req.body.email;
const password = req.body.password;

adminSearch = await Admin.findOne({where : {admin_email: email}})

if (adminSearch){
  const goodPassword = await bcrypt.compare(password, adminSearch.admin_password);
  if(goodPassword){
  res.json(adminSearch)}
}


else {
  res.status(404).send(`Cant find list with id ${adminId}`);
}
} catch (err) {
next(err);
}},


    getOneAdmin: async (req, res, next) => {
    try{
        const adminId = req.params.id;
        const admin = await Admin.findByPk(adminId);

        if (admin) {
            const cleanedList = adminView(admin);
            res.json(cleanedList);
          } else {
            res.status(404).send(`Cant find list with id ${adminId}`);
          }
        } catch (err) {
          next(err);
  }},

      
    createOrModify: async (req, res, next) => {
        try {

          const hashPassword = await bcrypt.hash(req.body.password, 10);
             
        const newadmin = Admin.build({
            admin_firstname: req.body.firstname,
            admin_lastname: req.body.lastname,
            admin_email: req.body.email,
            admin_password: hashPassword,
          });
  
  
        await newadmin.save();

        res.json("okey");
      
   
      } catch (err) {
        next(err);
      }
    
              },

    updateAdmin: async (req, res, next) => {
        try {
            const adminId = req.params.id;
            const admin = await Admin.findByPk(adminId);
            if (!admin) {
              res.status(404).send(`Cant find list with id ${adminId}`);
              return;
            }
      
            const {firstname, lastname, email, password} = req.body;    
        
            if (firstname) {
              admin.admin_firstname = firstname;
            }
            if (lastname) {
                admin.admin_lastname = lastname;
            }
            if (email) {
                admin.admin_email = email;
            }
            if (password) {
                admin.admin_password = password;
            }
      
            await admin.save();
      
            const cleanedAdmin = adminView(admin);
            res.json(cleanedAdmin);
          } catch (err) {
            next(err);
          }
        },
                      
    deleteAdmin: async (req, res, next) => {
      
            try {
              const adminId = req.params.id;
              const admin = await Admin.findByPk(adminId);
              if (Admin) {
                await admin.destroy();
                res.json('OK');
              } else {
                res.status(404).send(`Cant delete list with id ${adminId}`);
              }
            } catch (err) {
              next(err);
            }
          },
                            


                            };
                        
    
    

module.exports = adminController;