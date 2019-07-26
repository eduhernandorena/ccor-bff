const genericFiergs = require('../genericFunction/functionFiergs')

exports.getAllCaee = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_CAEE)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getAllCaeeActive = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_CAEE + '/active')
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getCaeeById = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_CAEE, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getCaeeByName = async (name) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_CAEE + '/name/', name)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getCaeeByCode = async (code) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_CAEE + '/code/', code)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getCaeeByNameAndCode = async (name, code) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataTwoParams(process.env.URL_LOCAL, process.env.PATH_CAEE + '/nameAndCode/', name, code)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.deleteCaee = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.deleteWithId(process.env.URL_LOCAL, process.env.PATH_CAEE, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.postCaee = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.postData(process.env.URL_LOCAL, process.env.PATH_CAEE, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.putCaee = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.putData(process.env.URL_LOCAL, process.env.PATH_CAEE, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}