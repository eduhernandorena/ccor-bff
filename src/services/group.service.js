const groupRepository = require('../repository/group.repository')
const msgWarnings = require('../genericFunction/mensagens.fiergs')

exports.getGroupById = async (id) => {
    let result;
    if (id) {
        await groupRepository.getGroupById(id)
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

exports.deleteGroup = async (id) => {
    let result;
    if (id) {
        await groupRepository.deleteGroup(id)
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

exports.getAllGroup = async () => {
    let result;
    await groupRepository.getAllGroup()
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.postGroup = async (group) => {
    let result;
    if (group) {
        await groupRepository.postGroup(group)
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

exports.putGroup = async (group) => {
    let result;
    if (group) {
        await groupRepository.putGroup(group)
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
