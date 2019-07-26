const caeeService = require('../services/caee.service')

exports.getCaeeById = async (req, res, next) => {
    let id = req.params.id
    await caeeService.getCaeeById(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getCaeeByName = async (req, res, next) => {
    let name = req.params.name
    await caeeService.getCaeeByName(name)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getCaeeByCode = async (req, res, next) => {
    let code = req.params.code
    await caeeService.getCaeeByCode(code)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getCaeeByNameAndCode = async (req, res, next) => {
    let name = req.params.name;
    let code = req.params.code;

    await caeeService.getCaeeByNameAndCode(name, code)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.deleteCaee = async (req, res, next) => {
    let id = req.params.id
    await caeeService.deleteCaee(id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getAllCaee = async (req, res, next) => {
    await caeeService.getAllCaee()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.getAllCaeeActive = async (req, res, next) => {
    await caeeService.getAllCaeeActive()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.postCaee = async (req, res, next) => {
    let caee = req.body;
    await caeeService.postCaee(caee)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.putCaee = async (req, res, next) => {
    let caee = req.body;
    await caeeService.putCaee(caee)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}