const legalConstitutionControler = require('../controllers/legalconstitution.controller')
let router = require('express').Router()

router.get('/legalconstitution/:id', legalConstitutionControler.getLegalConstitutionById)
router.put('/legalconstitution', legalConstitutionControler.putLegalConstitution)
router.delete('/legalconstitution/:id', legalConstitutionControler.deleteLegalConstitution)
router.get('/legalconstitution', legalConstitutionControler.getAllLegalConstitution)
router.post('/legalconstitution', legalConstitutionControler.postLegalConstitution)

module.exports = router
