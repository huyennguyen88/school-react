import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from '../../actions'
import Swal from 'sweetalert2'
import {isEmpty} from 'lodash'
import { withRouter } from "react-router-dom";
class LoginForm extends Component {
    constructor(props){
        super(props)
        this.state = {
            role: 0,
            email: "",
            password: ""
        }
    }
    componentWillMount(){
        var token = JSON.parse(localStorage.getItem('token'))
        if(!isEmpty(token)){
            this.props.history.push("/notfound")
        }
    }
    changeForm = (e)=>{
        let target = e.target;
        let name = target.name;
        let value = target.value
        this.setState({
            [name]: value
        })
        
    }
    onSubmit = async (e)=>{
        e.preventDefault();

        let userLogin  = this.state
        await this.props.logIn(userLogin)
        let {user,role} = this.props
        if(isEmpty(user) || isEmpty(role)){
            Swal.fire('Login', 'invalid email or password or role','error')
        }
        else
        {
            Swal.fire('Login', 'login sucess', 'success')
            this.props.history.push('/')
        }
    }   
    render() {
        return (
            <div className="Login mt-4" style={{margin: "5% 36%"}}>
                <div className="card mx-auto text-center mb-3" style={style.card} >
                    <div className="card-header bg-danger h3 text-light">Đăng nhập</div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    </div>
                                    <input onChange={this.changeForm} name="email" className="form-control" placeholder="Nhập email" type="email" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                    </div>
                                    <input onChange={this.changeForm} name="password" className="form-control" placeholder="Nhập mật khẩu" type="password" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <button onClick={this.onSubmit} type="submit" className="btn btn-outline-danger" >Ok</button>
                                <button type="reset" className="btn btn-outline-danger mx-2">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}
const style = {
    card: {
        width: "25rem"
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
        logIn: (user)=>{
           return  dispatch(actions.logInApi(user))
        }

    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(LoginForm))