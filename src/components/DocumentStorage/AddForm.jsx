import React, { Component } from 'react'
import { connect } from "react-redux";
import axios from 'axios';
import Swal from 'sweetalert2'
import * as actions from './../../actions/index'
class AddForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            grades: [],
            subjects: [],
            user: '',
            role: '',
            teacher: '',
            title: '',
            pin: null,
            description: '',
            grade_id: 1,
            subject_id: 1
        }
    }
    static getDerivedStateFromProps(nextProps, prevState) {

        if (nextProps.grades === prevState.grades && 
            nextProps.subjects === prevState.subjects &&
            nextProps.user === prevState.user && 
            nextProps.role === prevState.role && 
            nextProps.teacher === prevState.teacher ) {
            return null
        }
        return {
            grades: nextProps.grades,
            subjects: nextProps.subjects,
            user: nextProps.user,
            role: nextProps.role,
            teacher: nextProps.teacher
        }
    }
    onChange = (e) => {
        let target = e.target;
        let name = target.name
        let value = target.value
        if (name === "pin") {
            this.setState({
                pin: e.target.files[0]
            })
            console.log("pin", this.state.pin)
        }
        else {
            this.setState({
                [name]: value
            })
            console.log("value", value)
        }
        console.log("state",this.state)
    }
    onHandleSubmit = (e) => {
        e.preventDefault()
        
        var { title, description, teacher, pin, grade_id, subject_id} = this.state
        const data = new FormData();
        data.append('document[title]', title)
        data.append('document[description]', description)
        data.append('document[pin]',pin )
        data.append('document[teacher_id]',teacher.id )
        data.append('document[grade_id]',grade_id )
        data.append('document[subject_id]',subject_id )  
        this.props.addDocumentApi(data)
        
    }
    
    render() {
        var { grades, subjects, user, teacher } = this.state
        var gradeOption = grades.map((grade, index) => {
            return <option key={index} index={index} value= {grade.id}>{grade.name}</option>
        })
        var subjectOption = subjects.map((subject, index) => {
            return <option key={index} index={index} value={subject.id} >{subject.name}</option>
        })
        return (
            <div>
                
                <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" data-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title text-danger" id="exampleModalLabel">Thêm tài liệu</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <form onSubmit= {this.onHandleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="exampleFormControlFile1" className="text-danger">Tải tài liệu lên</label>
                                        <input name="pin" onChange= {(e)=> this.onChange(e)} type="file" className="form-control-file" id="exampleFormControlFile1" />
                                        <small className="form-text text-muted"> Đề nghị tải tài liệu pdf.</small>
                                    </div>
                                    <div className="form-group">
                                        <label  className="text-danger">Tiêu đề  </label>
                                        <input  onChange= {(e)=> this.onChange(e)} name="title" type="text" className="form-control" placeholder="Tiêu đề là..."  />
                                        <small  className="form-text text-muted">Thêm tiêu đề ngắn gọn cho tài liệu.</small>
                                    </div>
                                    <div className="form-group">
                                        <label className=" text-danger" >Chọn khối</label>
                                        <select  onChange= {(e)=> this.onChange(e)} className="custom-select" name="grade_id" >
                                            {gradeOption}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label  className="text-danger" >Chọn môn</label>
                                        <select  onChange= {(e)=> this.onChange(e)} className="custom-select" name="subject_id" >
                                            {subjectOption}
                                        </select>
                                    </div>
                                    <div className="form-group">
                                        <label>Mô tả tài liệu</label>
                                        <textarea  onChange= {(e)=> this.onChange(e)} className="form-control"  rows="3" name="description"></textarea>
                                        <small  className="form-text text-muted">Thêm chi tiết để học sinh biết thêm về tài liệu.</small>
                                    </div>
                                        <input  type="submit" className="btn btn-danger" />
                                        <button type="button" className="btn btn-secondary" data-dismiss="modal">Hủy bỏ</button>
                                </form>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        grades: state.grades,
        subjects: state.subjects,
        user: state.session,
        role: state.role,
        teacher: state.teacher
        
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        addDocumentApi: (data)=>{
            return dispatch(actions.addDocumentApi(data))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddForm)