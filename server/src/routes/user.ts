const expressJS = require('express');
const router = expressJS.Router();

const userController = require('../controllers/userController');

router.get('/get', userController.read);
router.post('/post', userController.create);
router.post('/patch', userController.update);
router.delete('/delete/:id', userController.delete);
router.post('/login', userController.login);

module.exports = router;