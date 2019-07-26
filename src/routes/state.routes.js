const stateControler = require('../controllers/state.controller')
let router = require('express').Router()


router.get('/state', stateControler.getAllState)
router.get('/state:id', stateControler.getStateById)
router.delete('/state/:id', stateControler.deleteState)
router.put('/state', stateControler.putState)
router.post('/state', stateControler.postState)

module.exports = router
