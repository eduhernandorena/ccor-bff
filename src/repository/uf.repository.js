const genericFiergs = require('../genericFunction/functionFiergs')

exports.getAllUf = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getUfById = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.deleteUf = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.deleteWithId(process.env.URL_LOCAL, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.postUf = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.postData(process.env.URL_LOCAL, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.putUf = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.putData(process.env.URL_LOCAL, process.env.PATH_GROUP, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


