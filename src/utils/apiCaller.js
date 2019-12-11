import axios from 'axios';
import * as Config from '../constants/Config';
export default function callApi(endpoint, method = 'GET', body) {
    return axios({
        headers:{'Content-Type':'application/x-www-form-urlencoded'},
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
    }).catch((err) => {
        console.log(err);
    })
};