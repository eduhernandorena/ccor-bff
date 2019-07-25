const ufRepository = require('../repository/uf.repository')
const msgWarnings = require('../genericFunction/mensagens.fiergs')

exports.getUfById = async (id) => {
    let result;
    if (id) {
        await ufRepository.getUfById(id)
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

exports.deleteUf = async (id) => {
    let result;
    if (id) {
        await ufRepository.deleteUf(id)
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

exports.getAllUf = async () => {
    let result;
    await ufRepository.getAllUf()
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.postUf = async (uf) => {
    let result;
    if (uf) {
        await ufRepository.postUf(uf)
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

exports.putUf = async (uf) => {
    let result;
    if (uf) {
        await ufRepository.putUf(uf)
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
