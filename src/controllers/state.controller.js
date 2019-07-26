const stateService = require('../services/state.service')

exports.getStateById = async (req, res, next) => {
    let id = req.params.id
    await stateService.getStateById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getAllStateActive = async (req, res, next) => {
    await stateService.getAllStateActive()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getStateByNameAndCountry = async (req, res, next) => {
    let name = req.params.name;
    let countryId = req.params.countryId;
    await stateService.getStateByNameAndCountry(name, countryId)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getStateByName = async (req, res, next) => {
    let name = req.params.name
    console.log(name);
    await stateService.getStateByName(name)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getStateByCountry = async (req, res, next) => {
    let countryId = req.params.countryId
    await stateService.getStateByCountry(countryId)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.deleteState = async (req, res, next) => {
    let id = req.params.id
    await stateService.deleteState(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getAllState = async (req, res, next) => {
    await stateService.getAllState()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.postState = async (req, res, next) => {
    let state = req.body;
    await stateService.postState(state)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.putState = async (req, res, next) => {
    let state = req.body;
    await stateService.putState(state)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}