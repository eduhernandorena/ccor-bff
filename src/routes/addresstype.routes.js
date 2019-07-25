const addressTypeControler = require('../controllers/addresstype.controller')
let router = require('express').Router()


router.get('/', addressTypeControler.getAllAddressType)
router.get('/:id', addressTypeControler.getAddressTypeById)
router.delete('/:id', addressTypeControler.deleteAddressType)
router.put('/', addressTypeControler.putAddressType)
router.post('/', addressTypeControler.postAddressType)

module.exports = router
