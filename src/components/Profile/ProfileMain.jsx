import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import avatar from './../../image/avatar.jpg'
export class ProfileMain extends Component {
    render() {
        let {user} = this.props
        return (
            <div>
                <div className="container mb-5 mt-5">
                    <p className="h2">
                        Thông tin cá nhân  
                        <Link to="/profile/edit" style={{float: "right"}}>
                           <i className="fas fa-user-edit"></i>
                        </Link>
                    </p>
                    <hr />
                    <div className="row border mb-3">
                        <div className="col-3">
                            <img src={avatar} className="img-fluid " alt="" />
                        </div>
                        <div className="col-8">
                            <table className="table">
                                <tbody>
                                    <tr>
                                        <td>Họ tên</td>
                                        <td>{user.name}</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>{user.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Ngày sinh</td>
                                        <td>{(user.birthday+"").substring(0,10)}</td>
                                    </tr>
                                    <tr>
                                        <td>Địa chỉ</td>
                                        <td>{user.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Giới tính</td>
                                        <td>Nam</td>
                                    </tr>
                                    <tr>
                                        <td >Mật khẩu</td>
                                        <td>********</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-6">
                            <Link to="/menu"><button type="button" className="btn btn-primary float-right">Quay lại</button></Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    return{
        user: state.session,
        role: state.role
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(ProfileMain)
