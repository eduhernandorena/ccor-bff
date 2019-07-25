const addressTypeControler = require('../controllers/addresstype.controller')
let router = require('express').Router()


router.get('/addresstype', addressTypeControler.getAllAddressType)
router.get('/addresstype/active', addressTypeControler.getAllAddressTypeActive)
router.get('/addresstype/:id', addressTypeControler.getAddressTypeById)
router.get('/addresstype/name/:name', addressTypeControler.getAddressTypeByName)
router.delete('/addresstype/:id', addressTypeControler.deleteAddressType)
router.put('/addresstype', addressTypeControler.putAddressType)
router.post('/addresstype', addressTypeControler.postAddressType)

module.exports = router
