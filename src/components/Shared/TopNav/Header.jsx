import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import * as actions from './../../../actions/index'
import Swal from 'sweetalert2'
import { isEmpty } from 'lodash'
import BigImage from "../../Homepage/BigImage";
// import logo from './../../../image/logo.jpg'
class Header extends Component {
    constructor(props) {
        super(props)
    }
    logOut = () => {
        this.props.logOut();
        Swal.fire('Log out', 'log out sucess', 'success')
        this.props.history.push('/')
    }
    render() {
        var { user, role } = this.props
        var roles = JSON.parse(localStorage.getItem('roles'))
        if(roles)
        var menu = roles.map((r,i)=>{
            switch(r.role){
                case 1:
                    return <Link to="/profile" className="dropdown-item" key={i}><i className="fas fa-address-card"></i> Trang cá nhân</Link>
                case 2:
                    return <Link to="/parent" className="dropdown-item" key={i}><i className="fas fa-address-card"></i> Trang cá nhân</Link>
                case 3:
                    return <Link to="/student" className="dropdown-item" key={i}><i className="fas fa-address-card"></i> Trang cá nhân</Link>
                default: 
                    return
            }
        })
        return (
            <div className="header">
                <header  style={style}>
                    <nav id="navbar-light-menu" className="navbar navbar-expand-lg navbar-light bg-gradient-secondary pt-3">
                        <h1>
                            <Link to="/" className="navbar-brand">
                            <i className="fas fa-school"></i> School
                                    <span>Education</span>
                            </Link>
                        </h1>
                        <button
                            className="navbar-toggler ml-md-auto"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarSupportedContent"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item active mr-4">
                                    <Link to="/" className="nav-link">
                                    <i className="fas fa-home"></i> Trang Chủ
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <li className="nav-item mr-4">
                                    <Link to="/" className="nav-link">
                                    <i className="fas fa-info"></i> Về Chúng Tôi
                                        <span className="sr-only">(current)</span>
                                    </Link>
                                </li>
                                <Link to="/" className="nav-link mr-4">
                                    <i className="fas fa-address-book"></i> Liên Lạc
                                    <span className="sr-only">(current)</span>
                                </Link>
                                {
                                    isEmpty(user)
                                        ?
                                        <li className="nav-item mr-4">
                                            <Link to="/login" className="nav-link">
                                                Đăng nhập
                                        <span className="sr-only">(current)</span>
                                            </Link>
                                        </li>
                                        :
                                        <>
                                            <li className="nav-item mr-4">
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
                                                    {menu}
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
                    </nav>
                </header>
            </div>
        );
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
const style = {
    backgroundColor: "rgb(205, 163, 152)"
    // rgb(205, 163, 152)
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header))

