import {Router} from 'express'
import {getUsers,createUser, deleteUser} from '../controllers/user.controller.js'

const router = Router();


router.get('/user',getUsers);
router.post('/user',createUser)
router.delete('/user/:id',deleteUser)


//router.post('/login',loginfuntion)

export default router;