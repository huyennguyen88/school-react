import React, { Component } from 'react'
export default class ParentInfo extends Component {
    render() {
       
        return (
            <>
            <h4 class="mb-3"><strong>Thông tin cá nhân: </strong></h4>
            <table className="table table-borderless table-dark" style={{'borderRadius':'10px','boxShadow':'1px 2px 5px black'}}>
                <tbody>
                    <tr>
                        <td><h5><strong>Họ tên :</strong></h5></td>
                        <td>User Name</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Email :</strong></h5></td>
                        <td>Email</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Ngày sinh :</strong></h5></td>
                        <td>Ngày sinh</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Địa chỉ :</strong></h5></td>
                        <td></td>
                    </tr>
                    <tr>
                        <td><h5><strong>Giới tính :</strong></h5></td>
                        <td>Nam</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Mật khẩu :</strong></h5></td>
                        <td>********</td>
                    </tr>
                </tbody>
            </table>
            </>
        )
    }
}
