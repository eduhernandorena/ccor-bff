const countryControler = require('../controllers/country.controller')
let router = require('express').Router()

router.get('/country', countryControler.getAllCountry)
router.get('/country/active', countryControler.getAllCountryActive)
router.get('/country/:id', countryControler.getCountryById)
router.get('/country/name/:name', countryControler.getCountryByName)
router.delete('/country/:id', countryControler.deleteCountry)
router.put('/country', countryControler.putCountry)
router.post('/country', countryControler.postCountry)

module.exports = router
