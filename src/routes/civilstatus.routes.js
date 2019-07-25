const civilStatusControler = require('../controllers/civilstatus.controller')
let router = require('express').Router()

router.get('/civilstatus/:id', civilStatusControler.getCivilStatusById)
router.put('/civilstatus', civilStatusControler.putCivilStatus)
router.delete('/civilstatus/:id', civilStatusControler.deleteCivilStatus)
router.get('/civilstatus', civilStatusControler.getAllCivilStatus)
router.post('/civilstatus', civilStatusControler.postCivilStatus)

module.exports = router
