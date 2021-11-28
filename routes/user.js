const router = require('express').Router()
const { 
    addUserInfo, 
    listUsers,
    getUserById
} = require('../controllers/user')
const { 
    body 
} = require('express-validator')

router.post('/add-user-info',[
    body("firstName")
    .isLength({min:3})
    .trim()
    .withMessage('must contain at least 3 characters'),
    body("lastName")
    .isLength({min:1})
    .trim()
    .withMessage('must contain at least 1 characters'),
    body("email")
    .isEmail()
    .withMessage('must be a valid email')
    .normalizeEmail({gmail_remove_dots:false}).toLowerCase().trim(),
    body("introduction")
    .isLength({min:3})
    .trim()
    .withMessage('must contain at least 3 characters'),
    body("phoneNumber")
    .isNumeric()
    .trim()
    .withMessage('must contain only decimal values'),
    body("experience")
    .isLength({min:3})
    .trim()
    .withMessage('must contain at least 3 characters'),
    body("achievements")
    .isLength({min:3})
    .trim()
    .withMessage('must contain at least 3 characters'),
    
], addUserInfo)

router.get('/list-users', listUsers)
router.get('/user/:id', getUserById)

module.exports = router 