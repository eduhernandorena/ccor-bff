'use strict'
const Q = require('q');
const request = require("request")

let tool = {

    normalizePort:  (val)=>{
        const port = parseInt(val, 10);
        if(isNaN(port)){
            return val;
        }
        if(port >= 0){
            return port;
        }
        return false;
    },

    validateHttpCodes: (response) =>{
        let deffered = Q.defer();
        let message = _montaMensagem(response);
        if(message.statusCode >= 200 && message.statusCode < 400){
            return message;
        }else if(message.statusCode >= 400 && message.statusCode < 500){
            return message;
        }else if(message.statusCode >= 500){
            message.body = "Erro no servidor Contate o Administrador";
            return message;
        }
        return message;
    },

    montaAuth: (user, password)=>{
        let obj = {
            'auth': {
                'user': user,
                'pass': password,
                'sendImmediately': false
            }
        };
        return obj;
    },

    montaBody: (body) => {
      let obj = {
          'body' : body,
          json: true
      };

      return obj;
    },

    montaAuthComBody: (user, password, body)=>{
        let obj = {
            'auth': {
                'user': user,
                'pass': password,
                'sendImmediately': false
            },
            'body' : body,
            json: true
        };
        return obj;
    }, 

    getData: async function (url, path){
        let result;
        await getFunc(url, path).then(response =>{
            result = response
        });
        return result;
    },

    postData: async function(url, path, data){
        let result;
        await postFunc(url, path, data).then(response =>{
            result = response
        });
        return result;
    },

    putData: async function(url, path, id, data){
        let result;
        await putFunc(url, path, id, data).then(response =>{
            result = response
        });
        return result;
    },
    getDataWithId: async function(url, path, id){
        let result;
        await getFuncWithId(url, path, id).then(response =>{
            result = response
        });
        return result;
    },
    getDataTwoParams: async function(url, path, user, pass, param1, param2){
        let result;
        await getFuncTwoParams(url, path, user, pass, param1, param2).then(response =>{
            result = response
        });
        return result;
    },

    getWithIdAndPagination: async function(url, path, user, pass, idName, id, dataString, pageSize, page){
        let result;
        await getWithIdAndPagination(url, path, user, pass, idName, id, dataString, pageSize, page).then(response =>{
            result = response
        }).catch(error =>{
            return error;
        });

        return result;
    },

    deleteWithId: async function(url, path, id){
        let result;
        await deleteFuncWithId(url, path, id).then(response =>{
            result = response;
        })

        return result;
    }
    
};

async function getFunc(url, path){
    let defered = Q.defer();
    await request.get(url+path, (error, response)=>{
            response ? defered.resolve(tool.validateHttpCodes(response)) : defered.reject(tool.validateHttpCodes(error));
        }
    );
    return defered.promise;
}

// async function getFuncWithId(url, path, user, pass, id){
//     let defered = Q.defer();
//     await request.get(url+path+id,
//         tool.montaAuth(user, pass), (error, response)=>{
//             response ? defered.resolve(tool.validateHttpCodes(response)) : defered.reject(tool.validateHttpCodes(error));
//         }
//     );
//     return defered.promise;
// }

async function getFuncWithId(url, path, id){
    let defered = Q.defer();
    await request.get(url+path+id, (error, response)=>{
            response ? defered.resolve(tool.validateHttpCodes(response)) : defered.reject(tool.validateHttpCodes(error));
        }
    );
    return defered.promise;
}

async function getFuncTwoParams(url, path, user, pass, param1, param2){
    let defered = Q.defer();
    await request.get(url+path+param1+'/'+param2,
        tool.montaAuth(user, pass), (error, response)=>{
            response ? defered.resolve(tool.validateHttpCodes(response)) : defered.reject(tool.validateHttpCodes(error));
        }
    );
    return defered.promise;
}

async function deleteFuncWithId(url, path, id){
    let defered = Q.defer();
    await request.delete(url+path+id, (error, response)=>{
            response ? defered.resolve(tool.validateHttpCodes(response)) : defered.reject(tool.validateHttpCodes(error));
        }
    );
    return defered.promise;
}

async function getWithIdAndPagination(url, path, user, pass, idName, id, dataString, pageSize, page){
    let defered = Q.defer();
    if(dataString != null && idName != null){
        await request.get(url+path+idName+'='+id+'&'+dataString+'&pageSize='+pageSize+'&page='+page,
            tool.montaAuth(user, pass), (error, response)=>{
                response ? defered.resolve(tool.validateHttpCodes(response)) : defered.reject(tool.validateHttpCodes(error));
            }
        );
    }else if(idName != null){
        await request.get(url+path+idName+'='+id+'&pageSize='+pageSize+'&page='+page,
            tool.montaAuth(user, pass), (error, response)=>{
                response ? defered.resolve(tool.validateHttpCodes(response)) : defered.reject(tool.validateHttpCodes(error));
            }
        );
     
    }else{
        await request.get(url+path+'pageSize='+pageSize+'&page='+page,
            tool.montaAuth(user, pass), (error, response)=>{
                response ? defered.resolve(tool.validateHttpCodes(response)) : defered.reject(tool.validateHttpCodes(error));
            }
        );
    }

    return defered.promise;
}

async function postFunc(url, path, data){
    let defered = Q.defer();
    console.log(
        tool.montaBody(data)
    )
    await request.post(url+path,
        tool.montaBody(data), (error, response)=>{
            response ? defered.resolve(tool.validateHttpCodes(response)) : defered.reject(tool.validateHttpCodes(error));
        }
    );
    return defered.promise;
}

async function putFunc(url, path, data){
    let defered = Q.defer();
    await request.put(url+path,
        tool.montaBody(data), (error, response)=>{
            response ? defered.resolve(tool.validateHttpCodes(response)) : defered.reject(tool.validateHttpCodes(error));
        }
    );
    return defered.promise;
}

async function _montaMensagem(response){
    let body;
    try{
        body = await JSON.parse(response.body);
    }catch(e){
        body = await response.body;
    }

    let message = await {
        "statusCode": response.statusCode, 
        "statusMessage": response.statusMessage, 
        "body": body
    };
    return message;
}


module.exports = tool;
