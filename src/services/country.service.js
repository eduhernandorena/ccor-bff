const countryRepository = require('../repository/country.repository')
const msgWarnings = require('../genericFunction/mensagens.fiergs')

exports.getCountryById = async (id) => {
    let result;
    if (id) {
        await countryRepository.getCountryById(id)
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

exports.getCountryByName = async (name) => {
    let result;
    if (name) {
        await countryRepository.getCountryByName(name)
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

exports.deleteCountry = async (id) => {
    let result;
    if (id) {
        await countryRepository.deleteCountry(id)
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

exports.getAllCountry = async () => {
    let result;
    await countryRepository.getAllCountry()
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.getAllCountryActive = async (active) => {
    let result;
    await countryRepository.getAllCountryActive(active)
        .then(response => {
            result = response
        })
        .catch(error => {
            return error
        });
    return result;
};

exports.postCountry = async (country) => {
    let result;
    if (country) {
        await countryRepository.postCountry(country)
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

exports.putCountry = async (country) => {
    let result;
    if (country) {
        await countryRepository.putCountry(country)
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