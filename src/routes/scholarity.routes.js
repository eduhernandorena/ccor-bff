const scholarityControler = require('../controllers/scholarity.controller')
let router = require('express').Router()


router.get('/scholarity', scholarityControler.getAllScholarity)
router.get('/scholarity/active', scholarityControler.getAllScholarityActive)
router.get('/scholarity/:id', scholarityControler.getScholarityById)
router.get('/scholarity/name/:name', scholarityControler.getScholarityByName)
router.delete('/scholarity/:id', scholarityControler.deleteScholarity)
router.put('/scholarity', scholarityControler.putScholarity)
router.post('/scholarity', scholarityControler.postScholarity)

module.exports = router
