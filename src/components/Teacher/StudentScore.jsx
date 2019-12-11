import React, { Component } from 'react';
import StudentScoreItem from './StudentScoreItem'
class StudentScore extends Component {
    render() {
        return (
            <div>
                <div className="container mt-3 mb-3">
                    <form className="form-inline my-3">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                    <div className="row">
                        <table className="table table-bordered text-center">
                            <thead >
                                <tr className="bg-success text-white">
                                    <th rowSpan="3">Ảnh đại diện</th>
                                    <th rowSpan="3">MSSV</th>
                                    <th rowSpan="3">Họ và tên</th>
                                    <th colSpan="8">Điểm</th>
                                    <th rowSpan="3">Tổng kết</th>
                                </tr>
                                <tr className="table table-success">
                                    <th colSpan="4">HK1</th>
                                    <th colSpan="4">HK2</th>
                                </tr>
                                <tr className="table table-success">
                                    <th>15'</th>
                                    <th>15'</th>
                                    <th>1 Tiết</th>
                                    <th>Cuối kì</th>
                                    <th>15'</th>
                                    <th>15'</th>
                                    <th>1 Tiết</th>
                                    <th>Cuối kì</th>
                                </tr>
                            </thead>
                            <tbody className="table table-striped table-success">
                                <StudentScoreItem />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentScore;