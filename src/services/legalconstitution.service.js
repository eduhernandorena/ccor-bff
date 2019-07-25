const legalConstitutionRepository = require('../repository/legalconstitution.repository')
const msgWarnings = require('../genericFunction/mensagens.fiergs')

exports.getLegalConstitutionById = async (id) => {
    let result;
    if (id) {
        await legalConstitutionRepository.getLegalConstitutionById(id)
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

exports.deleteLegalConstitution = async (id) => {
    let result;
    if (id) {
        await legalConstitutionRepository.deleteLegalConstitution(id)
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

exports.getAllLegalConstitution = async () => {
    let result;
    await legalConstitutionRepository.getAllLegalConstitution()
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.postLegalConstitution = async (legalConstitution) => {
    let result;
    if (legalConstitution) {
        await legalConstitutionRepository.postLegalConstitution(legalConstitution)
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

exports.putLegalConstitution = async (legalConstitution) => {
    let result;
    if (legalConstitution) {
        await legalConstitutionRepository.putLegalConstitution(legalConstitution)
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
