const genericFiergs = require('../genericFunction/functionFiergs')

exports.getAllCountry = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_COUNTRY)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getAllCountryActive = async (active) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_COUNTRY + '/active', active)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getCountryById = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_COUNTRY, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getCountryByName = async (name) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_COUNTRY + '/name/', name)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.deleteCountry = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.deleteWithId(process.env.URL_LOCAL, process.env.PATH_COUNTRY, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.postCountry = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.postData(process.env.URL_LOCAL, process.env.PATH_COUNTRY, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.putCountry = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.putData(process.env.URL_LOCAL, process.env.PATH_COUNTRY, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


