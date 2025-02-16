import axios from 'axios';

const BASE_URL = 'https://api.wrapto.app/';

export const BASE_INSTANCE = axios.create({
    baseURL: BASE_URL,
    timeout: 15000,
});
BASE_INSTANCE.interceptors.request.use(
    function req(config) {
        // Do something before request is sent
        return config;
    },
    function err(error) {
        // Do something with request error
        if (error.response?.data?.error === (500) || error.response?.data?.error ===  '500')
            console.error(error.response?.data?.error);
        return Promise.reject(error);
    },
);