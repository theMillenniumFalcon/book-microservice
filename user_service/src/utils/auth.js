const jwt = require("jsonwebtoken")
const { Unauthorized } = require("./error/api-error")
const { development } = require('../config')

const PRIVATE_KEY = development.privateKey

exports.generateToken = async(user_id) => { 
    const jwtToken = await jwt.sign(
        {
            user_id: user_id
        }, PRIVATE_KEY,
        {
            expiresIn: 60 * 60
        },
    )

    return jwtToken
}

exports.verifyToken = async(req, res, next) =>{
    try {     
      const jwtToken = req.headers.authorization.split(" ")[1]
      const {user_id} = await jwt.verify(jwtToken, PRIVATE_KEY)
      if(user_id === null) {
        throw new Error
      }
      req.user_id = user_id
      next()
    } catch(err) {
        next(new Unauthorized(description = "Unauthorized to perform this action"))
    }
}