const { generateToken } = require('../utils/auth')
const service = require('../../service/user')

exports.registercontroller = async(req,res,next) => {
    try {
        const data = await service.createuser(req.body)
        const Token = await generateToken(data._id)
        res.setHeader("Authorization", `Bearer ${Token}`)
        console.log(data)
        res.status(201).json({result: data})
    } catch(err){
        next(err)
    }
}

exports.logincontroller = async(req,res,next)=>{
    try {
        const data = await service.authuser(req.body)
        const Token = await generateToken(data._id)
        res.setHeader("Authorization", `Bearer ${Token}`)
        res.status(200).json({result:data})
    } catch(err) {
        next(err)
    }
}

exports.getusercontroller = async(req,res,next)=>{
    try {
        const data = await service.getuser(req.params.id) 
        res.status(200).json({result:data})
    } catch(err) {
        next(err)
    }
}

exports.deleteusercontroller = async(req,res,next)=>{
    try{
        await service.deleteuser(req.user_id) 
        res.status(200).json({success:true})
    }
    catch(err) {
        next(err)
    }
}

exports.getlistofuserscontroller = async(req,res,next)=>{
    try{
        const data = await service.listofusers()
        res.status(200).json({data:data, success:true})
    } catch(err) {
        next(err)
    }
}

exports.updatephonecontroller = async(req,res,next)=>{
    try{
        const {newPhone} = req.body
        await service.updatephone(req.user_id,newPhone)
        res.status(200).json({success:true})
    } catch(err) {
        next(err)
    }
}

exports.updatepasswordcontroller = async(req,res,next)=>{
    try{
        const {newPassword} = req.body
        await service.updatepassword(req.user_id,newPassword)
        res.status(200).json({success: true})
    } catch(err) {
        next(err)
    }
}

exports.updatenamecontroller = async(req,res,next)=>{
    try{
        const {newName} = req.body
        await service.updatename(req.user_id, newName)
        res.status(200).json({success: true})
    } catch(err) {
        next(err)
    }
}