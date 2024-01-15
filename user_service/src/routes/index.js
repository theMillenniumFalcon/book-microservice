const router = require('express').Router()
const user = require('../controllers')
const { verifyToken } = require('../../utils/auth')

router.post('/register', user.registerController)
router.post('/login', user.loginController)
router.get('/listofusers', verifyToken, user.getListOfUsersController)
router.get('/:id',verifyToken, user.getUserController)
router.patch('/updatephone', verifyToken, user.updatePhoneController)
router.patch('/updatepassword', verifyToken, user.updatePasswordController)
router.patch('/updatename',verifyToken, user.updateNameController)
router.delete('/', verifyToken, user.deleteUserController)

module.exports = router