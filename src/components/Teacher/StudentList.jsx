import React, { Component } from 'react';
import StudentListItem from './StudentListItem';
import { connect } from "react-redux";
import * as actions from '../../actions/index'
class StudentList extends Component {
    render() {
        console.log(this.props)
        var student = this.props.students.map((s,index)=>{
            return <StudentListItem key={index} name={s.name} mssv={s.mssv} parent={s.parent} address={s.address}/>
        })
        return (
            <div className="container mt-3 mb-3">
                <form className="form-inline my-3">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form>
                <div className="row">
                    <table className="table table-bordered text-center table-striped">
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
                            {/* <StudentListItem /> */}
                            {student}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps= (state)=>{
    return {
        students: state.students,
    }
}
export default connect(mapStateToProps,null) (StudentList);