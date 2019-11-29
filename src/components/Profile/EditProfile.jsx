import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import avatar from './../../image/avatar.jpg'
export class EditProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            birthday: null,
            address: '',
            password: '',
            passwordConfirmation:''
        }
    }
    render() {
        let { user } = this.props
        let date = new Date(user.birthday)
        var birthday =  (date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()).toString()
        console.log(birthday)
        return (
            <div className="container mt-5 mb-5">
                <p className="h2">Cập nhật thông tin cá nhân</p>
                <hr />
                <div className="row">
                    {/* left column */}
                    <div className="col-md-3">
                        <div className="text-center">
                            <img src={avatar} className="img-fluid " alt="avatar" />
                            <h6>Chọn hình ảnh ...</h6>
                            <input type="file" className="form-control" />
                        </div>
                    </div>
                    {/* edit form column */}
                    <div className="col-md-9 personal-info">
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Họ tên: </label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" defaultValue={user.name} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Email:</label>
                                <div className="col-lg-8">
                                    <input className="form-control" type="text" defaultValue={user.email} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Ngày sinh:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="date" defaultValue={birthday} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Địa chỉ:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="text" defaultValue={user.address} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Mật khẩu:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="password" defaultValue="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Xác nhận mật khẩu:</label>
                                <div className="col-md-8">
                                    <input className="form-control" type="password" defaultValue="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label" />
                                <div className="col-md-8">
                                    <input type="button" className="btn btn-success mr-3" defaultValue="Lưu" />
                                    <Link to="/profile"><input type="button" className="btn btn-primary mr-3" defaultValue="Quay lại"/></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const mapStateToProps = (state) => {
    return {
        user: state.session,
        role: state.role
    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(EditProfile)
