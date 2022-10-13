const Admin = require('./admin');
const Machine_and_exo = require('./machine_and_exo');
const Training = require('./training');

// Training.hasOne(Admin, {
//   as: 'admin',
//   foreignKey: 'admin_id',
// });
// Admin.belongsTo(Training)


module.exports = {
  Admin,
  Machine_and_exo,
  Training
};