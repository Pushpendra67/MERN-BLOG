import express from "express"
const router=express.Router()
import test from "../controller/user.controller.js"
// import signup from "../controller/auth.controller.js"

router.get("/test",test)
// router.post('/signup', signup)

export default router;