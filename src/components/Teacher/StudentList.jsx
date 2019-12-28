import React, { Component } from 'react';
import StudentListItem from './StudentListItem';
import { connect } from "react-redux";
import * as actions from '../../actions/index'
import { toast } from 'react-toastify';
import {withRouter} from 'react-router-dom'
class StudentList extends Component {
    constructor(props){
        super(props)
        this.state = {
            keyword: ""
        }
    }
    
    notify = () => {
        toast.success("tạo room thành công",{
            position: toast.POSITION.TOP_RIGHT
        });
    }
    async componentWillMount(){
    var token = JSON.parse(localStorage.getItem('token'))
    var id_lophoc = JSON.parse(localStorage.getItem('id_lophoc'))
       await  this.props.loadStudentInClass(id_lophoc)
       await  this.props.loadStudentScoreInClass(id_lophoc,token)
    }
    onChange = (e)=>{
        this.setState({
            keyword: e.target.value
        })
    }
    onSubmit = ()=>{
        this.props.searchStudent(this.state.keyword);
    }
    onCreateGroup = ()=>{
        var token = JSON.parse(localStorage.getItem('token'))
        var id_lophoc = JSON.parse(localStorage.getItem('id_lophoc'))
        this.props.createGroupChat(token,id_lophoc)
        this.notify();
        this.props.history.push('/chat')
    }
    
    render() {
        var {students,search} = this.props
        var students = students.filter((s,i)=>{
            return s.name.toLowerCase().indexOf(search.toLowerCase()) !== -1;
        })
        var studentList = students.map((s,index)=>{
            return <StudentListItem key={index} student={s}/>
        })
       
        return (
            <div className="container mt-3 mb-3">
                <div className="form-inline my-3">
                    <input onKeyUp={this.onChange} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button onClick={this.onSubmit} className="btn btn-outline-success my-2 my-sm-0" type="button">Search</button>
                    <button onClick={this.onCreateGroup} className="btn btn-info" style={{marginLeft:"59%"}}>Tạo phòng chat</button>
                </div>
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
                            {studentList}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
const mapStateToProps= (state)=>{
    return {
        students: state.studentInClass,
        search: state.search
    }
}
const mapDispatchToProps= (dispatch)=>{
    return {
        searchStudent: (keyword)=>{
            return dispatch(actions.Search(keyword))
        },
        createGroupChat: (token, id_lophoc)=>{
            return dispatch(actions.createRoomApi(token,id_lophoc))
        },
        loadStudentInClass : (id_class)=>{
            return dispatch(actions.getStudentsInClassApi(id_class))
        },
        loadStudentScoreInClass: (id_class,token)=>{
            return dispatch(actions.getStudentsScoreInClassApi(id_class,token))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(withRouter(StudentList));