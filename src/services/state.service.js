const stateRepository = require('../repository/state.repository')
const msgWarnings = require('../genericFunction/mensagens.fiergs')

exports.getStateById = async (id) => {
    let result;
    if (id) {
        await stateRepository.getStateById(id)
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

exports.deleteState = async (id) => {
    let result;
    if (id) {
        await stateRepository.deleteState(id)
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

exports.getAllState = async () => {
    let result;
    await stateRepository.getAllState()
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.postState = async (state) => {
    let result;
    if (state) {
        await stateRepository.postState(state)
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

exports.putState = async (state) => {
    let result;
    if (state) {
        await stateRepository.putState(state)
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
