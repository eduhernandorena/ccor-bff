const ufControler = require('../controllers/uf.controller')
let router = require('express').Router()


router.get('/uf', ufControler.getAllUf)
router.get('/uf:id', ufControler.getUfById)
router.delete('/uf/:id', ufControler.deleteUf)
router.put('/uf', ufControler.putUf)
router.post('/uf', ufControler.postUf)

module.exports = router
