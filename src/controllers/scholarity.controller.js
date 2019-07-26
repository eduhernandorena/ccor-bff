const scholarityService = require('../services/scholarity.service')

exports.getScholarityById = async (req, res, next) =>{
    let id = req.params.id
    await scholarityService.getScholarityById(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getScholarityByName = async (req, res, next) => {
    let name = req.params.name
    await scholarityService.getScholarityByName(name)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.deleteScholarity = async (req, res, next) =>{
    let id = req.params.id
    console.log('choegou')
    await scholarityService.deleteScholarity(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAllScholarity = async (req, res, next) =>{
    await scholarityService.getAllScholarity()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAllScholarityActive = async (req, res, next) => {
    let active = req.params.active
    await scholarityService.getAllScholarityActive(active)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.postScholarity = async (req, res, next) =>{
    let scholarity = req.body;
    await scholarityService.postScholarity(scholarity)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.putScholarity = async (req, res, next) =>{
    let scholarity = req.body;
    await scholarityService.putScholarity(scholarity)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

