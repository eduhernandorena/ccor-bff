const genericFiergs = require('../genericFunction/functionFiergs')

exports.getAllState = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_STATE)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getAllStateActive = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_STATE + "active")
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

exports.getStateByNameAndCountry = async (name, countryId) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataTwoParams(process.env.URL_LOCAL, process.env.PATH_STATE + "nameAndCountry/", name, countryId)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getStateByName = async (name) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_STATE + "name/", name)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getStateByCountry = async (countryId) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_STATE + "country/", countryId)
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