function adminView(admin) {
    
  return {
    id: admin.admin_id,
    firstname: admin.admin_firstname,
    lastname: admin.admin_lastname,
    email: admin.admin_email,
    password: admin.admin_password,
    createdAt: admin.admin_created_at,
    updatedAt: admin.admin_updated_at,

  };
}

  
  module.exports = { 
    adminView,
  };