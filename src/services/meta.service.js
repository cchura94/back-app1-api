const axios = require("axios")

const urlBase = "https://graph.facebook.com/v20.0/106430075725576";

const httpMeta = () => {

    const api = axios.create({
        baseURL: urlBase,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer EAATZC0PN8ZCycBO8Ih9lFMG6UaV2dXAJPI4QxltnEFZAZCoE0HIjIa5YbW2wb5kfEpaSeQApUJAcio7ieZCXv0nmKSBqmmoHIHGVbU8i0Sryzg4F2WQPqAPDZAjdxridOe9dTrB5W1Gm33lyxiIvr8k179k5ZAt68ORlgEV7Q04JDseyVfHiKKFGzdnMsQ799W5XFz5bZAPSOx9A9qTWiahm70COZAH4ZD'
        }
    });

    api.interceptors.request.use(
        (config) => {
            console.log("!!! INTERCEPTOR de SOLICITUD ACTIVADO");
            return config;
        },
        (error) => {
            console.log("!!! ERROR en AXIOS");

            if(error.response.status ===401){
                console.log("ERROR 401")
            }
            return Promise.reject(error);

        }
    );

    return api;
}

module.exports = httpMeta;
