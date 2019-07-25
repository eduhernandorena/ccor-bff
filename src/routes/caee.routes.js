const caeeControler = require('../controllers/caee.controller')
let router = require('express').Router()


router.get('/', caeeControler.getAllCaee)
router.get('/:id', caeeControler.getCaeeById)
router.delete('/:id', caeeControler.deleteCaee)
router.put('/', caeeControler.putCaee)
router.post('/', caeeControler.postCaee)

module.exports = router
