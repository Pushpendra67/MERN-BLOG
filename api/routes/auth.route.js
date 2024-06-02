import express from "express";
//  import signup from "../controller/auth.controller.js";
import { signup ,signin} from '../controller/auth.controller.js';
import test from "../controller/user.controller.js";
const router = express.Router();    


router.post('/signup', signup)
router.post('/signin', signin);
// router.post('/google', google)

export default router;