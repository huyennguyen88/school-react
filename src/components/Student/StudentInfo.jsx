import React, { Component } from 'react'
import { connect } from "react-redux";
import * as actions from '../../actions/index'
class StudentInfo extends Component {
    render() {
        let {user}=this.props
        return (
            <>
            <h4 className="mb-3"><strong>Thông tin học sinh: </strong></h4>
            <table className="table table-borderless table-white" style={{'borderRadius':'10px','boxShadow':'1px 2px 5px black'}}>
                <tbody>
                    <tr>
                        <td><h5><strong>Họ tên :</strong></h5></td>
                        <td>{user.name}</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Email :</strong></h5></td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Ngày sinh :</strong></h5></td>
                        <td>{(user.birthday+"").substring(0,10)}</td>
                    </tr>
                    <tr>
                        <td><h5><strong>Địa chỉ :</strong></h5></td>
                        <td>{user.address}</td>
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
const mapStateToProps = (state)=>{
    return{
       user: state.session,
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        
    }
}
export default (connect)(mapStateToProps,mapDispatchToProps)(StudentInfo)
