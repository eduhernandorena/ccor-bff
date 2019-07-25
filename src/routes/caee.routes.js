const caeeControler = require('../controllers/caee.controller')
let router = require('express').Router()


router.get('/group', caeeControler.getAllCaee)
router.get('/group/:id', caeeControler.getCaeeById)
router.delete('/group/:id', caeeControler.deleteCaee)
router.put('/group', caeeControler.putCaee)
router.post('/group', caeeControler.postCaee)

module.exports = router
