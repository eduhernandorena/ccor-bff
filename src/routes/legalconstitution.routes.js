const legalConstitutionControler = require('../controllers/legalconstitution.controller')
let router = require('express').Router()

router.get('/legalconstitution', legalConstitutionControler.getAllLegalConstitution)
router.get('/legalconstitution/active', legalConstitutionControler.getAllLegalConstitutionActive)
router.get('/legalconstitution/:id', legalConstitutionControler.getLegalConstitutionById)
router.get('/legalconstitution/name/:name', legalConstitutionControler.getLegalConstitutionByName)
router.put('/legalconstitution', legalConstitutionControler.putLegalConstitution)
router.delete('/legalconstitution/:id', legalConstitutionControler.deleteLegalConstitution)
router.post('/legalconstitution', legalConstitutionControler.postLegalConstitution)

module.exports = router
