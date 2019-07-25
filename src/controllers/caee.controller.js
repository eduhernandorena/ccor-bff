const caeeService = require('../services/caee.service')

exports.getCaeeById = async (req, res, next) =>{
    let id = req.params.id
    await caeeService.getCaeeById(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.deleteCaee = async (req, res, next) =>{
    let id = req.params.id
    await caeeService.deleteCaee(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAllCaee = async (req, res, next) =>{
    await caeeService.getAllCaee()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.postCaee = async (req, res, next) =>{
    let caee = req.body;
    await caeeService.postCaee(caee)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.putCaee = async (req, res, next) =>{
    let caee = req.body;
    await caeeService.putCaee(caee)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

