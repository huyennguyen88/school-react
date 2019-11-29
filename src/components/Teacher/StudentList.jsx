import React, { Component } from 'react';
import StudentListItem from './StudentListItem';

class StudentList extends Component {
    render() {
        return (
            <div class="container mt-3 mb-3">
                <form class="form-inline my-3">
                    <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div class="row">
                    <table class="table table-bordered text-center table-striped">
                        <thead>
                            <tr className="bg-success text-white ">
                                <th>Ảnh đại diện</th>
                                <th>MSSV</th>
                                <th>Họ tên</th>
                                <th>Địa chỉ</th>
                                <th>Phụ huynh</th>
                            </tr>
                        </thead>
                        <tbody className="table table-striped table-success">
                            <StudentListItem />
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default StudentList;