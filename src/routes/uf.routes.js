const ufControler = require('../controllers/uf.controller')
let router = require('express').Router()


router.get('/', ufControler.getAllUf)
router.get('/:id', ufControler.getUfById)
router.delete('/:id', ufControler.deleteUf)
router.put('/', ufControler.putUf)
router.post('/', ufControler.postUf)

module.exports = router
