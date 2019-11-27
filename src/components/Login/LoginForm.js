import React, { Component } from 'react'
import { Link } from "react-router-dom";
class LoginForm extends Component {
    render() {
        return (
            <div className="Login  mt-4">
                <div className="card mx-auto text-center mb-3" style={style.card} >
                    <div className="card-header bg-danger h3 text-light">Đăng nhập</div>
                    <div className="card-body">
                        <form>
                            <fieldset className="form-group text-left">
                                <div className="row">
                                    <div className="col-sm-10">
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" defaultValue="option1" defaultChecked />
                                            <label className="form-check-label" htmlFor="gridRadios1">
                                                Học sinh
                                            </label>
                                        </div>
                                        <div className="form-check">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios2" defaultValue="option2" />
                                            <label className="form-check-label" htmlFor="gridRadios2">
                                                Giáo viên
                                            </label>
                                        </div>
                                        <div className="form-check disabled">
                                            <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios3" defaultValue="option3"/>
                                            <label className="form-check-label" htmlFor="gridRadios3">
                                                Phụ huynh
                                            </label>
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-user" /> </span>
                                    </div>
                                    <input onKeyUp={this.onChange} name="email" className="form-control" placeholder="Nhập mã số" type="number" />
                                </div>
                            </div>
                            <div className="form-group">
                                <div className="input-group">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text"> <i className="fa fa-lock" /> </span>
                                    </div>
                                    <input onKeyUp={this.onChange} name="password" className="form-control" placeholder="Nhập mật khẩu" type="password" />
                                </div>
                            </div>
                            <div className="form-group ">
                                <Link to="/logged"><button onClick={this.onSubmit} type="submit" className="btn btn-outline-danger" >Ok</button></Link>
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
export default LoginForm