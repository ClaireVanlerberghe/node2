const { Router } = require('express')
const authCtrl = require('../controller/authCtrl')
const {verifyJWTToken, verifyUser} = require('../middleware/middleware')


const router = Router()



router.get('/register', authCtrl.get_signup)
router.post('/register', authCtrl.post_signup)


router.get('/login', authCtrl.get_login)
router.post('/login', authCtrl.post_login)

router.get('/dashboard', verifyJWTToken, verifyUser, (req, res) => {
    res.render('dashboard')
})
router.get('/', verifyJWTToken, verifyUser,(req, res) => {
    res.render('home')
})
router.get('/team', verifyJWTToken, verifyUser,(req, res) => {
    res.render('team')
})
router.get('/japcars', verifyJWTToken, verifyUser,(req, res) => {
    res.render('japcars')
})
router.get('/profile', verifyJWTToken, verifyUser, (req, res) => {
    res.render('profile')
})
router.get('/usacars', verifyJWTToken, verifyUser,(req, res) => {
    res.render('usacars')
})

router.get("/logout", authCtrl.get_logout)


module.exports = router