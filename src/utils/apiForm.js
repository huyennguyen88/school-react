import axios from 'axios';
import * as Config from './../constants/Config';
import Swal from 'sweetalert2'
export default function callApiForm(endpoint,method = 'GET', body){
    return axios({
        headers: {
            'content-type': 'multipart/form-data'
        },
        method: method,
        url: `${Config.API_URL}/${endpoint}`,
        data: body,
    }).catch(err => {
        console.log(err)
        Swal.fire('Oops...', 'Something went wrong!', 'error')

    });
};