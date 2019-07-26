const civilStatusRepository = require('../repository/civilstatus.repository')
const msgWarnings = require('../genericFunction/mensagens.fiergs')

exports.getCivilStatusById = async (id) => {
    let result;
    if (id) {
        await civilStatusRepository.getCivilStatusById(id)
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

exports.getCivilStatusByName = async (name) => {
    let result;
    if (name) {
        await civilStatusRepository.getCivilStatusByName(name)
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

exports.deleteCivilStatus = async (id) => {
    let result;
    if (id) {
        await civilStatusRepository.deleteCivilStatus(id)
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

exports.getAllCivilStatus = async () => {
    let result;
    await civilStatusRepository.getAllCivilStatus()
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.getAllCivilStatusActive = async (active) => {
    let result;
    await civilStatusRepository.getAllCivilStatusActive(active)
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.postCivilStatus = async (civilStatus) => {
    let result;
    if (civilStatus) {
        await civilStatusRepository.postCivilStatus(civilStatus)
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

exports.putCivilStatus = async (civilStatus) => {
    let result;
    if (civilStatus) {
        await civilStatusRepository.putCivilStatus(civilStatus)
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
