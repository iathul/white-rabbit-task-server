const User = require('../models/user')
const { validationResult } = require('express-validator')

exports.addUserInfo = async (req, res) => {

    const errors = validationResult(req)
    if(!errors.isEmpty()){
        return res.status(422).json({
            error: [errors.array()[0].param, errors.array()[0].msg]
        })
    }
    const isExists = await User.findOne({ email:req.body.email })
        if (isExists){
            return res.status(400).json({
                error: 'User already exists'
            })
        } 

    const user = new User(req.body)
    await user.save((err) => {
        
        if(err){
            logger.log('error', err)
            return res.status(400).json({
                error: "Somethng went wrong. Please try again"
            })
        }else {
            return res.status(200).json({
                message: "User details added successfully."
            })
        }
    })
}

exports.listUsers = (req, res) => {
    User.find().select({
        phoneNumber: 0, 
        introduction: 0,
        experience: 0,
        achievements: 0,

    }).exec((err, users) => {
        if (err) {
        return res.status(400).json({
            error: "NO user found"
        });
        }
        return res.json({
            users: users
        })
    }) 
}

exports.getUserById = (req, res,) => {
    const id = req.params.id
   
    User.findById(id).exec((err, user) => {
        if (err) {
            return res.status(400).json({
            error: "User not found."
            })
        }
        res.json(user)
    });
    
}