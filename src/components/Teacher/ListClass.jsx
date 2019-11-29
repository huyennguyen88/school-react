import React, { Component } from 'react';
import ListClassItem from './ListClassItem'
class ListClass extends Component {
    render() {
        return (
            <div>
                <div class="container mt-3 mb-3">
                    <h1>Danh sách lớp</h1>
                    <hr />
                    <div class="row"> 
                        <table class="table table-bordered text-center">
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
                    <div class="row">
                        <div class="col-6">
                            <button type="button" class="btn btn-primary float-right">Back</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default ListClass;