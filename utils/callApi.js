import axios from 'axios';
export default (method="GET", url, data, headers = {}, params = {}) => {
    return axios({
        method,
        url,
        data,
        headers,
        params
    });
}