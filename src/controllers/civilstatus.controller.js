const civilStatusService = require('../services/civilstatus.service')

exports.getCivilStatusById = async (req, res, next) =>{
    let id = req.params.id
    await civilStatusService.getCivilStatusById(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getCivilStatusByName = async (req, res, next) => {
    let name = req.params.name
    await civilStatusService.getCivilStatusByName(name)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.deleteCivilStatus = async (req, res, next) =>{
    let id = req.params.id
    await civilStatusService.deleteCivilStatus(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAllCivilStatus = async (req, res, next) =>{
    await civilStatusService.getAllCivilStatus()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAllCivilStatusActive = async (req, res, next) => {
    let active = req.params.active
    await civilStatusService.getAllCivilStatusActive(active)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.postCivilStatus = async (req, res, next) =>{
    let civil_status = req.body;
    await civilStatusService.postCivilStatus(civil_status)
        .then(response =>{
            res.status(200).json(response)
            console.log("POST - ", response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.putCivilStatus = async (req, res, next) =>{
    let civil_status = req.body;
    await civilStatusService.putCivilStatus(civil_status)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}
