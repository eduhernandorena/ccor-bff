const groupControler = require('../controllers/group.controller')
let router = require('express').Router()


router.get('/', groupControler.getAllGroup)
router.get('/:id', groupControler.getGroupById)
router.delete('/:id', groupControler.deleteGroup)
router.put('/', groupControler.putGroup)
router.post('/', groupControler.postGroup)

module.exports = router
