import {Router} from 'express'
import {loginfuntion} from '../controllers/login.controller.js'

const router = Router();

router.use((req,res,next) => {
    res.header(
        "Access-Control-Allow-Headers",
        "x-access-token, Origin, Content-Type, Accept"
    )
    next();
})

router.post('/login',loginfuntion)

export default router;