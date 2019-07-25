const genericFiergs = require('../genericFunction/functionFiergs')

exports.getAllGroup = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_GROUP)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getGroupById = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_GROUP, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.deleteGroup = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.deleteWithId(process.env.URL_LOCAL, process.env.PATH_GROUP, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.postGroup = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.postData(process.env.URL_LOCAL, process.env.PATH_GROUP, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.putGroup = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.putData(process.env.URL_LOCAL, process.env.PATH_GROUP, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


