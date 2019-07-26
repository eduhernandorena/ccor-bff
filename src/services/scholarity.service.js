const scholarityRepository = require('../repository/scholarity.repository')
const msgWarnings = require('../genericFunction/mensagens.fiergs')

exports.getScholarityById = async (id) => {
    let result;
    if (id) {
        await scholarityRepository.getScholarityById(id)
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

exports.getScholarityByName = async (name) => {
    let result;
    if (name) {
        await scholarityRepository.getScholarityByName(name)
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

exports.deleteScholarity = async (id) => {
    let result;
    if (id) {
        await scholarityRepository.deleteScholarity(id)
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

exports.getAllScholarity = async () => {
    let result;
    await scholarityRepository.getAllScholarity()
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.getAllScholarityActive = async (active) => {
    let result;
    await scholarityRepository.getAllScholarityActive(active)
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.postScholarity = async (scholarity) => {
    let result;
    if (scholarity) {
        await scholarityRepository.postScholarity(scholarity)
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

exports.putScholarity = async (scholarity) => {
    let result;
    if (scholarity) {
        await scholarityRepository.putScholarity(scholarity)
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
