const axios = require("axios")

const urlBase = "https://graph.facebook.com/v20.0/106430075725576";

const httpMeta = () => {

    const api = axios.create({
        baseURL: urlBase,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer '+process.env.META_TOKEN_API
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
