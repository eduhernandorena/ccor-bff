const genericFiergs = require('../genericFunction/functionFiergs')

exports.getAllLegalConstitution = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_LEGALCONSTITUTION)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getAllLegalConstitutionActive = async (active) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_LEGALCONSTITUTION + '/active', active)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getLegalConstitutionById = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_LEGALCONSTITUTION, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.deleteLegalConstitution = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.deleteWithId(process.env.URL_LOCAL, process.env.PATH_LEGALCONSTITUTION, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getLegalConstitutionByName = async (name) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_LEGALCONSTITUTION + '/name/', name)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.postLegalConstitution = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.postData(process.env.URL_LOCAL, process.env.PATH_LEGALCONSTITUTION, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.putLegalConstitution = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.putData(process.env.URL_LOCAL, process.env.PATH_LEGALCONSTITUTION, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


