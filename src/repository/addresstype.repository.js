const genericFiergs = require('../genericFunction/functionFiergs')

exports.getAllAddressType = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_ADDRESSTYPE)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getAllAddressTypeActive = async () => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getData(process.env.URL_LOCAL, process.env.PATH_ADDRESSTYPE + '/active')
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getAddressTypeById = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_ADDRESSTYPE, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.getAddressTypeByName = async (name) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.getDataWithId(process.env.URL_LOCAL, process.env.PATH_ADDRESSTYPE + '/name/', name)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.deleteAddressType = async (id) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.deleteWithId(process.env.URL_LOCAL, process.env.PATH_ADDRESSTYPE, id)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.postAddressType = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.postData(process.env.URL_LOCAL, process.env.PATH_ADDRESSTYPE, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}

exports.putAddressType = async (data) => {
    return new Promise(async (resolve, reject) => {
        await genericFiergs.putData(process.env.URL_LOCAL, process.env.PATH_ADDRESSTYPE, data)
            .then(response => resolve(response))
            .catch(error => reject(error))
    })
}


