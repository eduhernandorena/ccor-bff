const genericFiergs = require('../genericFunction/functionFiergs')

exports.getAllScholarity = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_SCHOLARITY)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getAllScholarityActive = async (active) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_SCHOLARITY + '/active', active)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getScholarityById = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_SCHOLARITY, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getScholarityByName = async (name) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_SCHOLARITY + '/name/', name)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.deleteScholarity = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.deleteWithId(process.env.URL_LOCAL, process.env.PATH_SCHOLARITY, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.postScholarity = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.postData(process.env.URL_LOCAL, process.env.PATH_SCHOLARITY, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.putScholarity = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.putData(process.env.URL_LOCAL, process.env.PATH_SCHOLARITY, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


