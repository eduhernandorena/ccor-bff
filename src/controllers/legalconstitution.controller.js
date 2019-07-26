const legalConstitution = require('../services/legalconstitution.service')

exports.getLegalConstitutionById = async (req, res, next) =>{
    let id = req.params.id
    await legalConstitution.getLegalConstitutionById(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getLegalConstitutionByName = async (req, res, next) => {
    let name = req.params.name
    await legalConstitution.getLegalConstitutionByName(name)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.deleteLegalConstitution = async (req, res, next) =>{
    let id = req.params.id
    await legalConstitution.deleteLegalConstitution(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAllLegalConstitution = async (req, res, next) =>{
    await legalConstitution.getAllLegalConstitution()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAllLegalConstitutionActive = async (req, res, next) => {
    let active = req.params.active
    await legalConstitution.getAllLegalConstitutionActive(active)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            console.log(error)
        })
}

exports.postLegalConstitution = async (req, res, next) =>{
    let legal_constitution = req.body;
    await legalConstitution.postLegalConstitution(legal_constitution)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.putLegalConstitution = async (req, res, next) =>{
    let legal_constitution = req.body;
    await legalConstitution.putLegalConstitution(legal_constitution)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}
