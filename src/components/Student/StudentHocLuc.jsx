import React, { Component } from 'react'
import StudentHocLucItem from './StudentHocLucItem'

export default class StudentHocLuc extends Component {
    render() {
        // var student = this.props.years.map((s,index)=>{
        //     return <StudentHocLucItem key={index} />
        // })
        return (
            <table className="table table-bordered text-center table-striped my-3">
                <thead>
                    <tr className="bg-success text-white ">
                        <th>Năm</th>
                        <th>Tổng kết</th>
                        <th>Xếp loại</th>
                    </tr>
                </thead>
                <tbody className="table table-striped table-success">
                    <StudentHocLucItem/>
                </tbody>
            </table>
        )
    }
}
