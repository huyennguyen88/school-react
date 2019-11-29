import React, { Component } from 'react'
import { Link,withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as session from './../../../actions/session'
import Swal from 'sweetalert2'
class MainMenu extends Component {
    constructor(props){
        super(props)
    }
    logOut = ()=>{
        this.props.logOut();
        Swal.fire('Log out', 'log out sucess', 'success')
        this.props.history.push('/')
    }
    render() {
        return (
            <div>
                <nav style={style} className="navbar  navbar-expand-lg navbar-dark  justify-content-between">
                    <Link to="/" className="navbar-brand">
                        <img src="./image/logo.jpg" height="40" alt="logo" />
                        Home<span className="sr-only">(current)</span>
                    </Link>
                    <div className="collapse navbar-collapse my-2 my-lg-0" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to="/publicStorage" className="nav-link">
                                    <i className="fas fa-book-reader mx-2"></i>
                                    Kho tài liệu
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/" className="nav-link">
                                    <i className="fas fa-comments mx-2"></i>
                                    Chat<span className="sr-only">(current)</span></Link>
                            </li>
                        </ul>
                    </div>
                    <div >
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item">
                                <Link to="/login" className="nav-link">
                                    <i className="fas fa-sign-in-alt"></i>
                                    <span className="mx-2">Đăng nhập</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                    <Link to="/" className="nav-link">
                                    <i className="fas fa-bell mx-2"></i>
                                        Thông báo<span className="sr-only">(current)</span></Link>
                                </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <i className="fas fa-user mx-2"></i>
                                    Tài khoản
                                </a>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                    <Link to="/profile" className="dropdown-item">Trang cá nhân</Link>
                                    <div className="dropdown-divider" />
                                    <Link to="/" className="dropdown-item">
                                        <span onClick={this.logOut} className="mx-2">Đăng xuất</span>
                                        <i className="fas fa-sign-out-alt"></i>
                                    </Link>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}
const mapStateToProps = (state)=>{
    // return{
    //     user: state.session,
    //     role: state.role
    // }
}
const mapDispatchToProps = (dispatch,)=>{
    return{
        logOut: ()=>{
            return  dispatch(session.logOut())
         }
 
    }
}
const style = {
    backgroundColor: "rgb(225, 5, 93)"
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(MainMenu))

