const caeeRepository = require('../repository/caee.repository')
const msgWarnings = require('../genericFunction/mensagens.fiergs')

exports.getCaeeById = async (id) => {
    let result;
    if (id) {
        await caeeRepository.getCaeeById(id)
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

exports.deleteCaee = async (id) => {
    let result;
    if (id) {
        await caeeRepository.deleteCaee(id)
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

exports.getAllCaee = async () => {
    let result;
    await caeeRepository.getAllCaee()
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.postCaee = async (caee) => {
    let result;
    if (caee) {
        await caeeRepository.postCaee(caee)
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

exports.putCaee = async (caee) => {
    let result;
    if (caee) {
        await caeeRepository.putCaee(caee)
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
