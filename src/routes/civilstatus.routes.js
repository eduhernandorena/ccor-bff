const civilStatusControler = require('../controllers/civilstatus.controller')
let router = require('express').Router()

router.get('/civilstatus', civilStatusControler.getAllCivilStatus)
router.get('/civilstatus/:id', civilStatusControler.getCivilStatusById)
router.get('/civilstatus/active', civilStatusControler.getAllCivilStatusActive)
router.get('/civilstatus/name/:name', civilStatusControler.getCivilStatusByName)
router.put('/civilstatus', civilStatusControler.putCivilStatus)
router.delete('/civilstatus/:id', civilStatusControler.deleteCivilStatus)
router.post('/civilstatus', civilStatusControler.postCivilStatus)

module.exports = router
