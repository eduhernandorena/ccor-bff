const groupControler = require('../controllers/group.controller')
let router = require('express').Router()


router.get('/group', groupControler.getAllGroup)
router.get('/group/:id', groupControler.getGroupById)
router.delete('/group/:id', groupControler.deleteGroup)
router.put('/group', groupControler.putGroup)
router.post('/group', groupControler.postGroup)

module.exports = router
