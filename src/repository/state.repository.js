const genericFiergs = require('../genericFunction/functionFiergs')

exports.getAllState = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_STATE)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getStateById = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_STATE, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.deleteState = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.deleteWithId(process.env.URL_LOCAL, process.env.PATH_STATE, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.postState = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.postData(process.env.URL_LOCAL, process.env.PATH_STATE, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.putState = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.putData(process.env.URL_LOCAL, process.env.PATH_STATE, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


