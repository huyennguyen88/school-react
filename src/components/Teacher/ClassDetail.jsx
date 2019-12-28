import React, { Component } from 'react';
import StudentList from './StudentList'
// import StudentDiligence from './StudentDiligence';
import StudentScore from './StudentScore';
import { connect } from "react-redux";
import { withRouter, Link } from 'react-router-dom'
import * as actions from '../../actions/index'
class ClassDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        var tenLop = JSON.parse(localStorage.getItem('tenlop'));
        var roles = JSON.parse(localStorage.getItem('roles'))
        var role = roles[0];
        return (
            <div className="container my-3">
                <h3>Lớp {tenLop}</h3>
                <hr />
                <ul className="nav nav-tabs my-3" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Danh sách</a>
                    </li>
                    {
                        role.role === 1
                            ?
                            <li className="nav-item">
                                <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Điểm số</a>
                            </li>
                            :
                            ""
                    }

                </ul>
                <div className="tab-content " id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><StudentList  /></div>
                    {
                        role.role === 1
                            ?
                            <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><StudentScore /></div>
                            :
                            ""
                    }
                </div>
                <div className="row">
                    <div className="col-6">
                        <Link to="/listclass">
                            <button type="button" className="btn btn-primary float-right" >Back</button>
                        </Link>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = (dispatch) => {
    return {

    }
}
const mapDispatchToProps = (dispatch) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ClassDetail));