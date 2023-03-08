import axios from "axios";

const MainAxios = axios.create({
    baseURL: process.env.API_URL,
});
MainAxios.interceptors.request.use(
    function (config) {
        console.log(config);
        // Do something before request is sent
        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
MainAxios.interceptors.response.use(
    function (response) {
        // console.log("RESPONSE ",response);
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
    }
);
export {MainAxios}



