import React, { Component } from 'react';
import StudentList from './StudentList'
import StudentDiligence from './StudentDiligence';
import StudentScore from './StudentScore';
import { connect } from "react-redux";
import * as actions from '../../actions/index'
class ClassDetail extends Component {
    constructor(props) {
        super(props)
        this.props.getStudents()
    }
    render() {
        return (
            <div className="container my-3">
                <h3>Class A</h3>
                <hr/>
                <ul className="nav nav-tabs my-3" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Danh sách</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Chuyên cần</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Điểm số</a>
                    </li>
                </ul>
                <div className="tab-content " id="myTabContent">
                    <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><StudentList/></div>
                    <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><StudentDiligence/></div>
                    <div className="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><StudentScore/></div>
                </div>
                <div className="row">
                        <div className="col-6">
                            <button type="button" className="btn btn-primary float-right">Back</button>
                        </div>
                    </div>
            </div>
        );
    }
}

const mapDispatchToProps =(dispatch)=>{
  return{
    getStudents: () => {
        dispatch(actions.getStudentsApi())
    },
  }
}
export default connect(null,mapDispatchToProps) (ClassDetail);
// export default ClassDetail;