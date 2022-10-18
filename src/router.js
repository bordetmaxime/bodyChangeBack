const express = require('express');
const adminController = require('./controllers/adminController');
const trainingController = require('./controllers/trainingController');
const router = express.Router();

/**
 * DEBUG
 */
router.get('/', (req, res) => {
  res.send('hello world');
});


/* Admin */

router.post('/admin', adminController.createOrModify);
router.post('/admin/user', adminController.getUser);

/* training */
router.get('/training/:id', trainingController.getAllTraining);
router.post('/training', trainingController.createOrModify);
router.delete('/training/:id', trainingController.deleteTraining);



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