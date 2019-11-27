import React, { Component } from 'react';
import StudentList from './StudentList'
import StudentDiligenceItem from './StudentDiligenceItem';
import StudentDiligence from './StudentDiligence';
import StudentScore from './StudentScore';

class ClassDetail extends Component {
    render() {
        return (
            <div class="container">
                <h3>Class A</h3>
                <hr/>
                <ul class="nav nav-tabs" id="myTab" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Danh sách</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Chuyên cần</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Điểm số</a>
                    </li>
                </ul>
                <div class="tab-content " id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab"><StudentList/></div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab"><StudentDiligence/></div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab"><StudentScore/></div>
                </div>
            </div>
        );
    }
}

export default ClassDetail;