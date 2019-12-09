import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link,withRouter } from 'react-router-dom'
import avatar from './../../image/avatar.jpg'
import * as actions from './../../actions'
import Swal from 'sweetalert2'
export class EditProfile extends Component {
    constructor(props){
        super(props)
        this.state={
            name: '',
            email: '',
            birthday: '',
            address: '',
            password: '',
            passwordConfirmation:''
        }
    }
    componentWillMount(){
        let token = JSON.parse(localStorage.getItem('token'))
        this.props.currentUser(token);
    }
    componentWillReceiveProps(nextProps){
        let {user} = nextProps
        this.setState({
            name: user.name,
            email: user.email,
            birthday: user.birthday,
            address: user.address,
        })
    }
    onChange = (e)=>{
        let target = e.target;
        let name = target.name;
        let value = target.value
        this.setState({
            [name] : value
        })
    }
    onSave = async (e)=>{
        e.preventDefault();
        let user = this.state
        let token = JSON.parse(localStorage.getItem('token'))
        if(user.password === '' || user.passwordConfirmation === ''){
            await this.props.updateProfile(token,user)
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'Cập nhật thông tin thành công',
                showConfirmButton: false,
                timer: 1000
            })
            this.props.history.push('/profile')
        }
        else
        {
            if(user.password !== user.passwordConfirmation){
                Swal.fire({
                    position: 'top-end',
                    icon: 'error',
                    title: 'Cập nhật thông tin thất bại',
                    showConfirmButton: false,
                    timer: 1000
                })
            }
            else{
                await this.props.updateProfile(token,user)
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Cập nhật thông tin thành công',
                    showConfirmButton: false,
                    timer: 1500
                })
                this.props.history.push('/profile')
            }
        }
    }
    render() {
        let {user}  = this.props
        var date = new Date(user.birthday)
        var birth = null
        if(!isNaN(date)){
            birth = date.toISOString().substring(0,10)
        }
        return (
            <div className="container mt-5 mb-5">
                <p className="h2">Cập nhật thông tin cá nhân</p>
                <hr />
                <div className="row">
                    <div className="col-md-3">
                        <div className="text-center">
                            <img src={avatar} className="img-fluid " alt="avatar" />
                            <h6>Chọn hình ảnh ...</h6>
                            <input type="file" className="form-control" />
                        </div>
                    </div>
                    <div className="col-md-9 personal-info">
                        <form className="form-horizontal" role="form">
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Họ tên: </label>
                                <div className="col-lg-8">
                                    <input onKeyUp={this.onChange} name="name" className="form-control" type="text" defaultValue={user.name} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-lg-3 control-label">Email:</label>
                                <div className="col-lg-8">
                                    <input onKeyUp={this.onChange} name="email" className="form-control" readOnly type="email" defaultValue={user.email} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Ngày sinh:</label>
                                <div className="col-md-8">
                                    <input onChange={this.onChange} name="birthday" className="form-control" id="birthday" type="date" defaultValue={birth} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Địa chỉ:</label>
                                <div className="col-md-8">
                                    <input onKeyUp={this.onChange} name="address" className="form-control" type="text" defaultValue={user.address} />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Mật khẩu:</label>
                                <div className="col-md-8">
                                    <input onKeyUp={this.onChange} name="password" className="form-control" type="password" defaultValue="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label">Xác nhận mật khẩu:</label>
                                <div className="col-md-8">
                                    <input onKeyUp={this.onChange} name="passwordConfirmation" className="form-control" type="password" defaultValue="" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="col-md-3 control-label" />
                                <div className="col-md-8">
                                    <input onClick={this.onSave} type="button" className="btn btn-success mr-3" defaultValue="Lưu" />
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
   return{
        currentUser: (token)=>{
            return dispatch(actions.profileApi(token))
        },
        updateProfile: (token,user)=>{
            return dispatch(actions.updateProfileApi(token,user))
        }
   }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(EditProfile))
