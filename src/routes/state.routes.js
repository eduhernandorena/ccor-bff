const stateControler = require('../controllers/state.controller')
let router = require('express').Router()


router.get('/state', stateControler.getAllState)
router.get('/state/active', stateControler.getAllStateActive)
router.get('/state/:id', stateControler.getStateById)
router.get('/state/nameAndCountry/:name/:countryId', stateControler.getStateByNameAndCountry)
router.get('/state/nameAndCountry/:name/', stateControler.getStateByName)
router.get('/state/nameAndCountry//:countryId', stateControler.getStateByCountry)
router.get('/state/name/:name', stateControler.getStateByName)
router.get('/state/country/:countryId', stateControler.getStateByCountry)
router.delete('/state/:id', stateControler.deleteState)
router.put('/state', stateControler.putState)
router.post('/state', stateControler.postState)

module.exports = router