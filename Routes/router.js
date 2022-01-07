const express=require("express")
const router=express.Router()
const knex=require("../models/database")
const {authenticateToken}=require("../auth/jwt")

let {state,childData,district}=require("../Controller/getData.js") 
let {addState,adddistrictData,addchildData}=require("../Controller/create_post.js")
let {login}=require("../Controller/login.js")

router.get("/getState",authenticateToken,state)
router.get("/getdistrict",authenticateToken,district)
router.get("/getChildData",authenticateToken,childData)

router.post("/addState",authenticateToken,addState)
router.post("/adddistrict",authenticateToken,adddistrictData)
router.post("/addChildData",authenticateToken,addchildData)

router.post("/login",login)

module.exports=router