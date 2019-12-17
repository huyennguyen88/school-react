import React, { Component } from 'react';
import StudentDiligenceItem from './StudentDiligenceItem';

class StudentList extends Component {
    render() {
        return (
            <div className="container mt-3 mb-3">
                <form className="form-inline my-3">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="row">
                    <table className="table table-bordered text-center">
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
                        <tbody className="table table-striped table-success">
                            <StudentDiligenceItem />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default StudentList;