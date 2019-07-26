const addressTypeService = require('../services/addresstype.service')

exports.getAddressTypeById = async (req, res, next) =>{
    let id = req.params.id
    await addressTypeService.getAddressTypeById(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAddressTypeByName = async (req, res, next) => {
    let name = req.params.name
    await addressTypeService.getAddressTypeByName(name)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.deleteAddressType = async (req, res, next) =>{
    let id = req.params.id
    console.log('choegou')
    await addressTypeService.deleteAddressType(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAllAddressType = async (req, res, next) =>{
    await addressTypeService.getAllAddressType()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAllAddressTypeActive = async (req, res, next) => {
    await addressTypeService.getAllAddressTypeActive()
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.postAddressType = async (req, res, next) =>{
    let address_type = req.body;
    await addressTypeService.postAddressType(address_type)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.putAddressType = async (req, res, next) =>{
    let address_type = req.body;
    await addressTypeService.putAddressType(address_type)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

