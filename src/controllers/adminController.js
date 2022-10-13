const { Admin, restore } = require('../models');
const { adminView} = require('../dataviews/adminView');


const adminController = {

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
            const {firstname, lastname, email, password} = req.body;
            const bodyErrors = checkAdminBodyError(req.body);
            if (bodyErrors.length) {
              res.status(400).json(bodyErrors);
              return;
            }

        const adminId = req.params.id;
        let admin;
        if (adminId) { 
          admin = await Admin.findByPk(adminId);
          if (admin) {
       
            admin.admin_firstname = firstname;
            admin.admin_lastname = lastname;
            admin.admin_email = email;
            admin.admin_password = password;
          }
        }
  
        if (!admin) { 
        admin = Admin.build({
            admin_firstname: firstname,
            admin_lastname: lastname,
            admin_email: email,
            admin_password: password,
          });
        }
  
        await admin.save();
  
        const cleanedAsmin = adminView(admin);
        res.json(cleanedAdmin);
    
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
            const bodyErrors = checkAdminBodyError(req.body, false);
            if (bodyErrors.length) {
              res.status(400).json(bodyErrors);
              return;
            }
      
        
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