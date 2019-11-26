import React, { Component } from 'react';
import StudentListItem from './StudentListItem';

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
                                <th>Địa chỉ</th>
                                <th>Phụ huynh</th>
                            </tr>
                        </thead>
                        <tbody>
                           <StudentListItem/>
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default StudentList;