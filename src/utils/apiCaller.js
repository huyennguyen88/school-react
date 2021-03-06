import axios from 'axios';
import * as Config from './../constants/Config';
import Swal from 'sweetalert2'
export default function callApi(endpoint,method = 'GET', body){
    return axios({
        headers: {
            'accept': 'application/json',
            'accept-language': 'en_US',
        },
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
    }).catch(err => {
        console.log(err)

    });
};

