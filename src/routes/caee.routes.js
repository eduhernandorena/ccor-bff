const caeeControler = require('../controllers/caee.controller')
let router = require('express').Router()


router.get('/caee', caeeControler.getAllCaee)
router.get('/caee/active', caeeControler.getAllCaeeActive)
router.get('/caee/:id', caeeControler.getCaeeById)
router.get('/caee/name/:name', caeeControler.getCaeeByName)
router.get('/caee/code/:code', caeeControler.getCaeeByCode)
router.get('/caee/codeAndName/:code/:name', caeeControler.getCaeeByNameAndCode)
router.delete('/caee/:id', caeeControler.deleteCaee)
router.put('/caee', caeeControler.putCaee)
router.post('/caee', caeeControler.postCaee)

module.exports = router
