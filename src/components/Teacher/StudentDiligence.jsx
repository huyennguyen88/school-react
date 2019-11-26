import React, { Component } from 'react';
import StudentDiligenceItem from './StudentDiligenceItem';

class StudentList extends Component {
    render() {
        return (
            <div class="container mt-3 mb-3">
                <div class="row">
                    <table class="table table-bordered text-center">
                        <thead>
                            <tr className="bg-success text-white ">
                                <th>Ảnh đại diện</th>
                                <th>MSSV</th>
                                <th>Họ tên</th>
                                <th>Chuyên cần</th>
                                <th>Số tiết vắng</th>
                                <th>Vắng không phép</th>
                            </tr>
                        </thead>
                        <tbody>
                           <StudentDiligenceItem/>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default StudentList;