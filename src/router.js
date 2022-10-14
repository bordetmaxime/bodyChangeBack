const express = require('express');
const adminController = require('./controllers/adminController');
const trainingController = require('./controllers/trainingController');
const exerciceController = require('./controllers/exerciceController');
const router = express.Router();

/**
 * DEBUG
 */
router.get('/', (req, res) => {
  res.send('hello world');
});


/* Admin */
router.get('/admin/:id', adminController.getOneAdmin);
router.post('/admin', adminController.createOrModify);
router.post('/admin/user', adminController.getUser);
router.patch('/admin/:id', adminController.updateAdmin);
router.delete('/admin/:id', adminController.deleteAdmin);

/* training */
router.get('/training/:id', trainingController.getAllTraining);
router.post('/training', trainingController.createOrModify);
router.put('/training/:id', trainingController.createOrModify);
router.patch('/training/:id', trainingController.updateTraining);
router.delete('/training/:id', trainingController.deleteTraining);

/* exercice */
router.get('/exercice', exerciceController.getAllExercice);
router.get('/exercice/:id', exerciceController.getOneExercice);


/**
 * ERROR
 */
router.use((err, req, res, next) => {
  // ce petit middleware va capter toute les erreurs qui ne sont pas catch dans notre router
  console.trace(err);
  res.status(500).json(err.toString());
});

router.use((req, res) => {
  res.sendStatus(404);
});


module.exports = router;