const genericFiergs = require('../genericFunction/functionFiergs')

exports.getAllCivilStatus = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_CIVILSTATUS)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getCivilStatusById = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_CIVILSTATUS, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.deleteCivilStatus = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.deleteWithId(process.env.URL_LOCAL, process.env.PATH_CIVILSTATUS, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.postCivilStatus = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.postData(process.env.URL_LOCAL, process.env.PATH_CIVILSTATUS, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.putCivilStatus = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.putData(process.env.URL_LOCAL, process.env.PATH_CIVILSTATUS, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


