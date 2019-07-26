const countryService = require('../services/country.service')

exports.getCountryById = async (req, res, next) => {
    let id = req.params.id
    await countryService.getCountryById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getCountryByName = async (req, res, next) => {
    let name = req.params.name
    await countryService.getCountryByName(name)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.deleteCountry = async (req, res, next) => {
    let id = req.params.id
    console.log('choegou')
    await countryService.deleteCountry(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getAllCountry = async (req, res, next) => {
    await countryService.getAllCountry()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getAllCountryActive = async (req, res, next) => {
    let active = req.params.active
    await countryService.getAllCountryActive(active)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.postCountry = async (req, res, next) => {
    let address_type = req.body;
    await countryService.postCountry(address_type)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.putCountry = async (req, res, next) => {
    let address_type = req.body;
    await countryService.putCountry(address_type)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}