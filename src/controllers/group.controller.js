const groupService = require('../services/group.service')

exports.getGroupById = async (req, res, next) =>{
    let id = req.params.id
    await groupService.getGroupById(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.deleteGroup = async (req, res, next) =>{
    let id = req.params.id
    await groupService.deleteGroup(id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.getAllGroup = async (req, res, next) =>{
    await groupService.getAllGroup()
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.postGroup = async (req, res, next) =>{
    let group = req.body;
    await groupService.postGroup(group)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

exports.putGroup = async (req, res, next) =>{
    let group = req.body;
    await groupService.putGroup(group)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error =>{
            console.log(error)
        })
}

