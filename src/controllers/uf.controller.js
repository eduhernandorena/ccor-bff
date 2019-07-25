const ufService = require('../services/uf.service')

exports.getUfById = async (req, res, next) =>{
    let id = req.params.id
    await ufService.getUfById(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.deleteUf = async (req, res, next) =>{
    let id = req.params.id
    await ufService.deleteUf(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAllUf = async (req, res, next) =>{
    await ufService.getAllUf()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.postUf = async (req, res, next) =>{
    let uf = req.body;
    await ufService.postUf(uf)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.putUf = async (req, res, next) =>{
    let uf = req.body;
    await ufService.putUf(uf)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

