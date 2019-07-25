const addressTypeControler = require('../controllers/addresstype.controller')
let router = require('express').Router()


router.get('/addresstype/:id', addressTypeControler.getAddressTypeById)
router.get('/addresstype', addressTypeControler.getAllAddressType)
router.post('/addresstype', addressTypeControler.postAddressType)

module.exports = router
