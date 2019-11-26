import React, { Component } from 'react';
import ListClassItem from './ListClassItem'
import BigImage from '../Homepage/BigImage';
class ListClass extends Component {
    render() {
        return (
            <div>
                <BigImage/>
                <div class="container mt-3 mb-3">
                    <h1>Danh sách lớp</h1>
                    <hr/>
                    <div class="row">
                        <table class="table table-bordered">
                            <thead class="thead-dark">
                                <tr>
                                    <th>Mã lớp</th>
                                    <th>Tên lớp</th>
                                    <th>Lớp chuyên</th>
                                </tr>
                            </thead>
                            <tbody>
                                <ListClassItem />
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListClass;