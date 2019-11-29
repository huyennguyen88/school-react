import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
export class ProfileMain extends Component {
    render() {
        let {user} = this.props
        console.log(user)
        return (
            <div>
                <div class="container mb-5 mt-5">
                    <p className="h2">
                        Profile  
                        <Link to="/profile/edit" style={{float: "right"}}>
                            <i className="fas fa-user-edit"></i>
                        </Link></p>
                    <hr />
                    <div class="row border mb-3">
                        <div class="col-3">
                            <img src="https://previews.123rf.com/images/triken/triken1608/triken160800029/61320775-male-avatar-profile-picture-default-user-avatar-guest-avatar-simply-human-head-vector-illustration-i.jpg" className="img-fluid " alt="" />
                        </div>
                        <div class="col-8">
                            <table class="table">
                                <tbody>
                                    <tr>
                                        <td>Ho ten</td>
                                        <td>{user.name}</td>
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
                                        <td >Mat khau</td>
                                        <td>********</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                    <div class="row">
                        <div class="col-6">
                            <Link to="/"><button type="button" class="btn btn-primary float-right">Back</button></Link>
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
