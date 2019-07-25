const genericFiergs = require('../genericFunction/functionFiergs')

exports.getAllCaee = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_CAEE)
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


