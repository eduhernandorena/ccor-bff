const addressTypeRepository = require('../repository/addresstype.repository')
const msgWarnings = require('../genericFunction/mensagens.fiergs')

exports.getAddressTypeById = async (id) => {
    let result;
    if (id) {
        await addressTypeRepository.getAddressTypeById(id)
            .then(response => {
                result = response
            })
            .catch(error => {
                return error
            })
    } else {
        result = msgWarnings.mensagemDadosIncompletos
    }
    return result

};

exports.getAddressTypeByName = async (name) => {
    let result;
    if (name) {
        await addressTypeRepository.getAddressTypeByName(name)
            .then(response => {
                result = response
            })
            .catch(error => {
                return error
            })
    } else {
        result = msgWarnings.mensagemDadosIncompletos
    }
    return result

};

exports.deleteAddressType = async (id) => {
    let result;
    if (id) {
        await addressTypeRepository.deleteAddressType(id)
            .then(response => {
                result = response
                console.log(result)
            })
            .catch(error => {
                return error
            })
    } else {
        result = msgWarnings.mensagemDadosIncompletos
    }
    return result

};

exports.getAllAddressType = async () => {
    let result;
    await addressTypeRepository.getAllAddressType()
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.getAllAddressTypeActive = async (active) => {
    let result;
    await addressTypeRepository.getAllAddressTypeActive(active)
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.postAddressType = async (addressType) => {
    let result;
    if (addressType) {
        await addressTypeRepository.postAddressType(addressType)
            .then(response => {
                result = response
            })
            .catch(error => {
                return error
            })
    } else {
        result = msgWarnings.mensagemDadosIncompletos
    }
    return result

};

exports.putAddressType = async (addressType) => {
    let result;
    if (addressType) {
        await addressTypeRepository.putAddressType(addressType)
            .then(response => {
                result = response
            })
            .catch(error => {
                return error
            })
    } else {
        result = msgWarnings.mensagemDadosIncompletos
    }
    return result

};
