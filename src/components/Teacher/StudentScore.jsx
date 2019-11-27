import React, { Component } from 'react';
import StudentScoreItem from './StudentScoreItem'
class StudentScore extends Component {
    render() {
        return (
            <div>
                <div class="container mt-3 mb-3">
                    <div class="row">
                        <table class="table table-bordered text-center">
                            <thead >
                                <tr className="bg-success">
                                    <th rowspan="3">Ảnh đại diện</th>
                                    <th rowspan="3">MSSV</th>
                                    <th rowspan="3">Họ và tên</th>
                                    <th colspan="8">Điểm</th>
                                    <th rowspan="3">Tổng kết</th>
                                </tr>
                                <tr className="table table-success">
                                    <th colspan="4">HK1</th>
                                    <th colspan="4">HK2</th>
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
                            <tbody>
                                <StudentScoreItem/>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default StudentScore;