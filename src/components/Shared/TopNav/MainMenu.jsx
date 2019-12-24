import React, { Component } from 'react'
import {withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './../../../actions/index'
import Swal from 'sweetalert2'
import Header from './Header';
class MainMenu extends Component {
    logOut = () => {
        this.props.logOut();
        Swal.fire('Log out', 'log out sucess', 'success')
        this.props.history.push('/')
    }
    render() {
        // var { user, role } = this.props
        return (
            <div>
                <Header/>
                {/* <nav style={style} className="navbar  navbar-expand-lg navbar-dark  mb-0">

                    <Link to="/" className="navbar-brand">
                        <img src={logo} height="40" alt="logo" />
                        Home<span className="sr-only">(current)</span>
                    </Link>
                    <div className="collapse navbar-collapse my-2 my-lg-0" id="navbarTogglerDemo02">
                        {
                            !isEmpty(user) ?
                                <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                                    <li className="nav-item">
                                        <Link to="/publicStorage" className="nav-link">
                                            <i className="fas fa-book-reader mx-2"></i>
                                            Kho tài liệu
                                    <span className="sr-only">(current)</span>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/chat" className="nav-link">
                                            <i className="fas fa-comments mx-2"></i>
                                            Chat<span className="sr-only">(current)</span></Link>
                                    </li>
                                </ul>
                                : 
                                ""
                        }
                    </div>
                    <div >
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            {
                                isEmpty(user) ?
                                    <li className="nav-item">
                                        <Link to="/login" className="nav-link">
                                            <i className="fas fa-sign-in-alt"></i>
                                            <span className="mx-2">Đăng nhập</span>
                                        </Link>
                                    </li>
                                    :
                                    ""
                            }
                            {
                                isEmpty(user) ?
                                    ""
                                    :
                                    <>
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link">
                                                <span className=""><i className="fas fa-bell mx-2"></i> Thông báo</span>
                                            </Link>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fas fa-user mx-2"></i>
                                                Tài khoản
                                            </a>
                                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                                <Link to="/profile" className="dropdown-item"><i className="fas fa-address-card"></i> Trang cá nhân</Link>
                                                <div className="dropdown-divider" />
                                                <a onClick={this.logOut} className="dropdown-item">
                                                    <span className="mx-2"> <i className="fas fa-sign-out-alt"></i> Đăng xuất</span>
                                                </a>
                                            </div>
                                        </li>
                                    </>
                            }
                        </ul>
                    </div>
                        </nav>*/}
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
const mapDispatchToProps = (dispatch, ) => {
    return {
        logOut: () => {
            return dispatch(actions.logOut())
        }

    }
}
// const style = {
//     backgroundColor: "rgb(225, 5, 93)"
// }
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(MainMenu))

